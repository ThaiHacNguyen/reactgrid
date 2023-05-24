import * as React from "react";

// NOTE: all modules imported below may be imported from '@silevis/reactgrid'
import { getCellProperty } from "../Functions/getCellProperty";
import {
  Cell,
  CellStyle,
  CellTemplate,
  Compatible,
  Span,
  Uncertain,
} from "../Model/PublicModel";

export interface HeaderCell extends Cell, Span {
  type: "header";
  text: string;
  required?: boolean;
}

export class HeaderCellTemplate implements CellTemplate<HeaderCell> {
  getCompatibleCell(
    uncertainCell: Uncertain<HeaderCell>
  ): Compatible<HeaderCell> {
    const text = getCellProperty(uncertainCell, "text", "string");
    const value = parseFloat(text);

    let required: boolean;
    try {
      required = getCellProperty(uncertainCell, "required", "boolean");
    } catch {
      required = false;
    }

    return { ...uncertainCell, text, value, required };
  }

  render(
    cell: Compatible<HeaderCell>,
    isInEditMode: boolean,
    onCellChanged: (cell: Compatible<HeaderCell>, commit: boolean) => void
  ): React.ReactNode {
    return (
      <>
        <span>{cell.text}</span>
        {cell.required && (
          <span style={{ color: "red", marginLeft: 4 }}>(*)</span>
        )}
      </>
    );
  }

  isFocusable = (cell: Compatible<HeaderCell>): boolean => false;

  getClassName(cell: Compatible<HeaderCell>, isInEditMode: boolean): string {
    return cell.className ? cell.className : "";
  }

  getStyle = (cell: Compatible<HeaderCell>): CellStyle => ({
    background: "rgba(128, 128, 128, 0.1)",
  });
}

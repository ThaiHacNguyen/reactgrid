import React from "react";
import { Cell, CellTemplate, Compatible, Span, Uncertain, UncertainCompatible } from "../Model/PublicModel";
interface IOption {
    value: string;
    label: string;
}
export interface SelectCell extends Cell, Span {
    type: "select";
    options: IOption[];
    text: string;
    isDisabled?: boolean;
    placeholder?: string;
    renderer?: (text: string) => React.ReactNode;
}
export declare class SelectCellTemplate implements CellTemplate<SelectCell> {
    getCompatibleCell(uncertainCell: Uncertain<SelectCell>): Compatible<SelectCell>;
    update(cell: Compatible<SelectCell>, cellToMerge: UncertainCompatible<SelectCell>): Compatible<SelectCell>;
    getClassName(cell: Compatible<SelectCell>, isInEditMode: boolean): string;
    handleKeyDown(cell: Compatible<SelectCell>, keyCode: number, ctrl: boolean, shift: boolean, alt: boolean): {
        cell: Compatible<SelectCell>;
        enableEditMode: boolean;
    };
    render(cell: Compatible<SelectCell>, isInEditMode: boolean, onCellChanged: (cell: Compatible<SelectCell>, commit: boolean) => void): React.ReactNode;
}
export {};

import * as React from "react";
import { Cell, CellTemplate, Compatible, Uncertain } from "../Model/PublicModel";
export interface ButtonCell extends Cell {
    type: "button";
    text: string;
    isDisabled?: boolean;
    renderer?: (text: string) => React.ReactNode;
    callback?: (e: any) => void;
}
export declare class ButtonCellTemplate implements CellTemplate<ButtonCell> {
    getCompatibleCell(uncertainCell: Uncertain<ButtonCell>): Compatible<ButtonCell>;
    getClassName(cell: Compatible<ButtonCell>): string;
    handleKeyDown(cell: Compatible<ButtonCell>, keyCode: number, ctrl: boolean, shift: boolean, alt: boolean): {
        cell: Compatible<ButtonCell>;
        enableEditMode: boolean;
    };
    render(cell: Compatible<ButtonCell>, isInEditMode: boolean, onCellChanged: (cell: Compatible<ButtonCell>, commit: boolean) => void): React.ReactNode;
}

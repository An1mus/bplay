import {action, computed, decorate, observable} from "mobx";

enum CellStates {
    ACTIVE,
    PASSIVE
}

interface ICell {
    state: CellStates;
    figure: string;
}

interface IField {
    firstFieldRow: ICell[],
    lastFieldRow: ICell[],
    map: ICell[],
}

export class FieldStore implements IField {
    firstFieldRow: ICell[];
    lastFieldRow: ICell[];
    map: ICell[];

    constructor() {
    }
}
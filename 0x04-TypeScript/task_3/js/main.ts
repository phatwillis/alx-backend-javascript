// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path = "crud.d.ts" />

import * as CRUD from './crud.js';
import { RowElement, RowID } from './interface';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    ...row,
    age: 23,
};
CRUD.updateRow(newRowID, updatedRow) ;

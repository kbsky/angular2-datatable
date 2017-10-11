import { OnChanges, EventEmitter } from "@angular/core";
import { DataTable } from "./DataTable";
export declare class BootstrapPaginator implements OnChanges {
    rowsOnPageSet: any[];
    mfTable: DataTable;
    mfRowsOnPageChange: EventEmitter<any>;
    minRowsOnPage: number;
    ngOnChanges(changes: any): any;
}

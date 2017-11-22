import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { UserDetailComponentComponent } from '../user-detail-component/user-detail-component.component';
import { SearchService } from '../ag-grid-app/search-service';
import { HttpModule } from '@angular/http';
import {  BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-ag-grid-app',
  templateUrl: './ag-grid-app.component.html',
  styleUrls: ['./ag-grid-app.component.css']
})
export class AgGridAppComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  private gridOptions: GridOptions;
  private genderList: string[] = ['Male', 'Female'];

  constructor(private searchService: SearchService) {
    this.blockUI.start('Please Wait..');
    debugger;
    this.gridOptions = <GridOptions>{// we pass an empty gridOptions in, so we can grab the api out
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      // fields allows for edit when single click is happend
      singleClickEdit: true,
      // Per page some rows only will display
      paginationAutoPageSize: true,
      pagination: true,
      // More than on Row user can select
      rowSelection: 'multiple',
      // for search first or last or endsWith...
      enableFilter: true,
      // enables Column Resize...
      enableColResize: true
    };
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.rowData = this.createRowData();
    setTimeout(() => {
      this.blockUI.stop();
    }, 2000);
  }
  ngOnInit() {
  }
  toggleBlocking() {
    this.blockUI.start('Loading...');
    setTimeout(() => {
      this.blockUI.stop();
    }, 2000);
  }
  public createRowData() {
    return this.searchService.loadByNumber();
  }
  private createColumnDefs() {
    return [
      {
        headerName: 'FirstName',
        field: 'firstName',
        width: 50,
        editable: false,
        checkboxSelection: function(params) {
          // we put checkbox on the name if we are not doing grouping
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function(params) {
          // we put checkbox on the name if we are not doing grouping
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: 'LastName',
        field: 'lastName',
        width: 50,
        editable: true
      },
      {
        headerName: 'ID',
        field: 'id',
        width: 50,
        editable: true
      },
      {
        headerName: 'Value',
        field: 'value',
        // cellRendererFramework: UserDetailComponentComponent,
        width: 50,
        editable: true
      },
      {
        headerName: 'Gender',
        field: 'gender',
        width: 40,
        editable: true,
        cellEditor: 'select',
        cellEditorParams: { values: this.genderList }
      },
    ];
  }

}

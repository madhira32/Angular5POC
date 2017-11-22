import { Component, OnInit , NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatToolbarRow} from '@angular/material';

import { SearchService } from '../ag-grid-app/search-service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

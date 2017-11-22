import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatCardModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { BlockUIModule } from 'ng-block-ui';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridAppComponent } from './ag-grid-app/ag-grid-app.component';
import { UserDetailComponentComponent } from './user-detail-component/user-detail-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchService } from './ag-grid-app/search-service';

@NgModule({
  declarations: [
    AppComponent,
    AgGridAppComponent,
    UserDetailComponentComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    HttpModule,
    BlockUIModule,
    AgGridModule.withComponents(
            [UserDetailComponentComponent]
        )
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    HttpModule,
    RouterModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

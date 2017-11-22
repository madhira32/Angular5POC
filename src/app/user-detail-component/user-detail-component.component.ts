import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit {

  private params: any;
  constructor() { }

  ngOnInit() {
  }


  agInit(params: any): void {
    this.params = params;
  }

}

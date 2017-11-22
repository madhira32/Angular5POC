import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridAppComponent } from './ag-grid-app.component';

describe('AgGridAppComponent', () => {
  let component: AgGridAppComponent;
  let fixture: ComponentFixture<AgGridAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

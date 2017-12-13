/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomcheckComponent } from './roomcheck.component';

describe('RoomcheckComponent', () => {
  let component: RoomcheckComponent;
  let fixture: ComponentFixture<RoomcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

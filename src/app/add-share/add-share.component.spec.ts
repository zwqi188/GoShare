/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddShareComponent } from './add-share.component';

describe('AddShareComponent', () => {
  let component: AddShareComponent;
  let fixture: ComponentFixture<AddShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

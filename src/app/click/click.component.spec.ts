/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickComponent } from './click.component';

describe('ClickComponent', () => {
  let component: ClickComponent;
  let fixture: ComponentFixture<ClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

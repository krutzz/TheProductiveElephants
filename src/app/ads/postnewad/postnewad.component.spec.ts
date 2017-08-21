/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PostnewadComponent } from './postnewad.component';

describe('PostnewadComponent', () => {
  let component: PostnewadComponent;
  let fixture: ComponentFixture<PostnewadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnewadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnewadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

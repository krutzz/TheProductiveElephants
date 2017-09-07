import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostpoluarComponent } from './mostpoluar.component';

describe('MostpoluarComponent', () => {
  let component: MostpoluarComponent;
  let fixture: ComponentFixture<MostpoluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostpoluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostpoluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

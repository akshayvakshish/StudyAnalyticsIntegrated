import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTooltipContainer } from './tooltip-container.component';

describe('NgbdTooltipContainer', () => {
  let component: NgbdTooltipContainer;
  let fixture: ComponentFixture<NgbdTooltipContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTooltipContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTooltipContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

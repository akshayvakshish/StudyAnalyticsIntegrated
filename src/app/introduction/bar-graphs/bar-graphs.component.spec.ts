import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphsComponent } from './bar-graphs.component';

describe('BarGraphsComponent', () => {
  let component: BarGraphsComponent;
  let fixture: ComponentFixture<BarGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

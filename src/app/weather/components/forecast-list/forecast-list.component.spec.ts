import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListComponent } from './forecast-list.component';
import { ToDegreesPipe } from '../../../shared/pipes/to-degrees.pipe';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { generateMockForecast } from '../../models/forecast';

describe('ForecastListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ForecastListComponent, ToDegreesPipe, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  template: '',
})
class TestHostComponent {

  forecast = [generateMockForecast()];

  constructor() { }
}

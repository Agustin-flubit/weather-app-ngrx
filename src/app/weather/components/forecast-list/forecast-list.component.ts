import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastListComponent {

  @Input() forecast: Forecast[]

  constructor() { }
}

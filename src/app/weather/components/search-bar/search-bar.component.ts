import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  city: string;

  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.city = '';
  }

  search() {
    this.onSearch.emit(this.city);
  }


}

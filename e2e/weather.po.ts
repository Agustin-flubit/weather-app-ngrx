import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import { promise } from 'selenium-webdriver';

export class WeatherPage {
  navigateToWeather(): promise.Promise<any> {
    return browser.get('/weather');
  }

  getSearchBar() {
    return element(by.tagName('app-search-bar'));
  }

  getSearchBarInput() {
    return this.getSearchBar().element(by.tagName('input'));
  }

  getSearchButton() {
    return this.getSearchBar().element(by.buttonText('Search'));
  }

  getForecastList() {
    return  element(by.tagName('app-forecast-list'));
  }

  getTable(): ElementFinder {
    return this.getForecastList().element(by.css('table'));
  }

  getTableBody(): ElementFinder {
    return this.getTable().element(by.tagName('tbody'));
  }

  getTableRow(): ElementArrayFinder {
    return this.getTableBody().all(by.tagName('tr'));
  }

  getFirstRowData(): promise.Promise<string> {
    return this.getTableRow().get(0).getText();
  }

  getASecondRowData(): promise.Promise<string> {
    return this.getTableRow().get(1).getText();
  }
}

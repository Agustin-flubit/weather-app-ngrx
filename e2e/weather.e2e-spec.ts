import {WeatherPage} from './weather.po';

describe('Weather App', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  });

  describe('When navigate to weather page', () => {

    beforeEach(() => {
      page.navigateToWeather();
    });

    it('search bar should be displayed', () => {
      expect(page.getSearchBar()).toBeTruthy();
    });

    it('search bar input should be created', () => {
      expect(page.getSearchBarInput()).toBeTruthy();
    });

    it('search bar button be created', () => {
      expect(page.getSearchButton()).toBeTruthy();
    });

    it('forecast list should be displayed', () => {
      expect(page.getForecastList()).toBeTruthy();
    });

    it('forecast list should display a table', () => {
      expect(page.getTable()).toBeTruthy();
    });

    it('forecast list table should have London city', () => {
      expect(page.getFirstRowData()).toContain('London');
    });

  });

  describe('When we type a new city (Lisbon) and click button search ', () => {

    beforeEach(() => {
      page.navigateToWeather();
      page.getSearchBarInput().sendKeys('Lisbon');
      page.getSearchButton().click();
    });

    it('forecast list table should have Lisbon forecast', () => {
      expect(page.getASecondRowData()).toContain('Lisbon');
    });

  });
});

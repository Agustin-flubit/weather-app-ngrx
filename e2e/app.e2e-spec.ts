import { AppPage } from './app.po';

describe('Weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should create header', () => {
    expect(page.getHeaderElement()).toBeTruthy();
  });

  it('should display Weather app as logo', () => {
    expect(page.getHeaderElement().getText()).toBe('Weather app');
  });
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderElement() {
    return element(by.tagName('app-header'));
  }
}

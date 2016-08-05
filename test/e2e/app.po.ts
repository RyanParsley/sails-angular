export class Angular2testPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2test-app h1')).getText();
  }
}

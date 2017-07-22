import { Angular2NgCribsPage } from './app.po';

describe('angular2-ng-cribs App', () => {
  let page: Angular2NgCribsPage;

  beforeEach(() => {
    page = new Angular2NgCribsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

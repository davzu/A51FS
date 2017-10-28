import { AppOservablesPage } from './app.po';

describe('app-oservables App', () => {
  let page: AppOservablesPage;

  beforeEach(() => {
    page = new AppOservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

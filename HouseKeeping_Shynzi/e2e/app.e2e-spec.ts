import { HousekeepingPage } from './app.po';

describe('housekeeping App', function() {
  let page: HousekeepingPage;

  beforeEach(() => {
    page = new HousekeepingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

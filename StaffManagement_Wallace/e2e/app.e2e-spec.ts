import { StudiePage } from './app.po';

describe('studie App', function() {
  let page: StudiePage;

  beforeEach(() => {
    page = new StudiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

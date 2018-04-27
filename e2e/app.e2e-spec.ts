import { GoSharePage } from './app.po';

describe('go-share App', function() {
  let page: GoSharePage;

  beforeEach(() => {
    page = new GoSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

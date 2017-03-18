import { WorthitProjectPage } from './app.po';

describe('worthit-project App', function() {
  let page: WorthitProjectPage;

  beforeEach(() => {
    page = new WorthitProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

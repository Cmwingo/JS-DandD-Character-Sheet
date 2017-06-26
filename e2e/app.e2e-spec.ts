import { JSDPage } from './app.po';

describe('js-d App', function() {
  let page: JSDPage;

  beforeEach(() => {
    page = new JSDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

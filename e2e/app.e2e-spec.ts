import { DirectiveDemoPage } from './app.po';

describe('directive-demo App', function() {
  let page: DirectiveDemoPage;

  beforeEach(() => {
    page = new DirectiveDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

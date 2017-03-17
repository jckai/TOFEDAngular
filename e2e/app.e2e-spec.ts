import { TOFEDAngularPage } from './app.po';

describe('tofedangular App', () => {
  let page: TOFEDAngularPage;

  beforeEach(() => {
    page = new TOFEDAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

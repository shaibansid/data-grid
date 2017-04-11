import { DataGridPage } from './app.po';

describe('data-grid App', () => {
  let page: DataGridPage;

  beforeEach(() => {
    page = new DataGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

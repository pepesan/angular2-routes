import { CalidadPage } from './app.po';

describe('calidad App', function() {
  let page: CalidadPage;

  beforeEach(() => {
    page = new CalidadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

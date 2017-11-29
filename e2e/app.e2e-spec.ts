import { SecretsantaPage } from './app.po';

describe('secretsanta App', () => {
  let page: SecretsantaPage;

  beforeEach(() => {
    page = new SecretsantaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

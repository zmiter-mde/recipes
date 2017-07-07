import { RecipesPage } from './app.po';

describe('recipes App', () => {
  let page: RecipesPage;

  beforeEach(() => {
    page = new RecipesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

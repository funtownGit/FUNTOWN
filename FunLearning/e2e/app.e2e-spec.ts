import { FunLearningPage } from './app.po';

describe('fun-learning App', () => {
  let page: FunLearningPage;

  beforeEach(() => {
    page = new FunLearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

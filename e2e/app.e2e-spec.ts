import { QuizAppPage } from './app.po';

describe('quiz-app App', () => {
  let page: QuizAppPage;

  beforeEach(() => {
    page = new QuizAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

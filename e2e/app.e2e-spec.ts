import { TodoMVCPPage } from './app.po';

describe('todo-mvc-p App', () => {
  let page: TodoMVCPPage;

  beforeEach(() => {
    page = new TodoMVCPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

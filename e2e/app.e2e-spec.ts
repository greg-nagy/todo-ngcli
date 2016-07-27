import { TodoNgcliPage } from './app.po';

describe('todo-ngcli App', function() {
  let page: TodoNgcliPage;

  beforeEach(() => {
    page = new TodoNgcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

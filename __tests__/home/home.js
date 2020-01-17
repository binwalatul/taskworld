const home = require('../../pages/page/home');

describe('Existing user can follow the end to end flow', () => {
  test('should login with existing user', async() => {
    await home.loginWithExistingUser();
  });
  test('should create a new project', async() => {
    await home.createProject()
  });
  test('should create a new tasklist to the project', async() => {
    await home.createNewTaskList();
  });
  test('should add new task to the tasklist', async() => {
    await home.addNewTask();
  });
  test('should mark the task as completed', async() => {
    await home.markTaskComplete();
  });
  test('should open the completed task to see the details', async() => {
    await home.openTask();
  });
});

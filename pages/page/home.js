const selector = require('../selector/home');
const home = require('./../../commands');

const loginWithExistingUser = async () => {
  const locationPrefix = ((process.env.location).toLowerCase() === 'asia') ? 'asia-' 
  : ((process.env.location).toLowerCase() === 'europe') ? 'europe-' : '';
  await page.goto(`https://${ locationPrefix }enterprise.taskworld.com/login`);
  await page.waitForSelector(selector.loginForm);
  await home.setValue(selector.emailTextbox, `${ process.env.email }`)
  await home.setValue(selector.passwordTextbox, `${ process.env.password }`)
  await page.click(selector.loginBtn);
  await page.waitForSelector(selector.loginState);
};

const createProject = async() => {
  await page.waitForSelector(selector.newProjectBtn);
  await page.click(selector.newProjectBtn);
  await page.waitForSelector(selector.newProjectModal);
  await home.setValue(selector.projectNameField, 'Testing')
  await home.setValue(selector.projectDescField, 'This is a dummy project')
  await page.click(selector.newProjectModalNextBtn);
  await page.waitForSelector(selector.newProjectModalBackBtn);
  await page.click(selector.createProjectBtn);
  await page.waitForSelector(selector.createTasklist);
};

const createNewTaskList = async() => {
  await page.waitForSelector(selector.tasklistTitle);
  await home.setValue(selector.tasklistTitle, 'Demo tasklist');
  await page.keyboard.press('Enter');
};

const addNewTask = async() => {
  await page.keyboard.press('Enter');
  await page.waitForSelector(selector.addTaskBtn);
  await page.click(selector.addTaskBtn);
  await page.waitForSelector(selector.taskTextfield);
  await home.setValue(selector.addTask, 'This is a task');
  await page.keyboard.press('Enter');
  await page.waitForSelector(selector.createTaskBtn);
};

const markTaskComplete = async() => {
  await openTask();
  await page.waitForSelector(selector.completeCheckbox)
  await page.click(selector.completeCheckbox);
  await page.waitForSelector(selector.taskCompleteText);
  const ticketStatusText = await page.evaluate(text => text.innerText, await page.$(selector.taskCompleteText));
  expect(ticketStatusText).toContain('Completed');
};

const openTask = async() => {
  await page.waitForSelector(selector.createdTask);
  await page.click(selector.createdTask);
  await page.waitForSelector(selector.taskProperties);
  await page.waitForSelector(selector.closeBtnTaskProperties);
  await page.click(selector.closeBtnTaskProperties);
};

module.exports = {
  loginWithExistingUser,
  createProject,
  createNewTaskList,
  addNewTask,
  markTaskComplete,
  openTask,
};

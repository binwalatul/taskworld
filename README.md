# taskworld

## Project Structure Description.
* This is a simple project containing test for Taskworld website's happy path for an existing user.
* Three main dependencies used here are jest-puppeteer, puppeteer and jest. 
* The created framework is a mix of jest which is working as a test runner integrated with puppeteer api.
* The framework approach is very simple here we follow page object model and a bit customised test description to make it easy to understand for a non technical person aswell.
* __test__ folder as the name suggest is having the test files.
* The command folder afterwards is for keeping the methods that are custom and going to be used in different tests.
* All the pages related things like page and selectors are under the pages folder.
* Kept the selectors in different file just to make it less messy inside the page file.
* Util will be containing things that are framework related right now its only having setupTestFramework file, later we can add a custom testWithRetry method here (as jest does not provide retries), screentshot method here etc.
* The jest-puppeteer.config.js consist of all the puppeteer launch commands and others.
* The jest.config file is just to let the jest knows where to look for jest environment files.

## To run the test 
* By default this test is running in head mode and url is hardcoded for asia geo location.
// To install the deps
* npm i or npm ci

* Did not hard coded the username and password as I was using my own.
* The location field will accept either Asia or Europe and if nothing is passed it will use North America as the geo location by default and provide the appropriate url.
// To execute the exisiting test.
* email=${user_email} password=${user_password} location=${Asia/Europe} npm run test

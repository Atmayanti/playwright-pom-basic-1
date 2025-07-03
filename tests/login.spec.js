import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
// import { loginTestData } from '';

// test('test', async ({ page }) => {

//   const Login = new LoginPage(page);

//   await Login.goToLoginPage();
//   await Login.login('tomsmith', 'SuperSecretPassword!');
// });

test.describe('Login Scenarios', () => {
  const { loginTestData } = require('./fixtures/login-data');
  for (const data of loginTestData) {
    test(`${data.testCase}`, async ({ page }) => {
      const Login = new LoginPage(page);

      //before login step
      await Login.goToLoginPage();
      await Login.login(data.username, data.password);

      //login validation
      if (data.isValid) {
        console.log("bisa login");
      } else {
        if (!data.expectedError) {
          throw new Error('Expected error message is missing in test data');
        }
        await Login.expectValidationMessage(data.expectedError);
      }
    });
  }
});
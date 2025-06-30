import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('test', async ({ page }) => {

  const Login = new LoginPage(page);

  await Login.goToLoginPage();
  await Login.login('tomsmith', 'SuperSecretPassword!');
});
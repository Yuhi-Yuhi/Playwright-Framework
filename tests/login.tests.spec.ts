import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login as standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login();
});
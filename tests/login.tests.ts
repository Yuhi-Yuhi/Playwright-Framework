import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Users } from '../data/Users';

test('Successful login as standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login(Users.StandardUser);
  expect(await loginPage.isOnProductsPage()).toBeTruthy();
});

test('Successful login as performance glitch user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login(Users.PerformanceGlitchUser);
  expect(await loginPage.isOnProductsPage()).toBeTruthy();
});
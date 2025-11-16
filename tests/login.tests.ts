import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Users } from '../data/Users';
import { config } from '../configs/config';
 
test.describe.parallel('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(config.baseUrl);
  });

  test('Successful login as standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step("Login to inventory portal", async () => {
    await loginPage.login(Users.StandardUser);
  });
    expect(await loginPage.isOnProductsPage()).toBeTruthy();
  });

  test('Successful login as performance glitch user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(Users.PerformanceGlitchUser);
    expect(await loginPage.isOnProductsPage()).toBeTruthy();
  });
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login as standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login();
});

test('Locator syntax', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate("https://www.saucedemo.com/");
  await loginPage.login();

  // By tag name
  page.locator('input')

  // By id
  page.locator('id')

  // By class value
  page.locator('.class1')

  // By attribute
  page.locator('[placeholder = "email"]')

  // By entire class value (CSS)
  page.locator('[class = "class1 class2"]')
  page.locator('.class1.class2')

  // Combine different selectors
  page.locator('input[placeholder = "Email"][type = "input"]')

  // By Xpath (NOT RECOMMENDED!)
  page.locator('//input[@id = "uniqueId"]')
  page.locator('//*[@id = "uniqueId"]')

  // By partial text match
  page.locator(':text("Using")')

  // By exact text match
  page.locator(':text-is("Using the Grid")')
});
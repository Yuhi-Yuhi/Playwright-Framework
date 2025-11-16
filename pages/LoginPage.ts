import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { User } from "../models/User";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // #region Locators
    private usernameInput = () => this.page.locator('[data-test="username"]');
    private passwordInput = () => this.page.locator('[data-test="password"]');
    private loginButton = () => this.page.locator('[data-test="login-button"]');
    // #endregion

    // #region Actions
    async login(user: User): Promise<void> {
        console.log(`Specify username: ${user.username}`);
        await this.usernameInput().fill(user.username);
        
        console.log("Specify password: ****");
        await this.passwordInput().fill(user.password);
        
        console.log("Click login button and wait for products page");
        await Promise.all([
          this.loginButton().click(),
          this.page.waitForURL('**/inventory.html')
        ]);
    }

    async isOnProductsPage(): Promise<boolean> {
        return this.page.url().includes("inventory");
    }
    // #endregion
}
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private usernameInput = () => this.page.locator('[data-test="username"]');
    private passwordInput = () => this.page.locator('[data-test="password"]');
    private loginButton = () => this.page.locator('[data-test="login-button"]');

    async login(): Promise<void> {
        await this.usernameInput().fill("sdf");
        await this.passwordInput().fill("dfdf");
        await this.loginButton().click();
    }
}
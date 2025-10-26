import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { User } from "../models/User";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private usernameInput = () => this.page.locator('[data-test="username"]');
    private passwordInput = () => this.page.locator('[data-test="password"]');
    private loginButton = () => this.page.locator('[data-test="login-button"]');

    async login(user: User): Promise<void> {
        await this.usernameInput().fill(user.username);
        await this.passwordInput().fill(user.password);
        await this.loginButton().click();
    }
}
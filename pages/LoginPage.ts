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
        console.log(`Specify username: ${user.username}`);
        await this.usernameInput().fill(user.username);
        console.log("Specify password: ****");
        await this.passwordInput().fill(user.password);
        console.log("Click login button");
        await this.loginButton().click();
    }

    async isOnProductsPage(): Promise<boolean> {
        return this.page.url().includes("inventory");
    }
}
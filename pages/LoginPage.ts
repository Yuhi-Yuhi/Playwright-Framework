import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { User } from "../models/User";
import { logger } from "../utils/logger";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private usernameInput = () => this.page.locator('[data-test="username"]');
    private passwordInput = () => this.page.locator('[data-test="password"]');
    private loginButton = () => this.page.locator('[data-test="login-button"]');

    async login(user: User): Promise<void> {
        logger.info(`Specify username: ${user.username}`);
        await this.usernameInput().fill(user.username);
        logger.info("Specify password: ****");
        await this.passwordInput().fill(user.password);
        logger.info("Click login button");
        await this.loginButton().click();
    }

    async isOnProductsPage(): Promise<boolean> {
        return this.page.url().includes("inventorys");
    }
}
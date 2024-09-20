import { Page, Locator } from 'playwright';
import * as config from '../config.json';

export default class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openMainPage() {
        await this.page.goto(config.baseUrl);
    }

    async takeScreenshot(): Promise<Buffer> {
        return await this.page.screenshot({ path: 'screenshots/screenshot.png' });
    }

    async getPageTitle(): Promise<String> {
        return await this.page.title();
    }
}
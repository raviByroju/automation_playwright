import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { Page } from 'playwright';
import BasePage from '../pages/basePage';
import * as config from '../config.json';

const { browser } = config;
const browserType = require('playwright')[browser.name];

let browserInstance: any;
let page: Page;
let basePage: BasePage

setDefaultTimeout(config.cucumber_default_timeout_ms)

Before(async () => {
    browserInstance = await browserType.launch(browser);
    page = await browserInstance.newPage();
    basePage = new BasePage(page)
    await basePage.openMainPage();
});

After(async function (scenario) {
    if (config.take_screenshots_on_failure) {
        if (scenario && scenario.result && scenario.result.status === Status.FAILED) {
            await this.attach(await page.screenshot({
                path: `./screenshots/FAILED - ${scenario.pickle.name}.png`, fullPage: true,
            }), 'image/png');
        }
    }
    // Close the browser
    await browserInstance.close();
});

export { page };
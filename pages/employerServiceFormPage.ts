import { Page } from 'playwright';
import BasePage from './basePage';
import * as config from '../config.json';
import { expect } from 'chai';

export default class HomePage extends BasePage {

  private readonly FIRST_NAME: string = "div[data-question-id-text='VoterFirstName'] > div > input";
  private readonly LAST_NAME: string = "div[data-question-id-text='VoterLastName'] > div > input";
  private readonly EMAIL: string = "div[data-question-id-text='VoterEmail'] > div > input";
  private readonly STREET: string = "div[data-question-id-text='VoterAddressLine1'] > div > input";
  private readonly CITY: string = "div[data-question-id-text='VoterCity'] > div > input";
  private readonly ZIPCODE: string = "div[data-question-id-text='VoterPostalCode'] > div > input";
  private readonly NEXT_BTN: string = "input[type='submit']";
  private readonly NO_BTN: string = "div[class='col-xs-12 form-group'] > div > label > input[text='No']";
  private readonly INPUT_CONFIRMATION: string = "div[data-question-id-text='NameConfirmation'] > div > input";

  constructor(page: Page) {
    super(page);
  }

  async homepageLoad() {
    await this.page.locator(this.FIRST_NAME).isVisible();
  }

  async enterFormDetails() {
    await this.page.fill(this.FIRST_NAME, config.firstName);
    await this.page.fill(this.LAST_NAME, config.lastName);
    await this.page.fill(this.EMAIL, config.firstName);
    await this.page.fill(this.STREET, config.lastName);
    await this.page.fill(this.CITY, config.firstName);
    await this.page.fill(this.ZIPCODE, config.lastName);
    await this.page.click(this.NEXT_BTN);
  }

  async answerQtns() {
    await this.page.locator(this.NO_BTN).nth(1).click();
    await this.page.locator(this.NO_BTN).nth(2).click();
    await this.page.locator(this.NO_BTN).nth(3).click();
    await this.page.locator(this.NO_BTN).nth(4).click();
    await this.page.locator(this.NO_BTN).nth(5).click();
    await this.page.click(this.NEXT_BTN);
  }

  async validateNameAndSubmit() {
    let fullName = await this.page.locator(this.INPUT_CONFIRMATION).inputValue();
    expect(fullName, config.firstName+' '+config.lastName);
    await this.page.click(this.NEXT_BTN);
  }

  async validateRedirection() {
    let redirectUrl = this.page.url();
    expect(redirectUrl, config.expectedUrl);
  }
}
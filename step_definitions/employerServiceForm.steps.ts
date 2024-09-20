import HomePage from '../pages/employerServiceFormPage';
import { Given, Then, When } from '@cucumber/cucumber';
import { page } from './common.steps';

let homePage = new HomePage(page);

Given('the User navigated to Employer Services Form page', async () => {
    await homePage.homepageLoad();
});

When('the user entered the details and clicked on next', async () => {
    await homePage.enterFormDetails();
});

When('the user answer the questions and clicked on next', async () => {
    await homePage.answerQtns();
});

When('the user validated the full name and clicked on submit', async () => {
    await homePage.validateNameAndSubmit();
});

Then('the user is redirected to Employer Services Page', async () => {
    await homePage.validateRedirection();
});
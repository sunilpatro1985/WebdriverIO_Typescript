import LoginPage from  '../pageobjects/login.page';
import Page from '../pageobjects/page';
import SecurePage from '../pageobjects/secure.page';
import SettingsPage from '../pageobjects/Settings.page';
import allureReporter from '@wdio/allure-reporter'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addArgument("login", "valid login")
        allureReporter.addStep("open login page")
        allureReporter.addFeature("login")
        allureReporter.addSeverity("minor")
        allureReporter.addDescription("login description", "text")
        allureReporter.addEnvironment("stage", "QA")
        await LoginPage.open();
        allureReporter.endStep()

        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should login with invalid username', async () => {
        allureReporter.addArgument("login", "invalid login")
        allureReporter.addStep("open login page")
        allureReporter.addFeature("login")
        allureReporter.addSeverity("critical")
        allureReporter.addDescription("login description", "text")
        allureReporter.addEnvironment("stage", "QA")
        await LoginPage.open();
        //allureReporter.endStep()

        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('tom123', 'SuperSecretPassword');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should login with invalid password', async () => {
        allureReporter.addArgument("login", "invalid login")
        allureReporter.addStep("open login page")
        allureReporter.addFeature("login")
        allureReporter.addSeverity("critical")
        allureReporter.addDescription("login description", "text")
        allureReporter.addEnvironment("stage", "QA")
        await LoginPage.open();
        //allureReporter.endStep()

        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('tomsmith', '1234!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});



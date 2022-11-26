import LoginPage from  '../pageobjects/login.page';
import Page from '../pageobjects/page';
import SecurePage from '../pageobjects/secure.page';
import SettingsPage from '../pageobjects/Settings.page';
import allureReporter from '@wdio/allure-reporter'


describe('My Login application', () => {

    /*xit('should behave...', () => {
        expect(2).toBe(2)
    });*/
    it('should login with valid credentials', async () => {
        allureReporter.addStep("opening the browser url")
        allureReporter.addFeature("valid login")
        allureReporter.addSeverity("critical")
        allureReporter.addDescription("<b>logging into app with valid credentials</b>", "html")
        allureReporter.addArgument("platform", "MacOS")
        await LoginPage.open();

        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        allureReporter.addStep("log in")
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    xit('should login with invalid username', async () => {
        allureReporter.addFeature("invalid login")
        allureReporter.addSeverity("minor")

        await LoginPage.open();
        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('123', 'SuperSecretPassword!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    xit('should login with invalid credentials', async () => {
        await LoginPage.open();
        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('tomsmith', '123!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});



import LoginPage from  '../pageobjects/login.page';
import Page from '../pageobjects/page';
import SecurePage from '../pageobjects/secure.page';
import SettingsPage from '../pageobjects/Settings.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await LoginPage.open();
        await browser.pause(1000)
        console.log("Page url --- "+ await LoginPage.getUrl())

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        console.log("Page url --- "+ await SecurePage.getUrl())
        browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});



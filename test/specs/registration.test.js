import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';
import RegisterPage from '../pageobjects/register.page.js';
import TableGamesPage from '../pageobjects/table.games.page.js';

describe('Paramo Tech tests', () => {

    it('Register on site with valid credentials', async () => {
        await MainPage.openURL('https://demo.casino/');
        await MainPage.clickPopUpGotIt();
        await MainPage.clickSignUpButton();
        await RegisterPage.enterEmail('correct.email.test@paramotest.com');
        await RegisterPage.clickOlderThan21();
        await RegisterPage.selectFromCurrencyDrop('mDOGE');
        await RegisterPage.enterPassword('wvt.vth8uec5nbv6CWQ');
        await RegisterPage.enterPasswordConfirmation('wvt.vth8uec5nbv6CWQ');
        //ENABLE THE FOLLOWING LINE IF CURRENCY IS USD
        //await RegisterPage.clickNoBonus();
        await RegisterPage.clickCreateAccount();
    });

    it('Load Dominoes game', async () => {
        await MainPage.openURL('https://demo.casino/');
        await MainPage.clickPopUpGotIt();
        await MainPage.clickMenuExpander();
        await MainPage.clickGameCategories();
        await MainPage.clickTableGamesCategory();
        await TableGamesPage.searchForGame('Dominoes');
        await TableGamesPage.clickFirstOptionSearched();
        await LoginPage.validateLoginPage();
    });

    it('Load Minotaur Dice game', async () => {
        await MainPage.openURL('https://demo.casino/');
        await MainPage.clickPopUpGotIt();
        await MainPage.clickMenuExpander();
        await MainPage.clickGameCategories();
        await MainPage.clickTableGamesCategory();
        await TableGamesPage.searchForGame('Minotaur Dice');
        await TableGamesPage.clickFirstOptionSearched();
        await LoginPage.validateLoginPage();
    });
});



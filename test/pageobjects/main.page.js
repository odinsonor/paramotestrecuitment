import Page from './page.js';

class MainPage extends Page {
    
    /** Locators */    
    get popUpGotIt () { return $('.button--t1 > span');}
    get signUpButton () { return $('.header-button--registration > span');}
    get menuExpander () { return $('/html/body/div[1]/aside/div[1]');}
    get gameCategories () { return $('.quick-link:nth-child(2) > span');}
    get tableGames () { return $('.games-categories__item:nth-child(8) .icon-tablegames');}

    /** Actions */

    /**
    * @function openURL It used the main navigateTo function at the test level
    * @param {String} siteURL the URL of the site to load
    */
    async openURL (siteURL) {
        try{
            await this.navigateTo(siteURL);
            await browser.maximizeWindow();
        } catch (error){
            error.message = "Website could not be loaded - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickPopUpGotIt It clicks the pop up message (if exists) at the beggining of the site load
    */
    async clickPopUpGotIt () {
        if(await this.isPresent(this.popUpGotIt)){
            try{
                await this.click(await this.popUpGotIt);
            } catch (error){
                error.message = "PopUp Got it button could not be clicked - " + error.message;
                throw error;
            }    
        }
    }

    /**
    * @function clickSignUpButton It clicks the button to sign up on the website
    */
    async clickSignUpButton () {
        try{
            await this.click(await this.signUpButton);
        } catch (error){
            error.message = "Sign Up button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickMenuExpander It clicks the button to sign up on the website
    */
    async clickMenuExpander () {
        try{
            await this.click(await this.menuExpander);
        } catch (error){
            error.message = "Menu Expander button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickGameCategories It clicks the Game Categories button on the side panel
    */
    async clickGameCategories () {
        try{
            await this.click(await this.gameCategories);
        } catch (error){
            error.message = "Game Categories button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickTableGamesCategory It clicks the Game Categories button on the side panel
    */
    async clickTableGamesCategory () {
        try{
            await this.click(await this.tableGames);
        } catch (error){
            error.message = "Table Games Sub-Category button could not be clicked - " + error.message;
            throw error;
        }
    }
}

export default new MainPage();

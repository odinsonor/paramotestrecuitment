import Page from './page.js';

class TableGamesPage extends Page {
    
    /** Locators */    
    get gameSearchBar () { return $('.page-games__controls .search');}
    get gameSearchBarOpened () { return $('#search-widget-form > input');}
    get firstOptionSearched () { return $('.button--t3');}

    /** Actions */

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
    * @function searchForGame It searches for a keyname in the game search bar
    * @param {String} gameName The name of the game to search
    */
    async searchForGame (gameName) {
        try{
            await this.click(await this.gameSearchBar);
            await this.typeInto(await this.gameSearchBarOpened, gameName);
        } catch (error){
            error.message = "Game name "+ gameName + " could not be entered in the Password confirmation box - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickFirstOptionSearched It clicks the button to sign up on the website
    */
    async clickFirstOptionSearched () {
        try{
            await this.click(await this.firstOptionSearched);
        } catch (error){
            error.message = "First option searched could not be clicked - " + error.message;
            throw error;
        }
    }

    }

export default new TableGamesPage();

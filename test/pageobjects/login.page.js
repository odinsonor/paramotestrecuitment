import Page from './page.js';

class LoginPage extends Page {
    
    /** Locators */    
    get signInTitle () { return $("//h2[contains(.,'Sign in')]");}

    /** Actions */

    /**
    * @function validateLoginPage It clicks the button to sign up on the website
    */
    async validateLoginPage () {
        try{
            await this.signInTitle.waitUntil(async ()=>{ return (this.signInTitle.isDisplayed());},{timeout:10000, timeoutMsg:"Element could not be located in the page", interval:500});
        } catch (error){
            error.message = "Not located in the Sign In page - " + error.message;
            throw error;
        }
    }

    }

export default new LoginPage();

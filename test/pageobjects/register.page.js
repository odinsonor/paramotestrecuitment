import Page from './page.js';

class RegisterPage extends Page {
    
    /** Locators */    
    get socialsSignUpFacebook () { return $('.form__section .icon-facebook');}
    get socialsSignUpGoogle () { return $('.form__section .icon-google');}
    get socialsSignUpTelegram () { return $('.form__section .icon-telegram');}
    get emailForm () { return $('.selectric-hover li:nth-child(1)');}
    get phoneForm () { return $('.last:nth-child(2)');}
    get emailBox () { return $('#core__protected_modules_user_yiiForm_RegistrationForm_email');}
    get phoneBox () { return $('#core__protected_modules_user_yiiForm_RegistrationForm_phone');}
    get olderThan21CheckBox () { return $('label:nth-child(3)');}
    get currencyDropDown () { return $('//*[@id="registration_form_1"]/fieldset[2]/div[3]/div/div[1]/div[2]/span');}
    get passwordBox () { return $('#core__protected_modules_user_yiiForm_RegistrationForm_password');}
    get passwordBoxConfirmation () { return $('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation');}
    get promoCodeRadio () { return $('.special-radio__active > .special-radio__label');}
    get promoCodeBox () { return $('#core__protected_modules_user_yiiForm_RegistrationForm_promo_code');}
    get noPromoCodeRadio () { return $('.special-radio:nth-child(2) > .special-radio__label');}
    get createAccountButton () { return $('.button--s4 > span');}
    get signInLink () { return $('.form__addition > a');}

    /** Currency selectors */
    get currencyUSD () { return $("//li[contains(.,'USD')]");}
    get currencyEUR () { return $("//li[contains(.,'EUR')]");}
    get currencyILS () { return $("//li[contains(.,'ILS')]");}
    get currencymLTC () { return $("//li[contains(.,'mLTC')]");}
    get currencymDOGE () { return $("//li[contains(.,'mDOGE')]");}
    get currencyUSDTT () { return $("//li[contains(.,'USDTT')]");}
    get currencyUSDTE () { return $("//li[contains(.,'USDTE')]");}
    get currencymBCH () { return $("//li[contains(.,'mBCH')]");}
    get currencymETH () { return $("//li[contains(.,'mETH')]");}
    get currencyBYR () { return $("//li[contains(.,'BYR')]");}
    get currencyUSDT () { return $("//li[contains(.,'USDT')]");}

    /**
    * @function clickFacebookRegistrationButton It clicks the button to register on the site using facebook
    */
    async clickFacebookRegistrationButton () {
        try{
            await this.click(await this.socialsSignUpFacebook);
        } catch (error){
            error.message = "Facebook Registration button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickGoogleRegistrationButton It clicks the button to register on the site using Google
    */
    async clickGoogleRegistrationButton () {
        try{
            await this.click(await this.socialsSignUpGoogle);
        } catch (error){
            error.message = "Google Registration button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickTelegramRegistrationButton It clicks the button to register on the site using Telegram
    */
    async clickTelegramRegistrationButton () {
        try{
            await this.click(await this.socialsSignUpTelegram);
        } catch (error){
            error.message = "Telegram Registration button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickEmailFormButton It clicks the button to register using an email address
    */
    async clickEmailFormButton () {
        try{
            await this.click(await this.emailForm);
        } catch (error){
            error.message = "Email Registration button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickPhoneFormButton It clicks the button to register using an email address
    */
    async clickPhoneFormButton () {
        try{
            await this.click(await this.phoneForm);
        } catch (error){
            error.message = "Phone Registration button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function enterEmail It types a provided email address into the email box
    * @param {String} email The email address to enter in the box
    */
    async enterEmail (email) {
        try{
            await this.typeInto(await this.emailBox, email);
        } catch (error){
            error.message = "Email could not be entered in the Email Box - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickOlderThan21 It clicks the button to agree to the terms and conditions
    */
    async clickOlderThan21 () {
        try{
            await this.click(await this.olderThan21CheckBox);
        } catch (error){
            error.message = "Terms and conditions checkbox could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function enterPassword It types a provided password into the password box
    * @param {String} password The password to enter in the box
    */
    async enterPassword (password) {
        try{
            await this.typeInto(await this.passwordBox, password);
        } catch (error){
            error.message = "Password could not be entered in the Password Box - " + error.message;
            throw error;
        }
    }

    /**
    * @function enterPasswordConfirmation It types a provided password into the password confirmation box
    * @param {String} password The password to enter in the box
    */
    async enterPasswordConfirmation (password) {
        try{
            await this.typeInto(await this.passwordBoxConfirmation, password);
        } catch (error){
            error.message = "Password could not be entered in the Password confirmation box - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickNoBonus It clicks the No Bonus radio button
    */
    async clickNoBonus () {
        try{
            await this.click(await this.noPromoCodeRadio);
        } catch (error){
            error.message = "No Bonus radio button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function clickCreateAccount It clicks the Create Account button
    */
    async clickCreateAccount () {
        try{
            await this.click(await this.createAccountButton);
        } catch (error){
            error.message = "Create Account button could not be clicked - " + error.message;
            throw error;
        }
    }

    /**
    * @function selectFromCurrencyDrop It clicks the Create Account button
    * @param {String} currency Option to select from the drop down menu
    * Options for currency are limited to:
    * USD
    * EUR
    * ILS
    * mLTC
    * mDOGE
    * USDTT
    * USDTE
    * mBCH
    * mETH
    * BYR
    * USDT
    */
    async selectFromCurrencyDrop (currencyLabel) {
        try{
            await this.scrollTo(400);
            await this.click(await this.currencyDropDown);
            //li[contains(.,'USDT')]
            await this.click(await this[`currency${currencyLabel}`]);
        } catch (error){
            error.message = 'Option "'+ currencyLabel + '" could not be selected from the drop down' + ' - ' + error.message;
            throw error;
        }
    }
}

export default new RegisterPage();

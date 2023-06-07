export default class Page {
    
    /**
    * @function navigateTo Opens a URL given into the webdriver
    * @param {String} path URL of the webpage to load
    */
    navigateTo (path) {
        return browser.url(path);
    }

    /**
    * @function scrollTo Scrolls the webpage to a Y coordiate provided
    * @param {Integer} amount Coordinate to scroll to
    */
    scrollTo (amount) {
        return browser.scroll(0, amount);
    }

    /**
    * @function click It executes the click option on a specific WDIO element
    * @param {element} element The WDIO element you want to perform a click on
    */
    async click(element){
        if (!element) throw Error("No element was provided to be clicked");
        await element.waitUntil(async ()=>{ return (element.isClickable());},{timeout:10000, timeoutMsg:"Element " + element +" could not be located in the page", interval:500});
        await element.click();
    }

    /**
    * @function typeInto It executes the setValue function into a specific WDIO element
    * @param {element} element The WDIO element you want to perform a click on
    * @param {String} text The text you want to set into the element
    */
   async typeInto(element, text = ""){
        if (!element) throw Error("No element was provided to be typed into");
        await element.waitUntil(async ()=>{ return (element.isClickable());},{timeout:10000, timeoutMsg:"Element " + element +" could not be located in the page", interval:500});
        await element.setValue(text);
   }
   
   /**
    * @function isPresent Checks for an element to be present in the webpage
    * @param {element} element The WDIO element you want to check on
    */
   async isPresent(element){
    if (!element) throw Error("No element was provided to checked");
    try{
        await element.waitForClickable({timeout:20000, interval:500})
        return true;
    } catch {
        return false;
    }
    }
}

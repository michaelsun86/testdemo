const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.techlistic.com/p/selenium-practice-form.html");

}

example();
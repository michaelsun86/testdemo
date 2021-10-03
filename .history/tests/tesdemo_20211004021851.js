const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function testingone(){

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
    await driver.findElement(By.name("firstname")).sendKeys("Tejo",Key.RETURN);
    await driver.findElement(By.name("lastname")).sendKeys("Djaya",Key.RETURN);
    await driver.findElement(By.id("sex-0")).click();
    await driver.findElement(By.id("exp-2")).click();
    await driver.findElement(By.id("datepicker")).sendKeys("04-10-2021");
    await driver.findElement(By.id("profession-1")).click();
    await driver.findElement(By.id("tool-2")).click();
    await driver.findElement(By.id("continents")).click();
    dropdown = driver.findElement(By.id("continents"));
    await dropdown.findElement(By.xpath("//option[. = 'Asia']")).click()
    dropdown = driver.findElement(By.id("selenium_commands"));
    await dropdown.findElement(By.xpath("//option[. = 'Browser Commands']")).click();
    await driver.findElement(By.id("submit")).click();
    await driver.quit();

}

testingone()
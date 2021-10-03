const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function testingone(){

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
    await driver.findElement(By.name("firstname")).sendKeys("Tejo",Key.RETURN);
    driver.sleep(2000);
    await driver.findElement(By.name("lastname")).sendKeys("Djaya",Key.RETURN);
    driver.sleep(2000);
    await driver.findElement(By.id("sex-0")).click();
    driver.sleep(2000);
    await driver.findElement(By.id("exp-2")).click();
    driver.sleep(2000);
    await driver.findElement(By.id("datepicker")).sendKeys("04-10-2021");
    driver.sleep(2000);
    await driver.findElement(By.id("profession-1")).click();
    driver.sleep(2000);
    await driver.findElement(By.id("tool-2")).click();
    driver.sleep(2000);
    await driver.findElement(By.id("continents")).click();
    dropdown = driver.findElement(By.id("continents"));
    await dropdown.findElement(By.xpath("//option[. = 'Asia']")).click()
    driver.sleep(2000);
    dropdown = driver.findElement(By.id("selenium_commands"));
    await dropdown.findElement(By.xpath("//option[. = 'Browser Commands']")).click();
    driver.sleep(2000);
    filename = "tes1.png"
    file_path = File.join(Dir.pwd, filename);
    upload = driver.findElement(By.name("photo"));
    await driver.executeScript('return arguments[0].value=arguments[1];', upload, file_path);
    driver.sleep(2000);
    await driver.findElement(By.id("submit")).click();
    await driver.quit();

}

testingone()
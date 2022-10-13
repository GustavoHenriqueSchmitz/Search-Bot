"use strict";
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
var driver = new selenium_webdriver_1.Builder().forBrowser('firefox').build();
driver.get('https://www.google.com');
driver
    .findElement(selenium_webdriver_1.By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
    .sendKeys('Notícias', selenium_webdriver_1.Key.ENTER);

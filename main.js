'use strict';
exports.__esModule = true;
const selenium_webdriver_1 = require('selenium-webdriver');
function example() {
  const driver = new selenium_webdriver_1.Builder()
    .forBrowser('firefox')
    .build();
  driver.get('https://www.google.com');
}
example();

import {Builder, WebDriver} from 'selenium-webdriver';

const driver: WebDriver = new Builder().forBrowser('firefox').build();
driver.get('https://www.google.com');

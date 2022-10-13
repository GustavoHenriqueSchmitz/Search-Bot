import {Builder, By, Key, WebDriver} from 'selenium-webdriver';

const driver: WebDriver = new Builder().forBrowser('firefox').build();
driver.get('https://www.google.com');
driver
  .findElement(
    By.xpath(
      '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'
    )
  )
  .sendKeys('Notícias', Key.ENTER);

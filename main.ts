import {Builder, By, WebDriver, WebElement} from 'selenium-webdriver';

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function initBot() {
  const driver: WebDriver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://www.google.com/search?q=Notícias');
  const link: string[] = [];
  for (
    let [counter, validLink] = [0, 0];
    validLink < 5 && counter < 20;
    counter += 1
  ) {
    try {
      const elementLink = await driver.findElement(
        By.xpath(
          `/html/body/div[7]/div/div[11]/div/div[2]/div[2]/div/div/div[${counter}]/div/div/div[1]/div/a`
        )
      );
      link[validLink] = await elementLink.getAttribute('href');
      validLink += 1;
    } catch (error) {
      continue;
    }
  }
  link.forEach(link => {
    driver.get(link);
  });
}

initBot();

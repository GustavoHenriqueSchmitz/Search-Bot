import {Builder, By, WebDriver, WebElement} from 'selenium-webdriver';

async function initBot() {
  const driver: WebDriver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://www.google.com/search?q=Parkour');
  const links: string[] = [];
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
      links[validLink] = await elementLink.getAttribute('href');
      validLink += 1;
    } catch (error) {
      continue;
    }
  }

  await driver.get(links[0]);
  const elementText = await driver.findElement(
    By.xpath('/html/body/div[1]/div/div[4]/main/div[2]/div[3]/div[1]/p[1]')
  );
  const text = await elementText.getText();
  console.log(`Site: ${await driver.getTitle()} | PPL: `);
  console.log(text.split('/\r\n|\r|\n/').length);
}

initBot();

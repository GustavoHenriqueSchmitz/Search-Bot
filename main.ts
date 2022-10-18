import {Builder, By, WebDriver} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/firefox';

async function initBot() {
  const driver: WebDriver = await new Builder()
    .setFirefoxOptions(new Options().headless())
    .forBrowser('firefox')
    .build();
  await driver.get('https://www.google.com/search?q=Parkour');
  const elementsLink = await driver.findElements(By.className('yuRUbf'));
  const links: string[] = [];
  for (let counter = 0; counter < 5; counter += 1) {
    const link = await elementsLink[counter].findElement(By.css('a'));
    links.push(await link.getAttribute('href'));
  }

  await driver.get(links[0]);
  const elementText = await driver.findElement(
    By.xpath(
      '/html/body/div[3]/div/div[2]/div/div[2]/article/div/div/div[2]/p[1]'
    )
  );
  const text = await elementText.getText();
  const textCharacters = text.split('');
  let lines = 0;
  let charactersCounter = 0;
  textCharacters.forEach(element => {
    charactersCounter += 1;
    if (charactersCounter >= 102) {
      charactersCounter = 0;
      lines += 1;
    }
  });

  console.log(`Site: ${await driver.getTitle()} | PPL: ${lines}`);
}

initBot();

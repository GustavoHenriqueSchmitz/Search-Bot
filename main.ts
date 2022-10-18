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
  const elementText = await driver.findElement(By.css('body'));
  const text = await elementText.getText();
  const textCharacters = text.split('');

  let vowels = 0;
  let consonant = 0;

  textCharacters.forEach(element => {
    switch (element) {
      case 'a' || 'e' || 'i' || 'o' || 'u':
        vowels += 1;
        break;

      default:
        consonant += 1;
    }
  });

  console.log(`Site: ${await driver.getTitle()}`);
  console.log(`Contagem de vogais: ${vowels}`);
  console.log(`Contagem de consoantes: ${consonant}\n`);
}
initBot();

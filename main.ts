import {Builder, By, WebDriver} from 'selenium-webdriver';

async function initBot() {
  const driver: WebDriver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://www.google.com/search?q=Parkour');
  const elementsLink = await driver.findElements(By.className('yuRUbf'));
  const links: string[] = [];
  for (let counter = 0; counter < 5; counter += 1) {
    const link = await elementsLink[counter].findElement(By.css('a'));
    links.push(await link.getAttribute('href'));
  }

  await driver.get(links[0]);
  const elementText = await driver.findElement(
    By.xpath('/html/body/div[1]/div/div[4]/main/div[2]/div[3]/div[1]/p[1]')
  );
  const text = await elementText.getText();
  console.log(`Site: ${await driver.getTitle()} | PPL: ${text.length}`);
}

initBot();

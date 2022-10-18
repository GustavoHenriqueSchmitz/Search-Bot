import {Builder, By, WebDriver} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/firefox';
import {question} from 'readline-sync';

// Function initBot, initialize the bot
async function initBot() {
  // Start the browser
  const driver: WebDriver = await new Builder()
    .setFirefoxOptions(new Options().headless())
    .forBrowser('firefox')
    .build();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let search = '';
    // eslint-disable-next-line no-constant-condition
    while (true) {
      search = question('\nPesquisar por: ');

      if (search === '') {
        console.error('\x1b[31mValor para pesquisa vazio, digite algo.\x1b[0m');
        continue;
      }
      console.log('');
      break;
    }

    // Start search
    await driver.get(`https://www.google.com/search?q=${search}`);
    const elementsLink = await driver.findElements(By.className('yuRUbf'));
    const links: string[] = [];

    // Get the links
    for (let counter = 0; counter < 5; counter += 1) {
      const link = await elementsLink[counter].findElement(By.css('a'));
      links.push(await link.getAttribute('href'));
    }

    // Enter the sites and get the informations
    for (let counter = 0; counter < 5; counter += 1) {
      await driver.get(links[counter]);
      const elementText = await driver.findElement(By.css('body'));
      const text = await elementText.getText();
      const textCharacters = text.split('');

      // Start the consonant and vowels quantity verification
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

      // Print the results
      console.log(`Nome do Site: ${await driver.getTitle()}`);
      console.log(`URL: ${links[counter]}`);
      console.log(`Contagem de vogais: ${vowels}`);
      console.log(`Contagem de consoantes: ${consonant}\n`);
    }

    // Ask the user if he wants to do another search
    let searchAgain = '';
    // eslint-disable-next-line no-constant-condition
    while (true) {
      searchAgain = question('Fazer outra pesquisa [S/N]: ')
        .trim()
        .toUpperCase();
      if (searchAgain !== 'N' && searchAgain !== 'S') {
        console.error(
          '\x1b[31mOpção inválida! Digite S para sim ou N para não.\x1b[0m'
        );
        continue;
      }
      break;
    }
    if (searchAgain === 'N') {
      break;
    } else {
      continue;
    }
  }
}
initBot();

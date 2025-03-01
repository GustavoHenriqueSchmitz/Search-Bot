import puppeteer from 'puppeteer-extra';
import { question } from 'readline-sync';

// Function initBot, initialize the bot
async function initBot() {
  // Start the browse
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
    ]
  });
  const [driver] = await browser.pages();

  while (true) {
    // Asks the user what they want to search for
    let search = '';
    while (true) {
      search = question('\nSearch for: ');

      if (search === '') {
        console.error('\x1b[31mVSearch value is empty, digit something.\x1b[0m');
        continue;
      }
      console.log('');
      break;
    }

    // Start search
    await driver.goto(`https://www.google.com/search?q=${encodeURIComponent(search)}`, {
      waitUntil: 'networkidle2'
    });
    const elementsLink = await driver.$$('div.yuRUbf a');
    const links = [];

    // Get the links
    for (let i = 0; i < 5 && i < elementsLink.length; i++) {
      const href = await elementsLink[i].evaluate(el => el.href);
      links.push(href);
    }

    // Enter the sites and get the informations
    for (let i = 0; i < links.length; i++) {
      await driver.goto(links[i], { waitUntil: 'networkidle2' });
      const text = await driver.evaluate(() => document.body.innerText);

      // Start the consonant and vowels quantity verification
      let vowels = 0;
      let consonants = 0;

      for (const char of text) {
        const lowerChar = char.toLowerCase();
        if ('aeiou'.includes(lowerChar)) {
          vowels++;
        } else if (/[a-z]/.test(lowerChar)) {
          consonants++;
        }
      }

      // Print the results
      console.log(`Website name: ${await driver.title()}`);
      console.log(`URL: ${links[i]}`);
      console.log(`Characters count: ${vowels + consonants}`);
      console.log(`Vowel count: ${vowels}`);
      console.log(`Consonant count: ${consonants}\n`);
    }

    // Ask if the user wants to do another search
    let searchAgain = '';
    while (true) {
      searchAgain = question('Do another search [Y/N]: ')
        .trim()
        .toUpperCase();
      if (searchAgain !== 'N' && searchAgain !== 'Y') {
        console.error('\x1b[31mInvalid option! Enter Y for yes or N for no.\x1b[0m');
        continue;
      }
      break;
    }
    if (searchAgain === 'N') {
      break;
    }
  }

  // Close the browser
  await browser.close();
}
initBot();

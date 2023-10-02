const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const chrome = require('selenium-webdriver/chrome');
const readline = require('readline');
const ProgressBar = require('progress');

const TOTAL_RESULTS_REFERENCE = ".profile-list__header-info-text"
const LIST_REFERENCE = ".profile-list > li.profile-list__border-bottom";
const SCROLL_INCREMENT = 100;
const SCROLL_INTERVAL = 10;
const RESULTS_PER_PAGE = 25;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAnswer(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function scrollToBottom(driver, scrollElementSelector = null) {
  return new Promise(async (resolve, reject) => {
    let scriptToGetElement;

    if (scrollElementSelector) {
      scriptToGetElement = `return document.querySelector("${scrollElementSelector}")`;
    } else {
      scriptToGetElement = "return document.documentElement";
    }

    const elementToScroll = await driver.executeScript(scriptToGetElement);

    if (!elementToScroll) {
      console.error("Elemento para rolar não encontrado!");
      reject(new Error("Elemento não encontrado"));
      return;
    }

    async function tryScroll() {
      const previousScrollTop = await driver.executeScript('return arguments[0].scrollTop', elementToScroll);
      await driver.executeScript(`arguments[0].scrollTop += ${SCROLL_INCREMENT}`, elementToScroll);
      const currentScrollTop = await driver.executeScript('return arguments[0].scrollTop', elementToScroll);

      if (currentScrollTop <= previousScrollTop) {
        resolve(true);
        clearInterval(scrollInterval);
      }
    }

    const scrollInterval = setInterval(tryScroll, SCROLL_INTERVAL);
  });
}

async function extractInfo(driver) {
  const profileElements = await driver.findElements(By.css(LIST_REFERENCE));

  let profiles = [];

  for (let profile of profileElements) {
    let fullNameElement = await profile.findElement(By.css('.artdeco-entity-lockup__title > a'));
    let fullName = await fullNameElement.getText();
    let firstName = fullName.split(' ')[0];
    let lastName = fullName.split(' ')[1] || 'N/A';
    let titleElement = await profile.findElement(By.css('div.artdeco-entity-lockup__subtitle > span[data-test-row-lockup-headline]'));
    let title = titleElement ? await titleElement.getText() : 'N/A';
    let url = fullNameElement ? await fullNameElement.getAttribute('href') : undefined

    profiles.push([fullName, firstName, lastName, title, url]);
  }
  return profiles;
}

async function getQueryParam(driver, param) {
  const url = await driver.getCurrentUrl();
  const params = new URLSearchParams(new URL(url).search);
  return params.get(param);
}

async function createCsv(driver, data) {
  const startValue = await getQueryParam(driver, 'start') || '0';
  const csvContent = data.map(row => row.join(',')).join('\n');

  const fileName = `dados_${(startValue / 25) || 0 + 1}.csv`;

  fs.writeFileSync(fileName, csvContent);
}


async function addCookiesAndAccessURL(driver, LI_A_COOOKIE, LI_AT_COOOKIE) {
  try {
    await driver.get('https://www.linkedin.com');

    await driver.manage().addCookie({ name: 'li_a', value: LI_A_COOOKIE });
    await driver.manage().addCookie({ name: 'li_at', value: LI_AT_COOOKIE });

  } catch (error) {
    console.error('Erro durante a automação:', error);
  }
}

async function getTotalResults(driver) {
  const totalResultsElement = await driver.findElement(By.css(TOTAL_RESULTS_REFERENCE));
  const totalResultsText = await totalResultsElement.getText();

  const total = totalResultsText.split(' ')[0]
  return parseInt(total.replace(/\D/g, ''), 10);
}

(async function main() {
  const LI_A_COOOKIE = await getAnswer("Digite o valor do cookie LI_A: ");
  const LI_AT_COOOKIE = await getAnswer("Digite o valor do cookie LI_AT: ");
  let inputUrl = await getAnswer("Digite a URL: ");

  rl.close();

  const urlWithoutStart = inputUrl.split('&').filter(part => !part.startsWith('start=')).join('&');

  const getSearchUrl = (offset = 0) => `${urlWithoutStart}&start=${offset}`;

  let options = new chrome.Options().windowSize({ width: 1200, height: 800 });
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await addCookiesAndAccessURL(driver, LI_A_COOOKIE, LI_AT_COOOKIE);

    let profiles = [];

    let startValue = 0;

    await driver.get(getSearchUrl());

    await driver.wait(until.elementLocated(By.css(TOTAL_RESULTS_REFERENCE)), 10000);
    console.log('')
    console.log('')
    console.log('Colecting profiles...')
    console.warn('Do not minimize the browser or go to other window until this step is finished.')

    const totalResults = await getTotalResults(driver);

    console.log('totalResults', totalResults)
    const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);
    console.log('totalPages', totalPages)

    const totalTicks = totalPages;
    let bar = new ProgressBar('Colecting profiles: [:bar] :percent :etas', { total: totalTicks });


    for (let i = 0; i < totalPages; i++) {
      try {
        await driver.get(getSearchUrl(startValue));

        await driver.wait(until.elementLocated(By.css('.profile-list-item')), 10000);

        await driver.manage().setTimeouts({ implicit: 4000 });

        await scrollToBottom(driver);

        const infoResponse = await extractInfo(driver);

        profiles = [...profiles, ...infoResponse]

        startValue += RESULTS_PER_PAGE;

        bar.tick();
      } catch (error) {
        console.error(`Erro ao obter o conteúdo da página ${i + 1}: `, error);
      }
    }
    console.log('The profiles were successfully collected.')
    console.log('')
    console.log('')
    let profilesWithPublicUrl = []

    const totalProfileTicks = profiles.length;
    let profileBar = new ProgressBar('Getting public profiles url: [:bar] :percent :etas', { total: totalProfileTicks });


    console.log('Getting public profiles url...')
    for (let profile of profiles) {
      try {
        const profileRecruiterURL = profile[4];

        await driver.get(profileRecruiterURL);

        const buttonElement = await driver.wait(until.elementLocated(By.id('topcard-public-profile-hoverable-btn')), 10000);

        await buttonElement.click();

        await driver.sleep(200);

        const aElement = await driver.findElement(By.css('.topcard-condensed__public-profile-hovercard'));
        const hrefValue = await aElement.getAttribute('href');

        profile = [...profile, hrefValue]
        profilesWithPublicUrl = [...profilesWithPublicUrl, profile]

        profileBar.tick();
      } catch (error) {
        console.error(`Erro ao processar o perfil ${profile[0]}: `, error);
      }
    }

    const csvData = [
      ['fullName', 'firstName', 'lastName', 'title', 'recruiterUrl', 'publicUrl'],
      ...profilesWithPublicUrl
    ];
    await createCsv(driver, csvData);
  } catch (error) {
    console.error('Erro durante a automação:', error);
  } finally {
    await driver.quit();
  }
})();




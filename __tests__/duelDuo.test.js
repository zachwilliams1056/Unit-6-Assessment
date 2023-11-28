const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

describe("Duel Duo tests", () => {
  test("Bot is returned to 'Choices' when removed from 'Duo'", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.robotReturnsTo('Choices'), 1000);
  }); 
});

describe("Duel Duo tests", () => {
    test("Clicking 'draw' button displays the div with id = 'choices'", async () => {
      await driver.get("http://localhost:8000");
      await driver.wait(until.divIsDisplayedWithId('Choices'), 1000);
    });
});
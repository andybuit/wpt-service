import * as puppeteer from "puppeteer";
import * as $ from "cheerio";

const url = "https://www.reddit.com";

export async function scraping() {
  const browser = await puppeteer.launch();
  console.log(22222222222222);
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  $("h2", html).each(function() {
    console.log($(this).text());
  });

  await browser.close();
  // puppeteer
  //   .launch()
  //   .then(function(browser) {
  //     return browser.newPage();
  //   })
  //   .then(function(page) {
  //     return page.goto(url).then(function() {
  //       return page.content();
  //     });
  //   })
  //   .then(function(html) {
  //     $("h2", html).each(function() {
  //       console.log($(this).text());
  //     });
  //   })
  //   .catch(function(err) {
  //     //handle error
  //   });
}

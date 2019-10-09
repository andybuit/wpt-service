"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const $ = require("cheerio");
// import * as fs from "fs";
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
// const $ = cheerio;
const url = "https://www.costco.ca/LG-2-piece-Laundry-Suite-5.2-cu.ft-Front-Load-Washer-with-SmartThinQ%c2%ae-Technology-and-7.4-cu.ft-Dryer-with-Smart-Diagnosis%e2%84%a2.product.100427940.html";
async function scraping() {
    console.log(111111111111);
    puppeteer_extra_1.default.use(puppeteer_extra_plugin_stealth_1.default());
    const browser = await puppeteer_extra_1.default.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 600 });
    await page.goto(url);
    await page.waitFor(2000);
    const html = await page.content();
    // fs.writeFile("c:\\temp\\web.html", html, function(err) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log("The file was saved!");
    // });
    $("div:nth-child(4)>div:nth-child(2)>div>div>div:nth-child(2)>div>span:nth-child(1)", html).each(function (el) {
        console.log($(el).text());
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
    //     console.log(html)
    //     $("h2", html).each(function() {
    //       console.log($(this).text());
    //     });
    //   })
    //   .catch(function(err) {
    //     //handle error
    //   });
}
exports.scraping = scraping;
//# sourceMappingURL=scraper.js.map
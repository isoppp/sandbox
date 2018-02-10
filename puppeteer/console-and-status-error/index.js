const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // consoleに出るエラーの検知
  page.on('pageerror', error => {
    console.log('consoleに出てるエラーだよ', error.message)
  });

  // 各リクエストのレスポンスを検知
  page.on('response', response => {
    console.log(response.status(), response.url()) // 全リクエストのステータスコードとURLをlog
    if (300 > response.status() && 200 <= response.status()) return;
    console.warn('status error', response.status(), response.url()) // ステータスコード200番台以外をlog
  });

  await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});
  await browser.close();
})();
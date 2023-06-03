const puppeteer = require("puppeteer");
// 自动化测试，模拟浏览器
async function pupp() {
  const testPath = `file://${__dirname}/index.html`;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(testPath);

  // 截屏并保存
  const pngPath = `${__dirname}/browser.png`;
  await page.screenshot({ path: pngPath, fullPage: true });

  // 当检测到失败时，退出程序并返回大于 0 的状态码
  await page.waitForSelector(".suite");
  // 通过
  const passNode = await page.$$(".pass");
  // 失败
  const failNode = await page.$$(".fail");

  if (passNode && passNode.length) {
    console.log(`通过 ${passNode.length}项`);
  }

  if (failNode && failNode.length) {
    console.log(`失败 ${failNode.length}项`);
    await browser.close();
    process.exit(1);
  }

  await browser.close();
}
pupp();

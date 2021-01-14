const puppeteer = require('puppeteer');

async function startPage() {
    const browser = await puppeteer.launch({
        headless: false,
        "userDataDir": "c:\\ayyappa\\practice\\ladyemporium-notification\\chromium-data"
    });
    const page = await browser.newPage();
    global.page = page;
    await page.goto('https://web.whatsapp.com', {
        waitUntil: 'networkidle0',
        timeout: 0
    });

    // 
    await page.waitForXPath("//div[contains(text(),'Search or start new chat')]");
    console.log('application been logged In now..');
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await page.screenshot({ path: 'example.png' });
}

module.exports = {
    startPage
}
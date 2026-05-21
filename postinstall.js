const puppeteer = require('puppeteer');

(async () => {

    const browserFetcher =
        puppeteer.createBrowserFetcher();

    const revision =
        puppeteer.browserRevision;

    console.log(
        'Downloading Chromium revision:',
        revision
    );

    await browserFetcher.download(
        revision
    );

    console.log(
        'Chromium downloaded successfully'
    );
})();
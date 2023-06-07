export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome',
        acceptInsecureCerts: true,
        "goog:ChromeOptions": {
            args: [
                "--enable-automation",
                "--disable-gpu",
                "--headless"
            ]
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://demo.casino/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'jasmine',
    reporters: ['spec'],

    // Options to be passed to Jasmine.
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    afterTest: async function(test, context) {
        await browser.deleteAllCookies();
    }
}

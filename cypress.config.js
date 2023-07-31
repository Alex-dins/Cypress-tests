const {defineConfig} = require('cypress')

module.exports = defineConfig({
    env: {
        "baseUrl": "http://webdriveruniversity.com/"
    },
    e2e: {
        // Configure your E2E tests here
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
    },
})
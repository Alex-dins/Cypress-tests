const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e: {
        // Configure your E2E tests here
        baseUrl: "http://webdriveruniversity.com",
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
    },
})
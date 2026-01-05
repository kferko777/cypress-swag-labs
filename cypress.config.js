const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
	addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
	createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'custom-title',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},

	e2e: {
		specPattern: '**/*.feature',

		async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config)

			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				})
			)
			// Maximize Chrome, Edge, Firefox, Electron
			on('before:browser:launch', (browser = {}, launchOptions) => {
				// Chrome & Edge → true maximize
				if (
					(browser.name === 'chrome' || browser.name === 'edge') &&
					browser.isHeaded
				) {
					launchOptions.args.push('--start-maximized')
				}
				// Firefox → force large window (no maximize flag)
				if (browser.name === 'firefox' && browser.isHeaded) {
					launchOptions.args.push('--width=1920')
					launchOptions.args.push('--height=1080')
				}
				// Electron → set window size via preferences
				if (browser.name === 'electron' && browser.isHeaded) {
					launchOptions.preferences.width = 1920
					launchOptions.preferences.height = 1080
				}
				return launchOptions
			})

			require('cypress-mochawesome-reporter/plugin')(on)
			allureWriter(on, config)

			return config
		},

		includeShadowDom: true,
		chromeWebSecurity: false,
		defaultCommandTimeout: 30000,
		viewportWidth: 1536,
		viewportHeight: 960,
		retries: { runMode: 1, openMode: 0 },
		video: true,

		env: {
			url: 'https://www.saucedemo.com/',
		},
	},
})

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    specs: [`reorder.feature`],
    cucumberOpts: {
        strict: true,
        require: [
            `**/*steps.js`,
            'helper.js'
        ]
    },
    allScriptsTimeout: 60 * 1000
};

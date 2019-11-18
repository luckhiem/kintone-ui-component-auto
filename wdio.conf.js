const CONFIG = require('./test/config.json')
exports.config = {

  specs: [

    //Fro running test scipt
    `./test/specs/${CONFIG.folderTest}-test/datetime.js`,
    //For uploading files (js/css) into kintone app 
    // './test/testScripts/common/_uploadJSFiles.js'
  ],

  suites: {
    preparation: [
      './test/testScripts/common/_uploadJSFiles.js'
    ],
  },

  maxInstances: 10,
  //Server Info for Chrome
  host: 'localhost',
  port: 4444,

  //Testing Browser Info
  capabilities: [{
    maxInstances: 5,
    //
    browserName: 'chrome',
    proxy: {
      proxyType: 'autodetect'
    }
  }],
  reporters: 'spec',

  services: ['selenium-standalone'],
  sync: true,
  deprecationWarnings: false,

  //Testing Framework Info
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000, //10 minutes
  },
  logLevel: 'silent'
};
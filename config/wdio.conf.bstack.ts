import {config} from './wdio.conf'
require('dotenv').config()
var _=require("lodash")

var overrides = {
    /*user: 'sunilpatro1' || process.env.BROWSERSTACK_USERNAME, 
    key: 'DigCzWykobcbrA3ydCsU' || process.env.BROWSERSTACK_ACCESS_KEY,*/
    user: process.env.BROWSERSTACK_USERNAME, 
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: [
        './test/pom/specs/**/*.ts'
        //'./test/samples/**/*.ts'
        //'./test/elements/accessibilitySelector.ts',
    ],

    capabilities: [
        {
          browserName: 'Safari',
          browserVersion: '15.6',
          'bstack:options': {
            os: 'OS X',
            osVersion: 'Monterey'
          }
        },

        {
          browserName: 'Firefox',
          browserVersion: '102.0',
          'bstack:options': {
            os: 'Windows',
            osVersion: '10'
          }
        }],
    commonCapabilities: {
            'bstack:options': {
              buildName: 'browserstack-build-1'
            }
          },
          maxInstances:2,

          services:[['browserstack', {
            browserstackLocal: true
        }]]      
}

exports.config = _.defaultsDeep(overrides, config)

//https://github.com/browserstack/browserstack-examples-webdriverio/tree/main/resources/conf

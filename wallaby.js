/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable prefer-arrow/prefer-arrow-functions */

module.exports = function () {
  return {
    files: [
      'src/fixtures/*.json',
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      '!*.js',
      '!src/**/*.js',
      '!src/**/**/.js',
      '!src/**/**/**/*.js',
      '!dist/**/*.*',
      '!node_modules/**/*',
    ],

    tests: ['src/**/*.spec.ts', '!src/**/**/*.spec.js', '!dist/**/*.*'],

    setup: (wallaby) => {
      const mocha = wallaby.testFramework;

      const chai = require('chai');

      global.expect = require('chai').expect;

      var module = require('module').Module;
      var originalRequire = module.prototype.require;

      if (!originalRequire._replaced) {
        module.prototype.require = function (filePath) {
          // add tsconfig path mappings here...

          filePath = filePath.replace('@fixtures', 'src/fixtures');

          filePath = filePath.replace('@interfaces', 'src/interfaces');

          filePath = filePath.replace('@services', 'src/services');

          return originalRequire.call(this, filePath);
        };

        originalRequire._replaced = true;
      }
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
      runner: 'node',
    },
  };
};

#! /usr/bin/env node
const sh = require("shelljs");
const prompt = require('prompt');

const schema = {
  properties: {
    name: {
      description: 'Enter your project name (required)',
      required: true
    },
    description: {
      description: 'Enter project description'
    },
    gitUrl: {
      description: 'Enter git origin url'
    },
    npmInstall: {
      description: 'Do you wish to install dependencies now? (yes/no)'
    }
  }
};
const filesToReplace = [
  './build/index.html',
  './build/webpack.base.config.js',
  './package.json',
  './README.md'
];

let projectName = '',
  projectDescription = '',
  projectGitUrl = '',
  npmInstall = 'no';

prompt.start();
prompt.get(schema, function (err, result) {
  if (err) {
    console.log(err);
    process.exit()
  }
  projectName = result.name;
  projectDescription = result.description;
  projectGitUrl = result.gitUrl;
  npmInstall = result.npmInstall;

  replaceTemplate()
});

function replaceTemplate() {
  sh.cp('-r', './node_modules/vue-js-boilerplate/template/.', './')
}

function replaceVariables() {

}
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
const filesToRemove = [
  './template/',
  './bin/',
  'init.sh',
  'LICENSE'
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
  console.log("Replacing boilerplate files and directories...");
  sh.cp('-r', './node_modules/vue-js-boilerplate/template/.', './');
  console.log("Files replaced");
  replaceVariables()
}

function replaceVariables() {
  console.log("Processing file's variables...");
  sh.sed('-i', 'projectName', projectName, filesToReplace);
  sh.sed('-i', 'projectDescription', projectDescription, filesToReplace);
  console.log("Variables are replaced");
  removeInitFiles()
}

function removeInitFiles() {
  console.log("Removing init files...");
  sh.rm('-rf', filesToRemove);
  console.log("Files and directories are removed");
  setGitOrigin()
}

function setGitOrigin() {
  if (projectGitUrl.length) {
    console.log("Setting git origin URL...");
    sh.exec('git remote set-url origin ' + projectGitUrl);
    console.log("git origin changed");
  }
  else {
    console.log("You should set git remote manually")
  }

  console.log("Enjoy the dev!");
  process.exit()
}

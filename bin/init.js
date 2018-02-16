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
    }
  }
};

const bpDir = sh.exec('npm root -g').stdout.replace('\n', '');

const filesToReplace = [
  bpDir + '/template/build/index.html',
  bpDir + '/template/build/webpack.base.config.js',
  bpDir + '/template/package.json',
  bpDir + '/template/README.md'
];

var projectName = '',
  projectDescription = '',
  projectGitUrl = '';

prompt.start();
prompt.get(schema, function (err, result) {
  if (err) {
    console.log(err);
    process.exit()
  }
  projectName = result.name;
  projectDescription = result.description;
  projectGitUrl = result.gitUrl;

  replaceTemplate()
});

function replaceTemplate() {
  console.log("Copying boilerplate files and directories...");
  sh.cp('-r', bpDir + '/template/*', './');
  console.log("Files coped");
  replaceVariables()
}

function replaceVariables() {
  console.log("Processing file's variables...");
  sh.sed('-i', 'projectName', projectName, filesToReplace);
  sh.sed('-i', 'projectDescription', projectDescription, filesToReplace);
  console.log("Variables are replaced");
  setGitOrigin()
}

function setGitOrigin() {
  if (projectGitUrl.length) {
    console.log("Setting git origin URL...");
    sh.exec('git remote set-url origin ' + projectGitUrl);
    console.log("git origin changed");
  }
  else {
    console.log("You should set git remote manually!")
  }

  console.log("Enjoy the dev!");
  process.exit()
}

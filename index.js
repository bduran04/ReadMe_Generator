var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')

//generated questions to ask the user to input in the readme file
const questions = [{
  type: 'input',
  name: 'github',
  message: 'What is your Github username'
}, {
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
}, {
  type: 'input',
  name: 'title',
  message: 'What is the title?'
}, {
  type: 'input',
  name: 'description',
  message: 'What is the description of your project?'
}, {
  type: 'list',
  name: 'license',
  message: 'Choose your license',
  choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
}, {
  type: 'input',
  name: 'install',
  message: 'What command should be run to install dependencies?'
}, {
  type: 'input',
  name: 'test',
  message: 'What command should be run to run tests?'
}, {
  type: 'input',
  name: 'usage',
  message: 'What does the user need to know about using the repo?'
},{
  type: 'input',
  name: 'contribution',
  message: 'What does the user need to know in order to contribute to the repo?'
}];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

//function to initialize application
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers)
    });
}

// Function call to initialize application
init();



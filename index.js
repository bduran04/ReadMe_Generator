var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();

inquirer
.prompt(questions)
.then((answers) => {
    writeToFile("readMe.md", answers)
  });


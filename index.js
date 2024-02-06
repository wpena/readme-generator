// To get user inputs
const inquirer = require('inquirer');

// Library to write to file
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown');

// function for user input and initialize application
function generate() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      }
    ])
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile('./assets/generated-readme/Sample-README.md', markdown);
    })
    .catch(error => {
      console.error(error);
    });
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log('README generated successfully!')
  );
}

// function call to initialize program
generate();
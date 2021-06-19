
// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
var util = require('util');
var generateMarkdown = require("./utils/generateMarkdown");
const { type } = require('os');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instruction for your project.',
        }
        {
            type: 'input',
            name: 'usage',
            mesage: 'Enter usage instruction for project.',
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Enter contributions for project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for project.',
            choices: [
                'Apache License 2.0',
                'GNU General Public License (GPL)',
                'MIT license',
                'Mozilla Public License 2.0',
                'Common Development and Distribution License',
                'Eclipse Public License version 2.0'
            ],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub Username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address.',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
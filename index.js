
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var util = require('util');
var generateMarkdown = require("./utils/generateMarkdown.js");



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
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instruction for project.',
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Enter contributions for project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for project. Press Enter.',
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

const writeFileAsync = util.promisify(fs.writeFile);
const writeToFile = async (fileName, data) => {

    try {
        await writeFileAsync(fileName, data);

        //   console.log('Your Readme.md is complete');
    } catch (err) {
        console.log(err);
        //   console.log('There was an error in file');
    }
}


// TODO: Create a function to initialize app
const init = async () => {

    console.log('Welcome to the README.md generator');
    try {
        const answers = await questions(); //once user prompts are finished then return answers to answers array
        const md = generateMarkdown(answers);  //call the function in generateMarkdoen.js file to create the markdown for the readme
        writeToFile('README.md', md);  //call the writeToFile function and pass it the name 'README.MD' and the completed markdown
    } catch (err) {
        console.log(err);
        console.log('There was an error with user input');
    }
};

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Type the name of your project...'
},
{
    type: 'input',
    name: 'name',
    message: 'Type the name of the author...'
},
{
    type: 'input',
    name: 'description',
    message: 'Give a description for your project...'
},
{
    type: 'confirm',
    name: 'license',
    message: 'Does your project need a license?'
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md",generateMarkdown(data));
        });
}

// Function call to initialize app
init();


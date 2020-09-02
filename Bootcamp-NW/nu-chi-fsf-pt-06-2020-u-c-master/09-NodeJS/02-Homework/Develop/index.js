// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const {prompt} = inquirer;
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide the name of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide the description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the instructions for installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the usage of the project"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide a license",
        choices: [
            "MIT",
            "ISC", 
            "APACHE 2.0", 
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the parties that contributed to this project"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the tests of the project"
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your GitHub user name"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your GitHub email address"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// function call to initialize program
init();

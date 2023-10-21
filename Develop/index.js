const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.createPromptModule([
    {
       type: "input",
       message: "what is the title of your project",
       name: "project title", 
       validate: function (answer) {
        if (answer.length < 1) {
            return console.log("enter a title")
        }
        return true;
       }
       
    },
    {
        type: "input",
        message: "description of project",
        name: "project description", 
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter a title")
            }
            return true;
           }
     },
     {
        type: "input",
        message: "installation requirements",
        name: "installation",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter a title")
            }
            return true;
           } 
     },
     {
        type: "input",
        message: "usage",
        name: "usage description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter a title")
            }
            return true;
           } 
     },
     {
        type: "list",
        message: "License",
        name: "license",
        choices:  ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License',],
     },
     {
        type: "input",
        message: "did anyone contribute to this project or did I use any outside websites",
        name: "contributurs",
     },
     {
        type: "input",
        message: "are there any tests required to run this application",
        name: "tests",
     },
     {
        type: "input",
        message: "for any questions contact me at my github account, and email",
        name: "questions",
     },
     
])



// TODO: Include packages needed for this application complete

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

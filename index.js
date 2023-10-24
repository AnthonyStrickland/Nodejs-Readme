const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

  const inputQuestions = [
    {
        type: "input",
        message: "Hello this is your personal README.md generator please enter your full name",
        name: "user", 
        validate: function (answer) {
         if (answer.length < 1) {
             return console.log("Please enter your name")
         }
         return true;
        }
        
      },
    {
       type: "input",
       message: "what is the title of your project",
       name: "project_title", 
       validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a title")
        }
        return true;
       }
       
     },
    {
        type: "input",
        message: "description of project",
        name: "project_description", 
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter a description")
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
                return console.log("enter installation requirements")
            }
            return true;
           } 
     },
     {
        type: "input",
        message: "usage",
        name: "usage_description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter usage description")
            }
            return true;
           } 
     },
     {
        type: "list",
        message: "License",
        name: "license",
        choices:  [ "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "BoostSoftwareLicense 1.0", "Creative Commons Zero V1.0 Universal", "Eclispse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense" ],
     },
     {
        type: "input",
        message: "did anyone contribute to this project or did you use any outside websites",
        name: "contributurs",
     },
     {
        type: "input",
        message: "are there any tests required to run this application",
        name: "tests",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter if there any tests or not")
            }
            return true;
           } 
     },
     {
        type: "input",
        message: "for any questions github account is, ",
        name: "github",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter github account")
            }
            return true;
           } 
     },
     {
        type: "input",
        message: "for any further questions you can contact me at my email account, ",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter email account")
            }
            return true;
           } 
     },
     
]
// Function to write README file
function writeToFile(data) {
    const filename = 'README.md';
    fs.writeFile(filename, generateMarkdown(data), {flag: 'w+'},(err) =>
    err ? console.error(err) : console.log(`Your README.md for ${data.title} has been generated.`))
}

// Function to initialize app
function init() {
    inquirer.prompt(inputQuestions)
    .then((answers) => {
        writeToFile(answers)
    });
}

// Function call to initialize app
init();

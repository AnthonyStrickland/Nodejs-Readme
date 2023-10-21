const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
       type: "input",
       message: "what is the title of your project",
       name: "project title", 
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
        name: "project description", 
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
        name: "usage description",
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
        message: "for any questions contact me at my github account, ",
        name: "git",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter github account")
            }
            return true;
           } 
     },
     {
        type: "input",
        message: "for any questions contact me at my email account, ",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("enter email account")
            }
            return true;
           } 
     },
     
])
.then((answsers) => {
    const readme = generateREADME(answers);
    displayBadge(answers)

fs.writeFile("README.md", process.argv[2], (err)=>
err ? console.error(err) : console.log ("Success"));
})

function renderBadge(license) {
    let badge = ''
    if (license === "Apache License 2.0") {
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "GNU General Public License v3.0") {
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === "MIT License") {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === "BSD 2-Clause Simplified License") {
        badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (license === "BSD 3-Clause New or Revised License") {
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === "BoostSoftwareLicense 1.0") {
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === "Creative Commons Zero V1.0 Universal") {
        badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if (license === "Eclispse Public License 2.0") {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } else if (license === "GNU Affero General Public License v3.0") {
        badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    } else if (license === "GNU General Public License v2.0") {
        badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    } else if (license === "Mozilla Public License 2.0") {
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`  
    } else if (license === "The Unlicense") {
        badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`     
    } else {
        badge = ''
    }
    return badge;
    generateREADME(badge)
}


// TODO: Include packages needed for this application complete

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

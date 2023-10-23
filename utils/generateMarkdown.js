const { link } = require("fs");
const { url } = require("inspector");
// TODO: Create a function that returns a license urlLink based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let urlLink = ""
  if (license === "Apache License 2.0") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU General Public License v3.0") {
      urlLink = `[![License: GPL v3](https://img.shields.io/urlLink/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "MIT License") {
      urlLink = `[![License: MIT](https://img.shields.io/urlLink/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "BSD 2-Clause Simplified License") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === "BSD 3-Clause New or Revised License") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "BoostSoftwareLicense 1.0") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "Creative Commons Zero V1.0 Universal") {
      urlLink = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === "Eclispse Public License 2.0") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
      urlLink = `[![License: AGPL v3](https://img.shields.io/urlLink/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "GNU General Public License v2.0") {
      urlLink = `[![License: GPL v2](https://img.shields.io/urlLink/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === "Mozilla Public License 2.0") {
      urlLink = `[![License: MPL 2.0](https://img.shields.io/urlLink/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`  
  } else if (license === "The Unlicense") {
      urlLink = `[![License: Unlicense](https://img.shields.io/urlLink/license-Unlicense-blue.svg)](http://unlicense.org/)`     
  } else {
      urlLink = ""
  }
  return urlLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let urlLink = ""
  if (license === "Apache License 2.0") {
      urlLink = "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU General Public License v3.0") {
      urlLink = "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "MIT License") {
      urlLink = `[![License: MIT](https://img.shields.io/urlLink/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "BSD 2-Clause Simplified License") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === "BSD 3-Clause New or Revised License") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "BoostSoftwareLicense 1.0") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "Creative Commons Zero V1.0 Universal") {
      urlLink = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === "Eclispse Public License 2.0") {
      urlLink = `[![License](https://img.shields.io/urlLink/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === "GNU Affero General Public License v3.0") {
      urlLink = `[![License: AGPL v3](https://img.shields.io/urlLink/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === "GNU General Public License v2.0") {
      urlLink = `[![License: GPL v2](https://img.shields.io/urlLink/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === "Mozilla Public License 2.0") {
      urlLink = `[![License: MPL 2.0](https://img.shields.io/urlLink/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`  
  } else if (license === "The Unlicense") {
      urlLink = `[![License: Unlicense](https://img.shields.io/urlLink/license-Unlicense-blue.svg)](http://unlicense.org/)`     
  } else {
      urlLink = ""
  }
  return urlLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(name,license) {
  if(license != 'None') {
    return `## License
    Copyright (c) ${name}. All rights reserved.  
    Licensed under the [${license}](${renderLicenseLink(license)}) license.`
    } else {
      return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.project_description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [contributurs](#contributurs)
  - [Tests](#tests)
  - [Questions](#questions)
  ${data.license != 'None' ? '- [License](#license)' : ''}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage_description}

  ## Contributurs

  ${data.contributurs}

  ## Tests

  ${data.tests}

  ## Questions

  If you would like to know more about this project or to view other projects I have worked on please visit me at [${data.github}](https://github.com/${data.github}).

  If you have any questions about this project that aren't answered in the github repository, I can be reached at ${data.email}.

  ${renderLicenseSection(data.user, data.license)}

`;
}

module.exports = generateMarkdown;



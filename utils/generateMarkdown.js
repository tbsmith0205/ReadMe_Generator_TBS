// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if (license === "ISC") { 
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }else if (license === "GPL") { 
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  

  if (license === "") {
    return ""
  }else {
    return `\n* [License](#license)\n`;
  }

  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return ""
  }else {
    return `## License
    This work's license is ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // object - dot notation
return `# ${data.project}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Instruction](#instruction)
* [Contribution](#contribution)
* [Testing](#testing)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation
${data.installation}

## Instruction
${data.instructions}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.testing}

  
${renderLicenseSection(data.license)}
  

## Questions
${data.github}
${data.email}

`;
}

module.exports = generateMarkdown;

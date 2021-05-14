// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license;

  // if else statement
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // object - dot notation
  return `# ${data.project}

  ## Description

  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Instruction
  ${data.instructions}

  ## Contribution Guidelines
  ${data.contribution}

  ## Testing Instructions
  ${data.testing}

  ## License

  ${renderLicenseLink(data.license)}

  ## Questions
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;

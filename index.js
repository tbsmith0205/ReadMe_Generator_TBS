// take in input from the command line and generate a ReadMe file based on user answers

// tech used: inquirer, fs, JS, nodeJS

// what questions do I need to ask? project name, project description, github username, linkedin url...

// build out questions with inquirer and console log the response

// once i've received responses build out functionality to create readme file

// how do I format this in a presentable way?

const inquirer = require("inquirer");
const fs = require("fs"); // write file method
const generateMarkdown = require("./utils/generateMarkdown");
const path = require();

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
  },

  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please provide any installation instructions that would be needed for this project.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please provide any instructions necessary to the user of this project.",
    name: "insructions",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines for this project.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide any testing instructions for this project.",
    name: "testing",
  },
  {
    type: "list",
    message: "What license(s) would you like to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// inquirer.prompt([{}, {}, {}]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // path - join method

  return fs.writeFile();
}

// TODO: Create a function to initialize app
function init() {
  // user will see the first question
  inquirer.prompt(questions).then((data) => {
    // take those responses from the user and write them to a file
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();

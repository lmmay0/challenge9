// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

let questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the tile for this?',

},
{
    type: 'input',
    name: 'contact info',
    message: 'what is your email?',

},
{
    type: 'input',
    name: 'git info',
    message: 'What is your git username',

},
{
    type: 'input',
    name: 'description',
    message: 'Summarize what this project is about?',

},
{
    type: 'input',
    name: 'issues',
    message: 'How are you solving any issue?',

},
{
    type: 'input',
    name: 'installation',
    message: 'How should this app be downloaded or installed?',

},
{
    type: 'list',
    name: 'license_badge',
    message: 'Select the license to apply?',
    choices: ['MIT', 'BSD','Appache'],
  },
{
    type: 'input',
    name: 'how to use',
    message: 'Why should someone use this?',
    Validite: (useemail) => {
       // condetion
    }

},
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
        console.log(answer)
        let readmeString = generateMarkdown(answer)
        console.log(readmeString)
        savetoreadme = fs.writeFile("demo.md", readmeString, (err, data) => {
            if(err) console.log(err)

            console.log("readme generated successfullyoh ")
        })
    })
}


// Function call to initialize app
init();

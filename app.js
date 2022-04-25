// Portfolio Generator Application Code

// variable declaration
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');


// const pageHTML = gemeratePage(Name, GitHub);


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter your GitHub Username.'
        },
        {
            type: 'input',
            name: 'About_Me',
            message:'Provide some information about yourself:'
        },
    ]);
};

const promptProject = portfolioData => {

    portfolioData.projects = [];

    console.log(`
    =================
    Add a New Project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'Languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'Link',
            message: 'Enter the GitHub Link to your Project. (Required)'
        },
        {
            type: 'confirm',
            name: 'Feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'ConfirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};

promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));
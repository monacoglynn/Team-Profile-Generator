const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const {
    prompt
} = require('inquirer');
const fs = require('fs');

const questions = [{
        type: 'input',
        name: 'managerName',
        message: "What is the Manager's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is their ID number?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    },
    {
        type: 'list',
        name: 'newEmployee',
        message: 'What kind of team member do you want to add?',
        choices: ['Engineer', 'Intern', 'That is everyone on the team']
    }
]


prompt([...questions]).then((answers) => {
    fs.writeFile('./dist/readme.md', `${answers.managerName}`, (err) => {
        if (err) throw err;
        console.log('yay');
    })
})
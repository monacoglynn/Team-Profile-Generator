const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const {
    prompt
} = require('inquirer');
const fs = require('fs');



const initQ = [{
        type: 'input',
        name: 'manager',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the team members name?'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is their ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter github username'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter school name'
    },
    {
        type: 'list',
        name: 'newEmployee',
        message: 'What kind of team member do you want to add?',
        choices: ['Engineer', 'Intern', 'That is everyone on the team']
    }
]
let questionArray = [];

let teamArray = [];

function makeArray(name, sp) {
    questionArray.push(initQ[name], initQ[2], initQ[3], initQ[sp], initQ[7])
    return questionArray;
}

function selectArray(employee) {
    switch (employee) {
        case 'Manager':
            makeArray(0, 4);
            break;
        case 'Engineer':
            makeArray(1, 5, );
            break;
        case 'Intern':
            makeArray(1, 6);
            break;
        default:
            break
    }
}

// function generateMemberData(employee) {
//     const member = new employee(employee.name, employee.ID, employee.email)
//     console.dir(member);
// }

const generateTeam = (employee) => {
    questionArray = [];
    selectArray(employee);
    prompt([...questionArray]).then((answers) => {
        let teamMember = [];
        switch (answers.newEmployee) {
            case 'Engineer':
                teamMember.push(answers);
                teamArray.push(teamMember);
                generateEngineer();
                break;
            case 'Intern':
                teamMember.push(answers);
                teamArray.push(teamMember);
                generateIntern();
                break;
            default:
                return console.dir(answers)
                break;
        }
    })
    // generateMemberData(answers);
}

const generateEngineer = () => generateTeam('Engineer');

const generateIntern = () => generateTeam('Intern');


generateTeam('Manager');

// prompt([...questions]).then((answers) => {
//     if (answers.newEmployee == 'Engineer') {
//         prompt([...engineerQs])
//     }
//     fs.writeFile('./dist/readme.md', `${answers.managerName}`, (err) => {
//         if (err) throw err;
//         console.log('yay');
//     })
// })
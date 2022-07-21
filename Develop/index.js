
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type:`input`,
        message: 'What is the title of your project?',
        name: 'projectTitle'
    },{
        type: `input`,
        message: 'Give a description of your project',
        name: 'projectDescription'
    },{
        type:`input`,
        message: `Describe how to use the project`,
        name: `howToUse`
    },{
        type: 'list',
        choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 'BSD 2-clause "Simplified" Liscense'],
        message: 'what kind of license do you have on this project?',
        name: 'license',
    },{
        type: `input`,
        message: `Describe how to test the project`,
        name: 'testing'
    },{
        type: `input`,
        message: 'Who are the contributors',
        name: 'contributors'
    },{
        type: 'input',
        message:'what is your gitHub username?',
        name: 'gitHubUsername',
    },{
        type: `input`,
        message: 'Describe how to install the project',
         name: 'installation'
    },{
        type: 'input',
        message: 'what is your email',
        name: 'email',
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
}


function writeReaMe(response) {
    return `# README-generator

    ## license Badge
    
    ${response.license}
    
    ## Description
    
    ${response.projectDescription}
    
    ## Table of Contents
    
    1. [Description](#description)
    2. [installation](#installation)
    3. [Usage](#usage)
    4. [license](#license)
    5. [Contributors](#contributors)
    6. [Tests](#tests)
    7. [Questions](#questions)
    
    
    ## Installation
    
    ${response.installation}
    
    ## usage
    
    ${response.howToUse}
    
    ## License
    
    The license used for this project ${response.license}
    
    ## Tests
    
    ${response.testing}
    
    ## Questions
    
    If you have any questions or wish to contribute to this project you may email me at ${response.email}.
    
    or you may reach out at my GitHub: [${response.name}](http://github.com/${response.gitHubUsername})`

}


function init() {
    promptUser()
    .then((response) => fs.writeFile('README.md', writeReaMe(response), (err) => {
        if (err) {
            console.log(err)
        }else{
            console.log(response)
        }
    
    }))

}


init();




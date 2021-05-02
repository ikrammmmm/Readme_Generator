
//array of questions to use
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project.",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }

    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for installation of the app?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this app?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "contributing",
        message: "What are guidelines for contributing to the project?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "tests",
        message: "What are instructions for testing the app?"   ,
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ],
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value)=>{ if(value) {return true} else {return 'Please enter a value!'} }
    },
];

module.exports = questions;
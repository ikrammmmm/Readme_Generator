const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const questions = require('./assets/data/questions.js');
const generateMD = require('./assets/data/markdown-format.js');

//function to prompt user and return answer
const promptUser = () => {
    return inquirer.prompt(questions);
}

//function to write ReadMe File
const writeToFile = (fileName, data) =>{
    return writeFileAsync(fileName,data);
}

//function to initilizate program
const init = async () => {
    try{
        console.log("Welcome to the README Generator!\nPlease answer the following questions")

        //ask user questions
        const answers = await promptUser();
        //create markdown content from the answers
        const fileContent = generateMD(answers);

        //generate readme file from markdown content
        await writeToFile("./output/README.md",fileContent);

        console.log("README.md successfully created in output folder!");
    } catch (error) {
        console.log("Error creating README.md! File not created.");
        console.log(error);
    }   
}

init();
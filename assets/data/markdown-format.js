//function to generate markdown content
function generateMD(data){
    let badge;
    switch(data.license){
        case "MIT":
            badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" ;
            break;
        case "Unlicense":
            badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
            break;
        case "Apache 2.0":
            badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
            break;
        case "GNU v3":
            badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
            break;
        case "BSD 3-Clause":
            badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
            break;
        case  "Mozilla Public License 2.0":
            badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
    }

    return `

# ${data.title}
${badge}
## Description
${data.description}
#
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
#
## Installation
In order to install necessary dependencies, open the console and run the following

\`\`\`${data.installation}\`\`\`
#
## Usage
${data.usage}
#
## License
This project is licensed under ${data.license}.
#
## Contributing
${data.contributing}
#
## Tests
In order to test, open the console and run the following

\`\`\`${data.tests}\`\`\`
#
## Questions
For additional questions, please contact me at ${data.email}. View more of my work at [GitHub](https://github.com/${data.username})`

}

module.exports= generateMD;
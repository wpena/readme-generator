function genLicenseBadge(license) {
    let licenseBadge;
    switch (license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache 2.0':
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GPL 3.0':
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'BSD 3-Clause':
            licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'None':
            licenseBadge = '';
            break;
        default:
            licenseBadge = '';
            break;
    }
    return licenseBadge;
}

// function to generate markdown for README
function generateMarkdown(data) {

    // Handle license badges
    const licenseBadge = genLicenseBadge(data.license);

    return `${licenseBadge}

# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Github: [${data.github}](https://github.com/${data.github})\n
For any additional questions, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
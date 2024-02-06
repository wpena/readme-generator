// function to generate markdown for README
function generateMarkdown(data) {

    return `

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
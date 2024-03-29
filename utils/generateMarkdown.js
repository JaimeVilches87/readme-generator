//license array to build the badge icon
const licenses = [  
  { name: 'Apache License 2.0', abbr: 'Apache', url: 'https://opensource.org/licenses/Apache-2.0' },
  { name: 'GNU General Public License (GPL)', abbr: 'GNU', url: 'GNU General Public License (GPL)' },
  { name: 'MIT license', abbr: 'MIT', url: 'https://opensource.org/licenses/MIT' },
  { name: 'Mozilla Public License 2.0', abbr: 'Mozilla', url: 'https://opensource.org/licenses/MPL-2.0' },
  { name: 'Common Development and Distribution License', abbr: 'CDDL', url: 'https://opensource.org/licenses/CDDL-1.0' },
  { name: 'Eclipse Public License version 2.0', abbr: 'Eclipse', url: 'https://opensource.org/licenses/EPL-2.0' },
];

const findLicense = (license) => {
  for (lic of licenses) {
    if (lic.name === license)
      return lic;
  }
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lic = findLicense(license);
  return lic ? `![license](https://img.shields.io/static/v1?label=license&message=${lic.abbr}&color=brightgreen)` : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lic = findLicense(license);
  return lic ? lic.url : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let lic = findLicense(license);
  return lic ? `Licensed under ${lic.name}` : '';
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}
 
 ## Description
 ${data.description}
 
 ## Table of Contents
 
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [License](#License)
 * [Questions](#Questions)
 
 ## Installation
 ${data.install}
 
 ## Usage
 ${data.usage}
 
 ## Contributing
 ${data.description}
 
 ## Tests
 ${data.contrib}
 
 ## License
${licenseSection}
${licenseLink}
 
 ## Questions
 You can view my GitHub profile at https://github.com/${data.github}
 
 If you have additonal questions you can email me at ${data.email} `;
}

module.exports = generateMarkdown;
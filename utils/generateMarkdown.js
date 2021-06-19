const licenses = [  //license array to build the badge icon
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
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
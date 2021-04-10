// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //check if user did not choose none
  let newLicense = license.replace(/\s/g,'');
  if (newLicense != "None") {
    return `![This is the badge image](https://img.shields.io/badge/license-${newLicense}-blue.svg)`
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//this is going to be similar to above but this like 1.  [Description](#description)
let newLicense = license.replace(/\s/g,'');

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //this is going to be like: ## [Description](#description)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Table of Contents

1.  [Description](#description)

## [Description](#description)
${data.description}

`;
}

module.exports = generateMarkdown;

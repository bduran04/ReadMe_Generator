function renderLicenseBadge(license) {
  let newLicense = license.replace(/\s/g, '');
  if (newLicense != "None") {
    return `![This is the badge image](https://img.shields.io/badge/license-${newLicense}-blue.svg)`
  }
  else {
    return "";
  }
}

function renderLicenseLink(license) {
  let newLicense = license.replace(/\s/g, '-');
  let lowercaseLicence = newLicense.toLowerCase();
  if (lowercaseLicence === "bsd-3") {
    return "https://choosealicense.com/licenses/bsd-3-clause/"
  }
   else if(lowercaseLicence !== "None") {
    return `https://choosealicense.com/licenses/${lowercaseLicence}/`
  }
  else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title} • ${renderLicenseBadge(data.license)}

  ## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## [Description](#description)
${data.description}

## [Installation](#installation)
To install necessary dependencies, run the following command: ${data.install}

## [Usage](#usage)
${data.usage}

## [License](#license)
This project is licensed under: 
[${data.license}](${renderLicenseLink(data.license)})

## [Contributing](#contributing)
${data.contribution}

## [Tests](#tests)
${data.test}

## [Questions](#questions)
If you have questions, you can reach me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;

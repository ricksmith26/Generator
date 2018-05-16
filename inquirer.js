const generator = require('./generator.js');
const inquirer = require('inquirer');

inquirer.prompt(
  [
    {
      name: 'folderName',
      type: 'input',
      message: 'write name of you main folder'
    }
  ],
  function(response) {
    console.log(response);
  }
);

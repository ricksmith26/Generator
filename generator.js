var fs = require('fs');
function generate(projectName) {
  //1st mkdir is the main folder for project, every other file for the project must be nested inside
  fs.mkdir(projectName, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
    //index file nested in main mkdir
    fs.writeFile('newProject/index.js', '', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('new index.js file created successfully');
    });
    //folder for spec is created inside main folder
    fs.mkdir('newProject/spec', function(err) {
      if (err) {
        return console.error(err);
      }
      console.log('Spec Directory created successfully!');
      // new spec file is then created inside the spec folder
      fs.writeFile('newProject/spec/index.spec.js', '', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('new index.spec.js file created successfully');
      });
    });
  });
}

module.exports = generate;

var fs = require('fs');

fs.mkdir('newProject', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');

  fs.writeFile('index.js', '', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('new index.js file created successfully');
  });

  fs.mkdir('spec', function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Spec Directory created successfully!');

    fs.writeFile('index.spec.js', '', function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('new index.spec.js file created successfully');
    });
  });
});

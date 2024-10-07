const fs = require('fs');

// Read content from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Write content to output.txt
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Content successfully written to output.txt');
  });
});


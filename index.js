const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

// Use the fileUpload middleware with options
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 }, // Increase the limit to 50MB
}));

// Static html page for instructions
app.get('/', function(req, res) {
    res.sendFile(path.resolve('views/instructions.html'));
});

// Endpoint to handle file uploads
app.post('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // Define the file variable here
    let file = req.files.file;
    console.log(`Upload request received ${file.name} at ${new Date().toLocaleString()}`);
  
    file.mv('./bucket/' + file.name, function(err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
    });
});

// Endpoint to download files
app.get('/download/:filename', function(req, res){
    const filename = req.params.filename;
    console.log(`Download request received for ${filename} at ${new Date().toLocaleString()}`);
    res.download('./bucket/' + filename);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

// Install express by running: npm install express

const express = require('express');
const app = express();
const port = 3000;

// Serve static HTML file
app.use(express.static('public'));  // Assuming the HTML file is in a folder called 'public'

// API endpoint to send new text to the client
app.get('/get-text', (req, res) => {
    const newText = 'This is the updated text from the server!';
    res.json({ newText });  // Send the new text as a JSON response
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

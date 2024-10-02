const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML file
app.use(express.static('public'));  // Assuming the HTML file is in a folder called 'public'

// API endpoint to send new text to the client
app.get('/get-text', (req, res) => {
    const newText = 'This is the updated text from the server!';
    res.json({ newText });  // Send the new text as a JSON response
});

// Add this route for the root path('/')
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

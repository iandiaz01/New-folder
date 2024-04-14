const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle POST requests
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    // Handle your form submission logic here
    console.log(`Received submission from ${name} with email ${email}`);
    res.status(200).send('Form submitted successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

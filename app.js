const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received submission from ${name} with email ${email}`);
    res.status(200).send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // Choose a port

// MongoDB Connection (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/skillquest', { // Example local connection
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));


// Define User Schema (Mongoose)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensure unique emails
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json()); // Important for parsing JSON request bodies

// Signup API Endpoint
app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists (more robust than client-side)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists!' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' }); // 201 Created
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

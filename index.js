const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let votes = { islam: 0, hindu: 0, christian: 0, atheist: 0, others: 0 };

app.post('/vote', (req, res) => {
    const { religion } = req.body;
    if (votes[religion] !== undefined) {
        votes[religion]++;
        res.json({ success: true, votes });
    } else {
        res.status(400).json({ success: false, message: 'Invalid religion' });
    }
});

app.get('/votes', (req, res) => {
    res.json(votes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

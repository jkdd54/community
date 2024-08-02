const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api/verify', async (req, res) => {
    const proof = req.body;

    try {
        const response = await fetch('https://developer.worldcoin.org/api/v1/verify/app_staging_129259332fd6f93d4fabaadcc5e4ff9d', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...proof, action: "test" }),
        });

        if (response.ok) {
            const { verified } = await response.json();
            res.json({ verified });
        } else {
            const { code, detail } = await response.json();
            res.status(400).json({ code, detail });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

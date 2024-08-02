const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/verify', async (req, res) => {
    const proof = req.body.proof;

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
        console.error('Error verifying proof:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/create_post', (req, res) => {
    const { title, content, isVerified } = req.body;

    // Firebase에 게시글 저장 로직 추가
    // 예: Firebase Firestore에 저장

    res.json({ success: true, isVerified });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');

const app = express();

let title = 'Hello, world, now with hooks!';

app.use(express.static('dist'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/title', 
    (req, res) => res.send({ title })
);

app.post('/api/title', 
    async (req, res) => {
        title = req.body.title;
        res.send({ title });
    }
);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

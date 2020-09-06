const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/getTitle', (req, res) => res.send({ title: 'Hello, world, now with hooks!' }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

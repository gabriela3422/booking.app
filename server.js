const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use('/api', middlewares, router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

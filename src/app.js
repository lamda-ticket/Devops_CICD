const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
    res.send('Hello World! form app.js and alpha dev');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;

console.log('App module loaded.');



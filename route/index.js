module.exports = function(app) {
    app.use('/', (req, res) => res.send('Hello World!'));
};
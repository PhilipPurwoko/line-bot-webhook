const { router, line } = require('bottender/router');
const echoController = require('./controllers/echo');
const covidController = require('./controllers/covid');
const anyController = require('./controllers/any');

module.exports = async function App() {
  return router([
    line(['Covid','covid'],covidController),
    line.message(echoController),
    line.any(anyController)
  ])
}
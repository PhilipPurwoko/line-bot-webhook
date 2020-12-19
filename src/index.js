const { router, line } = require('bottender/router');
const HandleMessage = require('./controllers/message');

module.exports = async function App() {
  return router([
    line.message(HandleMessage)
  ])
}
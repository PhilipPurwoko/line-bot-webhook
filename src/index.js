const { router, line } = require('bottender/router');
const textController = require('./controllers/text');
const anyController = require('./controllers/any');

module.exports = async function App() {
  return router([
    line.message(textController),
    line.any(anyController)
  ])
}
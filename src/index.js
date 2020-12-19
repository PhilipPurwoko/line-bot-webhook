const { router, line } = require('bottender/router');
const textController = require('./controllers/text');

module.exports = async function App() {
  return router([
    line.message(textController)
  ])
}
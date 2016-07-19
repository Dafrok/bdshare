import $ from 'jquery'
import init from './init.js'
import shareDOM from './share-dom/index.js'
import cmdList from './cmd-list.js'

const handlers = shareDOM.bind()
init()

module.exports = handlers

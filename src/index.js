import cmdList from './data/cmd-list.js'
import init from './init.js'

const handlers = {}
const document = window.document
const $share = document.createElement('div')
$share.style.display = 'none'
$share.className = 'bdsharebuttonbox'
for (var i = 0; i < cmdList.length; i++) {
    ~function (i) {
        var $item = document.createElement('a')
        $item.setAttribute('data-cmd', cmdList[i])
        $share.appendChild($item)
        handlers[cmdList[i]] = function (options) {
            window._bd_share_config.common = options || window._bd_share_config.common
            $item.click()
        }
    }(i)
}
document.body.appendChild($share)

init()

export default handlers

import $ from 'jquery'
import cmdList from '../data/cmd-list.js'

const $body = $('body')
const handlers = {}
var $share = $('<div class="bdsharebuttonbox"></div>').css({display: 'none'});
for (var i = 0; i < cmdList.length; i++) {
    ~function (i) {
        var $item = $('<a data-cmd="' + cmdList[i] + '"></a>').appendTo($share);
        handlers[cmdList[i]] = function (options) {
            window._bd_share_config.common = options || window._bd_share_config.common;
            $item[0].click();
        }
    }(i)
}
$share.appendTo($body);

export default handlers

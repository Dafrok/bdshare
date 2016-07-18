import $ from 'jquery'
import init from './init.js'
import shareDOM from './share-dom/index.js'

var $body = $('body');
var $share = $('<div class="share-btn"></div>').css({display: 'none'});
var $shareGroup = $('<div class="share-icon-group bdsharebuttonbox"></div>');
var $weibo = $('<a href="javascript:;" class="bds-btn btn-weibo bds_tsina" data-cmd="tsina"></a>');
var $qzone = $('<a href="javascript:;" class="bds-btn btn-qzone bds_qzone" data-cmd="qzone"></a>');
var $wechat = $('<a href="javascript:;" class="bds-btn btn-wechat bds_weixin" data-cmd="weixin"></a>');

const shareList = []
shareList.push($weibo)
shareList.push($qzone)
shareList.push($wechat)
shareDOM.bind(shareList)

init()

module.exports = {
  weibo: function (options) {
    window._bd_share_config.common = options || window._bd_share_config.common;
    $weibo[0].click();
  },
  wechat: function (options) {
    window._bd_share_config.common = options || window._bd_share_config.common;
    $wechat[0].click();
  },
  qzone: function (options) {
    window._bd_share_config.common = options || window._bd_share_config.common;
    $qzone[0].click();
  }
};

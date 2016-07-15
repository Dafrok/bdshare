import $ from 'jquery'

var $body = $('body');
var $share = $('<div class="share-btn"></div>').css({display: 'none'});
var $shareGroup = $('<div class="share-icon-group bdsharebuttonbox"></div>');
var $weibo = $('<a href="javascript:;" class="bds-btn btn-weibo bds_tsina" data-cmd="tsina"></a>');
var $qzone = $('<a href="javascript:;" class="bds-btn btn-qzone bds_qzone" data-cmd="qzone"></a>');
var $wechat = $('<a href="javascript:;" class="bds-btn btn-wechat bds_weixin" data-cmd="weixin"></a>');

$shareGroup.appendTo($share)
  .append($weibo)
  .append($qzone)
  .append($wechat);

$share.appendTo($body);

window._bd_share_config = {
  common: {
      onBeforeClick: setShareData
  },
  share: [{
      bdSize: 0
  }]
};

document.getElementsByTagName('head')[0].appendChild(
  document.createElement('script')).src = 'http://bdimg.share.baidu.com/'
  + 'static/api/js/share.js?v=89860593.js?cdnversion='
  + ~(-new Date() / 36e5);

function setShareData(cmd, config) {
  config = window._bd_share_config.common;
  return config;
}

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

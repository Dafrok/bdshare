import loadBdshare from './vendor/bdshare.js'
export default function () {
  function setShareData(cmd, config) {
    config = window._bd_share_config.common
    return config
  }
  window._bd_share_config = {
    common: {
        onBeforeClick: setShareData
    },
    share: [{
        bdSize: 0
    }]
  }
  loadBdshare()
}

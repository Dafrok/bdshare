# bdshare
A shell of bdshare.

## Usage

```javascript
import share from 'share-js'

const dom = document.querySelector('a')

dom.onclick = function () {
  share.weibo({
    bdText: 'Share to weibo'
    bdUrl: 'http://your-web-site'
    bdPic: 'http://share-with-pictures'
  })
}
```

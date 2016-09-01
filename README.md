# bdshare
A shell of bdshare.

## Usage

```javascript
import share from 'bdshare'

const dom = document.querySelector('a')

dom.onclick = function () {
  share.tsina({
    bdText: 'Share to weibo',
    bdUrl: 'http://your-web-site',
    bdPic: 'http://share-with-pictures'
  })
}
```

## API

### bdshare.weibo

### bdshare.qzone

### bdshare.wechat

## Options

### bdText

### bdUrl

### bdPic

## Install
```
$ npm i bdshare
```

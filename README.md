# bdshare
A shell of bdshare.

## Install

```
$ npm i bdshare
```

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

## Options

- bdText 
- bdUrl
- bdPic

##  Share List

- qzone
- weixin
- tsina
- baidu
- renren
- tqq
- kaixin001
- tqf
- hi
- douban
- tsohu
- msn
- qq
- thx
- taobao
- tieba
- buzz
- sohu
- t163
- qy
- meilishuo
- mogujie
- diandian
- huaban
- leho
- share189
- duitang
- hx
- tfh
- fx
- tuita
- ff
- wealink
- youdao
- xg
- ty
- fbook
- twi
- ms
- deli
- s139
- s51
- zx
- linkedin

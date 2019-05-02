# hexo-tag-qrcode

![npm](https://img.shields.io/npm/v/hexo-tag-qrcode.svg)
![npm](https://img.shields.io/npm/dt/hexo-tag-qrcode.svg)
![npm](https://img.shields.io/npm/l/hexo-tag-qrcode.svg)

A [Hexo](https://hexo.io/) plugin that generates a qrcode image and inserts it into a post.

## Install

```bash
$ npm i hexo-tag-qrcode
```

## Usage

```
{% qrcode data [alt:text] [title:text] [class] %}
```

## Example

### Input

```
{% qrcode "hello, world" alt:"hello, world" title:"hello, world" hello world %}
```

### Output

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAAAAAAc6VLmAAAA6klEQVR42u3ZwQ6EIAxFUf7/p3GniaHlVZlMi7crDbHHBaEFWptHP+N6vY22NYGURepWmKlHo34WpHLSaJaYqU3JzIK0o6TOQqQPSKPUv5l7SFkkvz75AysrIVICSeg7hadF3TLSf6UejqefIdWQ1NmlrkGTVgapmuQ3rcLG1uxskIpIyo9E2ly5zCElldQWJXR2KmyAkbJKai5h1ZosU0iFJLkFFdcvuwgipZce3qnFz0mRKkmvz8LkSohUSApVpdB1C9KOUuiixH5F2kYSSpNymo5USApdncUv25AqSeo+129IhZNVpPTSAVWCHQugeNVrAAAAAElFTkSuQmCC" alt="hello, world" title="hello, world" class="hello world">
```

## license

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present jsweibo

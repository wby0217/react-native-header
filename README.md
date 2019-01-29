# app header

>

## install

```json
// package.json
"react-native-header": "git+https://gitlab.kosun.net/frontend/react-native-header.git#develop"

```
## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| backgroundImage | - | object | header背景图片|
| backgroundColor | #DF2214 | `string` | header背景颜色|
| headerLeft | - | `function` | 关闭或自定义左边返回按钮|
| headerBackTitle | - | `string` | 左边返回标题文字|
| navigation | - | object | 返回按钮点击后执行方法|
| headerTitle | 首页 | `string` | header标题文字|
| headerTintColor | #FFFFFF | `string` | header标题和左边返回标题文字颜色|
| headerHeight | isIos? 64 : 54 | number | header高度|
| headerCenter | - | `function` | header中间内容|
| headerRight | - | `function` | 右边按钮|

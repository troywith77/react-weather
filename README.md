# open weather using React

1. bug ?
```
{props.data.list.map(function(item) {
  return (<DayItem key={item.id} day={item} handleClick={props.handleClick.bind(null, item)} />)
})}
```
一直有错误提示：
```
index_bundle.js:9429 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ForecastUI`. See https://fb.me/react-warning-keys for more information.
```
明明我是照着官网的改了，key放在组件里，为什么还是报错。。。

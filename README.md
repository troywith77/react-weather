# open weather using React

- ### 使用React-Router里的browserHistory代替hashHistory之后，链接变干净了，但是还需要把index.html里的用html-webpack-plugin自动生成的index.html文件里的script引用路径改成这样

```
//插件生成的html里的路径
<script src="bundle.js"></script>
==>
//改成绝对引用，暂时是手动改的，没有用插件生成了，因为不知道怎么用插件把路径改成这样。。查了文档好像也没这个功能。。(⊙o⊙)
<script src="/bundle.js"></script>

```

- ### bug ?

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



改成这样之后解决了(⊙o⊙)
```
{props.data.list.map(function(item, id) {
  return (<DayItem key={id} day={item} handleClick={props.handleClick.bind(null, item)} />)
})}
```

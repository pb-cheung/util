#备注说明
@[blog]

##JavaScript一些方法
1. String.prototype.search(regexp)
执行查找，看该字符串对象与一个正则表达式是否匹配。
参数为正则表达式，匹配成功返回首次陪项的索引，匹配失败返回-1.

2. String.prototype.replace(regexp/substr,replacement)
字符串活正则，字符串
返回新的字符串，replacement替换了regexp匹配过得到的字符串

3. String.prototype.match(regexp)
正则表达式，
返回一哥包含匹配结果的数组，如果没有匹配项返回null

4. String.prototype.substr(start[,length])
返回字符串从指定位置开始的指定数量的字符
如果start为负值，则是从倒数开始。start=3被看作strlength - 3
首字符索引为0

5. Date.prototype.setTime(millisec)
参数是毫秒，从1970-1-1 00:00:00 UTC及时的毫秒数
返回Date对象

6. escape 被废弃，推荐使用encodeURI和encodeURIComponent,后者编码的字符更多



正则表达式
cookie相关的例子
```javascript
var reg = new RegExp('(?:^|;\\s*)' + name + '=([^;]*)');
```
?:	非捕获性分组，就是避免记录括号内的匹配结果
name开头、name前面有1个";"和0个或多个空格
cookie结尾没有分号，值不能包含分号



&amp; 是 & 的转义字符
[转义字符](http://tool.oschina.net/commons?type=2)



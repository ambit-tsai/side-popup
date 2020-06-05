# 侧边弹窗
侧边弹窗组件，基于 Bootstrap v3 的模态框


#### 安装
1. 使用NPM：`npm install -S side-popup`
1. 直接下载：<a href="dist/side-popup.min.js" target="_blank">压缩版</a>


#### 示例
用法 1
```html
<link href="path/to/bootstrap-v3.css" rel="stylesheet">
<script src="path/to/jquery.js" type="text/javascript"></script>
<script src="path/to/bootstrap-v3.js" type="text/javascript"></script>
<script src="path/to/side-popup.min.js" type="text/javascript"></script>
<script type="text/javascript">
    var popup = SidePopup.open({    // 打开一个侧弹窗
        attrs: {
            id: 'myPopup',
        },
        header: {
            title: '弹窗1',
        },
        body: {
            html: '<h1>Hello World</h1>',
        },
    });
    popup.openSubPopup({            // 打开一个子弹窗
        header: {
            title: '弹窗2',
        },
    });
    popup.closeSubPopup();          // 关闭子弹窗
    popup.close();                  // 关闭侧弹窗
</script>
```
用法 2
```javascript
SidePopup.open('#myPopup');         // 打开指定弹窗
SidePopup.close('#myPopup');        // 关闭指定弹窗
```


#### 构造函数
|参数|类型|说明|
|-|-|-|
|options|object|弹窗配置项|


#### 配置项说明
|名称|类型|默认值|说明|
|-|-|-|-|
|type|string|"right"|选择左右弹窗，可选："left"、"right"<br><small>*（子弹窗不适应）*</small>|
|backdrop|boolean|false|点击背景关闭弹窗<br><small>*（子弹窗不适应）*</small>|
|width|number/string||宽度。如：300、"100px"、"30%"|
|addedClass|string||附加的 CSS 类|
|attrs|object|{class: 'modal-dialog'}|配置弹窗元素的属性|
|afterRender|function||等待GUI渲染后执行|
|header|object|{...}|header 的配置项|
|*header*.show|boolean|true|是否显示 header|
|*header*.tag|string|"div"|HTML 标签|
|*header*.addedClass|string||附加的 CSS 类|
|*header*.showCloseBtn|boolean|true|是否显示关闭按钮|
|*header*.title|string||标题|
|*header*.html|string/Element/jQuery||附加的内容|
|*header*.attrs|object|{class: 'modal-header'}|配置 header 元素的属性|
|body|object|{...}|body 的配置项|
|*body*.show|boolean|true|是否显示 body|
|*body*.tag|string|"div"|HTML 标签|
|*body*.addedClass|string||附加的 CSS 类|
|*body*.html|string/Element/jQuery||附加的内容|
|*body*.attrs|object|{class: 'modal-body'}|配置 body 元素的属性|
|footer|object|{...}|footer 的配置项|
|*footer*.show|boolean|true|是否显示 footer|
|*footer*.tag|string|"div"|HTML 标签|
|*footer*.addedClass|string||附加的 CSS 类|
|*footer*.html|string/Element/jQuery||附加的内容|
|*footer*.attrs|object|{class: 'modal-footer'}|配置 footer 元素的属性|
|buttons|object[]|[{<br>&nbsp;&nbsp;html: '确定',<br>&nbsp;&nbsp;attrs: {<br>&nbsp;&nbsp;&nbsp;&nbsp;class: 'btn btn-primary',<br>&nbsp;&nbsp;&nbsp;&nbsp;type: 'button'<br>&nbsp;&nbsp;}<br>}]|footer 按钮的配置项|
|*buttons[i]*.addedClass|string||附加的 CSS 类|
|*buttons[i]*.html|string/Element/jQuery||附加的内容|
|*buttons[i]*.onClick|function||点击事件处理函数|
|*buttons[i]*.attrs|object||配置按钮元素的属性|

#### 静态方法
|方法|参数说明|方法说明|
|-|-|-|
|SidePopup `open`(object *options*)|配置项（同构造函数的参数）|初始化弹窗，并打开|
|SidePopup `open`(string *selector*)|jQuery 选择器|打开匹配选择器的弹窗|
|SidePopup `open`(Element *el*)|DOM 元素|打开指定弹窗|
|SidePopup `open`(jQuery *$el*)|jQuery 对象|打开指定弹窗|
|void `close`(string *selector*)|jQuery 选择器|关闭匹配选择器的弹窗|
|void `close`(Element *el*)|DOM 元素|关闭指定弹窗|
|void `close`(jQuery *$el*)|jQuery 对象|关闭指定弹窗|


#### 静态属性
|属性|类型|说明|
|-|-|-|
|id|string|标识|
|defaultOptions|object|默认配置项|


#### 实例方法
|方法|参数说明|方法说明|
|-|-|-|
|void `open`()||打开弹窗（将元素插入到 document 中）|
|void `close`()||关闭弹窗（将元素从 document 中移除）|
|void `show`()||显示弹窗|
|void `hide`()||隐藏弹窗|
|void `openSubPopup`(object *options*)|配置项（同构造函数的参数）|新开一个子弹窗|
|void `closeSubPopup`()||关闭当前子弹窗|

#### 实例属性
|属性|类型|说明|
|-|-|-|
|options|object|实例的配置项|
|element|jQuery|弹窗元素的jQuery对象|
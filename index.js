define(function(require,exports,module){
    var $ = require("lib/zepto"),
        util = require("util");
    function init(){
        console.log("index.js");
        getParam();
        setCookie();
        getCookie();
    }

    function getVersion(){
        var version = util.getWxVersion();
        $("#version").html(version);
    }
    function getParam(){
        var testUrl = "http://www.qq.com?name=bocai&sex=&city=shenzhen&age=18"
        var parameter = util.getParam("name",testUrl);
        $("#getParam").html("测试链接：" + testUrl + "<br>参数name的值为："+parameter);
    }
    function setCookie(){
        util.setCookie("keys","abc",1);
    }
    function getCookie(){
        var keys = util.getCookie("keys");
        $("#getcookie").html(keys);
    }

    init();

    module.exports = init;
});

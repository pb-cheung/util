define(function (require, exports, module) {

    var $ = require("lib/zepto");
    
    return{
        /**
         * 获取微信版本
         */
        getWxVersion: function () {
            var ua = navigator.userAgent;
            if (/MicroMessenger/.test(ua)) {
                return parseInt(ua.match(/MicroMessenger\/(.*)/i)[1], 10);
            } else {
                return 5;
            }
        },
        /**
         * 获取URL中的参数值
         * @param 变量名，必须
         * @param URL为空则取当前页面
         * @returns {*}
         */
        getParam: function (name, url) {
            var u = arguments[1] || window.location.search.replace("&amp;", "&"),
                reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
                r = u.substr(u.indexOf("\?") + 1).match(reg);
            return r != null ? r[2] : "";
        }
    };
});
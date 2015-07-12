define(function (require, exports, module) {

    var $ = require("lib/zepto");
    
    var obj = {
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
                result = u.substr(u.indexOf("\?") + 1).match(reg);
            return result != null ? result[2] : "";
        },
        /**
         * 获取cookie信息        
         * @method $.getCookie         
         * @param {String} name 获取的cookie的键值
         * @return {String} 获取的cookie值
        */
        getCookie: function(name){
            var reg = new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'),
                result = document.cookie.match(reg);
            return (result ? decodeURIComponent(result[1]) : "");
        }, 
        /**
         * 删除指定cookie
         * @param  {[type]} name   
         * @param  {[type]} path   
         * @param  {[type]} domain 
         */
        delCookie: function (name, path, domain) {
            var value = this.getCookie(name);
            if (value != null) {
                document.cookie = name + '=; expires=Mon, 2 Mar 2010 19:00:00 UTC; path=' + (path || '/') + '; domain=' + (domain || '') + ';';
            }
        },
        /**
         * 写入cookie
         * @param {[type]} name 
         * @param {[type]} value
         * @param Number expires 过期时间，单位是天
         * @param {[type]} path 
         * @param {[type]} domain
         * @param {[type]} secure
         */
        setCookie: function (name, value, expires, path, domain, secure) {
            var exp = new Date(),
                expires = arguments[2] || null,
                path = arguments[3] || "/",
                domain = arguments[4] || null,
                secure = arguments[5] || false;
            expires ? exp.setTime(exp.getTime() + expires * 24 * 3600 * 1000) : "";
            document.cookie = name + '=' + encodeURIComponent(value) + ( expires ? ';expires=' + exp.toGMTString() : '') + ( path ? ';path=' + path : '') + ( domain ? ';domain=' + domain : '') + ( secure ? ';secure' : '');
        }
    };
    module.exports = obj;
});
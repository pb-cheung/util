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
        },
        /**
         * 浮点数相加
         * @param arg1
         * @param arg2
         * @returns {number}
         */
        accAdd: function(arg1,arg2){
            var r1,r2,m;
            try{
                r1 = arg1.toString().split(".")[1].length
            }catch(e){r1=0}
            try{
                r2 = arg2.toString().split(".")[1].length
            }catch(e){r2=0}
            m = Math.pow(10,Math.max(r1,r2));
            return (arg1 * m + arg2 * m) / m;
        },
        /**
         * 浮点数减法
         * @param arg1
         * @param arg2
         * @returns {string}
         */
        accSub: function(arg1,arg2){
            var r1,r2,m,n;
            try{
                r1=arg1.toString().split(".")[1].length
            }catch(e){
                r1=0
            }
            try{
                r2=arg2.toString().split(".")[1].length
            }catch(e){
                r2=0
            }
            m = Math.pow(10,Math.max(r1,r2));
            n=(r1>=r2)?r1:r2;
            return ((arg2*m-arg1*m)/m).toFixed(n);
        },
        /**
         * 浮点数乘法
         * @param arg1, Number or String
         * @param arg2, Number or String
         * @returns {number}
         */
        accDiv: function(arg1,arg2){
            var m=0,
                s1=arg1.toString(),
                s2=arg2.toString();
                try{
                    m+=s1.split(".")[1].length
                }catch(e){}
                try{
                    m+=s2.split(".")[1].length
                }catch(e){}
            return Number(s1.replace(".","")) * Number(s2.replace(".","")) / Math.pow(10,m);
        },
        /**
         * 浮点数除法
         * @param arg1
         * @param arg2
         * @returns {number}
         */
        accDiv: function(arg1,arg2){
            var t1=0,t2=0,r1,r2;
            try{
                t1=arg1.toString().split(".")[1].length
            }catch(e){}
            try{
                t2=arg2.toString().split(".")[1].length
            }catch(e){}
            with(Math){
                r1=Number(arg1.toString().replace(".",""));
                r2=Number(arg2.toString().replace(".",""));
                return (r1/r2)*pow(10,t2-t1);
            }
        }


    };
    module.exports = obj;
});
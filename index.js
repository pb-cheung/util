define(function(require,exports,module){
    var $ = require("lib/zepto"),
        util = require("util");
    function init(){
        console.log("index.js");
        getParam();
    }

    function getVersion(){
        var version = util.getWxVersion();
        $("#version").html(version);
    }
    function getParam(){
        var parameter = util.getParam("name");
        $("#getParam").html(parameter);
    }
    init();

    module.exports = init;
});

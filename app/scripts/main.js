require.config({
    paths: {
    	/**
    	 * 根目录是app,因此在script加载bower_components组件要上级目录
    	 * @type {String}
    	 */
        jquery: '../bower_components/jquery/jquery',
        mod1:'mod1'
    }
});
require(['mod1','jquery'], function(mod,$) {
	console.log("www22ww");
	mod("beijing");
	document.write($);
  
});
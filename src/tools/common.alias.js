/**
 * Created by kingdee on 2016/6/14.
 */
import './prefixScript';
var CacheMiddleware = require( './CacheMiddleware');
var httpUtils = require( './httpUtils');
import Util from './Util';
import TextUtils from './TextUtils'

export const loadScript = (srcList, callback, callObj)=> {
	load();
	function load(){
		if(!srcList || srcList.length == 0){
			callback && callback.call(callObj);
			return;
		}
		var script = document.createElement('script');
		script.src = srcList.shift();
		document.body.appendChild(script);
		script.onreadystatechange = function () {
			if (script.readyState == 'complete') {
				load();
			}
		};
		script.onload = function () {
			load();
		}
	}
}


export {httpUtils}
export {CacheMiddleware}
export {Util}
export {TextUtils}

/**
 * Created by kingdee on 2016/6/16.
 */
var time = new Date().getTime();
setInterval(function(){
	var now = new Date().getTime();
	if(now - time > 3*1000){
		window.location.reload();
	}
	time = now;
},500);
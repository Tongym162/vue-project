 (function (window, undefined) {
/*
 * 埋点
 * @param {string} eid 客户号:如没有,可以规定为"_"
 * @param {string} rank 登陆用户ID, 如没有,可以规定为"_"
 * @param {string} type 类别，如"8444"
 *		移动端：2000-2999
 *		桌面端：3000-3999
 *		WEB端：4000-4999
 *		轻应用：8101-8200  8401-8500
 *		公共号: 5201-5500
 * @param {string} msg 说明消息
 * @param {string} cTime 耗时，如没有，可以规定为"0"
 */
var takenotes = {}
takenotes.take = function (eid, rank, type, msg, cTime) {
    // ver 版本:   版本号标识列需要带上应用标识, 约定为： 应用标识 + '_' + 版本号
    // 				示例：CLOUDPC_3.6.0
    //				补充说明：“应用标识” 需要用英文大写字母标识；
    //        		"版本号" 用数字标识，其中请不要带下划线。如没有,可以规定为”_”

    // var ver = 'CloudHubLight_crmlight';
    // var ver = 'CRM_crmlight';
    //
    // //http://applog.kdweibo.com/applog/rest/{eid}/{ver}/{用户}/{类别}/{消息}/{耗时}
    // var url = isKdWeibo()
    //     ? "//applog.kdweibo.com/applog/rest/" + eid + "/" + ver + "/" + rank + "/" + type + "/" + msg + "/" + cTime	//发送埋点数据或统计结果数据的测试ULR
    //     : "//172.20.192.11:8001/applog/rest/" + eid + "/" + ver + "/" + rank + "/" + type + "/" + msg + "/" + cTime;
    //
    // var img = new Image();
    //
    // img.onerror = img.onload = function () {
    //     //img.src = null;
    //     img.onerror = img.onload = null;
    // };
    //
    // img.src = url;
};
takenotes.takeWithVer = function (eid, ver, rank, type, msg, cTime) {
    // ver 版本:   版本号标识列需要带上应用标识, 约定为： 应用标识 + '_' + 版本号
    // 				示例：CLOUDPC_3.6.0
    //				补充说明：“应用标识” 需要用英文大写字母标识；
    //        		"版本号" 用数字标识，其中请不要带下划线。如没有,可以规定为”_”

    //http://applog.kdweibo.com/applog/rest/{eid}/{ver}/{用户}/{类别}/{消息}/{耗时}
    // var url = isKdWeibo()
    //     ? "http://applog.kdweibo.com/applog/rest/" + eid + "/" + ver + "/" + rank + "/" + type + "/" + msg + "/" + cTime	//发送埋点数据或统计结果数据的测试ULR
    //     : "http://172.20.192.11:8001/applog/rest/" + eid + "/" + ver + "/" + rank + "/" + type + "/" + msg + "/" + cTime;
    //
    // var img = new Image();
    //
    // img.onerror = img.onload = function () {
    //     //img.src = null;
    //     img.onerror = img.onload = null;
    // };
    //
    // img.src = url;
};

function isKdWeibo() {
    return /kdweibo\.com|yunzhijia\.com/g.test(window.location.href);
}



 window.takenotes = takenotes;
module.exports = takenotes;
 })(window);

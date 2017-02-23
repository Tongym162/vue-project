/**
 * Created by kingdee on 2016/3/23.
 */
var TextUtils = {};
/**
 * 格式化字符串
 * @example TextUtils.format("test:{0},test:{1}","foo","bar")
 *           return test:foo,test:bar";
 * @param format ..args
 * @returns {string|void|XML}
 */
TextUtils.format = function(format){
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};
/**
 * 格式化时间
 * @param date 时间(可以是date对象或者毫秒数的长整型
 * @param fmt  格式化的字符串 "yyyy-MM-dd hh:mm:ss" => 2000-01-01 08:00:00
 * @returns {*}
 */
TextUtils.formatDate = function (date, fmt) {
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    var week = {
        '0': '/u65e5',
        '1': '/u4e00',
        '2': '/u4e8c',
        '3': '/u4e09',
        '4': '/u56db',
        '5': '/u4e94',
        '6': '/u516d'
    }
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + ''])
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}
/**
 *
 * @param timestamp
 * @returns {string}
 */
TextUtils.getDay = function (timestamp) {
    var date = new Date(timestamp);
    return ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
};
/**
 * 替换字符串中的'<' '>' 符号,防止xss攻击
 * @param str
 * @returns {string|XML}
 */
TextUtils.xssReplace = function (str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#x2F;');
};
/**
 * 字符串过长,显示省略号
 * @param str
 * @param length
 * @param keepLength
 * @returns {*}
 */
TextUtils.fixLength = function(str,length,keepLength){
    if(str.length>length-keepLength){
        str = str.substr(0,length-keepLength)+"...";
    }
    return str;
};
module.exports = TextUtils;
export default {  //工具类
    //时间补0
    timeAddZero: function (time) {
        if (time < 10) {
            return '0' + time;
        } else {
            return '' + time;
        }
    },

    dateFormat: function (d, fmt) {
        if (d && fmt) {
            var year = d.getFullYear(),
                month = d.getMonth() < 9 ? '0' + parseInt(d.getMonth() + 1) : d.getMonth() + 1,
                day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
                hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
                minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
                second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
                dayArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            switch (fmt) {
                case 'yy-mm-dd h:m:s':
                    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
                    break;

                case 'yy-mm-dd h:m':
                    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
                    break;

                case 'yy-mm-dd':
                    return year + '-' + month + '-' + day;
                    break;

                case 'mm-dd h:m':
                    return month + '-' + day + ' ' + hour + ':' + minute;
                    break;

                case 'mm-dd':
                    return month + '-' + day;
                    break;

                case 'h:m':
                    return hour + ':' + minute;
                    break;

                case 'HH:mm MM/dd/yyyy':
                    return hour + ':' + minute + ' ' + month + '/' + day + '/' + year;
                    break;
                case 'mm-dd d':
                    return month + '月' + day + ' ' + dayArr[d.getDay()];
                    break;
            }
        }
    },

    getRequest: function () {  //截取URL键值对
        var url = window.location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    /**
     * 将url的参数转为对象
     * @param url
     * @returns {{}}
     */
    parseQueryString: function (url) {
        var regUrl = /\?([\w\W]+)$/,
            regPara = /([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
            arrUrl = regUrl.exec(url),
            ret = {};
        if (arrUrl && arrUrl[1]) {
            var strPara = arrUrl[1], result;
            while ((result = regPara.exec(strPara)) !== null) {
                ret[result[1]] = decodeURIComponent(result[2]);
            }
        }
        return ret;
    },

    isWx: function () {  //如果是微信
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },

    getOS: function () {  //获取操作系统平台，IOS或安卓
        var userAgent = navigator.userAgent;
        return userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            ? 'ios' : userAgent.match(/Android/i)
            ? 'android' : '';
    },
    getIOSVersion: function () {    //获取IOS版本
        var agent = navigator.userAgent.toLowerCase();
        var version;
        if (this.getOS() === 'ios') {
            var regStr_saf = /os [\d._]*/gi;
            var verinfo = agent.match(regStr_saf);
            if (verinfo.length >= 1) {
                version = (verinfo[0] + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
                version=version.split('.')[0];
            } else {
                version = 'undefined';
            }
        }
        return version;
    },
    checkBridgetVer: function (vStr) {
    var ua = navigator.userAgent,
        reg = /Qing\/([^;]+)/gi,
        match = reg.exec(ua);

    if (!match) return false;

    var versions = match[1].split('.');  //判断userAgent版本
    var vStrs = vStr.split('.');

    // 逐个判断当前版本号是否大于传入版本号
    for (var i = 0, len = versions.length; i < len; i++) {
        if (+versions[i] == +vStrs[i]) {
            continue;
        }

        return vStrs[i] ? +versions[i] > +vStrs[i] : true;
    }

    return false;
},
    // 判断是否桌面端
    isCloudhub: function () {
        var userAgent = navigator.userAgent;
        return /App\/cloudhub/.test(userAgent);
    },

    // 判断是否web端
    isWebClient: function () {
        return this.getOS() === '' && !this.isCloudhub();
    },

    getBytes: function (str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
                len += 2;
            } else {
                len++;
            }
        }
        return len;
    },

    //获取根路径（可含项目路径）
    getRootPath: function () {
        var href = window.location.href,            //完整路径
            pathName = window.location.pathname,    //主机后面的路径
            pos = href.indexOf(pathName),
            localhostPath = href.substring(0, pos); //主机路径
            //projectName = /\/[^\/]+\//.exec(pathName)[0];

       /* if (needProjectPath) {
            return (localhostPath + projectName);
        }*/

        return localhostPath;
    },


    //延时函数
    delay: function (t, callback) {
        return window.setTimeout(function () {
            callback();
        }, t);
    },

    //转义特殊字符<,>,",'
    escapeToHtmlEntity: function (str) {
        if (!str) {
            return '';
        }

        var escape = {
            '<': '&lt;',
            '>': '&gt;',
            '\"': '&quot;',
            '&': '&amp;'
        };

        return str.replace(/[&<>"]/g, function (match) {
            return escape[match] || match;
        });
    },

    //转义特殊字符<,>,",'
    unEscapeToHtmlEntity: function (str) {
        if (!str) {
            return '';
        }

        str = str.replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '\"')
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/<br>/g, '\n');

        return str;
    },

    /*
     * 函数节流
     * @param {function} method 要进行节流的函数
     * @param {number} delay 延时时间(ms)
     * @param {number} duration 经过duration时间(ms)必须执行函数method
     */
    throttle: function (method, delay, duration) {
        var timer = null,
            begin = null;
        return function () {
            var context = this,
                args = arguments,
                current = new Date();
            if (!begin) {
                begin = current;
            }
            if (timer) {
                window.clearTimeout(timer);
            }
            if (duration && current - begin >= duration) {
                method.apply(context, args);
                begin = null;
            } else {
                timer = window.setTimeout(function () {
                    method.apply(context, args);
                    begin = null;
                }, delay);
            }
        };
    },


    animationEnd: function (el, cb, remove) {
        var eventType = whichAnimationEvent(el);

        el.addEventListener(eventType, handler, false);

        function handler() {
            if (remove !== false) {
                el.removeEventListener(eventType, handler, false);
            }

            var args = [].slice.call(arguments);
            cb.apply(null, args);
        }

        function whichAnimationEvent(el) {
            var animations = {
                'animation': 'animationend',
                'OAnimation': 'oAnimationEnd',
                'MozAnimation': 'animationend',
                'WebkitAnimation': 'webkitAnimationEnd'
            }

            for (var a in animations) {
                if (el.style[a] !== undefined) {
                    return animations[a];
                }
            }
        }
    },

    // 换行替换
    interceptContent: function (content) {
        return !content ? '' : content.replace(/\n|\r/g, '<br>').replace(/\s/g, '&nbsp;');
    }


};



/*** 时间格式化相关 ***/
/*
 var format = function(formatStr) {
 var year, month, date, hour, minute, second, day,
 reg, rule, afterFormat;

 if (!formatStr) {
 return this.getTime();
 }

 year = this.getFullYear();
 month = this.getMonth() + 1;
 date = this.getDate();
 hour = this.getHours();
 minute = this.getMinutes();
 second = this.getSeconds();
 day = this.getDay();

 var dayObj = {
 '0': '日',
 '1': '一',
 '2': '二',
 '3': '三',
 '4': '四',
 '5': '五',
 '6': '六'
 };

 rule = {
 'yy': year - 2000,
 'yyyy': year,
 'M': month,
 'MM': util.timeAddZero(month),
 'd': date,
 'dd': util.timeAddZero(date),
 'h': hour,
 'hh': util.timeAddZero(hour),
 'm': minute,
 'mm': util.timeAddZero(minute),
 's': second,
 'ss': util.timeAddZero(second),
 'w': '星期' + dayObj[day]
 };

 reg = /y{2,4}|M{1,2}|d{1,2}|h{1,2}|m{1,2}|s{1,2}|w/g;

 afterFormat = formatStr.replace(reg, function($) {
 if ($ in rule) {
 return rule[$];
 } else {
 return $;
 }
 });

 return afterFormat;

 };
 Date.prototype.format = format;
 */


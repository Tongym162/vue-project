/**
 * Created by kingdee on 2016/6/14.
 */
const SAVED_NAME = "crmlight-vue";

export const getSavedData = (type, url, data)=> {
	try {
		var savedData = localStorage.getItem("SAVED_NAME");
		if (savedData && savedData.length > 0) {
			savedData = JSON.parse(savedData);
			var param = data.toString();
			if (data instanceof Object) {
				param = JSON.stringify(data);
			} else {
				param = data.toString()
			}
			return getData(savedData, [type, url, param]);
		}
	} catch (e) {

	}
	return null;
}
export const saveData = (type, url, data, result) => {
	try {
		var savedData = localStorage.getItem("SAVED_NAME");
		if (savedData && savedData.length > 0) {
			savedData = JSON.parse(savedData);
		}
	} catch (e) {
		savedData = {};
	}

	var param = data.toString();
	if (data instanceof Object) {
		param = JSON.stringify(data);
	} else {
		param = data.toString()
	}
	setData(savedData, [type, url, param], result);
	localStorage && localStorage.setItem("SAVED_NAME", JSON.stringify(savedData));
}
var getData = (data, keyList)=> {
	var list = keyList;
	var item = data;
	var key = list.shift();
	while (item && item[key]) {
		item = item[key];

		if (list.length > 0) {
			key = list.shift();
		} else {
			return item;
		}
	}
	return null;
}
var setData = (data, keyList, value) => {
	var list = keyList
	var item = data;
	while (list.length > 1) {
		var key = list.shift();
		if (!item.hasOwnProperty(key)) {
			item[key] = {};
		}
		item = item[key];
	}
	item[list.shift()] = value;
}
export const cookie = {
	//expires传过期月数
	set: function (name, value, expires, path, domain, secure) {
		var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		if (!expires) {
			expires = 12;	//默认一年过期
		}
		var today = new Date();
		expires *= 2592000000;
		var expires_date = new Date(today.getTime() + expires);
		cookieText += '; expires=' + expires_date.toGMTString();

		if (path) {
			cookieText += '; path=' + path;
		}

		if (domain) {
			cookieText += '; domain=' + domain;
		}

		if (secure) {
			cookieText += '; secure';
		}

		document.cookie = cookieText;

		return this;
	},

	get: function (name) {
		var reg = new RegExp(name + '\=([^;=]+)');
		var match = reg.exec(document.cookie);

		return match ? match[1] : '';
	},

	remove: function (name, path, domain, secure) {
		this.set(name, '', new Date(0), path, domain, secure);

		return this;
	}
}
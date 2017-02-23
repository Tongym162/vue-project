/**
 * Created by kingdee on 2016/6/16.
 */
const SAVE_LABEL = "crmlight-";
export const saveState = (name, state) => {
	if (sessionStorage) {
		try {
			sessionStorage.setItem(SAVE_LABEL + name + common.httpUtils.cookie.get('key'), JSON.stringify(state));
		}catch(e){}
	}
}
export const getState = (name) => {
	if (sessionStorage) {
		try {
			return JSON.parse(sessionStorage.getItem(SAVE_LABEL + name + common.httpUtils.cookie.get('key')));
		} catch (e) {
		}
	}
	return null;
}
export const createCacheMiddleware = (name)=> {
	return {
		onInit (state) {
			// 记录初始 state
		},
		onMutation (mutation, state) {
			// 每个 mutation 后会被调用
			// mutation 参数的格式为 { type, payload }
			saveState(name, state);
		}
	}
}
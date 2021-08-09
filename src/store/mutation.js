export default {
	selectCity (state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo. cityId;

    try {
    	localStorage.cityInfo = JSON.stringify(state);   //将将 JavaScript对象转换为字符串，存到cityInfo里面
    } catch (e) {}
	},

	selectField (state, field) {     //选择分类
		state.field = field;

		try {
			localStorage.cityInfo = JSON.stringify(state);   //如果不存在就会报错， try一下避免报错，catch不抛出异常
		} catch (e) {}
	}
}
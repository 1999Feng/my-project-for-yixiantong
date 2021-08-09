let cityInfo = {
	cityId: '0',
	cityName: '全部',
	field: 'all'       //所有的分类
}

try {
	if (localStorage.cityInfo) {    //如果存在的话  就将JSON数据取出来并将其变为JS对象形式
		cityInfo = JSON.parse(localStorage.cityInfo);
	}
} catch (e) {};   //配合try， 实际上不捕获：try一下避免报错，catch不抛出异常

export default cityInfo;
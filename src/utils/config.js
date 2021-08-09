const BASE_URL = 'http://study.jsplusplus.com/Yixiantong/';  //ajax请求最基本的url配置

const API = {  //配置API
	GET_HOME_DATAS: BASE_URL + 'getHomeDatas',
	GET_LIST_DATAS: BASE_URL + 'getListDatas',
	GET_DETAIL: BASE_URL + 'getDetail',
	SEARCH_ACTION: BASE_URL + 'searchAction'
}

export default {
	API    //导出对象，有利于3-8拓展其他配置
}
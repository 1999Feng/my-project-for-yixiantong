import axios from 'axios';
import qs from 'qs';   //需要用qs依赖下的 stringify方法将data转化成 'id=1&text=test' 的格式

class HTTP {     //封装axios 的post方法
	axiosPost (options) {
		axios({
      url: options.url,
      method: 'post',
      header: {
      	'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
		}).then((res) => {
			options.success(res.data);
		}).catch((err) => {
			options.error(err);
		});
	}
}

export { HTTP };   //导出对象
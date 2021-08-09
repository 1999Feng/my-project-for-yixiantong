import { HTTP } from 'utils/http';
import config from 'utils/config';

class IndexModel extends HTTP {
  getHomeDatas (cityId) {
  	return new Promise((resolve, reject) => {   //在外界要使用到AJAX的数据，所以异步一下
      this.axiosPost({
        url: config.API.GET_HOME_DATAS,
        data: {
        	cityId
        },
        success (data) {
          resolve({
          	data,
          	status: 0     //成功的时候 状态为0
          });
        },
        error (error) {
          resolve({
            error,
          	status: -1
          });
        }
      });
  	});
  }
}

export { IndexModel };
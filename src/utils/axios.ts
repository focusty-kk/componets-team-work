import axios, { AxiosInstance } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

type ajaxType = 'get' | 'post' | 'put' | 'request' | 'delete' | 'head' | 'patch'
export default class ajax {
  static get(url: string, options: any) {
    return new Promise((resolve, reject) => {
      axios.get(url, options).then((res:any) => {
        resolve(res.data);
      }, (res:any) => {
        reject(res);
      });
    });
  }

  static post(url: string, options: any) {
    return new Promise((resolve, reject) => {
      axios.post(url, options).then((res:any) => {
        resolve(res.data);
      }, (res:any) => {
        reject(res);
      });
    });
  }

  static put(url: string, options: any) {
    return new Promise((resolve, reject) => {
      axios.put(url, options).then((res:any) => {
        resolve(res.data);
      }, (res:any) => {
        reject(res);
      });
    });
  }

  static delete(url: string, options: any) {
    return new Promise((resolve, reject) => {
      axios.delete(url, options).then((res:any) => {
        resolve(res.data);
      }, (res:any) => {
        reject(res);
      });
    });
  }
}

// export default axios;

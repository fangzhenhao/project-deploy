import http from "../http.ts";

// 给别的组件引用
const testGet = async () => {
  return await http.get('/test/get').then(res => res.data);
}

export default testGet;
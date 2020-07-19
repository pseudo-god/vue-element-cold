import request from '../request';

export function Rhome(params) {
  return request({
    url: `/home`,
    method: 'get',
    params
  });
}

//获取首页数据
export function Rstatistics(params) {
  return request({
    url: `/home/statistics`,
    method: 'get',
    params
  });
}



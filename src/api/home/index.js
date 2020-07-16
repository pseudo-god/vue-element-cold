import request from '../request';

// 	域列表
export function Rhome(params) {
  return request({
    url: `/home`,
    method: 'get',
    params
  });
}

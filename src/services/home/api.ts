import { request } from 'umi';

export function login(data: API.TloginParams) {
  return request<any>('/api/auth/login/', {
    method: 'post',
    data,
  });
}

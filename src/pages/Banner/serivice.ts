import { request } from 'umi';

export async function getBanners(params?: any) {
  return request('/banner', {
    params,
  });
}
import { request } from './request';

export const login = (data) => request('users', 'post', data);

export const create = (data) => request('public/user', 'post', data);

export const update= (data) => request('users', 'post', data);


import request from 'utils/request';

export const getPopUpList = () =>
  request({
    url: '/api_ec_api/spu/popUpList',
    method: 'get',
  })

export const getUserRank = (params) =>
  request({
    url: '/api_ec_api/spu/userRank',
    method: 'get',
    params
  })


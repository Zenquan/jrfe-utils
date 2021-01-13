import request from 'utils/request';
import datalist from './datalist.json';
import details from './details.json';

const isMaster = false
let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:7001/sso'
} else {
  baseUrl = '//' + document.domain + '/api/sso'
}

export const getSpuList = (params) => datalist.data;
  // request({
  //   url: '/api_ec/ec_api/spu-list-activity',
  //   method: 'get',
  //   params
  // })

export const getActivityById = (params) =>
  request({
    url: '/api_ec/ec_api/saleRule/getActivityBySaleRuleId',
    method: 'get',
    params
  })

// 判断能否领取优惠券
export const judgeCanGainCoupon = (params) =>
  request({
    url: '/api_ec/ec_api/coupon/judgeCouponGain',
    method: 'get',
    params
  })

// post query api
export const getCouponById = (data) =>
  request({
    url: '/api_ec/ec_api/coupon/couponGain',
    method: 'post',
    params: data
  })

export const checkAuth = (params) =>
  request({
    url: `${baseUrl}/check`,
    method: 'get',
    params
  })

export const passPort = (params) =>
  request({
    url: `${baseUrl}/passport`,
    method: 'get',
    params
  })

export const detail = (params) => details.data;
  // request({
  //   url: `/api_ec/ec_api/spu/detail`,
  //   method: 'get',
  //   params
  // })
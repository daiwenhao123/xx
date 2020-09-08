import {request} from './request.js'
export function getcategory() {
  return request({
    url:"/category"
  })
}

export function getcategoryInfo(maitKey) {
  return request({
    url:"/subcategory",
    params:{
      maitKey
    }
  })
}
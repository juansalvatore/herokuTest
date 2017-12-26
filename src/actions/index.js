export const FETCH_USER = 'FETCH_USER'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const REDEEM_NOW = 'REDEEM_NOW'
import _ from 'lodash'
import axios from 'axios'

export function fetchUser() {
  const request = axios.get('https://aerolab-challenge.now.sh/user/me', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0',
    },
  })

  return {
    type: FETCH_USER,
    payload: request,
  }
}

export function fetchProducts() {
  const request = axios.get('https://aerolab-challenge.now.sh/products', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0',
    },
  })

  return {
    type: FETCH_PRODUCTS,
    payload: request,
  }
}

export function redeemNow(productId) {
  const request = axios.post(
    'https://aerolab-challenge.now.sh/redeem',
    {
      productId: productId,
    },
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0',
      },
    }
  )

  return {
    type: REDEEM_NOW,
    payload: request,
  }
}

export function addPoints() {
  var request = new XMLHttpRequest()

  request.open('POST', 'https://aerolab-challenge.now.sh/user/points')

  request.setRequestHeader('Content-Type', 'application/json')
  request.setRequestHeader('Accept', 'application/json')
  request.setRequestHeader(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0'
  )

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log('Status:', this.status)
      console.log('Headers:', this.getAllResponseHeaders())
      console.log('Body:', this.responseText)
    }
  }

  var body = {
    amount: 1000,
  }

  request.send(JSON.stringify(body))
  return {
    type: 'ADD_POINTS',
    payload: request,
  }
}

'use strict'

const config = require('../config.js')

const store = require('../store.js')

const retrieveAllBooks = function (data) {
  return $.ajax({

    url:config.apiUrl + '/books',

    method: 'GET',

    data: data

  })
}

module.exports = {
  retrieveAllBooks
}

'use strict'

const api = require('./api.js')


const onRetrievAllBooks = function(event) {
    event.preventDefault()

    api.retrieveAllBooks()
      .then(retrieveAllBooksSuccess)
      .catch(retrieveAllBooksFail)
}

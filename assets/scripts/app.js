'use strict'

const bookEvents = require('./books/events')

$(() => {
    $('#get-data').on('click', bookEvents.onShowButton)
})

#! /usr/bin/env node

const args = require('get-them-args')()

const generateID = require('./index')

console.log(generateID(args))

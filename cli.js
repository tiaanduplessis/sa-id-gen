#! /usr/bin/env node

const args = require('get-them-args')()
const clipboardy = require('clipboardy')

const generateID = require('./index')

const newID = generateID(args)

clipboardy.writeSync(newID)

console.log(`
New ID generated:

🆔   ${newID}

The ID has been copied to your clipboard. 📋
`)

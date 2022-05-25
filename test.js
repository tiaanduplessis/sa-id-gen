/* eslint-env jest */

const validSouthAfricanId = require('valid-south-african-id')

const generateID = require('./index')

test('should export a function', () => {
  expect(typeof generateID).toBe('function')
})

test('should generate ID based on configuration', () => {
  const id = generateID({
    year: '93',
    month: '01',
    day: '21',
    sequence: '908',
    gender: 'male',
    citizenship: 'citizen'
  })
  expect(id).toBe('9301215908081')
})

test('should be a valid ID', () => {
  const ids = [generateID(), generateID(), generateID(), generateID(), generateID(), generateID()]
  ids.forEach(id => {
    expect(validSouthAfricanId(id)).toBeTruthy()
  })
})

const mod10 = require('mod10-check-digit')

const A = '8' // https://www.westerncape.gov.za/general-publication/decoding-your-south-african-id-number-0

function getRandomNumberStr (min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min // https://stackoverflow.com/a/1527820
  return num.toString().padStart(max.toString().length, '0')
}

function generateID (opts = {}) {
  const {
    year = getRandomNumberStr(1, 99),
    month = getRandomNumberStr(1, 12),
    day = getRandomNumberStr(1, 30),
    sequence = getRandomNumberStr(1, 999),
    gender = getRandomNumberStr(0, 1) === '1' ? 'male' : 'female',
    citizenship = getRandomNumberStr(0, 1) === '1' ? 'citizen' : 'resident'
  } = opts
  const citizenshipCode = citizenship.toString().toUpperCase() === 'CITIZEN' ? 0 : 1
  const genderCode = gender.toString().toUpperCase() === 'MALE' ? 5 : 4
  const withoutCheckDigit = `${year}${month}${day}${genderCode}${sequence}${citizenshipCode}${A}`

  return `${withoutCheckDigit}${mod10(withoutCheckDigit)}`
}

module.exports = generateID

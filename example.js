const generateID = require('./index')

console.log(generateID({
  year: '93', // Last two digits of year
  month: '01',
  day: '21',
  sequence: '908', // 000 - 999
  gender: 'male', // 'male' or 'female'
  citizenship: 'citizen' // 'citizen' or 'resident'
})) // ''9301215908081'

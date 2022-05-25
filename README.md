
# sa-id-gen
[![package version](https://img.shields.io/npm/v/sa-id-gen.svg?style=flat-square)](https://npmjs.org/package/sa-id-gen)
[![package downloads](https://img.shields.io/npm/dm/sa-id-gen.svg?style=flat-square)](https://npmjs.org/package/sa-id-gen)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/sa-id-gen.svg?style=flat-square)](https://npmjs.org/package/sa-id-gen)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Generate fake South African ID

## Table of Contents

- [sa-id-gen](#sa-id-gen)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)

## About

Generates a random fake South African. Can be configured when needed. Based on [generate-sa-idnumbers](https://github.com/Chris927/generate-sa-idnumbers).

## Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install sa-id-gen
```

With `yarn`:
```sh
yarn add sa-id-gen
```

With `pnpm`:
```sh
pnpm add sa-id-gen
```

## Usage

```js
const generateID = require('sa-id-gen')

console.log(generateID({
  year: '93', // Last two digits of year
  month: '01',
  day: '21',
  sequence: '908', // 000 - 999
  gender: 'male', // 'male' or 'female'
  citizenship: 'citizen' // 'citizen' or 'resident'
})) // ''9301215908081'

```

Using the CLI:

```sh
$ sa-id-gen

New ID generated:

🆔   9309165206083

The ID has been copied to your clipboard. 📋
```

Can also be configured

```sh
$ sa-id-gen --gender=female
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3.Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    
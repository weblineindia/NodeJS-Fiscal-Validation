# Fiscal-validation

A NodeJS component used for Fiscal validation and its property value. 

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Want to Contribute?](#want-to-contribute)
- [Need Help / Support?](#need-help)
- [Collection of Other Components](#collection-of-components)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)
- [Keywords](#keywords)

## Getting started

Install the npm package:

``` bash
npm install nodejs-weblineindia-fiscal-validation
#OR
yarn add nodejs-weblineindia-fiscal-validation
```
## Features

- This component checks whether fiscal code is valid or not.
- It also checks fiscal code property value if it valid or not.
- Below Property value must be used as argument:
    - firstname
    - lastname
    - dob
    - gender
    - placeofbirth

## Usage

Use `fiscalValidation` function to validate fiscal code and its property value:

```js
const fiscal = require('nodejs-weblineindia-fiscal-validation')
OR
import fiscal from 'nodejs-weblineindia-fiscal-validation'
```

Validate only Fiscal code 
```js
//check fiscal code
let isfiscalvalid = false
isfiscalvalid = fiscal.fiscalValidation('LSTFST94H15F205V') // true
isfiscalvalid = fiscal.fiscalValidation('LSTFST94H15F205F') // false
isfiscalvalid = fiscal.fiscalValidation('') // false
```

Validate Firstname
```js
//check Firstname
let isfirstnamevalid = false
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','firstname','fname') // true
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','firstname','name') // false
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','firstname','') // false
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z','firstname','name') // false
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','fname','name') // false
isfirstnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','','fname') // false
```

Validate Lastname
```js
//check Lastname
let islastnamevalid = false
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','lastname','lname') // true
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','lastname','fllname') // false
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','lastname','') // false
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z','lastname','fllname') // false
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','lname','fllname') // false
islastnamevalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','','lname') // false
```

Validate Date of Birth
```js
//check Date of birth
let isdobvalid = false
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','dob','1992-01-05') // true
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','dob','1993-01-05') // false
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','dob','') // false
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z','dob','1993-01-05') // false
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z','dateofbirth','1993-01-05') // false
isdobvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','','1992-01-05') // false
```

Validate Gender
```js
//check Gender
let isgendervalid = false
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','gender','M') // true
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','gender','F') // false
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','gender','') // false
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z1','gender','F') // false
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','gen','F') // false
isgendervalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','','M') // false
```

Validate Place of birth
```js
//check Place of birth
let isplaceofbirthvalid = false
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','placeofbirth','ROMANIA') // true
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','placeofbirth','ROMA') // false
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','placeofbirth','') // false
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z','placeofbirth','ROMANIA') // false
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z1','placeofbirth','ROMA') // false
isplaceofbirthvalid = fiscal.fiscalValidation('LNMFNM92A05Z129B','','ROMANIA') // false
```

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this NodeJS Fiscal validation component in their software project. In case you want to customize this Fiscal validation component to suit your development needs, then feel free to contact our [NodeJS developers](https://www.weblineindia.com/hire-node-js-developer.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

nodejs-weblineindia-fiscal-validation is inspired by [@marketto/codice-fiscale-utils](https://www.npmjs.com/package/@marketto/codice-fiscale-utils).

## License

[MIT](LICENSE)

[mit]: https://github.com/miguelmota/is-valid-domain/blob/e48e90f3ecd55431bbdba950eea013c2072d2fac/LICENSE

## Keywords

 nodejs-weblineindia-fiscal-validation, nodejs-fiscal-validation, fiscal-validation, fiscal, nodejs, node-component, nodecomponent, node
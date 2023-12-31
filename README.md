# API chaining weather giphy

#### makes two API calls, one to get weather and then uses weather to query pif display

#### By Christopher Davila

## Technologies Used

* _webpack_
* _npm_
* _html_
* _javascript_
* _API_
* _file loader_
* _css loader_
* _dotenv key file loader_


## Description

## Setup/Installation Requirements

* _1. Clone file from repository _
* _2. Add .env file to project for secure storage, make sure not to push .env file repository (see step 4)_
* _3. Sign up for account with free key at Open Weather API and Giphy, to get access to personal API Key_
* _4. Add .env to .gitignore file and make sure to commit .gitignore with all necesary files, before any other commit like the snippet below_
```js
  node_modules/
  .DS_Store
  dist/
  coverage/
  .env
```
* _5. Save your API key in .env file like so...:
```js
  API_KEY = ${YOUR API KEY GOES HERE}
``` 
...where you fill in your personalized api key in place of the curly brackets embedded expression_
* _6. In order to use .env filem make sure to install with `$ npm install dotenv-webpack@2.0.0 --save-dev`_
* _7. Install all packages with `$ npm install`._
* _8. Build the project webpack with `$ npm run build`_
* _9. Start a development server using `$ npm run start` and view the created project page in your browser_
* _10. Fill in the inputs according to instructions with the necessary country code and desired US Dollar amount your wish to exchange values for, then click "See results" button for resposne to query_
* _11. If unsure of any country code necessary for desired country query, use the link to IBAN page provided above submission input underlined in blue for reference_
* _12. Repeat steps 10 and 11 for different querys and results _ 


## Known Bugs

* _error handling codes are specified to specific error responses which will print error.message from response but all URL mistakes will give 404 stutus code instead of ie more specified 401 for unauthorized key_
* _no limit set for highest input for USD so impossibly high values can be input but will still recieve response_
* _to redirect to currency exchanger from IBAN page, have to go back to previous page with browser or reload_

## Acknowledments
* _link made to https://www.iban.com/currency-codes for IBAN's list of currency codes_

## License
[MIT](https://github.com/ChrisRDavila/currency_exchanger/blob/main/LICENSE.txt)

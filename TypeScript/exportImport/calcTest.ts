//import multi,{add, browserName, substract, url} from './calcUtil'
import multi,{add, browserName, substract, url} from './calcUtil'

console.log(add(23, 34))
console.log(multi(2, 34))
console.log(substract(204, 34))

console.log(browserName)
console.log(url)

let browser = require('./calcUtil')
console.log(browser.browserName)

//reference https://www.typescriptlang.org/docs/handbook/modules.html
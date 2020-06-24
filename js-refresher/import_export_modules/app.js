const { default: person } = require("./person")

// importing both person.js
// and utility.js
import person from './person.js'
// since we are importing defalt funtion 
// so we can rename import as well
import prs from './person.js'

import { baseData } from './utility.js'
import { clean } from './utility.js'

// and to import all 
import * as bundled from './utility.js'

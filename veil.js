// Veil
//
// Copyright 2011 Iris Couch
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var defaultable = require('defaultable')
defaultable.def(module,
  { 'keys'   : null
  , 'dates'  : false
  , 'numbers': false
  , 'breaks' : /\r?\n/
  , 'newline': "\n"
  , 'join'   : true
  , 'header_re': /^(.*?): +(.*)$/
  }, function(module, exports, DEFS, require) {

exports.parse = parse

var assert = require('assert')

function parse(message) {
  assert.equal(typeof message, 'string', 'Must provide message as a string')

  var result = message.split(DEFS.breaks).reduce(line, {})
  if(DEFS.join)
    result.body = result.body.join(DEFS.newline)
  return result
}

function line(message, line) {
  if('body' in message)
    body(message, line)
  else if(line.length === 0)
    message.body = []
  else
    header(message, line)

  return message
}

function body(message, line) {
  message.body.push(line)
}

function header(message, line) {
  var match = line.match(DEFS.header_re)
  if(!match || typeof match[1] != 'string' || typeof match[2] != 'string')
    throw new Error('Bad header line: ' + JSON.stringify(line))

  message[match[1]] = match[2]
}

}) // defaultable

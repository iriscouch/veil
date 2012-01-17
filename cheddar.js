// Cheddar
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
  { 'keys': null
  , 'dates': false
  , 'numbers': false
  , 'breaks' : /\r?\n/
  }, function(module, exports, DEFS, require) {

exports.parse = parse

var assert = require('assert')

function parse(message, opts) {
  if(typeof opts != 'object' || Array.isArray(opts))
    opts = {}
  opts = defaultable.merge(opts, DEFS)
}

}) // defaultable

au-bn-validator
===============

A small npm package that validates Australian Business Number (ABN), Australian Company Number (ACN) & Australian Registered Body Number (ARBN).

## Installation

As module,

  `npm install au-bn-validator`

As command line program,

  `npm install -g au-bn-validator`

## Usage

    var validator = require('au-bn-validato');

    console.log(validator.validateABN('83 914 571 673'));	// true
    console.log(validator.validateABN('83914571673'));		// true
    console.log(validator.validateACN('010 499 966'));		// true
    console.log(validator.validateARBN('00 00'));			// false
  

License
-------

The MIT License (MIT)

Copyright (c) 2016 iiWebi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
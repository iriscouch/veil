# Cheddar: Convert email or HTTP messages to Javascript objects

Cheddar turns this

    Subject: Hello, Cheddar!
    Date: Tue Jan 17 2012 09:06:59 GMT+0700 (ICT)
    From: jhs@iriscouch.com

    Hello, Cheddar. Welcome to the party.

into this.

```javascript
{ Date: Tue, 17 Jan 2012 02:06:59 GMT,
  From: 'jhs@iriscouch.com',
  Subject: 'Hello, Cheddar!',
  body: 'Hello, Cheddar. Welcome to the party.' }
```

You can use it, for example, to edit [blog posts][blog] in a useful Markdown style but load them as Javascript objects.

Cheddar is available as an NPM module.

    $ npm install cheddar

Follow (upper-case *F*) comes from an internal Iris Couch project used in production for over a year. It works in the browser (beta) and is available as an NPM module.

    $ npm install follow

## Example

```javascript
var cheddar = require('cheddar')

var message = 'Date: Tue, 17 Jan 2012 02:11:48 GMT\n'
            + 'Subject: This is the example\n'
            + '\n'
            + 'This is the body'

message = cheddar.parse(message)
console.dir(message)
```

Output:

    { Date: Tue, 17 Jan 2012 02:11:48 GMT,
      Subject: 'This is the example'
      body: 'This is the body' }

## Options

Cheddar is [defaultable][defaultable]. Customize its major behaviors by setting its default options:

```javascript
// Stock behavior
var cheddar = require('cheddar')

// Modified behavior, with inheritance.
var better_cheddar = cheddar.defaults({ keys: 'underscore' })
  , best_cheddar = better_cheddar.defaults({ dates: true
                                           , numbers: true
                                           })
```

<a name="api"></a>
## API Overview

Cheddar has one function:

`parse(message, [options])` | Return an object representing the message, with optional extra options.

<a name="options"></a>
## Options

The options to *parse()* are the same as those for `.defaults()`.

* `keys` | If this is `"underscore"`, convert keys like `"Content-Type"` to `"content_type"`
* `dates` | Enable this to convert timestamp values into `Date` objects
* `numbers` | Enable this to convert numeric values to `Number`s

## Tests

Cheddar uses [node-tap][tap]. If you clone this Git repository, tap is included.

    $ ./node_modules/.bin/tap test
    XXX

    ok

## License

Apache 2.0

[tap]: https://github.com/isaacs/node-tap
[blog]: https://github.com/jhs/jason.io/tree/master/posts/
[defaultable]: https://github.com/iriscouch/defaultable

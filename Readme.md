# bloggy-rss

> RSS plugin for bloggy, a small and lightweight blog engine for node.js.

## Quickstart

That's everything you need. Just set the rss settings in the engine setup and call the `engine.extendWith()` function of the bloggy engine.

```Javascript
var engine = require('bloggy')(),
    bloggyRss = require('bloggy-rss');

// Ensure, that you set the necessary rss options
engine.setup({
    baseDirectory: ...,
    entryUrl: ...,
    rss: {
        baseUrl: 'http://mspi.es',
        feedUrl: 'http://mspi.es/feed',
        faviconUrl: 'http://mspi.es/favicon.ico',
        title: 'Developers Diary - Marcell Spies',
        description: 'Über .NET, node.js, JavaScript und Co.',
        author: 'Marcell Spies',
        copyright: '© Marcell Spies',
        language: 'de',
        ttl: 30
    },
    ...
});

// Register the plugin
engine.extendWith(bloggyRss);

engine.getRssXml(function(rss) {
    // Do something with the rss content
});

```

## Engine functions

The engine now contains these additional functions.

**Get the rss content**

```Javascript
engine.getRssXml(function(rss) {
    console.log(rss);
});
```

License
-------

The MIT License (MIT)

Copyright (c) 2014 Marcell Spies

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
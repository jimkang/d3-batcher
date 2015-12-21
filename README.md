d3-batcher
==================

Organizes rendering specs into batches that can efficiently be rendered by d3-selection.

Installation
------------

    npm install d3-batcher

Usage
-----

    var Batcher = require('d3-batcher');
    var d3Selection = require('d3-selection');

    var batcher = Batcher({
      d3Selection: d3Selection
    });

    batcher.addSpecs([
      {
        tag: 'rect',
        id: 'pipe-body',
        attr: {
          x: 10,
          y: 10,
          width: 200,
          height: 80,
          fill: 'hsla(0, 0%, 0%, 0.5)'
        },
        class: 'pipe'
      },
      {
        tag: 'rect',
        id: 'pipe-cap-A',
        attr: {
          x: 0,
          y: 0,
          width: 20,
          height: 100,
          fill: 'hsla(0, 0%, 0%, 0.5)'
        },
        class: 'pipe'
      },
      {
        tag: 'rect',
        id: 'pipe-cap-B',
        attr: {
          x: 200,
          y: 0,
          width: 20,
          height: 100,
          fill: 'hsla(0, 0%, 0%, 0.5)'
        },
        class: 'pipe'
      },
      {
        tag: 'path',
        id: 'pipe-hightlight',
        attr: {
          d: 'M 0 0 C 50 0 50 100 100 100',
          fill: 'white'
        },
        class: 'pipe-hightlight'
      }
    ]);

    batcher.addSpecs([
      {
        tag: 'path',
        id: 'vertical-squiggle',
        attr: {
          d: 'M 0 0 C 0 50 100 50 100 100 C 100 75 300 75 300 50 C 300 125 500 125 500 200',
          fill: 'yellow'
        },
        class: 'lightning-rod'
      },
      {
        tag: 'rect',
        id: 'antenna',
        attr: {
          x: 100,
          y: 0,
          width: 10,
          height: 100,
          fill: 'hsla(0, 0%, 0%, 0.5)'
        },
        class: 'lightning-rod'
      }
    ]);

    batcher.renderBatches();

`renderBatches` will then render (enter/update/exit) all of the `rect`s together and all of the `path`s together, even though they were added in separate calls.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

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

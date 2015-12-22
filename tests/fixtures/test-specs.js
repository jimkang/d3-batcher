var Immutable = require('immutable');

var specs = [
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
    id: 'pipe-highlight',
    attr: {
      d: 'M 0 0 C 50 0 50 100 100 100',
      fill: 'white'
    },
    class: 'pipe-highlight'
  },


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
];

var dict = {};

specs.forEach(addToDict);

function addToDict(spec) {
  dict[spec.id] = spec;
}

module.exports = Immutable.Map(dict);

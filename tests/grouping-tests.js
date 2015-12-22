var test = require('tape');
var Batcher = require('../index');
var testSpecs = require('./fixtures/test-specs.js');

var testCases = [
  {
    specGroups: [
      [
        testSpecs.get('pipe-body'),
        testSpecs.get('pipe-cap-A'),
        testSpecs.get('pipe-highlight'),
        testSpecs.get('pipe-cap-B')
      ],
      [
        testSpecs.get('vertical-squiggle'),
        testSpecs.get('antenna')
      ]
    ],
    expected: {
      rect: [
        testSpecs.get('pipe-body'),
        testSpecs.get('pipe-cap-A'),
        testSpecs.get('pipe-cap-B'),
        testSpecs.get('antenna') 
      ],
      path: [
        testSpecs.get('pipe-highlight'),
        testSpecs.get('vertical-squiggle')
      ]
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Group correctly', function groupTest(t) {
    var batcher = Batcher({
      d3Selection: {}
    });

    testCase.specGroups.forEach(batcher.addSpecs);
    var batches = batcher.getBatches();
    t.equal(
      Object.keys(batches).length,
      Object.keys(testCase.expected).length,
      'The number of batches is correct.'
    );

    for (var tag in testCase.expected) {
      t.deepEqual(
        batches[tag], testCase.expected[tag], `Batch for ${tag} is correct.`
      );
    }
    // t.deepEqual(batches, testCase.expected, 'Batches are correct.');
    t.end();
  });
}

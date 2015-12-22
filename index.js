var compact = require('lodash.compact');

function Batcher(createOpts) {
  var specsByIdByTag = new Map();

  function addSpecs(specs) {
    compact(specs).forEach(addSpec);
  }

  function addSpec(spec) {
    if (!spec.tag) {
      throw new TypeError('Tag in spec is missing.');
    }
    if (!spec.id) {
      throw new TypeError('Id in spec is missing.');
    }

    var specsById = specsByIdByTag.get(spec.tag);
    if (!specsById) {
      specsById = new Map();
      specsByIdByTag.set(spec.tag, specsById);
    }
    specsById.set(spec.id, spec);
  }

  function getBatches() {
    var batches = {};
    for (var [tag, specsById] of specsByIdByTag.entries()) {
      batches[tag] = [...specsById.values()];
    }
    return batches;
  }

  function clear() {
    specsByIdByTag.clear();
  }

  return {
    addSpecs: addSpecs,
    getBatches: getBatches,
    clear: clear
  };
}

module.exports = Batcher;

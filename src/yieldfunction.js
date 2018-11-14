let testYield = function* testYield(handler) {
   return yield handler();
}

exports.testYield = testYield;

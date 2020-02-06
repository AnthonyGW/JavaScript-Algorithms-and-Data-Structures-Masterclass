
const { performance } = require('perf_hooks');

const timeElapsed = function (cb, param) {
  let t1, t2;
  t1 = performance.now();
  cb(param);
  t2 = performance.now();
  return((t2 - t1) / 1000);
}

module.exports = timeElapsed;

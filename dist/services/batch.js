'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _TaskQueue = require('./TaskQueue');

var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var limitConcurrency = function limitConcurrency(con) {
  if (!con) {
    return _constants.BATCH_CONCURRENCY;
  }
  if (typeof con !== 'number' || con < 1) {
    return 1;
  }
  if (con > _constants.BATCH_CONCURRENCY) {
    return _constants.BATCH_CONCURRENCY;
  }
  return con;
};

var delay = exports.delay = function delay(ms) {
  return new _promise2.default(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

exports.default = function (concurrency) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(records, resolver, params) {
      var sizes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var queue, batchResults, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queue = new _TaskQueue2.default(limitConcurrency(concurrency));
              batchResults = [];
              result = void 0;
              _context2.next = 5;
              return new _promise2.default(function (resolve, reject) {
                if (!records || records.length === 0) {
                  resolve(batchResults);
                }

                var completed = 0;
                var increment = function increment() {
                  completed += 1;
                  if (completed === records.length) {
                    resolve(batchResults);
                  }
                };

                records.forEach(function (record, i) {
                  var task = function () {
                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                      var _args, parent, argName, context, size, args;

                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;

                              // Resolver signature is (parent, args, context)
                              parent = params.parent, argName = params.argName, context = params.context;
                              size = sizes ? sizes[i] : null; // Upload size for photos

                              args = (_args = {}, (0, _defineProperty3.default)(_args, argName, record), (0, _defineProperty3.default)(_args, 'size', size), _args);
                              _context.next = 6;
                              return resolver(parent, args, context);

                            case 6:
                              result = _context.sent;

                              if (result) {
                                batchResults.push(result);
                              }
                              increment();
                              _context.next = 16;
                              break;

                            case 11:
                              _context.prev = 11;
                              _context.t0 = _context['catch'](0);

                              increment();
                              queue.empty();
                              // reject here to stop the batch on a general error
                              reject(Error('Batch upload failed: ' + _context.t0.message));

                            case 16:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, undefined, [[0, 11]]);
                    }));

                    return function task() {
                      return _ref2.apply(this, arguments);
                    };
                  }();
                  queue.pushTask(task);
                });
              });

            case 5:
              return _context2.abrupt('return', batchResults);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
};
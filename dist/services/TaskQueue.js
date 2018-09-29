"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskQueue = function () {
  function TaskQueue() {
    var concurrency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    (0, _classCallCheck3.default)(this, TaskQueue);

    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  (0, _createClass3.default)(TaskQueue, [{
    key: "pushTask",
    value: function pushTask(task) {
      this.queue.push(task);
      this.next();
    }
  }, {
    key: "next",
    value: function next() {
      var _this = this;

      while (this.running < this.concurrency && this.queue.length) {
        var task = this.queue.shift();
        // task(() => {
        task().then(function () {
          _this.running -= 1;
          _this.next();
        });
        this.running += 1;
      }
    }
  }, {
    key: "empty",
    value: function empty() {
      this.queue = [];
    }
  }]);
  return TaskQueue;
}();

exports.default = TaskQueue;
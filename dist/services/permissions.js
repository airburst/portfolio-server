'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResolver = function createResolver(resolver) {
  var baseResolver = resolver;
  baseResolver.createResolver = function (childResolver) {
    var newResolver = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, context, info) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return resolver(parent, args, context, info);

              case 2:
                return _context.abrupt('return', childResolver(parent, args, context, info));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function newResolver(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();
    return createResolver(newResolver);
  };
  return baseResolver;
};

// requiresAuth
exports.default = createResolver(function (parent, args, _ref2) {
  var user = _ref2.user;

  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
});

// export const requiresTeamAccess = createResolver(
//   async (parent, { channelId }, { user, models },
//   ) => {
//     if (!user || !user.id) {
//       throw new Error('Not authenticated');
//     }
//     // check if part of the team
//     const channel = await models.Channel.findOne({ where: { id: channelId } });
//     const member = await models.Member.findOne({
//       where: { teamId: channel.teamId, userId: user.id },
//     });
//     if (!member) {
//       throw new Error("You have to be a member of the team to subcribe to it's messages");
//     }
//   },
// );

// export const directMessageSubscription = createResolver(
//   async (parent, { teamId, userId }, { user, models },
//   ) => {
//     if (!user || !user.id) {
//       throw new Error('Not authenticated');
//     }

//     const members = await models.Member.findAll({
//       where: {
//         teamId,
//         [models.sequelize.Op.or]: [{ userId }, { userId: user.id }],
//       },
//     });

//     if (members.length !== 2) {
//       throw new Error('Something went wrong');
//     }
//   },
// );
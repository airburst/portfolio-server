'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _apolloServerExpress = require('apollo-server-express');

var _graphqlPlaygroundMiddlewareExpress = require('graphql-playground-middleware-express');

var _graphqlPlaygroundMiddlewareExpress2 = _interopRequireDefault(_graphqlPlaygroundMiddlewareExpress);

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _seedUser = require('./models/seedUser');

var _seedUser2 = _interopRequireDefault(_seedUser);

var _auth = require('./services/auth');

var _package = require('../package.json');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// eslint-disable-next-line prefer-destructuring
var SECRET = process.env.SECRET;
var SECRET2 = process.env.REFRESH_SECRET;
var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)((0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './schema')));
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)((0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './resolvers')));
var schema = (0, _apolloServerExpress.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

var server = new _apolloServerExpress.ApolloServer({
  schema: schema,
  // TODO: Get auth context
  //  subscriptions: {
  //   onConnect: (connectionParams, webSocket) => {
  //     if (connectionParams) {
  //       console.log('TCL: connectionParams', connectionParams);
  //       // return validateToken(connectionParams.authToken)
  //       //   .then(findUser(connectionParams.authToken))
  //       //   .then(user => ({
  //       //     currentUser: user,
  //       //   }));

  //       // onConnect: async ({ token, refreshToken }, webSocket) => {
  //       //   if (token && refreshToken) {
  //       //     try {
  //       //       const { user } = jwt.verify(token, SECRET);
  //       //       return { models, user };
  //       //     } catch (err) {
  //       //       const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET2);
  //       //       return { models, user: newTokens.user };
  //       //     }
  //       //   }

  //       //   return { models };
  //       // },


  //       return { user: 1 };
  //     }

  //     throw new Error('Missing auth token!');
  //   },
  // },
  // Need to use connection context for subscriptions
  context: function context(_ref) {
    var req = _ref.req,
        connection = _ref.connection;

    if (connection) {
      console.log('TCL: connection context', connection.context);
      // connection.context.x-token
      return {};
    }
    return {
      models: _models2.default,
      user: req.user,
      SECRET: SECRET,
      SECRET2: SECRET2
    };
  }
});

var graphqlEndpoint = '/graphql';
var port = process.env.PORT || 3001;
var subscriptionsEndpoint = 'ws://localhost:' + port + server.subscriptionsPath;
var app = (0, _express2.default)();
var corsOptions = { origin: '*' };

var addUser = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var token, _jwt$verify, user, refreshToken, newTokens;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers['x-token'];

            if (!token) {
              _context.next = 15;
              break;
            }

            _context.prev = 2;
            _jwt$verify = _jsonwebtoken2.default.verify(token, SECRET), user = _jwt$verify.user;

            req.user = user;
            _context.next = 15;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](2);
            refreshToken = req.headers['x-refresh-token'];
            _context.next = 12;
            return (0, _auth.refreshTokens)(token, refreshToken, _models2.default, SECRET, SECRET2);

          case 12:
            newTokens = _context.sent;

            if (newTokens.token && newTokens.refreshToken) {
              res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
              res.set('x-token', newTokens.token);
              res.set('x-refresh-token', newTokens.refreshToken);
            }
            req.user = newTokens.user;

          case 15:
            next();

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 7]]);
  }));

  return function addUser(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

app.use(addUser);
app.use(_bodyParser2.default.json({ limit: '4mb' }));
app.use((0, _cors2.default)(corsOptions));
app.use((0, _compression2.default)());
app.use('/playground', (0, _graphqlPlaygroundMiddlewareExpress2.default)({
  endpoint: graphqlEndpoint,
  subscriptionsEndpoint: subscriptionsEndpoint
}));
app.use('/photos', _express2.default.static(_path2.default.join(__dirname, '../', _constants.PHOTOS_FOLDER)));

server.applyMiddleware({ app: app });

// Set up subscriptions
var httpServer = _http2.default.createServer(app);
server.installSubscriptionHandlers(httpServer);

process.on('SIGINT', function () {
  process.exit(0);
});

// Start the socket and graphQl servers
httpServer.listen({ port: port }, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _models2.default.sequelize.sync();

        case 2:
          _context2.next = 4;
          return (0, _seedUser2.default)();

        case 4:
          console.info('\uD83D\uDE80 Portfolio API version ' + _package.version + ' ready');
          console.info('\uD83D\uDE80 Subscriptions ready at ' + subscriptionsEndpoint);

        case 6:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));
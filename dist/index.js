(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("apollo-server"), require("apollo-server-express"), require("bcrypt"), require("body-parser"), require("compression"), require("cors"), require("dotenv"), require("exif"), require("express"), require("file-system"), require("graphql-playground-middleware-express"), require("graphql-subscriptions"), require("image-size"), require("jsonwebtoken"), require("merge-graphql-schemas"), require("mkdirp"), require("path"), require("progress-stream"), require("rimraf"), require("sequelize"), require("sharp"));
	else if(typeof define === 'function' && define.amd)
		define("migration-data-model", ["apollo-server", "apollo-server-express", "bcrypt", "body-parser", "compression", "cors", "dotenv", "exif", "express", "file-system", "graphql-playground-middleware-express", "graphql-subscriptions", "image-size", "jsonwebtoken", "merge-graphql-schemas", "mkdirp", "path", "progress-stream", "rimraf", "sequelize", "sharp"], factory);
	else if(typeof exports === 'object')
		exports["migration-data-model"] = factory(require("apollo-server"), require("apollo-server-express"), require("bcrypt"), require("body-parser"), require("compression"), require("cors"), require("dotenv"), require("exif"), require("express"), require("file-system"), require("graphql-playground-middleware-express"), require("graphql-subscriptions"), require("image-size"), require("jsonwebtoken"), require("merge-graphql-schemas"), require("mkdirp"), require("path"), require("progress-stream"), require("rimraf"), require("sequelize"), require("sharp"));
	else
		root["migration-data-model"] = factory(root["apollo-server"], root["apollo-server-express"], root["bcrypt"], root["body-parser"], root["compression"], root["cors"], root["dotenv"], root["exif"], root["express"], root["file-system"], root["graphql-playground-middleware-express"], root["graphql-subscriptions"], root["image-size"], root["jsonwebtoken"], root["merge-graphql-schemas"], root["mkdirp"], root["path"], root["progress-stream"], root["rimraf"], root["sequelize"], root["sharp"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_apollo_server__, __WEBPACK_EXTERNAL_MODULE_apollo_server_express__, __WEBPACK_EXTERNAL_MODULE_bcrypt__, __WEBPACK_EXTERNAL_MODULE_body_parser__, __WEBPACK_EXTERNAL_MODULE_compression__, __WEBPACK_EXTERNAL_MODULE_cors__, __WEBPACK_EXTERNAL_MODULE_dotenv__, __WEBPACK_EXTERNAL_MODULE_exif__, __WEBPACK_EXTERNAL_MODULE_express__, __WEBPACK_EXTERNAL_MODULE_file_system__, __WEBPACK_EXTERNAL_MODULE_graphql_playground_middleware_express__, __WEBPACK_EXTERNAL_MODULE_graphql_subscriptions__, __WEBPACK_EXTERNAL_MODULE_image_size__, __WEBPACK_EXTERNAL_MODULE_jsonwebtoken__, __WEBPACK_EXTERNAL_MODULE_merge_graphql_schemas__, __WEBPACK_EXTERNAL_MODULE_mkdirp__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_progress_stream__, __WEBPACK_EXTERNAL_MODULE_rimraf__, __WEBPACK_EXTERNAL_MODULE_sequelize__, __WEBPACK_EXTERNAL_MODULE_sharp__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, scripts, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"portfolio-server","version":"1.0.9","main":"src/index.js","scripts":{"dev":"nodemon --exec babel-node src/index.js","start":"babel-node src/index.js","build-babel":"NODE_ENV=production && rimraf dist && babel src -d dist","build":"NODE_ENV=production && rimraf dist && webpack --mode production --config webpack.config.js","build-dev":"NODE_ENV=development && rimraf dist && webpack --mode development --config webpack.config.js","serve":"node dist/index.js","prod":"npm run build && npm run serve","test":"jest","clear":"rm -rf uploads/* && rm -rf photos/*"},"author":"Mark Fairhurst","license":"ISC","dependencies":{"apollo-server":"^2.1.0","apollo-server-express":"^2.1.0","babel-preset-env":"^1.7.0","bcrypt":"^3.0.1","body-parser":"^1.18.3","compression":"^1.7.3","cors":"^2.8.4","dotenv":"^6.0.0","exif":"^0.6.0","express":"^4.16.3","file-system":"^2.2.2","graphql":"^14.0.2","graphql-playground-middleware-express":"^1.7.3","graphql-subscriptions":"^1.0.0","graphql-tools":"^4.0.0","image-size":"^0.6.3","jsonwebtoken":"^8.3.0","merge-graphql-schemas":"^1.5.7","mkdirp":"^0.5.1","path":"^0.12.7","pg":"^7.4.3","progress-stream":"^2.0.0","rimraf":"^2.6.2","sequelize":"^4.39.0","sharp":"^0.20.8","uuid":"^3.3.2"},"devDependencies":{"babel-cli":"^6.26.0","babel-jest":"^23.6.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-runtime":"^6.26.0","copyfiles":"^2.1.0","eslint":"^5.6.1","eslint-config-airbnb-base":"^13.1.0","eslint-plugin-import":"^2.14.0","jest":"^23.6.0","nodemon":"^1.18.4","webpack":"^4.20.2","webpack-cli":"^3.1.2"}};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: UPLOAD_FOLDER, PHOTOS_FOLDER, SALT_ROUNDS, ALBUM, PHOTO, SIZES, COVER_SIZE, THUMBNAIL_SIZE, BATCH_CONCURRENCY, DELIM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FOLDER", function() { return UPLOAD_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOS_FOLDER", function() { return PHOTOS_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SALT_ROUNDS", function() { return SALT_ROUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBUM", function() { return ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO", function() { return PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COVER_SIZE", function() { return COVER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUMBNAIL_SIZE", function() { return THUMBNAIL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BATCH_CONCURRENCY", function() { return BATCH_CONCURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELIM", function() { return DELIM; });
const UPLOAD_FOLDER = 'uploads';
const PHOTOS_FOLDER = 'photos';
const SALT_ROUNDS = 10;
const ALBUM = 'album';
const PHOTO = 'photo';

// Responsive resizing
// Number = width
// Object = { width, height }
const SIZES = [
  'original',
  2560,
  1440,
  960,
  700,
  360,
  { longestEdge: 150 },
];
const COVER_SIZE = 5; // item in SIZES array
const THUMBNAIL_SIZE = 6; // item in SIZES array
const BATCH_CONCURRENCY = 5;
const DELIM = '__';


/***/ }),

/***/ "./src/formatErrors.js":
/*!*****************************!*\
  !*** ./src/formatErrors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(error => ({
      path: error.path,
      type: error.type,
      message: error.message,
    }));
  }
  return [{ path: 'name', message: 'something went wrong' }];
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-playground-middleware-express */ "graphql-playground-middleware-express");
/* harmony import */ var graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! merge-graphql-schemas */ "merge-graphql-schemas");
/* harmony import */ var merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models */ "./src/models/index.js");
/* harmony import */ var _models_seedUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/seedUser */ "./src/models/seedUser.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth */ "./src/services/auth.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schema */ "./src/schema/index.js");



















dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();

// eslint-disable-next-line prefer-destructuring
const SECRET = process.env.SECRET;
const SECRET2 = process.env.REFRESH_SECRET;
const wsUri = process.env.SERVER_WS || 'ws://localhost';
const port = process.env.PORT || 3001;

const typeDefs = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_10__["mergeTypes"])(_schema__WEBPACK_IMPORTED_MODULE_17__["default"]);
const resolvers = Object(merge_graphql_schemas__WEBPACK_IMPORTED_MODULE_10__["mergeResolvers"])(_resolvers__WEBPACK_IMPORTED_MODULE_16__["default"]);
const schema = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["makeExecutableSchema"])({
  typeDefs,
  resolvers,
});

const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_8__["ApolloServer"]({
  schema,
  // TODO: Get auth context
  //  subscriptions: {
  //   onConnect: (connectionParams, webSocket) => {
  //     if (connectionParams) {
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
  context: ({ req, connection }) => {
    if (connection) {
      // connection.context.x-token
      return {};
    }
    return {
      models: _models__WEBPACK_IMPORTED_MODULE_11__["default"],
      user: req.user,
      SECRET,
      SECRET2,
    };
  },
});

const graphqlEndpoint = '/graphql';
const subscriptionsEndpoint = `${wsUri}:${port}${server.subscriptionsPath}`;
const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
const corsOptions = { origin: '*' };

const addUser = async (req, res, next) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      const { user } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(token, SECRET);
      req.user = user;
    } catch (err) {
      const refreshToken = req.headers['x-refresh-token'];
      const newTokens = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_13__["refreshTokens"])(token, refreshToken, _models__WEBPACK_IMPORTED_MODULE_11__["default"], SECRET, SECRET2);
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
        res.set('x-token', newTokens.token);
        res.set('x-refresh-token', newTokens.refreshToken);
      }
      req.user = newTokens.user;
    }
  }
  next();
};

app.use(addUser);
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json({ limit: '4mb' }));
app.use(cors__WEBPACK_IMPORTED_MODULE_5___default()(corsOptions));
app.use(compression__WEBPACK_IMPORTED_MODULE_6___default()());
app.use('/playground', graphql_playground_middleware_express__WEBPACK_IMPORTED_MODULE_9___default()({
  endpoint: graphqlEndpoint,
  subscriptionsEndpoint,
}));
app.use('/photos', express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../', _constants__WEBPACK_IMPORTED_MODULE_15__["PHOTOS_FOLDER"])));

server.applyMiddleware({ app });

// Set up subscriptions
const httpServer = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(app);
server.installSubscriptionHandlers(httpServer);

process.on('SIGINT', () => {
  process.exit(0);
});

// Start the socket and graphQl servers
httpServer.listen({ port }, async () => {
  await _models__WEBPACK_IMPORTED_MODULE_11__["default"].sequelize.sync();
  await Object(_models_seedUser__WEBPACK_IMPORTED_MODULE_12__["default"])();
  console.info(`🚀 Portfolio API version ${_package_json__WEBPACK_IMPORTED_MODULE_14__["version"]} ready`);
  console.info(`🚀 Subscriptions ready at ${subscriptionsEndpoint}`);
});

/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/models/Album.js":
/*!*****************************!*\
  !*** ./src/models/Album.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequelize */ "./src/models/sequelize.js");



const Album = _sequelize__WEBPACK_IMPORTED_MODULE_1__["default"].define('albums', {
  id: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
    allowNull: false,
  },
  slug: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
  description: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.TEXT,
  cover: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
  coverId: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  isPublic: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  views: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bin: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  indexes: [
    {
      name: 'i_album_name',
      unique: true,
      fields: ['name'],
    },
  ],
});


/* harmony default export */ __webpack_exports__["default"] = (Album);


/***/ }),

/***/ "./src/models/Photo.js":
/*!*****************************!*\
  !*** ./src/models/Photo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequelize */ "./src/models/sequelize.js");



const Photo = _sequelize__WEBPACK_IMPORTED_MODULE_1__["default"].define('photos', {
  id: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
    allowNull: false,
  },
  urls: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.JSON,
    allowNull: false,
  },
  thumbnail: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
    allowNull: false,
  },
  title: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
  caption: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.STRING,
  width: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
    allowNull: false,
  },
  height: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
    allowNull: false,
  },
  exposure: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  shutter: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  aperture: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  iso: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  focalLength: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.INTEGER,
  dateTaken: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.DATE,
  isPublic: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  bin: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0___default.a.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
},
{
  indexes: [
    {
      name: 'i_photo_name',
      unique: true,
      fields: ['name'],
    },
    {
      name: 'i_photo_title',
      unique: true,
      fields: ['title'],
    },
  ],
});

/* harmony default export */ __webpack_exports__["default"] = (Photo);


/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! exports provided: findByLogin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByLogin", function() { return findByLogin; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sequelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequelize */ "./src/models/sequelize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");






// export const compareHash = (password, hashed) => bcrypt.compareSync(password, hashed);

dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();

const { Op } = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a;

const User = _sequelize__WEBPACK_IMPORTED_MODULE_3__["default"].define('users', {
  id: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  blocked: sequelize__WEBPACK_IMPORTED_MODULE_2___default.a.BOOLEAN,
});

// Hash password before committing to db
User.beforeCreate((u) => {
  u.password = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(u.password, _constants__WEBPACK_IMPORTED_MODULE_4__["SALT_ROUNDS"]);
});

const findByLogin = async (login) => {
  let user = await User.findOne({
    where: { username: login },
  });

  if (!user) {
    user = await User.findOne({
      where: { email: login },
    });
  }

  return user;
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequelize */ "./src/models/sequelize.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/models/User.js");
/* harmony import */ var _Photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Photo */ "./src/models/Photo.js");
/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Album */ "./src/models/Album.js");





// Associations
_Photo__WEBPACK_IMPORTED_MODULE_2__["default"].belongsTo(_User__WEBPACK_IMPORTED_MODULE_1__["default"]);
_Album__WEBPACK_IMPORTED_MODULE_3__["default"].belongsTo(_User__WEBPACK_IMPORTED_MODULE_1__["default"]);
_Photo__WEBPACK_IMPORTED_MODULE_2__["default"].belongsToMany(_Album__WEBPACK_IMPORTED_MODULE_3__["default"], { through: 'album_photos' });
_Album__WEBPACK_IMPORTED_MODULE_3__["default"].belongsToMany(_Photo__WEBPACK_IMPORTED_MODULE_2__["default"], { through: 'album_photos', onDelete: 'CASCADE' });
/**
 * Provides the following accessor methods:
 * Album.getPhotos
 * Album.setPhotos
 * Album.addPhoto(s)
 * Album.removePhoto(s)  .. and likelwise for Photos.getAlbums, etc.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  User: _User__WEBPACK_IMPORTED_MODULE_1__["default"],
  findByLogin: _User__WEBPACK_IMPORTED_MODULE_1__["findByLogin"],
  Photo: _Photo__WEBPACK_IMPORTED_MODULE_2__["default"],
  Album: _Album__WEBPACK_IMPORTED_MODULE_3__["default"],
  sequelize: _sequelize__WEBPACK_IMPORTED_MODULE_0__["default"],
});

// TODO: add indexes for sort and search cols


/***/ }),

/***/ "./src/models/seedUser.js":
/*!********************************!*\
  !*** ./src/models/seedUser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/models/index.js");


const { User } = _index__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (async () => {
  // Create default user
  const username = process.env.USERNAME || 'test';
  const email = process.env.EMAIL || 'test@test.com';
  const password = process.env.PASSWORD || 'password';

  const found = await User.findOne({ where: { email } });

  if (!found) {
    await User.create({
      username, email, password, isAdmin: true,
    });
  }
});


/***/ }),

/***/ "./src/models/sequelize.js":
/*!*********************************!*\
  !*** ./src/models/sequelize.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);



dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();

/* harmony default export */ __webpack_exports__["default"] = (new sequelize__WEBPACK_IMPORTED_MODULE_1___default.a(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
));


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! exports provided: default, UPLOAD_STARTED, UPLOAD_PROGRESS, emitUploadStarted, emitUploadProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_STARTED", function() { return UPLOAD_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PROGRESS", function() { return UPLOAD_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitUploadStarted", function() { return emitUploadStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitUploadProgress", function() { return emitUploadProgress; });
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);


const pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["PubSub"]();
/* harmony default export */ __webpack_exports__["default"] = (pubsub);

const UPLOAD_STARTED = 'UPLOAD_STARTED';
const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

const emitUploadStarted = filename =>
  pubsub.publish(UPLOAD_STARTED, {
    uploadStarted: filename,
  });

const emitUploadProgress = (filename, percentage) =>
  pubsub.publish(UPLOAD_PROGRESS, {
    uploadProgress: { filename, percentage },
  });


/***/ }),

/***/ "./src/resolvers/albums.js":
/*!*********************************!*\
  !*** ./src/resolvers/albums.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/permissions */ "./src/services/permissions.js");
/* harmony import */ var _formatErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatErrors */ "./src/formatErrors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





const { Op } = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;

const AlbumsResolver = {
  Query: {
    allAlbums: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      (parent, { id }, { models, user }) => {
        const filter = id
          ? {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: false },
              id: { [Op.eq]: id },
            },
          }
          : {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: false },
            },
          };
        return models.Album.findAll({
          where: filter,
          include: [{ model: models.Photo, as: 'photos' }],
          order: [['name']],
        })
          .then(result => ({
            data: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ data: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) }));
      },
    ),

    // NOTE: Hard-coded user id
    getPublicAlbums: (parent, args, { models, userId = 1 }) =>
      models.Album.findAll({
        where: {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            isPublic: { [Op.eq]: true },
            bin: { [Op.eq]: false },
            cover: { [Op.ne]: null },
          },
        },
        include: [{ model: models.Photo, as: 'photos' }],
        order: [['createdAt', 'DESC']],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) })),

    getAlbum: (parent, { albumId }, { models }) =>
      models.Album.findOne({
        where: {
          [Op.and]: {
            id: { [Op.eq]: albumId },
            isPublic: { [Op.eq]: true },
            bin: { [Op.eq]: false },
          },
        },
        include: [{ model: models.Photo, as: 'photos' }],
      })
        .then(result => ({
          data: result.dataValues,
          errors: null,
        }))
        .catch(err => ({ data: null, errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) })),
  },

  Mutation: {
    addAlbum: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { album }, { models, user }) => {
        const { id, ...details } = album;
        return !!models.Album.create({ ...details, userId: user.id });
      },
    ),

    updateAlbum: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { album }, { models }) => {
        const { id, ...details } = album;
        return !!models.Album.update({ ...details }, { where: { id } });
      },
    ),

    addPhotosToAlbum: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { albumId, photoIds }, { models }) => {
        try {
          const album = await models.Album.findById(albumId);
          if (!album) { return false; }

          // Set first photo as default album cover if none set
          if (!album.dataValues.cover) {
            const firstPhoto = await models.Photo.findById(photoIds[0]);
            // Set cover photo id and url
            const cover = firstPhoto.dataValues.urls[_constants__WEBPACK_IMPORTED_MODULE_3__["COVER_SIZE"]];
            const coverId = firstPhoto.dataValues.id;
            await models.Album.update({ cover, coverId }, { where: { id: albumId } });
          }

          // Add photos to the album
          const result = await album.addPhotos(photoIds);
          return { data: !!result, errors: null };
        } catch (err) {
          return { data: false, errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) };
        }
      },
    ),

    removePhotosFromAlbum: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { albumId, photoIds }, { models }) => {
        try {
          const album = await models.Album.findById(albumId);
          if (!album) { return false; }
          const result = await album.removePhotos(photoIds);
          return { data: !!result, errors: null };
        } catch (err) {
          return { data: false, errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) };
        }
      },
    ),

    addView: async (parent, { albumId }, { models }) => {
      const album = await models.Album.findById(albumId);
      let { views } = album.dataValues;
      views += 1;
      return !!album.update({ views });
    },

    deleteAlbum: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { albumId }, { models }) =>
        !!models.Album.destroy({ where: { id: albumId } }),
    ),
  },
};

/* harmony default export */ __webpack_exports__["default"] = (AlbumsResolver);


/***/ }),

/***/ "./src/resolvers/bin.js":
/*!******************************!*\
  !*** ./src/resolvers/bin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/permissions */ "./src/services/permissions.js");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/file */ "./src/services/file.js");
/* harmony import */ var _formatErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formatErrors */ "./src/formatErrors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");






const { Op } = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;

const BinResolver = {
  Query: {
    allBinItems: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      (parent, args, { models, user }) => {
        const albums = models.Album.findAll({
          where: {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: true },
            },
          },
          include: [{ model: models.Photo, as: 'photos' }],
        })
          .then(result => ({
            albums: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ photos: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_3__["default"])(err, models) }));

        const photos = models.Photo.findAll({
          where: {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: true },
            },
          },
        })
          .then(result => ({
            photos: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ albums: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_3__["default"])(err, models) }));

        // NOTE: This does not concatenate errors; last one wins!
        return Promise.all([albums, photos])
          .then(result => result.reduce((prev, cur) => ({ ...prev, ...cur }), {}))
          .catch(err => ({ albums: [], photos: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_3__["default"])(err, models) }));
      },
    ),
  },

  Mutation: {
    addToBin: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, { type, ids, albumId }, { models, user }) => {
        if (type === _constants__WEBPACK_IMPORTED_MODULE_4__["ALBUM"]) {
          try {
            const result = await models.Album.update({ bin: true }, {
              returning: true,
              where: {
                [Op.and]: {
                  userId: { [Op.eq]: user.id },
                  id: { [Op.in]: ids },
                },
              },
            });
            return !!result;
          } catch (err) {
            return false;
          }
        }
        if (type === _constants__WEBPACK_IMPORTED_MODULE_4__["PHOTO"]) {
          try {
            const result = await models.Photo.update({ bin: true }, {
              returning: true,
              where: {
                [Op.and]: {
                  userId: { [Op.eq]: user.id },
                  id: { [Op.in]: ids },
                },
              },
            });
            // If any cover ids are in the removed set, set them to null
            const albums = await models.Album.findAll();
            albums.forEach((album) => {
              if (ids.includes(album.dataValues.coverId)) {
                models.Album.update(
                  { cover: null, coverId: null },
                  { where: { id: album.dataValues.id } },
                );
              }
            });

            return !!result;
          } catch (err) {
            return false;
          }
        }
        return false;
      },
    ),

    restore: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, args, { models, user }) => {
        try {
          const restoreAlbums = await models.Album.update({ bin: false }, {
            returning: true,
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          const restorePhotos = await models.Photo.update({ bin: false }, {
            returning: true,
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          return true;
        } catch (err) {
          return false;
        }
      },
    ),

    emptyBin: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver(
      async (parent, args, { models, user }) => {
        try {
          await models.Album.destroy({
            returning: true,
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          // Need to remove photo files as well as database entries
          const results = await models.Photo.findAll({
            attributes: ['id', 'urls'],
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          results.forEach(async (result) => {
            const { id, urls } = result.dataValues;
            await Object(_services_file__WEBPACK_IMPORTED_MODULE_2__["deletePhotoFiles"])(urls);
            await models.Photo.destroy({ where: { id } });
          });
          return true;
        } catch (err) {
          return false;
        }
      },
    ),
  },
};

/* harmony default export */ __webpack_exports__["default"] = (BinResolver);


/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums */ "./src/resolvers/albums.js");
/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos */ "./src/resolvers/photos.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./src/resolvers/users.js");
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bin */ "./src/resolvers/bin.js");





/* harmony default export */ __webpack_exports__["default"] = ([
  _albums__WEBPACK_IMPORTED_MODULE_0__["default"],
  _photos__WEBPACK_IMPORTED_MODULE_1__["default"],
  _users__WEBPACK_IMPORTED_MODULE_2__["default"],
  _bin__WEBPACK_IMPORTED_MODULE_3__["default"],
]);


/***/ }),

/***/ "./src/resolvers/photos.js":
/*!*********************************!*\
  !*** ./src/resolvers/photos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-subscriptions */ "graphql-subscriptions");
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/file */ "./src/services/file.js");
/* harmony import */ var _services_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/permissions */ "./src/services/permissions.js");
/* harmony import */ var _formatErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formatErrors */ "./src/formatErrors.js");
/* harmony import */ var _services_processFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/processFile */ "./src/services/processFile.js");
/* harmony import */ var _services_batch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/batch */ "./src/services/batch.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pubsub */ "./src/pubsub.js");









const { Op } = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;

const PhotosResolver = {
  Subscription: {
    uploadStarted: {
      subscribe: () => _pubsub__WEBPACK_IMPORTED_MODULE_7__["default"].asyncIterator(_pubsub__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_STARTED"]),
    },
    uploadProgress: {
      subscribe: Object(graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1__["withFilter"])(
        () => _pubsub__WEBPACK_IMPORTED_MODULE_7__["default"].asyncIterator(_pubsub__WEBPACK_IMPORTED_MODULE_7__["UPLOAD_PROGRESS"]),
        (payload, args) => payload.uploadProgress.filename === args.filename,
      ),
      // subscribe: requiresAuth.createResolver(withFilter(
      //   () => pubsub.asyncIterator(UPLOAD_PROGRESS),
      //   (payload, args) => payload.uploadProgress.filename === args.filename,
      // )),
    },
  },

  Query: {
    allPhotos: (parent, { albumId, orderBy }, { models, userId = 1 }) => {
      const filter = albumId
        ? {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            bin: { [Op.eq]: false },
            '$albums.id$': { [Op.eq]: albumId },
          },
        }
        : {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            bin: { [Op.eq]: false },
          },
        };
      const order = orderBy ? orderBy.split('_') : ['id', 'DESC'];

      return models.Photo.findAll({
        include: [{
          model: models.Album,
          attributes: ['id'],
          through: 'album_photos',
        }],
        where: filter,
        order: [order],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(err, models) }));
    },

    publicPhotos: async (parent, { albumId, orderBy }, { models, userId = 1 }) => {
      // Determine whether albumId is slug or number
      let id;
      if (!isNaN(parseInt(albumId, 10))) {
        id = parseInt(albumId, 10);
      } else {
        // Slug
        const result = await models.Album.findOne({
          where: { slug: { [Op.eq]: albumId } },
        });
        if (!result) {
          return {
            data: [],
            errors: Error('No album by that name'),
          };
        }
        id = result.dataValues.id;
      }

      const filter = albumId
        ? {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            bin: { [Op.eq]: false },
            isPublic: { [Op.eq]: true },
            '$albums.id$': { [Op.eq]: id },
          },
        }
        : {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            bin: { [Op.eq]: false },
          },
        };
      const order = orderBy ? orderBy.split('_') : ['id', 'DESC'];

      return models.Photo.findAll({
        include: [{
          model: models.Album,
          attributes: ['id'],
          through: 'album_photos',
        }],
        where: filter,
        order: [order],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(err, models) }));
    },
  },

  Mutation: {
    uploadPhoto: _services_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].createResolver(
      async (parent, { file }, { models, user, totalUploadSize }) => {
        const { stream, filename, mimetype } = await file;

        // Image files only (jpg)
        if (mimetype !== 'image/jpeg') {
          console.error(`User tried to upload a file with mimetype: ${mimetype}`);
          return { success: false, error: 'You cannot upload this type of file' };
        }

        try {
          // const progress = setProgress(size, filename);
          await Object(_services_file__WEBPACK_IMPORTED_MODULE_2__["storeUpload"])(stream, filename);
          // await storeUpload(stream, filename, progress);

          // Process the file
          const {
            exif, error, urls, thumbnail, name,
          } = await Object(_services_processFile__WEBPACK_IMPORTED_MODULE_5__["default"])(filename);

          console.log('Processed', filename);

          // Write to database
          const photoData = {
            ...exif, urls, thumbnail, name, userId: user.id,
          };
          await models.Photo.create(photoData);

          await Object(_services_file__WEBPACK_IMPORTED_MODULE_2__["cleanUpload"])(filename);

          return {
            name, success: true, exif: JSON.stringify(exif), error, thumbnail,
          };
        } catch (err) {
          console.error(`FAIL: Unable to upload ${filename}`);
          console.error(err.message);
          return { success: false, error: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(err, models) };
        }
      },
    ),

    uploadPhotos: _services_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].createResolver(
      async (parent, { files, sizes = [] }, ctx) => {
        const totalUploadSize = sizes.reduce((a, b) => a + b, 0);
        const context = { ...ctx, totalUploadSize };

        return Object(_services_batch__WEBPACK_IMPORTED_MODULE_6__["default"])()(
          files,
          PhotosResolver.Mutation.uploadPhoto,
          { parent, argName: 'file', context },
          sizes,
        );
      },
    ),

    updatePhoto: _services_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].createResolver(
      async (parent, { photo }, { models }) => {
        const { id, ...details } = photo;
        return !!models.Photo.update(details, { where: { id } });
      },
    ),

    deletePhoto: _services_permissions__WEBPACK_IMPORTED_MODULE_3__["default"].createResolver(
      async (parent, { id }, { models }) => {
        const photo = await models.Photo.findOne({ where: { id } });
        const files = photo.dataValues.urls;
        await Object(_services_file__WEBPACK_IMPORTED_MODULE_2__["deletePhotoFiles"])(files);
        return !!models.Photo.destroy({ where: { id } });
      },
    ),
  },
};

/* harmony default export */ __webpack_exports__["default"] = (PhotosResolver);


/***/ }),

/***/ "./src/resolvers/users.js":
/*!********************************!*\
  !*** ./src/resolvers/users.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth */ "./src/services/auth.js");
/* harmony import */ var _services_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/permissions */ "./src/services/permissions.js");
/* harmony import */ var _formatErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatErrors */ "./src/formatErrors.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  Mutation: {
    login: (parent, { username, password }, { models, SECRET, SECRET2 }) =>
      Object(_services_auth__WEBPACK_IMPORTED_MODULE_0__["tryLogin"])(username, password, models, SECRET, SECRET2),

    addUser: _services_permissions__WEBPACK_IMPORTED_MODULE_1__["default"].createResolver((parent, args, { models }) =>
      models.User.create(args)
        .then(result => ({ id: result.id, errors: null }))
        .catch(err => ({ id: null, errors: Object(_formatErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(err, models) }))),
  },
});


/***/ }),

/***/ "./src/schema/albums.js":
/*!******************************!*\
  !*** ./src/schema/albums.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
  type Album {
    id: Int!
    name: String!
    slug: String
    description: String
    cover: String
    coverId: Int
    views: Int!
    isPublic: Boolean!
    createdAt: String!
    photos: [Photo!]
  }

  input AlbumInput {
    id: Int
    name: String
    slug: String
    description: String
    cover: String
    coverId: Int
    isPublic: Boolean
  }

  type AlbumResponse {
    data: Album
    errors: [Error!]
  }

  type AlbumsResponse {
    data: [Album!]
    errors: [Error!]
  }

  type AlbumUpdateResponse {
    data: Boolean!
    errors: [Error!]
  }

  type Query {
    allAlbums(id: Int): AlbumsResponse!
    getPublicAlbums: AlbumsResponse!
    getAlbum(albumId: Int!): AlbumResponse!
  }

  type Mutation {
    addAlbum(album: AlbumInput!): Boolean!
    updateAlbum(album: AlbumInput!): Boolean!
    addPhotosToAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!
    removePhotosFromAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!
    addView(albumId: Int!): Boolean!
    deleteAlbum(albumId: Int!): Boolean!
  }
`);

// setCover(albumId: Int!, photoId: Int!): AlbumUpdateResponse!


/***/ }),

/***/ "./src/schema/bin.js":
/*!***************************!*\
  !*** ./src/schema/bin.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
  type BinResponse {
    albums: [Album!]
    photos: [Photo!]
    errors: [Error!]
  }

  type Query {
    allBinItems: BinResponse!
  }

  type Mutation {
    addToBin(type: String!, ids: [Int!]!, albumId: Int): Boolean!
    restore: Boolean!
    emptyBin: Boolean!
  }
`);


/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums */ "./src/schema/albums.js");
/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos */ "./src/schema/photos.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./src/schema/users.js");
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bin */ "./src/schema/bin.js");





/* harmony default export */ __webpack_exports__["default"] = ([
  _albums__WEBPACK_IMPORTED_MODULE_0__["default"],
  _photos__WEBPACK_IMPORTED_MODULE_1__["default"],
  _users__WEBPACK_IMPORTED_MODULE_2__["default"],
  _bin__WEBPACK_IMPORTED_MODULE_3__["default"],
]);


/***/ }),

/***/ "./src/schema/photos.js":
/*!******************************!*\
  !*** ./src/schema/photos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
  scalar Upload

  enum PhotoOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
    dateTaken_ASC
    dateTaken_DESC
    createdAt_ASC
    createdAt_DESC
  }

  type UploadResponse {
    name: String!
    success: Boolean!
    exif: String
    error: String
    thumbnail: String
  }

  type Photo {
    id: Int!
    name: String!
    urls: [String]!
    thumbnail: String!
    title: String
    caption: String
    width: Int!
    height: Int!
    exposure: Int
    shutter: Int
    aperture: Int
    iso: Int
    focalLength: Int
    dateTaken: String
    isPublic: Boolean!
    createdAt: String!
  }

  input PhotoInput {
    id: Int!
    name: String
    title: String
    caption: String
    isPublic: Boolean
  }

  type PhotoResponse {
    data: [Photo!]
    errors: [Error!]
  }

  type Progress {
    filename: String
    percentage: Int
  }

  type Query {
    allPhotos(albumId: Int, orderBy: PhotoOrderByInput): PhotoResponse!
    publicPhotos(albumId: String, orderBy: PhotoOrderByInput): PhotoResponse!
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
    uploadPhotos(files: [Upload!]!, sizes: [Int!]): [UploadResponse!]!
    updatePhoto(photo: PhotoInput!): Boolean!
    deletePhoto(id: Int!): Boolean!
  }

  type Subscription {
    uploadStarted: String
    uploadProgress(filename: String!): Progress
  }
`);


/***/ }),

/***/ "./src/schema/users.js":
/*!*****************************!*\
  !*** ./src/schema/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
  type Error {
    path: String
    message: String
    type: String
  }

  type createRecordResponse {
    id: Int
    errors: [Error!]
  }

  type LoginResponse {
    success: Boolean!
    token: String
    refreshToken: String
    errors: [Error!]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): createRecordResponse!
    login(username: String!, password: String!): LoginResponse!
  }
`);


/***/ }),

/***/ "./src/services/TaskQueue.js":
/*!***********************************!*\
  !*** ./src/services/TaskQueue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TaskQueue {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      // task(() => {
      task().then(() => {
        this.running -= 1;
        this.next();
      });
      this.running += 1;
    }
  }

  empty() {
    this.queue = [];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TaskQueue);


/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: createTokens, refreshTokens, tryLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTokens", function() { return createTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshTokens", function() { return refreshTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLogin", function() { return tryLogin; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);



const createTokens = async (user, secret, secret2) => {
  const {
    id, username, isAdmin, ...rest
  } = user;

  const createToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(
    { user: { id, username, isAdmin } },
    secret,
    { expiresIn: '1d' },
  );

  const createRefreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(
    { user: { id } },
    secret2,
    { expiresIn: '1w' },
  );

  return [createToken, createRefreshToken];
};

const refreshTokens = async (token, refreshToken, models, SECRET, SECRET2) => {
  let userId = 0;
  try {
    const { user: { id } } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }
  if (!userId) { return {}; }

  const user = await models.User.findOne({ where: { id: userId }, raw: true });
  if (!user) { return {}; }

  const refreshSecret = user.password + SECRET2;


  try {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(refreshToken, refreshSecret);
  } catch (err) {
    console.log('Unable to verify refreshToken');
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(user, SECRET, refreshSecret);
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user,
  };
};

const tryLogin = async (username, password, models, SECRET, SECRET2) => {
  const user = await models.findByLogin(username);
  if (!user) {
    return {
      success: false,
      errors: [{ path: 'login', message: 'Wrong login details' }],
    };
  }

  const valid = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password);
  if (!valid) {
    // bad password
    return {
      success: false,
      errors: [{ path: 'login', message: 'Wrong login details' }],
    };
  }
  const refreshTokenSecret = user.password + SECRET2;
  const [token, refreshToken] = await createTokens(user, SECRET, refreshTokenSecret);

  return {
    success: true,
    token,
    refreshToken,
  };
};


/***/ }),

/***/ "./src/services/batch.js":
/*!*******************************!*\
  !*** ./src/services/batch.js ***!
  \*******************************/
/*! exports provided: delay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony import */ var _TaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskQueue */ "./src/services/TaskQueue.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const limitConcurrency = (con) => {
  if (!con) { return _constants__WEBPACK_IMPORTED_MODULE_1__["BATCH_CONCURRENCY"]; }
  if ((typeof con !== 'number') || con < 1) {
    return 1;
  }
  if (con > _constants__WEBPACK_IMPORTED_MODULE_1__["BATCH_CONCURRENCY"]) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__["BATCH_CONCURRENCY"];
  }
  return con;
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/* harmony default export */ __webpack_exports__["default"] = (concurrency =>
  async (records, resolver, params, sizes = []) => {
    const queue = new _TaskQueue__WEBPACK_IMPORTED_MODULE_0__["default"](limitConcurrency(concurrency));
    const batchResults = [];
    let result;

    await new Promise((resolve, reject) => {
      if (!records || records.length === 0) { resolve(batchResults); }

      let completed = 0;
      const increment = () => {
        completed += 1;
        if (completed === records.length) { resolve(batchResults); }
      };

      records.forEach((record, i) => {
        const task = async () => {
          try {
            // Resolver signature is (parent, args, context)
            const { parent, argName, context } = params;
            const size = sizes ? sizes[i] : null; // Upload size for photos
            const args = { [argName]: record, size };
            result = await resolver(parent, args, context);
            if (result) { batchResults.push(result); }
            increment();
          } catch (err) {
            increment();
            queue.empty();
            // reject here to stop the batch on a general error
            reject(Error(`Batch upload failed: ${err.message}`));
          }
        };
        queue.pushTask(task);
      });
    });
    return batchResults;
  });


/***/ }),

/***/ "./src/services/exif.js":
/*!******************************!*\
  !*** ./src/services/exif.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var exif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exif */ "exif");
/* harmony import */ var exif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! image-size */ "image-size");
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(image_size__WEBPACK_IMPORTED_MODULE_2__);




// Convert '2015:07:11 11:56:35' to date
const convertDate = (date) => {
  if (!date) { return null; }
  const dateParts = date.split(' ');
  const dateString = [dateParts[0].replace(/:/gm, '-'), dateParts[1]].join('T');
  return new Date(dateString);
};

// TODO: read title and caption
const filterExif = (data) => {
  if (!data) { return {}; }
  return {
    title: null,
    caption: data.image && data.image.ImageDescription,
    exposure: data.exif && data.exif.ExposureTime,
    shutter: data.exif && data.exif.ShutterSpeedValue,
    aperture: data.exif && data.exif.FNumber,
    iso: data.exif && data.exif.ISO,
    focalLength: data.exif && data.exif.FocalLength,
    dateTaken: data.exif && convertDate(data.exif.CreateDate),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (filename => new Promise((resolve) => {
  const file = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../../uploads', filename);
  // eslint-disable-next-line no-new
  new exif__WEBPACK_IMPORTED_MODULE_1__["ExifImage"]({ image: file }, ((error, exifData) => {
    resolve({ ...filterExif(exifData), ...image_size__WEBPACK_IMPORTED_MODULE_2___default()(file) });
  }));
}));

/* WEBPACK VAR INJECTION */}.call(this, "src/services"))

/***/ }),

/***/ "./src/services/file.js":
/*!******************************!*\
  !*** ./src/services/file.js ***!
  \******************************/
/*! exports provided: setProgress, storeUpload, deletePhotoFiles, cleanUploads, cleanUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgress", function() { return setProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeUpload", function() { return storeUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePhotoFiles", function() { return deletePhotoFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUploads", function() { return cleanUploads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUpload", function() { return cleanUpload; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rimraf */ "rimraf");
/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-system */ "file-system");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var progress_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! progress-stream */ "progress-stream");
/* harmony import */ var progress_stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(progress_stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/services/utils.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pubsub */ "./src/pubsub.js");








// TODO: subscription
/**
 * This function sets a subscription emitter for upload progress. The progress object exposes
 * properties for transferred (b), remaining (b), length (b) and percentage.
 * @param {*} size in bytes
 * @param {*} filename
 */
const setProgress = (size, filename) =>
  progress_stream__WEBPACK_IMPORTED_MODULE_3___default()(
    { length: size, time: 10 },
    progress => console.log(filename, Math.round(progress.percentage))
    || Object(_pubsub__WEBPACK_IMPORTED_MODULE_6__["emitUploadProgress"])(filename, Math.round(progress.percentage)),
  );

// TODO: make progress work!
const storeUpload = (stream, filename, progress) =>
  new Promise((resolve, reject) => {
    const storePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_utils__WEBPACK_IMPORTED_MODULE_5__["ROOT"], _constants__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FOLDER"], filename);
    if (progress) {
      /* stream
          .pipe(progress)
          .pipe(createWriteStream(storePath))
          .on('finish', () => resolve())
          .on('error', err => reject(err)); */
    } else {
      stream
        .on('error', (error) => {
          if (stream.truncated) {
            file_system__WEBPACK_IMPORTED_MODULE_2___default.a.unlinkSync(storePath);
          }
          reject(error);
        })
        .pipe(Object(file_system__WEBPACK_IMPORTED_MODULE_2__["createWriteStream"])(storePath))
        .on('finish', () => resolve())
        .on('error', err => reject(err));
    }
  });

const deleteFile = (folder, filename) => new Promise((resolve) => {
  const file = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_utils__WEBPACK_IMPORTED_MODULE_5__["ROOT"], folder, filename);
  rimraf__WEBPACK_IMPORTED_MODULE_1___default()(file, {}, (error) => {
    if (error) {
      console.log(`Unable to delete ${filename}`);
    }
    resolve();
  });
});

const deletePhotoFiles = files =>
  new Promise(async (resolve, reject) => {
    if (files && files.length) {
      // Replace any non-null http url with ROOT
      const deNulledList = files.filter(n => n);
      const localFiles = deNulledList.map(f => f && f.replace(_utils__WEBPACK_IMPORTED_MODULE_5__["PHOTO_URL"], ''));
      try {
        await Promise.all(localFiles.map(f => deleteFile(_constants__WEBPACK_IMPORTED_MODULE_4__["PHOTOS_FOLDER"], f)));
        resolve();
      } catch (err) {
        reject(err);
      }
    }
  });

const deleteAllFiles = folder => new Promise((resolve) => {
  rimraf__WEBPACK_IMPORTED_MODULE_1___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_utils__WEBPACK_IMPORTED_MODULE_5__["ROOT"], folder, '/*'), {}, (error) => {
    if (error) {
      console.log(`Unable to clean files folder: ${error}`);
    }
    resolve();
  });
});

const cleanUploads = () => deleteAllFiles(_constants__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FOLDER"]);

const cleanUpload = filename => deleteFile(_constants__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FOLDER"], filename);


/***/ }),

/***/ "./src/services/permissions.js":
/*!*************************************!*\
  !*** ./src/services/permissions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createResolver = (resolver) => {
  const baseResolver = resolver;
  baseResolver.createResolver = (childResolver) => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

// requiresAuth
/* harmony default export */ __webpack_exports__["default"] = (createResolver((parent, args, { user }) => {
  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
}));

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


/***/ }),

/***/ "./src/services/processFile.js":
/*!*************************************!*\
  !*** ./src/services/processFile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exif */ "./src/services/exif.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize */ "./src/services/resize.js");



/* harmony default export */ __webpack_exports__["default"] = (file => new Promise(async (resolve, reject) => {
  try {
    const exif = await Object(_exif__WEBPACK_IMPORTED_MODULE_0__["default"])(file);
    const {
      thumbnail, urls, error, name,
    } = await Object(_resize__WEBPACK_IMPORTED_MODULE_1__["resizeImage"])(file, exif);
    resolve({
      exif, error, urls, thumbnail, name,
    });
  } catch (e) {
    reject(e);
  }
}));


/***/ }),

/***/ "./src/services/resize.js":
/*!********************************!*\
  !*** ./src/services/resize.js ***!
  \********************************/
/*! exports provided: resize, resizeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeImage", function() { return resizeImage; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-system */ "file-system");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mkdirp */ "mkdirp");
/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sharp */ "sharp");
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/services/utils.js");








dotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();

const BASE_URL = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(_utils__WEBPACK_IMPORTED_MODULE_6__["ROOT"], _constants__WEBPACK_IMPORTED_MODULE_5__["PHOTOS_FOLDER"]);

// Write any missing folders in a file path
const writePath = (filePath, cb) => {
  mkdirp__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filePath), (err) => {
    if (err) return cb(err);
    return cb();
  });
};

const fileExists = filePath => file_system__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(filePath);

const getNewFileVersion = (filePath, version = 0) => {
  if (!fileExists(filePath)) {
    return filePath;
  }
  const folder = path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filePath);
  const newFilename = path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filePath);
  const ext = path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(newFilename);
  const body = newFilename.split('.')[0].split(`${_constants__WEBPACK_IMPORTED_MODULE_5__["DELIM"]}${version}`)[0];
  return getNewFileVersion(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(folder, `${body}${_constants__WEBPACK_IMPORTED_MODULE_5__["DELIM"]}${version + 1}${ext}`), version + 1);
};

const safeName = f => f.replace(/[^a-z0-9._-]/gi, '').toLowerCase();

const makeFolderName = (fileName) => {
  const d = new Date();
  const y = d.getFullYear().toString();
  const m = (d.getMonth() + 1).toString();
  const day = d.getDate().toString();
  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(BASE_URL, y, m, day, safeName(fileName || ''));
  return getNewFileVersion(filePath);
};

const makeRelativePath = absolutePath => `/${absolutePath.replace(_utils__WEBPACK_IMPORTED_MODULE_6__["ROOT"], '')}`;

const getDimensions = (size) => {
  if (!size || size === 'original') {
    return '';
  }
  // Set filename with size and an 'h' for fixed-height crops and w for width
  if (size.height) { return `-${size.height}h`; }
  if (size.width) { return `-${size.width}w`; }
  return `-${size}w`;
};

const imageIsTooSmall = (actualWidth, resizeTo) => {
  if (resizeTo === 'original') { return false; }
  const resizeWidth = resizeTo.width ? resizeTo.width : resizeTo;
  return (actualWidth < resizeWidth);
};

// Return a size object oriented to resize the longest edge
const longestEdge = ({ width, height }, resizeTo) =>
  // const aspect = width / height;
  ((width >= height)
    ? { width: resizeTo, height: null }
    : { width: null, height: resizeTo });

// eslint-disable-next-line import/prefer-default-export
const resize = (filename, exif) => size => new Promise((resolve, reject) => {
  if (imageIsTooSmall(exif.width, size)) {
    resolve(null); // Don't upsample!
  } else {
    if (size.longestEdge) {
      size = longestEdge(exif, size.longestEdge); // Resize to correct orientation
    }
    const inPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `../../${_constants__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_FOLDER"]}`, filename);
    const ext = path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(filename);
    const outName = makeFolderName(`${filename.split(ext)[0]}${getDimensions(size)}${ext}`);
    try {
      writePath(outName, async () => {
        const outPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(outName);
        if (typeof size === 'number') {
          await sharp__WEBPACK_IMPORTED_MODULE_4___default()(inPath)
            .resize(size)
            .toFormat('jpeg')
            .toFile(outPath);
        } else {
          await sharp__WEBPACK_IMPORTED_MODULE_4___default()(inPath)
            .resize(size.width, size.height)
            .toFormat('jpeg')
            .toFile(outPath);
        }
        // Convert file paths to relative server paths
        // FIXME: needs a leading / in built mode
        console.log({ ROOT: _utils__WEBPACK_IMPORTED_MODULE_6__["ROOT"], outPath, relative: makeRelativePath(outPath) });

        resolve(makeRelativePath(outPath));
      });
    } catch (e) {
      console.log('resize error:', e.message);
      reject(e);
    }
  }
});

const resizeImage = async (filename, exif) => {
  try {
    const name = path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filename);
    const urls = await Promise.all(_constants__WEBPACK_IMPORTED_MODULE_5__["SIZES"].map(resize(filename, exif)));
    return {
      name, urls, thumbnail: urls[_constants__WEBPACK_IMPORTED_MODULE_5__["THUMBNAIL_SIZE"]], error: null,
    };
  } catch (err) {
    return { url: null, error: err };
  }
};

/* WEBPACK VAR INJECTION */}.call(this, "src/services"))

/***/ }),

/***/ "./src/services/utils.js":
/*!*******************************!*\
  !*** ./src/services/utils.js ***!
  \*******************************/
/*! exports provided: HTTP_URL, PHOTO_URL, ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_URL", function() { return HTTP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO_URL", function() { return PHOTO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




const env = "development";
console.log('TCL: env', env);

const HTTP_URL = `${process.env.SERVER_URI}:${process.env.PORT}`;
console.log('TCL: HTTP_URL', HTTP_URL);

const PHOTO_URL = `${HTTP_URL}/${_constants__WEBPACK_IMPORTED_MODULE_1__["PHOTOS_FOLDER"]}`;

const ROOT = (env && env === 'development')
  ? path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../../')
  : path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../');

/* WEBPACK VAR INJECTION */}.call(this, "src/services"))

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_apollo_server__;

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_apollo_server_express__;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bcrypt__;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_body_parser__;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_compression__;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cors__;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dotenv__;

/***/ }),

/***/ "exif":
/*!***********************!*\
  !*** external "exif" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_exif__;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_express__;

/***/ }),

/***/ "file-system":
/*!******************************!*\
  !*** external "file-system" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_file_system__;

/***/ }),

/***/ "graphql-playground-middleware-express":
/*!********************************************************!*\
  !*** external "graphql-playground-middleware-express" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_graphql_playground_middleware_express__;

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_graphql_subscriptions__;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "image-size":
/*!*****************************!*\
  !*** external "image-size" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_image_size__;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jsonwebtoken__;

/***/ }),

/***/ "merge-graphql-schemas":
/*!****************************************!*\
  !*** external "merge-graphql-schemas" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_merge_graphql_schemas__;

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mkdirp__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "progress-stream":
/*!**********************************!*\
  !*** external "progress-stream" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_progress_stream__;

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rimraf__;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_sequelize__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type BinResponse {\n    albums: [Album!]\n    photos: [Photo!]\n    errors: [Error!]\n  }\n\n  type Query {\n    allBinItems: BinResponse!\n  }\n\n  type Mutation {\n    addToBin(type: String!, ids: [Int!]!, albumId: Int): Boolean!\n    restore: Boolean!\n    emptyBin: Boolean!\n  }\n";
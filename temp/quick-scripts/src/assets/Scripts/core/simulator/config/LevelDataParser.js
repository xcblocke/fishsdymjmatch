"use strict";
cc._RF.push(module, 'b0d65CxXFJJUJ0+Jg67hJCe', 'LevelDataParser');
// Scripts/core/simulator/config/LevelDataParser.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelDataParser = void 0;
var LevelGenRule_1 = require("./LevelGenRule");
var LevelDataParser = /** @class */ (function () {
    function LevelDataParser() {
    }
    LevelDataParser.Translate = function (e) {
        if (e >= "0" && e <= "9")
            return parseInt(e, 10);
        var t = e.charCodeAt(0);
        if (e >= "A" && e <= "Z")
            return t - 55;
        if ("a" === e)
            return t - 61;
        throw new Error("Invalid cardId: " + e);
    };
    LevelDataParser.Untranslate = function (e) {
        if (e >= 0 && e <= 9)
            return e.toString();
        if (e >= 10 && e <= 35)
            return String.fromCharCode(e + 55);
        if (36 === e)
            return "a";
        throw new Error("Invalid id to untranslate: " + e);
    };
    LevelDataParser.convertStringToCardTileDatasNew = function (e) {
        return LevelGenRule_1.default.genLevel(e).LevelData;
    };
    LevelDataParser.convertCardTileDatasToString = function (e) {
        return LevelGenRule_1.default.serializeTilesToInlineString(e);
    };
    return LevelDataParser;
}());
exports.LevelDataParser = LevelDataParser;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/config/LevelDataParser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbERhdGFQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUM7SUFBQTtJQW9CQSxDQUFDO0lBbkJRLHlCQUFTLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQUUsT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksR0FBRyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ00sMkJBQVcsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksRUFBRSxLQUFLLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSwrQ0FBK0IsR0FBdEMsVUFBdUMsQ0FBQztRQUN0QyxPQUFPLHNCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ00sNENBQTRCLEdBQW5DLFVBQW9DLENBQUM7UUFDbkMsT0FBTyxzQkFBWSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCxzQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGV2ZWxHZW5SdWxlIGZyb20gJy4vTGV2ZWxHZW5SdWxlJztcbmV4cG9ydCBjbGFzcyBMZXZlbERhdGFQYXJzZXIge1xuICBzdGF0aWMgVHJhbnNsYXRlKGUpIHtcbiAgICBpZiAoZSA+PSBcIjBcIiAmJiBlIDw9IFwiOVwiKSByZXR1cm4gcGFyc2VJbnQoZSwgMTApO1xuICAgIHZhciB0ID0gZS5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChlID49IFwiQVwiICYmIGUgPD0gXCJaXCIpIHJldHVybiB0IC0gNTU7XG4gICAgaWYgKFwiYVwiID09PSBlKSByZXR1cm4gdCAtIDYxO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2FyZElkOiBcIiArIGUpO1xuICB9XG4gIHN0YXRpYyBVbnRyYW5zbGF0ZShlKSB7XG4gICAgaWYgKGUgPj0gMCAmJiBlIDw9IDkpIHJldHVybiBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKGUgPj0gMTAgJiYgZSA8PSAzNSkgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSArIDU1KTtcbiAgICBpZiAoMzYgPT09IGUpIHJldHVybiBcImFcIjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlkIHRvIHVudHJhbnNsYXRlOiBcIiArIGUpO1xuICB9XG4gIHN0YXRpYyBjb252ZXJ0U3RyaW5nVG9DYXJkVGlsZURhdGFzTmV3KGUpIHtcbiAgICByZXR1cm4gTGV2ZWxHZW5SdWxlLmdlbkxldmVsKGUpLkxldmVsRGF0YTtcbiAgfVxuICBzdGF0aWMgY29udmVydENhcmRUaWxlRGF0YXNUb1N0cmluZyhlKSB7XG4gICAgcmV0dXJuIExldmVsR2VuUnVsZS5zZXJpYWxpemVUaWxlc1RvSW5saW5lU3RyaW5nKGUpO1xuICB9XG59Il19
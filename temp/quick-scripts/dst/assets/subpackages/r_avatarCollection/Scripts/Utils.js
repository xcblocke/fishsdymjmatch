
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '298a1d/RoZJ16FPCDChvEaP', 'Utils');
// subpackages/r_avatarCollection/Scripts/Utils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBundleName = exports.Key2Info = exports.Info2Key = void 0;
var Info2Key = function (t) {
    return t.bundleName + ";;" + t.path + ";;" + t.fromAtlas;
};
exports.Info2Key = Info2Key;
var Key2Info = function (t) {
    var e = __read(t.split(";;"), 3);
    return {
        bundleName: e[0],
        path: e[1],
        fromAtlas: "true" === e[2]
    };
};
exports.Key2Info = Key2Info;
var getBundleName = function () {
    return "r_avatarCollection";
};
exports.getBundleName = getBundleName;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQixPQUFPLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBRlMsUUFBQSxRQUFRLFlBRWpCO0FBQ0ssSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQy9CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE9BQU87UUFDTCxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLFNBQVMsRUFBRSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUFMsUUFBQSxRQUFRLFlBT2pCO0FBQ0ssSUFBSSxhQUFhLEdBQUc7SUFDekIsT0FBTyxvQkFBb0IsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFGUyxRQUFBLGFBQWEsaUJBRXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBJbmZvMktleSA9IGZ1bmN0aW9uICh0KSB7XG4gIHJldHVybiB0LmJ1bmRsZU5hbWUgKyBcIjs7XCIgKyB0LnBhdGggKyBcIjs7XCIgKyB0LmZyb21BdGxhcztcbn07XG5leHBvcnQgdmFyIEtleTJJbmZvID0gZnVuY3Rpb24gKHQpIHtcbiAgdmFyIGUgPSBfX3JlYWQodC5zcGxpdChcIjs7XCIpLCAzKTtcbiAgcmV0dXJuIHtcbiAgICBidW5kbGVOYW1lOiBlWzBdLFxuICAgIHBhdGg6IGVbMV0sXG4gICAgZnJvbUF0bGFzOiBcInRydWVcIiA9PT0gZVsyXVxuICB9O1xufTtcbmV4cG9ydCB2YXIgZ2V0QnVuZGxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwicl9hdmF0YXJDb2xsZWN0aW9uXCI7XG59OyJdfQ==
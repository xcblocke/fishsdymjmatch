"use strict";
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
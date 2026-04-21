"use strict";
cc._RF.push(module, '32051ptyBBA7rRnaQXEZxMw', 'TargetCollectedUtils');
// subpackages/r_targetCollected/Scripts/TargetCollectedUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetCollectedUtils = void 0;
var TargetCollectedUtils = /** @class */ (function () {
    function TargetCollectedUtils() {
    }
    TargetCollectedUtils.getTargetCollectedResMap = function () {
        var e = new Map();
        e.set("Journey01", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
        e.set("Journey02", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
        return e;
    };
    TargetCollectedUtils.getTargetCollectedRes = function (e) {
        var t = this.getTargetCollectedResMap();
        return t.has(e) ? t.get(e) : null;
    };
    __decorate([
        mj.traitEvent("TagColUtils_getRes")
    ], TargetCollectedUtils, "getTargetCollectedRes", null);
    return TargetCollectedUtils;
}());
exports.TargetCollectedUtils = TargetCollectedUtils;

cc._RF.pop();
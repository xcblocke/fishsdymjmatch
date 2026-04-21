"use strict";
cc._RF.push(module, 'ce45a4NqJNN4JmU6arTKM5f', 'ShuffleUtils');
// Scripts/UiUtils/ShuffleUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var ShuffleUtils = /** @class */ (function () {
    function ShuffleUtils() {
    }
    ShuffleUtils.getPrePlayTime = function () {
        return 0;
    };
    ShuffleUtils.playRefreshAnimation = function (e, t, o) {
        if (e && e.gameView && e.gameView.nodeTopEffectRoot) {
            t || (t = "spine/shuffle/gameplay_refresh");
            var n = BaseSpine_1.default.create(t, "in", 1, null, true, o);
            n.node.parent = e.gameView.nodeTopEffectRoot;
            n.node.position = cc.v3(0, 0, 0);
        }
    };
    ShuffleUtils.onShuffleStayStartPlay = function () { };
    __decorate([
        mj.traitEvent("ShuffUts_getPreTime")
    ], ShuffleUtils, "getPrePlayTime", null);
    __decorate([
        mj.traitEvent("ShuffUts_playRAnim")
    ], ShuffleUtils, "playRefreshAnimation", null);
    __decorate([
        mj.traitEvent("ShuffUts_startPlay")
    ], ShuffleUtils, "onShuffleStayStartPlay", null);
    return ShuffleUtils;
}());
exports.default = ShuffleUtils;

cc._RF.pop();
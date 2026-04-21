"use strict";
cc._RF.push(module, '38d3cbcZzpDup78pKdxYcXt', 'HardLevelTipsBehavior');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HardLevelTipsBehavior = void 0;
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HardLevelTipsBehavior = /** @class */ (function (_super) {
    __extends(HardLevelTipsBehavior, _super);
    function HardLevelTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsBehavior.prototype.start = function (e) {
        var t = this;
        this.context.gameView.setSwallowEventNodeActive(true);
        BaseSpine_1.default.create("spine/hardLevelTips/gameplay_hardTips", e.data.aniName, 1, function () {
            t.context.gameView.setSwallowEventNodeActive(false);
            t.finish();
        }, true, "mainRes").node.parent = this.context.gameView.nodeTopEffectRoot;
    };
    __decorate([
        mj.traitEvent("HLTipsBhv_onStart")
    ], HardLevelTipsBehavior.prototype, "start", null);
    return HardLevelTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.HardLevelTipsBehavior = HardLevelTipsBehavior;

cc._RF.pop();
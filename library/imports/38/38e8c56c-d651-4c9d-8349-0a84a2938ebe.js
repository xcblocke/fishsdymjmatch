"use strict";
cc._RF.push(module, '38e8cVs1lFMnYNJCoSik46+', 'UpdateHitTipsPropBehavior');
// Scripts/base/UpdateHitTipsPropBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateHitTipsPropBehavior = /** @class */ (function (_super) {
    __extends(UpdateHitTipsPropBehavior, _super);
    function UpdateHitTipsPropBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateHitTipsPropBehavior.prototype.start = function (e) {
        var t = e.data.curNum;
        this.context.gameView.gameUI.updateHitTipsProp(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("UdHitTipsPropBhv_start")
    ], UpdateHitTipsPropBehavior.prototype, "start", null);
    return UpdateHitTipsPropBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = UpdateHitTipsPropBehavior;

cc._RF.pop();
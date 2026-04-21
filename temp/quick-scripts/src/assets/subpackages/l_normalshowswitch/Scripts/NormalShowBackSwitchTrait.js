"use strict";
cc._RF.push(module, '42babiJCz5AIb4dG8j1zqpQ', 'NormalShowBackSwitchTrait');
// subpackages/l_normalshowswitch/Scripts/NormalShowBackSwitchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalShowBackSwitchTrait = /** @class */ (function (_super) {
    __extends(NormalShowBackSwitchTrait, _super);
    function NormalShowBackSwitchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalShowBackSwitchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalShowBackSwitchTrait.prototype.onIptSetLv_setData = function (t, e) {
        var r = t.ins;
        this.switchNormalShowBack(r);
        e();
    };
    NormalShowBackSwitchTrait.prototype.onIptT2SetLv_setData = function (t, e) {
        var r = t.ins;
        this.switchNormalShowBack(r);
        e();
    };
    NormalShowBackSwitchTrait.prototype.isCurLevelCanGainBoxReward = function (t) {
        if (t.gameContext.gameType != GameTypeEnums_1.MjGameType.Normal && t.gameContext.gameType != GameTypeEnums_1.MjGameType.Tile2Normal)
            return false;
        var e = mj.getClassByName("NormalBoxTrait");
        if (e && true === e.getInstance().eventEnabled)
            return 1 === e.getInstance().getRemainingProgress();
        var r = mj.getClassByName("LevelBoxTrait");
        return !(!r || true !== r.getInstance().eventEnabled) && 1 === r.getInstance().getRemainingProgress();
    };
    NormalShowBackSwitchTrait.prototype.switchNormalShowBack = function (t) {
        var e = this.isCurLevelCanGainBoxReward(t), r = mj.getClassByName("NormalShowBackTrait");
        r && (r.getInstance().eventEnabled = e);
        var o = mj.getClassByName("Tile2NormalShowBackTrait");
        o && (o.getInstance().eventEnabled = e);
    };
    NormalShowBackSwitchTrait.traitKey = "NormalShowBackSwitch";
    NormalShowBackSwitchTrait = __decorate([
        mj.trait,
        mj.class("NormalShowBackSwitchTrait")
    ], NormalShowBackSwitchTrait);
    return NormalShowBackSwitchTrait;
}(Trait_1.default));
exports.default = NormalShowBackSwitchTrait;

cc._RF.pop();
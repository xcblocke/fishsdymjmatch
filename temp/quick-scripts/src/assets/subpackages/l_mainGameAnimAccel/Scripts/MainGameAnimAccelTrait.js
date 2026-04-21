"use strict";
cc._RF.push(module, 'b0d3frSJR9Af64tjBdPD4aV', 'MainGameAnimAccelTrait');
// subpackages/l_mainGameAnimAccel/Scripts/MainGameAnimAccelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var MainGameAnimAccelTrait = /** @class */ (function (_super) {
    __extends(MainGameAnimAccelTrait, _super);
    function MainGameAnimAccelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameAnimAccelTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        var r;
        e();
        var i = t.ins;
        this.setAnimSpeedRate(i, null !== (r = this._traitData.animSpeed) && void 0 !== r ? r : 1);
    };
    MainGameAnimAccelTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        var r = t.ins;
        this.setAnimSpeedRate(r, 1);
    };
    MainGameAnimAccelTrait.prototype.setAnimSpeedRate = function (t, e) {
        cc.director.getScheduler().setTimeScale(e);
        CommonUtils_1.AniTimeScale.set(e);
        t.viewDoAction("setTimeScale", e);
    };
    MainGameAnimAccelTrait.traitKey = "MainGameAnimAccel";
    MainGameAnimAccelTrait = __decorate([
        mj.trait,
        mj.class("MainGameAnimAccelTrait")
    ], MainGameAnimAccelTrait);
    return MainGameAnimAccelTrait;
}(Trait_1.default));
exports.default = MainGameAnimAccelTrait;

cc._RF.pop();
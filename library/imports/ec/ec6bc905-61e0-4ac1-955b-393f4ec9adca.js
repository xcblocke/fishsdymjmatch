"use strict";
cc._RF.push(module, 'ec6bckFYeBKwZVbOT9Oya3K', 'PropShowTrait');
// subpackages/l_propShow/Scripts/PropShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PropShowTrait = /** @class */ (function (_super) {
    __extends(PropShowTrait, _super);
    function PropShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropShowTrait.prototype.onGameUI_onLoad = function (t, e) {
        if (this.isGuideActive())
            e();
        else {
            var r = UserModel_1.default.getInstance().getCurrentGameType(), o = UserModel_1.default.getInstance().getGameDataByGameType(r);
            if (o) {
                if (cc.isValid(t.ins)) {
                    t.ins.updateHitTipsProp(o.getHitTipsNums());
                    t.ins.updateShuffleProp(o.getShuffleNums());
                }
                e();
            }
            else
                e();
        }
    };
    PropShowTrait.prototype.isGuideActive = function () {
        var t = mj.getClassByName("GuideTrait");
        return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || UserModel_1.default.getInstance().isGuideFinished());
    };
    PropShowTrait.traitKey = "PropShow";
    PropShowTrait = __decorate([
        mj.trait,
        mj.class("PropShowTrait")
    ], PropShowTrait);
    return PropShowTrait;
}(Trait_1.default));
exports.default = PropShowTrait;

cc._RF.pop();
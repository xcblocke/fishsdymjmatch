"use strict";
cc._RF.push(module, '93908PnwLVM555zwE2Vk+V5', 'PropUsedForceInterAdTrait');
// subpackages/l_propUsedForceInterAd/Scripts/PropUsedForceInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var PropUsedForceInterAdTrait = /** @class */ (function (_super) {
    __extends(PropUsedForceInterAdTrait, _super);
    function PropUsedForceInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropUsedForceInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropUsedForceInterAdTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if ("result_show" === (null === (r = e.args) || void 0 === r ? void 0 : r[2])) {
                if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
                    var n = mj.getClassByName("InterAdStartLevelTrait");
                    if (n && n.getInstance()) {
                        var o = n.getInstance();
                        if (true === o.eventEnabled) {
                            var a = o.getStartLevel();
                            if (UserModel_1.default.getInstance().normalData.getLevelId() <= a) {
                                var i = UserModel_1.default.getInstance().normalData, u = i.localData.usedShuffle || 0, p = i.localData.usedHitTips || 0;
                                if (u > 0 || p > 0) {
                                    t({
                                        returnVal: true,
                                        isBreak: true,
                                        returnType: TraitManager_1.TraitCallbackReturnType.return
                                    });
                                }
                                else {
                                    t();
                                }
                            }
                            else
                                t();
                        }
                        else
                            t();
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    PropUsedForceInterAdTrait.traitKey = "PropUsedForceInterAd";
    PropUsedForceInterAdTrait = __decorate([
        mj.trait,
        mj.class("PropUsedForceInterAdTrait")
    ], PropUsedForceInterAdTrait);
    return PropUsedForceInterAdTrait;
}(Trait_1.default));
exports.default = PropUsedForceInterAdTrait;

cc._RF.pop();
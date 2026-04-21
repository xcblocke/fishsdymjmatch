"use strict";
cc._RF.push(module, '3dd462PbsFI6ZbSB6XLG4sp', 'InterAdStartLevelNewTrait');
// subpackages/l_interAdStartLevelNew/Scripts/InterAdStartLevelNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdStartLevelNewTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLevelNewTrait, _super);
    function InterAdStartLevelNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isReadyToMainGame = false;
        return _this;
    }
    InterAdStartLevelNewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    InterAdStartLevelNewTrait.prototype.onHallNmlBtn_onBtnClk = function (e, t) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, t();
    };
    InterAdStartLevelNewTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = mj.getClassByName("InterAdStartLevelTrait");
            if (r && r.getInstance()) {
                var n = r.getInstance();
                if (true === n.eventEnabled) {
                    var a = n.getStartLevel();
                    if (true !== this.getHasNotPlayedFirstInter()) {
                        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Normal) {
                            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() <= a) {
                                t({
                                    returnVal: false,
                                    isBreak: true,
                                    returnType: TraitManager_1.TraitCallbackReturnType.return
                                });
                                return;
                            }
                        }
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
    InterAdStartLevelNewTrait.prototype.getHasNotPlayedFirstInter = function () {
        var e = mj.getClassByName("FirstInterstitialTimingTrait");
        return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || false !== e.getInstance().getHasPlayedFirstInter());
    };
    InterAdStartLevelNewTrait.traitKey = "InterAdStartLevelNew";
    InterAdStartLevelNewTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLevelNewTrait")
    ], InterAdStartLevelNewTrait);
    return InterAdStartLevelNewTrait;
}(Trait_1.default));
exports.default = InterAdStartLevelNewTrait;

cc._RF.pop();
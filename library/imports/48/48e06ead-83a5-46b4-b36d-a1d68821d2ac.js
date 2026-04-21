"use strict";
cc._RF.push(module, '48e066tg6VGtLNtodaIIdKs', 'InterAdStartLevelTrait');
// subpackages/l_interAdStartLevel/Scripts/InterAdStartLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdStartLevelTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLevelTrait, _super);
    function InterAdStartLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 9;
        return _this;
    }
    InterAdStartLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._startLevel = this._traitData.startLevel;
        void 0 !== this.traitData.secondOpenLevel && (this.localData.isFirstPlay ? this._startLevel = this.traitData.secondOpenLevel : this.localData.isFirstPlay = true);
    };
    InterAdStartLevelTrait.prototype.getStartLevel = function () {
        return this._startLevel;
    };
    InterAdStartLevelTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isSkip())
                e();
            else {
                var r = UserModel_1.default.getInstance().getMainGameData().getLevelId(), a = this.getStartLevel();
                if (true !== this.getHasNotPlayedFirstInter() && r <= a) {
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else {
                    e();
                }
            }
        }
        else
            e();
    };
    InterAdStartLevelTrait.prototype.getHasNotPlayedFirstInter = function () {
        var t = mj.getClassByName("FirstInterstitialTimingTrait");
        return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || false !== t.getInstance().getHasPlayedFirstInter());
    };
    InterAdStartLevelTrait.prototype.isSkip = function () {
        return false;
    };
    InterAdStartLevelTrait.traitKey = "InterAdStartLevel";
    __decorate([
        mj.traitEvent("InterAdStart_getStartLv")
    ], InterAdStartLevelTrait.prototype, "getStartLevel", null);
    __decorate([
        mj.traitEvent("InterAdStart_isSkip")
    ], InterAdStartLevelTrait.prototype, "isSkip", null);
    InterAdStartLevelTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLevelTrait")
    ], InterAdStartLevelTrait);
    return InterAdStartLevelTrait;
}(Trait_1.default));
exports.default = InterAdStartLevelTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a90c5IPc4xCRZAhIEknsk4V', 'BattleHideBannerTrait');
// subpackages/l_battleHideBanner/Scripts/BattleHideBannerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BattleHideBannerTrait = /** @class */ (function (_super) {
    __extends(BattleHideBannerTrait, _super);
    function BattleHideBannerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInBattle = false;
        return _this;
    }
    BattleHideBannerTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BattleHideBannerTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        this._isInBattle = true;
        AdManager_1.default.getInstance().hideBanner();
        e();
    };
    BattleHideBannerTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        this._isInBattle = false;
        AdManager_1.default.getInstance().showBanner();
        e();
    };
    BattleHideBannerTrait.prototype.onAdMgr_showBanner = function (t, e) {
        if (this._isInBattle) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    BattleHideBannerTrait.traitKey = "BattleHideBanner";
    BattleHideBannerTrait = __decorate([
        mj.trait,
        mj.class("BattleHideBannerTrait")
    ], BattleHideBannerTrait);
    return BattleHideBannerTrait;
}(Trait_1.default));
exports.default = BattleHideBannerTrait;

cc._RF.pop();
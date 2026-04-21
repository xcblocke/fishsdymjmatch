"use strict";
cc._RF.push(module, 'a585fuXFIlKkL0KJMaKOORj', 'FirstRoundNoInterAdTrait');
// subpackages/l_firstRoundNoInterAd/Scripts/FirstRoundNoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstRoundNoInterAdTrait = /** @class */ (function (_super) {
    __extends(FirstRoundNoInterAdTrait, _super);
    function FirstRoundNoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isFirstRoundAfterColdStart = false;
        return _this;
    }
    FirstRoundNoInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (UserModel_1.default.getInstance().isFirstOpen) {
            this._isFirstRoundAfterColdStart = false;
        }
        else {
            this._isFirstRoundAfterColdStart = true;
        }
    };
    FirstRoundNoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic && this._isFirstRoundAfterColdStart) {
            r({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    FirstRoundNoInterAdTrait.prototype.onUserModel_updateGameId = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._isFirstRoundAfterColdStart && (this._isFirstRoundAfterColdStart = false);
            r();
        }
        else
            r();
    };
    FirstRoundNoInterAdTrait.traitKey = "FirstRoundNoInterAd";
    FirstRoundNoInterAdTrait = __decorate([
        mj.trait,
        mj.class("FirstRoundNoInterAdTrait")
    ], FirstRoundNoInterAdTrait);
    return FirstRoundNoInterAdTrait;
}(Trait_1.default));
exports.default = FirstRoundNoInterAdTrait;

cc._RF.pop();
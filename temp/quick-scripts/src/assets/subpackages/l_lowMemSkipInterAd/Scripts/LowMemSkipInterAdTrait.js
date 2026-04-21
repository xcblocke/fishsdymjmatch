"use strict";
cc._RF.push(module, '1a125stah1HQa0jMQMz+4PZ', 'LowMemSkipInterAdTrait');
// subpackages/l_lowMemSkipInterAd/Scripts/LowMemSkipInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LowMemSkipInterAdTrait = /** @class */ (function (_super) {
    __extends(LowMemSkipInterAdTrait, _super);
    function LowMemSkipInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "ramLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.memory) && void 0 !== e ? e : 4096;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "probability", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.probability) && void 0 !== e ? e : 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "curDeviceRam", {
        get: function () {
            var t;
            return null === (t = LoginModel_1.default.getInstance().deviceInfo) || void 0 === t ? void 0 : t.all_memory;
        },
        enumerable: false,
        configurable: true
    });
    LowMemSkipInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowMemSkipInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = this.curDeviceRam;
            if (void 0 !== r && r <= this.ramLimit) {
                if (100 * Math.random() < this.probability) {
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
            }
            e();
        }
        else
            e();
    };
    LowMemSkipInterAdTrait.traitKey = "LowMemSkipInterAd";
    LowMemSkipInterAdTrait = __decorate([
        mj.trait,
        mj.class("LowMemSkipInterAdTrait")
    ], LowMemSkipInterAdTrait);
    return LowMemSkipInterAdTrait;
}(Trait_1.default));
exports.default = LowMemSkipInterAdTrait;

cc._RF.pop();
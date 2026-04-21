"use strict";
cc._RF.push(module, '44ea1n6nSFCSY2o6zJ3KH8r', 'ColdInterAdDelayCDTrait');
// subpackages/l_coldInterAdDelayCD/Scripts/ColdInterAdDelayCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdInterAdDelayCDTrait = /** @class */ (function (_super) {
    __extends(ColdInterAdDelayCDTrait, _super);
    function ColdInterAdDelayCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coldStartFreeTime = 70000;
        return _this;
    }
    ColdInterAdDelayCDTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
    };
    ColdInterAdDelayCDTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = UserModel_1.default.getInstance().getAppStartTime(), o = Date.now() - r;
            if (o < this._coldStartFreeTime) {
                Math.ceil((this._coldStartFreeTime - o) / 1000);
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else
                e();
        }
        else
            e();
    };
    ColdInterAdDelayCDTrait.traitKey = "ColdInterAdDelayCD";
    ColdInterAdDelayCDTrait = __decorate([
        mj.trait,
        mj.class("ColdInterAdDelayCDTrait")
    ], ColdInterAdDelayCDTrait);
    return ColdInterAdDelayCDTrait;
}(Trait_1.default));
exports.default = ColdInterAdDelayCDTrait;

cc._RF.pop();
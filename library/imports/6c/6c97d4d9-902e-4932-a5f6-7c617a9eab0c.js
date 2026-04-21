"use strict";
cc._RF.push(module, '6c97dTZkC5JMqX2fGF6nqsM', 'BeforeInterAdGapTimeTrait');
// subpackages/l_beforeInterAdGapTime/Scripts/BeforeInterAdGapTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BeforeInterAdGapTimeTrait = /** @class */ (function (_super) {
    __extends(BeforeInterAdGapTimeTrait, _super);
    function BeforeInterAdGapTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gapTime = 86400000;
        _this._shouldSkipInterAd = false;
        return _this;
    }
    BeforeInterAdGapTimeTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTimeHours) && (this._gapTime = 3600000 * this._traitData.gapTimeHours);
        var r = UserModel_1.default.getInstance(), i = this.localData.lastColdStartTime || 0, o = r.getAppStartTime();
        if (i > 0 && (0 === i ? 0 : o - i) > this._gapTime) {
            this._shouldSkipInterAd = true;
        }
        else {
            this._shouldSkipInterAd = false;
        }
        this.localData.lastColdStartTime = o;
        this.localData = this.localData;
    };
    BeforeInterAdGapTimeTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var i = null === (r = t.args) || void 0 === r ? void 0 : r[3];
            if ("beforeInterAd" === (null == i ? void 0 : i.adTimeType) && this._shouldSkipInterAd) {
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
        else
            e();
    };
    BeforeInterAdGapTimeTrait.traitKey = "BeforeInterAdGapTime";
    BeforeInterAdGapTimeTrait = __decorate([
        mj.trait,
        mj.class("BeforeInterAdGapTimeTrait")
    ], BeforeInterAdGapTimeTrait);
    return BeforeInterAdGapTimeTrait;
}(Trait_1.default));
exports.default = BeforeInterAdGapTimeTrait;

cc._RF.pop();
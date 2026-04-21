"use strict";
cc._RF.push(module, '6a6387aXB9JK6ciy+p4yQCT', 'LowStarIntervalTrait');
// subpackages/l_ratingDialog/Scripts/LowStarIntervalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowStarIntervalTrait = /** @class */ (function (_super) {
    __extends(LowStarIntervalTrait, _super);
    function LowStarIntervalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowStarIntervalTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            submitIndex: null !== (e = this._traitData.submitIndex) && void 0 !== e ? e : 1,
            intervalDays: null !== (o = this._traitData.intervalDays) && void 0 !== o ? o : 4
        };
        void 0 === this.localData.shouldApplyInterval && (this.localData.shouldApplyInterval = false);
    };
    LowStarIntervalTrait.prototype.onRatingDlg_onUserRating = function (t, e) {
        this.localData.totalShowCount++;
        var o = t.args[0];
        o >= 1 && o <= 3 && this.localData.totalShowCount === this._config.submitIndex && (this.localData.shouldApplyInterval = true);
        e();
    };
    LowStarIntervalTrait.prototype.onRatingDlg_getLowStarIntv = function (t, e) {
        if (this.localData.shouldApplyInterval) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.intervalDays
            });
        }
        else {
            e();
        }
    };
    LowStarIntervalTrait.traitKey = "LowStarInterval";
    LowStarIntervalTrait = __decorate([
        mj.trait,
        mj.class("LowStarIntervalTrait")
    ], LowStarIntervalTrait);
    return LowStarIntervalTrait;
}(Trait_1.default));
exports.default = LowStarIntervalTrait;

cc._RF.pop();
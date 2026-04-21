"use strict";
cc._RF.push(module, '4cbe8+HI3BIWZfynxDa78ou', 'ShuffleLowDeathRateTrait');
// subpackages/l_shuffleLowDeathRate/Scripts/ShuffleLowDeathRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleLowDeathRateTrait = /** @class */ (function (_super) {
    __extends(ShuffleLowDeathRateTrait, _super);
    function ShuffleLowDeathRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleLowDeathRateTrait_1 = ShuffleLowDeathRateTrait;
    ShuffleLowDeathRateTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        null !== (e = (r = this.localData).targetLowDeathLevel) && void 0 !== e || (r.targetLowDeathLevel = 0);
    };
    ShuffleLowDeathRateTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    ShuffleLowDeathRateTrait.prototype.getMinLevel = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel) || 21;
    };
    ShuffleLowDeathRateTrait.prototype.onIptShuffle_pushEffect = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = this.getCurrentLevel();
            o >= this.getMinLevel() && (this.localData.targetLowDeathLevel = o + 1);
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 处理洗牌事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleLowDeathRateTrait.prototype.isTargetLevel = function (t) {
        var e = this.localData.targetLowDeathLevel || 0;
        return e > 0 && t === e;
    };
    ShuffleLowDeathRateTrait.prototype.onExtNormLv_hasDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isTargetLevel(o)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 检查低死亡率标记失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleLowDeathRateTrait.prototype.onExtNormLv_getDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isTargetLevel(o)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: -3
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 获取低死亡率调整值失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var ShuffleLowDeathRateTrait_1;
    ShuffleLowDeathRateTrait.traitKey = "ShuffleLowDeathRate";
    ShuffleLowDeathRateTrait = ShuffleLowDeathRateTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleLowDeathRateTrait")
    ], ShuffleLowDeathRateTrait);
    return ShuffleLowDeathRateTrait;
}(ExtractTrait_1.default));
exports.default = ShuffleLowDeathRateTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1ed6d3/OXhB6pzM6QViuvUs', 'ShuffleDeathAdjustTrait');
// subpackages/l_shuffleDeathAdjust/Scripts/ShuffleDeathAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleDeathAdjustTrait = /** @class */ (function (_super) {
    __extends(ShuffleDeathAdjustTrait, _super);
    function ShuffleDeathAdjustTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleDeathAdjustTrait_1 = ShuffleDeathAdjustTrait;
    ShuffleDeathAdjustTrait.prototype.onLoad = function () {
        var e, r, o, a, i, n, s, u;
        _super.prototype.onLoad.call(this);
        this._config = {
            startLevel: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 12,
            checkInterval: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.checkInterval) && void 0 !== a ? a : 3,
            historySize: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.historySize) && void 0 !== n ? n : 7
        };
        null !== (s = (u = this.localData).shuffleHistory) && void 0 !== s || (u.shuffleHistory = []);
    };
    ShuffleDeathAdjustTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    ShuffleDeathAdjustTrait.prototype.getGameData = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal);
    };
    ShuffleDeathAdjustTrait.prototype.isCheckPoint = function (t) {
        var e = this._config, r = e.startLevel, o = e.checkInterval;
        return t >= r && (t - r) % o == 0;
    };
    ShuffleDeathAdjustTrait.prototype.getRecentShuffleCount = function () {
        return (this.localData.shuffleHistory || []).reduce(function (t, e) {
            return t + e;
        }, 0);
    };
    ShuffleDeathAdjustTrait.prototype.calcAdjustment = function () {
        var t = this.getGameData().getShuffleNums(), e = this.getRecentShuffleCount(), r = 2;
        if (t <= 5) {
            r = 0;
        }
        else {
            t <= 10 && (r = 1);
        }
        var o = 2;
        if (e > 4) {
            o = 0;
        }
        else {
            e > 2 && (o = 1);
        }
        return [[0, -1, -2], [1, 0, -1], [2, 1, 0]][r][o];
    };
    ShuffleDeathAdjustTrait.prototype.onGsListener_onGameEnd = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = this.getGameData().getUsedShuffle();
            this.localData.shuffleHistory = this.localData.shuffleHistory || [];
            this.localData.shuffleHistory.push(o);
            this.localData.shuffleHistory.length > this._config.historySize && this.localData.shuffleHistory.shift();
            this.localData.shuffleHistory = this.localData.shuffleHistory;
            e();
        }
        catch (t) {
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 记录洗牌使用次数失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleDeathAdjustTrait.prototype.onExtNormLv_hasDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isCheckPoint(o)) {
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
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 检查统计点失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleDeathAdjustTrait.prototype.onExtNormLv_getDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isCheckPoint(o)) {
                var a = this.calcAdjustment();
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: a
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleDeathAdjustTrait_1.traitKey + "] 获取调整值失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var ShuffleDeathAdjustTrait_1;
    ShuffleDeathAdjustTrait.traitKey = "ShuffleDeathAdjust";
    ShuffleDeathAdjustTrait = ShuffleDeathAdjustTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleDeathAdjustTrait")
    ], ShuffleDeathAdjustTrait);
    return ShuffleDeathAdjustTrait;
}(ExtractTrait_1.default));
exports.default = ShuffleDeathAdjustTrait;

cc._RF.pop();
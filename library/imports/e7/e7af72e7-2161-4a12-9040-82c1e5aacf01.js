"use strict";
cc._RF.push(module, 'e7af7LnIWFKEpBAgsHlqs8B', 'LevelBoxPushTrait');
// subpackages/l_levelBoxPush/Scripts/LevelBoxPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var h = {
    progressThresholds: [0.5, 0.8],
    pushHour: 13,
    opewaynum: "mbgqbox1",
    taskType: "mbgqbox01"
};
var LevelBoxPushTrait = /** @class */ (function (_super) {
    __extends(LevelBoxPushTrait, _super);
    function LevelBoxPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = Object.assign({}, h);
        _this._lastRewardCount = -1;
        return _this;
    }
    LevelBoxPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.progressThresholds && (this._config.progressThresholds = this._traitData.progressThresholds);
        }
    };
    LevelBoxPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    LevelBoxPushTrait.prototype.getNormalBoxTrait = function () {
        var t = mj.getClassByName("NormalBoxTrait"), e = null == t ? void 0 : t.getInstance();
        return e && true === e.eventEnabled ? e : null;
    };
    LevelBoxPushTrait.prototype.getLevelBoxTrait = function () {
        var t = mj.getClassByName("LevelBoxTrait"), e = null == t ? void 0 : t.getInstance();
        return e && true === e.eventEnabled ? e : null;
    };
    LevelBoxPushTrait.prototype.getActiveBoxTrait = function () {
        var t = this.getNormalBoxTrait();
        if (t)
            return {
                trait: t,
                name: "NormalBox"
            };
        var e = this.getLevelBoxTrait();
        return e ? {
            trait: e,
            name: "LevelBox"
        } : null;
    };
    LevelBoxPushTrait.prototype.getBoxProgressInfo = function () {
        var t, e, r = this.getActiveBoxTrait();
        if (!r)
            return null;
        var o = r.trait, n = (r.name, null === (t = o.getBoxTargetProgress) || void 0 === t ? void 0 : t.call(o)), a = null === (e = o.getRemainingProgress) || void 0 === e ? void 0 : e.call(o);
        return void 0 === n || void 0 === a ? null : n < 0 ? null : {
            currentProgress: n - a,
            boxLimit: n,
            cycleId: n
        };
    };
    LevelBoxPushTrait.prototype.checkNewBoxCycle = function (t) {
        if (-1 === this._lastRewardCount) {
            this._lastRewardCount = t;
            return false;
        }
        if (t !== this._lastRewardCount) {
            this._lastRewardCount = t;
            return true;
        }
        return false;
    };
    LevelBoxPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    LevelBoxPushTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            this.checkAndTriggerPush();
            e();
        }
        else
            e();
    };
    LevelBoxPushTrait.prototype.onLevelBoxMdl_setNewBox = function (t, e) {
        this.removePush();
        e();
    };
    LevelBoxPushTrait.prototype.checkAndTriggerPush = function () {
        var t = this.getBoxProgressInfo();
        if (t) {
            var e = t.currentProgress, r = t.boxLimit, o = t.cycleId;
            this.checkNewBoxCycle(o);
            if (!(r <= 0)) {
                for (var n = this.getConfig(), a = false, i = 0, s = 0; s < n.progressThresholds.length; s++) {
                    var u = n.progressThresholds[s];
                    if (e >= Math.ceil(r * u)) {
                        a = true;
                        i = s;
                    }
                }
                a && this.sendPush(i);
            }
        }
    };
    LevelBoxPushTrait.prototype.sendPush = function (t) {
        var e = this.getConfig(), r = PushManager_1.default.getInstance().getPushTimestamp(e.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: e.opewaynum,
            taskType: e.taskType,
            sendTime: r
        }, {
            keyNum: t.toString()
        });
    };
    LevelBoxPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    LevelBoxPushTrait.traitKey = "LevelBoxPush";
    LevelBoxPushTrait = __decorate([
        mj.trait,
        mj.class("LevelBoxPushTrait")
    ], LevelBoxPushTrait);
    return LevelBoxPushTrait;
}(Trait_1.default));
exports.default = LevelBoxPushTrait;

cc._RF.pop();
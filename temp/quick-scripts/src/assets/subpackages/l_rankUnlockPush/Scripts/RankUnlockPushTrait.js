"use strict";
cc._RF.push(module, '65dc8CPj5NERJxQaxezFhyS', 'RankUnlockPushTrait');
// subpackages/l_rankUnlockPush/Scripts/RankUnlockPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var c = {
    progressThreshold: 0.8,
    pushHour: 17,
    opewaynum: "mbgqgoldunlock1",
    taskType: "mbgqgoldunlock01"
};
var RankUnlockPushTrait = /** @class */ (function (_super) {
    __extends(RankUnlockPushTrait, _super);
    function RankUnlockPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = c;
        return _this;
    }
    RankUnlockPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.progressThreshold && (this._config.progressThreshold = this._traitData.progressThreshold);
        }
    };
    RankUnlockPushTrait.prototype.registerTile2Event = function () {
        var e, t, r, n = null === (e = this._traitData.events) || void 0 === e ? void 0 : e.find(function (e) {
            return "BeforeWinBhv_doOthLgc" === e.event;
        }), o = null !== (t = null == n ? void 0 : n.priority) && void 0 !== t ? t : 0, i = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : 2;
        this.registerEvent([{
                event: "Tile2BfWinBhv_doOthLgc",
                priority: o,
                type: i
            }]);
    };
    RankUnlockPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    RankUnlockPushTrait.prototype.getRankUnlockLevel = function () {
        var e, t = mj.getClassByName("RankTrait");
        if (t && t.getInstance()) {
            var r = t.getInstance(), n = (null === (e = r.getLimitLevel) || void 0 === e ? void 0 : e.call(r)) || 0;
            if ("number" == typeof n && n > 0)
                return n;
        }
        this.eventEnabled = false;
        return 0;
    };
    RankUnlockPushTrait.prototype.onLoginM_enterGame = function (e, t) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    RankUnlockPushTrait.prototype.onBeforeWinBhv_doOthLgc = function (e, t) {
        this.handleWinEvent();
        t();
    };
    RankUnlockPushTrait.prototype.onTile2BfWinBhv_doOthLgc = function (e, t) {
        this.handleWinEvent();
        t();
    };
    RankUnlockPushTrait.prototype.handleWinEvent = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameType();
        e !== GameTypeEnums_1.MjGameType.Normal && e !== GameTypeEnums_1.MjGameType.Tile2Normal || this.checkAndTriggerPush();
    };
    RankUnlockPushTrait.prototype.checkAndTriggerPush = function () {
        var e = this.getRankUnlockLevel(), t = UserModel_1.default.getInstance(), r = t.getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? GameTypeEnums_1.MjGameType.Tile2Normal : GameTypeEnums_1.MjGameType.Normal, n = t.getGameDataByGameType(r).getLevelId();
        if (n > e)
            this.removePush();
        else {
            var o = this.getConfig().progressThreshold;
            n - 1 < Math.ceil(e * o) || this.sendPush();
        }
    };
    RankUnlockPushTrait.prototype.sendPush = function () {
        var e = this.getConfig(), t = PushManager_1.default.getInstance().getPushTimestamp(e.pushHour), r = this.getRankUnlockLevel(), n = e.progressThreshold;
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: e.opewaynum,
            taskType: e.taskType,
            sendTime: t
        }, {
            keyNum: "unlock_" + r + "_" + n
        });
    };
    RankUnlockPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    RankUnlockPushTrait.traitKey = "RankUnlockPush";
    RankUnlockPushTrait = __decorate([
        mj.trait,
        mj.class("RankUnlockPushTrait")
    ], RankUnlockPushTrait);
    return RankUnlockPushTrait;
}(Trait_1.default));
exports.default = RankUnlockPushTrait;

cc._RF.pop();
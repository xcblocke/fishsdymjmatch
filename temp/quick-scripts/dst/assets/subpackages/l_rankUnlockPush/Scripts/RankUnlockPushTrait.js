
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankUnlockPush/Scripts/RankUnlockPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtVbmxvY2tQdXNoL1NjcmlwdHMvUmFua1VubG9ja1B1c2hUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRztJQUNOLGlCQUFpQixFQUFFLEdBQUc7SUFDdEIsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7Q0FDN0IsQ0FBQztBQUdGO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBMEZDO1FBekZDLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBeUZkLENBQUM7SUF2RkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0YsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xHLEtBQUssQ0FBQyxLQUFL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QUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDMUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzFCLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztZQUN0QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7WUFDcEIsUUFBUSxFQUFFLENBQUM7U0FDWixFQUFFO1lBQ0QsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFVLEdBQVY7UUFDRSxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBdkZNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFGaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTBGdkM7SUFBRCwwQkFBQztDQTFGRCxBQTBGQyxDQTFGZ0QsZUFBSyxHQTBGckQ7a0JBMUZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9wdXNoL1B1c2hNYW5hZ2VyJztcbmltcG9ydCBKdW1wTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG52YXIgYyA9IHtcbiAgcHJvZ3Jlc3NUaHJlc2hvbGQ6IDAuOCxcbiAgcHVzaEhvdXI6IDE3LFxuICBvcGV3YXludW06IFwibWJncWdvbGR1bmxvY2sxXCIsXG4gIHRhc2tUeXBlOiBcIm1iZ3Fnb2xkdW5sb2NrMDFcIlxufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1VubG9ja1B1c2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1VubG9ja1B1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IGM7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua1VubG9ja1B1c2hcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJUaWxlMkV2ZW50KCk7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YSkge1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuVGltZSAmJiAodGhpcy5fY29uZmlnLnB1c2hIb3VyID0gdGhpcy5fdHJhaXREYXRhLlRpbWUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUgJiYgKHRoaXMuX2NvbmZpZy5vcGV3YXludW0gPSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlICYmICh0aGlzLl9jb25maWcudGFza1R5cGUgPSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLnByb2dyZXNzVGhyZXNob2xkICYmICh0aGlzLl9jb25maWcucHJvZ3Jlc3NUaHJlc2hvbGQgPSB0aGlzLl90cmFpdERhdGEucHJvZ3Jlc3NUaHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlclRpbGUyRXZlbnQoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIG4gPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5ldmVudHMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJCZWZvcmVXaW5CaHZfZG9PdGhMZ2NcIiA9PT0gZS5ldmVudDtcbiAgICAgIH0pLFxuICAgICAgbyA9IG51bGwgIT09ICh0ID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5wcmlvcml0eSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAsXG4gICAgICBpID0gbnVsbCAhPT0gKHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLnR5cGUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAyO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiVGlsZTJCZldpbkJodl9kb090aExnY1wiLFxuICAgICAgcHJpb3JpdHk6IG8sXG4gICAgICB0eXBlOiBpXG4gICAgfV0pO1xuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGdldFJhbmtVbmxvY2tMZXZlbCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtUcmFpdFwiKTtcbiAgICBpZiAodCAmJiB0LmdldEluc3RhbmNlKCkpIHtcbiAgICAgIHZhciByID0gdC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBuID0gKG51bGwgPT09IChlID0gci5nZXRMaW1pdExldmVsKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwocikpIHx8IDA7XG4gICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgbiAmJiBuID4gMCkgcmV0dXJuIG47XG4gICAgfVxuICAgIHRoaXMuZXZlbnRFbmFibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKGUsIHQpIHtcbiAgICB2YXIgciA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGlmIChyICYmIHIub3Bld2F5bnVtID09PSB0aGlzLl9jb25maWcub3Bld2F5bnVtKSB7XG4gICAgICBKdW1wTWFuYWdlci5nZXRJbnN0YW5jZSgpLmp1bXBUb0dhbWUoKTtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25CZWZvcmVXaW5CaHZfZG9PdGhMZ2MoZSwgdCkge1xuICAgIHRoaXMuaGFuZGxlV2luRXZlbnQoKTtcbiAgICB0KCk7XG4gIH1cbiAgb25UaWxlMkJmV2luQmh2X2RvT3RoTGdjKGUsIHQpIHtcbiAgICB0aGlzLmhhbmRsZVdpbkV2ZW50KCk7XG4gICAgdCgpO1xuICB9XG4gIGhhbmRsZVdpbkV2ZW50KCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgZSAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgZSAhPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCB8fCB0aGlzLmNoZWNrQW5kVHJpZ2dlclB1c2goKTtcbiAgfVxuICBjaGVja0FuZFRyaWdnZXJQdXNoKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRSYW5rVW5sb2NrTGV2ZWwoKSxcbiAgICAgIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHIgPSB0LmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA6IE1qR2FtZVR5cGUuTm9ybWFsLFxuICAgICAgbiA9IHQuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHIpLmdldExldmVsSWQoKTtcbiAgICBpZiAobiA+IGUpIHRoaXMucmVtb3ZlUHVzaCgpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldENvbmZpZygpLnByb2dyZXNzVGhyZXNob2xkO1xuICAgICAgbiAtIDEgPCBNYXRoLmNlaWwoZSAqIG8pIHx8IHRoaXMuc2VuZFB1c2goKTtcbiAgICB9XG4gIH1cbiAgc2VuZFB1c2goKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENvbmZpZygpLFxuICAgICAgdCA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFRpbWVzdGFtcChlLnB1c2hIb3VyKSxcbiAgICAgIHIgPSB0aGlzLmdldFJhbmtVbmxvY2tMZXZlbCgpLFxuICAgICAgbiA9IGUucHJvZ3Jlc3NUaHJlc2hvbGQ7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2goe1xuICAgICAgb3Bld2F5bnVtOiBlLm9wZXdheW51bSxcbiAgICAgIHRhc2tUeXBlOiBlLnRhc2tUeXBlLFxuICAgICAgc2VuZFRpbWU6IHRcbiAgICB9LCB7XG4gICAgICBrZXlOdW06IFwidW5sb2NrX1wiICsgciArIFwiX1wiICsgblxuICAgIH0pO1xuICB9XG4gIHJlbW92ZVB1c2goKSB7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2hSZW1vdmVkKHRoaXMuZ2V0Q29uZmlnKCkub3Bld2F5bnVtKTtcbiAgfVxufSJdfQ==
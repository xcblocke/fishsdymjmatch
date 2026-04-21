
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBoxPush/Scripts/LevelBoxPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94UHVzaC9TY3JpcHRzL0xldmVsQm94UHVzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUNwRiwrRUFBMEU7QUFDMUUsc0VBQWlFO0FBQ2pFLElBQUksQ0FBQyxHQUFHO0lBQ04sa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzlCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLFdBQVc7Q0FDdEIsQ0FBQztBQUdGO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBb0hDO1FBbkhDLGFBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixzQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFrSHhCLENBQUM7SUFoSEMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0YsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xHLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN6SDtJQUNILENBQUM7SUFDRCxxQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQ3pDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRCxDQUFDO0lBQ0QsNENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFDeEMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUM7WUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxXQUFXO2FBQ2xCLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFDRCw4Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hGLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7SUFDSixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELDhDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxtREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdEUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxtREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDekIsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNQO2lCQUNGO2dCQUNELENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7WUFDdEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxDQUFDO1NBQ1osRUFBRTtZQUNELE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBVSxHQUFWO1FBQ0UscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQWhITSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQUhkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FvSHJDO0lBQUQsd0JBQUM7Q0FwSEQsQUFvSEMsQ0FwSDhDLGVBQUssR0FvSG5EO2tCQXBIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlcic7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2p1bXAvSnVtcE1hbmFnZXInO1xudmFyIGggPSB7XG4gIHByb2dyZXNzVGhyZXNob2xkczogWzAuNSwgMC44XSxcbiAgcHVzaEhvdXI6IDEzLFxuICBvcGV3YXludW06IFwibWJncWJveDFcIixcbiAgdGFza1R5cGU6IFwibWJncWJveDAxXCJcbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxldmVsQm94UHVzaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEJveFB1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGgpO1xuICBfbGFzdFJld2FyZENvdW50ID0gLTE7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTGV2ZWxCb3hQdXNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fdHJhaXREYXRhKSB7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5UaW1lICYmICh0aGlzLl9jb25maWcucHVzaEhvdXIgPSB0aGlzLl90cmFpdERhdGEuVGltZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSAmJiAodGhpcy5fY29uZmlnLm9wZXdheW51bSA9IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUgJiYgKHRoaXMuX2NvbmZpZy50YXNrVHlwZSA9IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEucHJvZ3Jlc3NUaHJlc2hvbGRzICYmICh0aGlzLl9jb25maWcucHJvZ3Jlc3NUaHJlc2hvbGRzID0gdGhpcy5fdHJhaXREYXRhLnByb2dyZXNzVGhyZXNob2xkcyk7XG4gICAgfVxuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGdldE5vcm1hbEJveFRyYWl0KCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJOb3JtYWxCb3hUcmFpdFwiKSxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuIGUgJiYgdHJ1ZSA9PT0gZS5ldmVudEVuYWJsZWQgPyBlIDogbnVsbDtcbiAgfVxuICBnZXRMZXZlbEJveFRyYWl0KCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJMZXZlbEJveFRyYWl0XCIpLFxuICAgICAgZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gZSAmJiB0cnVlID09PSBlLmV2ZW50RW5hYmxlZCA/IGUgOiBudWxsO1xuICB9XG4gIGdldEFjdGl2ZUJveFRyYWl0KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXROb3JtYWxCb3hUcmFpdCgpO1xuICAgIGlmICh0KSByZXR1cm4ge1xuICAgICAgdHJhaXQ6IHQsXG4gICAgICBuYW1lOiBcIk5vcm1hbEJveFwiXG4gICAgfTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0TGV2ZWxCb3hUcmFpdCgpO1xuICAgIHJldHVybiBlID8ge1xuICAgICAgdHJhaXQ6IGUsXG4gICAgICBuYW1lOiBcIkxldmVsQm94XCJcbiAgICB9IDogbnVsbDtcbiAgfVxuICBnZXRCb3hQcm9ncmVzc0luZm8oKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgciA9IHRoaXMuZ2V0QWN0aXZlQm94VHJhaXQoKTtcbiAgICBpZiAoIXIpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gci50cmFpdCxcbiAgICAgIG4gPSAoci5uYW1lLCBudWxsID09PSAodCA9IG8uZ2V0Qm94VGFyZ2V0UHJvZ3Jlc3MpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY2FsbChvKSksXG4gICAgICBhID0gbnVsbCA9PT0gKGUgPSBvLmdldFJlbWFpbmluZ1Byb2dyZXNzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwobyk7XG4gICAgcmV0dXJuIHZvaWQgMCA9PT0gbiB8fCB2b2lkIDAgPT09IGEgPyBudWxsIDogbiA8IDAgPyBudWxsIDoge1xuICAgICAgY3VycmVudFByb2dyZXNzOiBuIC0gYSxcbiAgICAgIGJveExpbWl0OiBuLFxuICAgICAgY3ljbGVJZDogblxuICAgIH07XG4gIH1cbiAgY2hlY2tOZXdCb3hDeWNsZSh0KSB7XG4gICAgaWYgKC0xID09PSB0aGlzLl9sYXN0UmV3YXJkQ291bnQpIHtcbiAgICAgIHRoaXMuX2xhc3RSZXdhcmRDb3VudCA9IHQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0ICE9PSB0aGlzLl9sYXN0UmV3YXJkQ291bnQpIHtcbiAgICAgIHRoaXMuX2xhc3RSZXdhcmRDb3VudCA9IHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgdmFyIHIgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE9wZW5BcHBPcGV3YXkoKTtcbiAgICBpZiAociAmJiByLm9wZXdheW51bSA9PT0gdGhpcy5fY29uZmlnLm9wZXdheW51bSkge1xuICAgICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9HYW1lKCk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQmVmb3JlV2luQmh2X2RvT3RoTGdjKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB0aGlzLmNoZWNrQW5kVHJpZ2dlclB1c2goKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uTGV2ZWxCb3hNZGxfc2V0TmV3Qm94KHQsIGUpIHtcbiAgICB0aGlzLnJlbW92ZVB1c2goKTtcbiAgICBlKCk7XG4gIH1cbiAgY2hlY2tBbmRUcmlnZ2VyUHVzaCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Qm94UHJvZ3Jlc3NJbmZvKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBlID0gdC5jdXJyZW50UHJvZ3Jlc3MsXG4gICAgICAgIHIgPSB0LmJveExpbWl0LFxuICAgICAgICBvID0gdC5jeWNsZUlkO1xuICAgICAgdGhpcy5jaGVja05ld0JveEN5Y2xlKG8pO1xuICAgICAgaWYgKCEociA8PSAwKSkge1xuICAgICAgICBmb3IgKHZhciBuID0gdGhpcy5nZXRDb25maWcoKSwgYSA9IGZhbHNlLCBpID0gMCwgcyA9IDA7IHMgPCBuLnByb2dyZXNzVGhyZXNob2xkcy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgIHZhciB1ID0gbi5wcm9ncmVzc1RocmVzaG9sZHNbc107XG4gICAgICAgICAgaWYgKGUgPj0gTWF0aC5jZWlsKHIgKiB1KSkge1xuICAgICAgICAgICAgYSA9IHRydWU7XG4gICAgICAgICAgICBpID0gcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYSAmJiB0aGlzLnNlbmRQdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZW5kUHVzaCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENvbmZpZygpLFxuICAgICAgciA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFRpbWVzdGFtcChlLnB1c2hIb3VyKTtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaCh7XG4gICAgICBvcGV3YXludW06IGUub3Bld2F5bnVtLFxuICAgICAgdGFza1R5cGU6IGUudGFza1R5cGUsXG4gICAgICBzZW5kVGltZTogclxuICAgIH0sIHtcbiAgICAgIGtleU51bTogdC50b1N0cmluZygpXG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlUHVzaCgpIHtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaFJlbW92ZWQodGhpcy5nZXRDb25maWcoKS5vcGV3YXludW0pO1xuICB9XG59Il19
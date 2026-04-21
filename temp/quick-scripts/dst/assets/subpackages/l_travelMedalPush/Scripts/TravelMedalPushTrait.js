
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelMedalPush/Scripts/TravelMedalPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34fc3IqeWNGObp4XeJgtuLN', 'TravelMedalPushTrait');
// subpackages/l_travelMedalPush/Scripts/TravelMedalPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var TravelMedalPushTrait = /** @class */ (function (_super) {
    __extends(TravelMedalPushTrait, _super);
    function TravelMedalPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            pushHour: 19,
            opewaynum: "mblxmedal1",
            taskType: "mblxmedal01",
            medalTriggers: [{
                    medalLevel: 7,
                    triggerLevels: [4]
                }, {
                    medalLevel: 41,
                    triggerLevels: [22, 35]
                }, {
                    medalLevel: 91,
                    triggerLevels: [65, 84]
                }]
        };
        return _this;
    }
    TravelMedalPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.medalTriggers && (this._config.medalTriggers = this._traitData.medalTriggers);
        }
    };
    TravelMedalPushTrait.prototype.getTravelGameData = function () {
        var e = mj.getClassByName("TravelGameData");
        return null == e ? void 0 : e.getInstance();
    };
    TravelMedalPushTrait.prototype.getCurrentLevel = function () {
        var e, t = this.getTravelGameData();
        return (null === (e = null == t ? void 0 : t.getLevelId) || void 0 === e ? void 0 : e.call(t)) || 0;
    };
    TravelMedalPushTrait.prototype.getPushTimestamp = function () {
        var e = new Date(), t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), this._config.pushHour, 0, 0, 0);
        e.getTime() > t.getTime() && t.setDate(t.getDate() + 1);
        return t.getTime();
    };
    TravelMedalPushTrait.prototype.checkTriggerLevel = function (e) {
        var t, r;
        try {
            for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
                var i = n.value;
                if (i.triggerLevels.includes(e))
                    return i.medalLevel;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    TravelMedalPushTrait.prototype.checkMedalLevel = function (e) {
        var t, r;
        try {
            for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
                var i = n.value;
                if (i.medalLevel === e)
                    return i.medalLevel;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    TravelMedalPushTrait.prototype.sendPush = function (e) {
        var t = this.getPushTimestamp();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: this._config.opewaynum,
            taskType: this._config.taskType,
            sendTime: t
        }, {
            keyNum: e.toString()
        });
    };
    TravelMedalPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    TravelMedalPushTrait.prototype.onTLWinCtrl_viewShow = function (e, t) {
        if (this._config) {
            var r = this.getCurrentLevel() - 1;
            if (this.checkMedalLevel(r) > 0) {
                this.cancelPush();
                t();
            }
            else {
                var a = this.checkTriggerLevel(r);
                a > 0 && this.sendPush(a);
                t();
            }
        }
        else
            t();
    };
    TravelMedalPushTrait.prototype.onLoginM_enterGame = function (e, t) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            if (!JumpManager_1.default.getInstance().jumpToTravelGame()) {
                t();
                return;
            }
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    TravelMedalPushTrait.traitKey = "TravelMedalPush";
    TravelMedalPushTrait = __decorate([
        mj.trait,
        mj.class("TravelMedalPushTrait")
    ], TravelMedalPushTrait);
    return TravelMedalPushTrait;
}(Trait_1.default));
exports.default = TravelMedalPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbE1lZGFsUHVzaC9TY3JpcHRzL1RyYXZlbE1lZGFsUHVzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLCtFQUEwRTtBQUcxRTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQXdIQztRQXZIQyxhQUFPLEdBQUc7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGFBQWEsRUFBRSxDQUFDO29CQUNkLFVBQVUsRUFBRSxDQUFDO29CQUNiLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbkIsRUFBRTtvQkFDRCxVQUFVLEVBQUUsRUFBRTtvQkFDZCxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUN4QixFQUFFO29CQUNELFVBQVUsRUFBRSxFQUFFO29CQUNkLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ3hCLENBQUM7U0FDSCxDQUFDOztJQXlHSixDQUFDO0lBdkdDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEYsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNGLEtBQUssQ0FBQyxLQUFLLElB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QUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF2R00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQWhCakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQXdIeEM7SUFBRCwyQkFBQztDQXhIRCxBQXdIQyxDQXhIaUQsZUFBSyxHQXdIdEQ7a0JBeEhvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEp1bXBNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRyYXZlbE1lZGFsUHVzaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxNZWRhbFB1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHtcbiAgICBwdXNoSG91cjogMTksXG4gICAgb3Bld2F5bnVtOiBcIm1ibHhtZWRhbDFcIixcbiAgICB0YXNrVHlwZTogXCJtYmx4bWVkYWwwMVwiLFxuICAgIG1lZGFsVHJpZ2dlcnM6IFt7XG4gICAgICBtZWRhbExldmVsOiA3LFxuICAgICAgdHJpZ2dlckxldmVsczogWzRdXG4gICAgfSwge1xuICAgICAgbWVkYWxMZXZlbDogNDEsXG4gICAgICB0cmlnZ2VyTGV2ZWxzOiBbMjIsIDM1XVxuICAgIH0sIHtcbiAgICAgIG1lZGFsTGV2ZWw6IDkxLFxuICAgICAgdHJpZ2dlckxldmVsczogWzY1LCA4NF1cbiAgICB9XVxuICB9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbE1lZGFsUHVzaFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YSkge1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuVGltZSAmJiAodGhpcy5fY29uZmlnLnB1c2hIb3VyID0gdGhpcy5fdHJhaXREYXRhLlRpbWUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUgJiYgKHRoaXMuX2NvbmZpZy5vcGV3YXludW0gPSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlICYmICh0aGlzLl9jb25maWcudGFza1R5cGUgPSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLm1lZGFsVHJpZ2dlcnMgJiYgKHRoaXMuX2NvbmZpZy5tZWRhbFRyaWdnZXJzID0gdGhpcy5fdHJhaXREYXRhLm1lZGFsVHJpZ2dlcnMpO1xuICAgIH1cbiAgfVxuICBnZXRUcmF2ZWxHYW1lRGF0YSgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVHJhdmVsR2FtZURhdGFcIik7XG4gICAgcmV0dXJuIG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXRDdXJyZW50TGV2ZWwoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gdGhpcy5nZXRUcmF2ZWxHYW1lRGF0YSgpO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldExldmVsSWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbCh0KSkgfHwgMDtcbiAgfVxuICBnZXRQdXNoVGltZXN0YW1wKCkge1xuICAgIHZhciBlID0gbmV3IERhdGUoKSxcbiAgICAgIHQgPSBuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSwgZS5nZXREYXRlKCksIHRoaXMuX2NvbmZpZy5wdXNoSG91ciwgMCwgMCwgMCk7XG4gICAgZS5nZXRUaW1lKCkgPiB0LmdldFRpbWUoKSAmJiB0LnNldERhdGUodC5nZXREYXRlKCkgKyAxKTtcbiAgICByZXR1cm4gdC5nZXRUaW1lKCk7XG4gIH1cbiAgY2hlY2tUcmlnZ2VyTGV2ZWwoZSkge1xuICAgIHZhciB0LCByO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModGhpcy5fY29uZmlnLm1lZGFsVHJpZ2dlcnMpLCBuID0gYS5uZXh0KCk7ICFuLmRvbmU7IG4gPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgaSA9IG4udmFsdWU7XG4gICAgICAgIGlmIChpLnRyaWdnZXJMZXZlbHMuaW5jbHVkZXMoZSkpIHJldHVybiBpLm1lZGFsTGV2ZWw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAociA9IGEucmV0dXJuKSAmJiByLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY2hlY2tNZWRhbExldmVsKGUpIHtcbiAgICB2YXIgdCwgcjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKHRoaXMuX2NvbmZpZy5tZWRhbFRyaWdnZXJzKSwgbiA9IGEubmV4dCgpOyAhbi5kb25lOyBuID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGkgPSBuLnZhbHVlO1xuICAgICAgICBpZiAoaS5tZWRhbExldmVsID09PSBlKSByZXR1cm4gaS5tZWRhbExldmVsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHIgPSBhLnJldHVybikgJiYgci5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIHNlbmRQdXNoKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0UHVzaFRpbWVzdGFtcCgpO1xuICAgIFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2VuZEdhbWVQdXNoKHtcbiAgICAgIG9wZXdheW51bTogdGhpcy5fY29uZmlnLm9wZXdheW51bSxcbiAgICAgIHRhc2tUeXBlOiB0aGlzLl9jb25maWcudGFza1R5cGUsXG4gICAgICBzZW5kVGltZTogdFxuICAgIH0sIHtcbiAgICAgIGtleU51bTogZS50b1N0cmluZygpXG4gICAgfSk7XG4gIH1cbiAgY2FuY2VsUHVzaCgpIHtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaFJlbW92ZWQodGhpcy5fY29uZmlnLm9wZXdheW51bSk7XG4gIH1cbiAgb25UTFdpbkN0cmxfdmlld1Nob3coZSwgdCkge1xuICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKSAtIDE7XG4gICAgICBpZiAodGhpcy5jaGVja01lZGFsTGV2ZWwocikgPiAwKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsUHVzaCgpO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYSA9IHRoaXMuY2hlY2tUcmlnZ2VyTGV2ZWwocik7XG4gICAgICAgIGEgPiAwICYmIHRoaXMuc2VuZFB1c2goYSk7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZShlLCB0KSB7XG4gICAgdmFyIHIgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE9wZW5BcHBPcGV3YXkoKTtcbiAgICBpZiAociAmJiByLm9wZXdheW51bSA9PT0gdGhpcy5fY29uZmlnLm9wZXdheW51bSkge1xuICAgICAgaWYgKCFKdW1wTWFuYWdlci5nZXRJbnN0YW5jZSgpLmp1bXBUb1RyYXZlbEdhbWUoKSkge1xuICAgICAgICB0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=
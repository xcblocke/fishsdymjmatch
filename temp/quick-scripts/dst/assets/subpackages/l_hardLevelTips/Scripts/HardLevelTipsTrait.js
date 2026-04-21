
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelTips/Scripts/HardLevelTipsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd869goZGZDdJ5PdCUmDA9j', 'HardLevelTipsTrait');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var UpdateLevelEffect_1 = require("../../../Scripts/UpdateLevelEffect");
var UpdateScoreEffect_1 = require("../../../Scripts/UpdateScoreEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var HardLevelTipsBehavior_1 = require("./HardLevelTipsBehavior");
var HardLevelTipsEffect_1 = require("./HardLevelTipsEffect");
var HardLevelTipsTrait = /** @class */ (function (_super) {
    __extends(HardLevelTipsTrait, _super);
    function HardLevelTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    HardLevelTipsTrait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior_1.HardLevelTipsBehavior);
    };
    HardLevelTipsTrait.prototype.onIptInitView_exec = function (e, t) {
        var r, o;
        if (this.checkGameMode()) {
            var i = e.ins.gameContext, a = i.getIsNewGame(), n = i.getGameData().getLevelId(), c = ExtractTool_1.default.getInstance().isHardLevel(n), p = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
            c && (a || p) && this.pushHardLevelTipsEffect(e, n);
            t();
        }
        else
            t();
    };
    HardLevelTipsTrait.prototype.pushHardLevelTipsEffect = function (e, t) {
        var r = this.getAniName(t), o = new HardLevelTipsEffect_1.HardLevelTipsEffect({
            aniName: r
        });
        e.ins.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        this.pushUpdateLevelEffect(e.ins);
        this.pushUpdateScoreEffect(e.ins);
    };
    HardLevelTipsTrait.prototype.pushUpdateLevelEffect = function (e) {
        var t = new UpdateLevelEffect_1.UpdateLevelEffect({
            level: e.gameContext.getGameData().getLevelId()
        });
        e.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTrait.prototype.pushUpdateScoreEffect = function (e) {
        var t = e.gameContext.getGameData(), r = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: t.getScore(),
            isShowCombo: false
        });
        e.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTrait.prototype.getAniName = function (e) {
        return ExtractTool_1.default.getInstance().isExpertUI(e) ? "in_2" : "in_1";
    };
    HardLevelTipsTrait.traitKey = "HardLevelTips";
    HardLevelTipsTrait = __decorate([
        mj.trait,
        mj.class("HardLevelTipsTrait")
    ], HardLevelTipsTrait);
    return HardLevelTipsTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelTipsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbFRpcHMvU2NyaXB0cy9IYXJkTGV2ZWxUaXBzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE0RTtBQUM1RSw4REFBeUQ7QUFDekQseUVBQXNFO0FBQ3RFLHdFQUF1RTtBQUN2RSx3RUFBdUU7QUFDdkUsOEVBQTZFO0FBQzdFLG9FQUFtRTtBQUNuRSxpRUFBZ0U7QUFDaEUsNkRBQTREO0FBRzVEO0lBQWdELHNDQUFZO0lBQTVEOztJQWdEQSxDQUFDO0lBOUNDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCw4Q0FBaUIsR0FBakI7UUFDRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLG1DQUFnQixDQUFDLGFBQWEsRUFBRSw2Q0FBcUIsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQ2hDLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ILENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsb0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRTtTQUNoRCxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUNqQyxDQUFDLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQztZQUN4QixRQUFRLEVBQUUsQ0FBQztZQUNYLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELHVDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsT0FBTyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkUsQ0FBQztJQTlDTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FnRHRDO0lBQUQseUJBQUM7Q0FoREQsQUFnREMsQ0FoRCtDLHNCQUFZLEdBZ0QzRDtrQkFoRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgVXBkYXRlTGV2ZWxFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1VwZGF0ZUxldmVsRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZVNjb3JlRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9VcGRhdGVTY29yZUVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IHsgSGFyZExldmVsVGlwc0JlaGF2aW9yIH0gZnJvbSAnLi9IYXJkTGV2ZWxUaXBzQmVoYXZpb3InO1xuaW1wb3J0IHsgSGFyZExldmVsVGlwc0VmZmVjdCB9IGZyb20gJy4vSGFyZExldmVsVGlwc0VmZmVjdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhcmRMZXZlbFRpcHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZExldmVsVGlwc1RyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYXJkTGV2ZWxUaXBzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyQmVoYXZpb3JzKCk7XG4gIH1cbiAgcmVnaXN0ZXJCZWhhdmlvcnMoKSB7XG4gICAgQmVoYXZpb3JGYWN0b3J5LnJlZ2lzdGVyQmVoYXZpb3IoQmVoYXZpb3JzTWFwcGluZy5IYXJkTGV2ZWxUaXBzLCBIYXJkTGV2ZWxUaXBzQmVoYXZpb3IpO1xuICB9XG4gIG9uSXB0SW5pdFZpZXdfZXhlYyhlLCB0KSB7XG4gICAgdmFyIHIsIG87XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zLmdhbWVDb250ZXh0LFxuICAgICAgICBhID0gaS5nZXRJc05ld0dhbWUoKSxcbiAgICAgICAgbiA9IGkuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCksXG4gICAgICAgIGMgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzSGFyZExldmVsKG4pLFxuICAgICAgICBwID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5zaG93T25SZXN1bWUpICYmIHZvaWQgMCAhPT0gbyAmJiBvO1xuICAgICAgYyAmJiAoYSB8fCBwKSAmJiB0aGlzLnB1c2hIYXJkTGV2ZWxUaXBzRWZmZWN0KGUsIG4pO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgcHVzaEhhcmRMZXZlbFRpcHNFZmZlY3QoZSwgdCkge1xuICAgIHZhciByID0gdGhpcy5nZXRBbmlOYW1lKHQpLFxuICAgICAgbyA9IG5ldyBIYXJkTGV2ZWxUaXBzRWZmZWN0KHtcbiAgICAgICAgYW5pTmFtZTogclxuICAgICAgfSk7XG4gICAgZS5pbnMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgdGhpcy5wdXNoVXBkYXRlTGV2ZWxFZmZlY3QoZS5pbnMpO1xuICAgIHRoaXMucHVzaFVwZGF0ZVNjb3JlRWZmZWN0KGUuaW5zKTtcbiAgfVxuICBwdXNoVXBkYXRlTGV2ZWxFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IFVwZGF0ZUxldmVsRWZmZWN0KHtcbiAgICAgIGxldmVsOiBlLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpXG4gICAgfSk7XG4gICAgZS5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBwdXNoVXBkYXRlU2NvcmVFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gZS5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgciA9IG5ldyBVcGRhdGVTY29yZUVmZmVjdCh7XG4gICAgICAgIGFkZFNjb3JlOiAwLFxuICAgICAgICB0YXJnZXRTY29yZTogdC5nZXRTY29yZSgpLFxuICAgICAgICBpc1Nob3dDb21ibzogZmFsc2VcbiAgICAgIH0pO1xuICAgIGUucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgZ2V0QW5pTmFtZShlKSB7XG4gICAgcmV0dXJuIEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNFeHBlcnRVSShlKSA/IFwiaW5fMlwiIDogXCJpbl8xXCI7XG4gIH1cbn0iXX0=
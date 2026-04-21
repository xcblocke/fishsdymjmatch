
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowPropUsage/Scripts/FlowPropUsageTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca777NyIVRJH4waE3QW9mlg', 'FlowPropUsageTrait');
// subpackages/l_flowPropUsage/Scripts/FlowPropUsageTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowPropUsageTrait = /** @class */ (function (_super) {
    __extends(FlowPropUsageTrait, _super);
    function FlowPropUsageTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowPropUsageTrait.prototype.onLoad = function () {
        var e, a, r;
        _super.prototype.onLoad.call(this);
        this._introLevels = null !== (e = this._traitData.introLevels) && void 0 !== e ? e : 10;
        this._defaultStage = null !== (a = this._traitData.defaultStage) && void 0 !== a ? a : 2;
        this._upgradeStage = null !== (r = this._traitData.upgradeStage) && void 0 !== r ? r : 3;
        if (void 0 === this.localData.fpuUsedProp || null === this.localData.fpuUsedProp) {
            this.localData.fpuUsedProp = false;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        }
        if (!this.localData.fpuStage) {
            this.localData.fpuStage = this._defaultStage;
            this.localData.fpuStage = this.localData.fpuStage;
        }
    };
    FlowPropUsageTrait.prototype._markPropUsed = function () {
        if (!this.localData.fpuUsedProp && UserModel_1.default.getInstance().isGuideFinished()) {
            this.localData.fpuUsedProp = true;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        }
    };
    FlowPropUsageTrait.prototype.onIptT2Shuffle_used = function (t, e) {
        this._markPropUsed("shuffle");
        e();
    };
    FlowPropUsageTrait.prototype.onIptT2HitTips_used = function (t, e) {
        this._markPropUsed("hint");
        e();
    };
    FlowPropUsageTrait.prototype.onIptT2Revert_used = function (t, e) {
        this._markPropUsed("revert");
        e();
    };
    FlowPropUsageTrait.prototype.onFlwLv_getAbilStg = function (t, e) {
        var a = t.args[0] || 0;
        if (a > 0 && a <= this._introLevels) {
            this.localData.fpuUsedProp = false;
            this.localData.fpuUsedProp = this.localData.fpuUsedProp;
            e();
        }
        else {
            this._evaluatePropUsage();
            var r = this.localData.fpuStage || this._defaultStage;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r - 1
            });
        }
    };
    FlowPropUsageTrait.prototype._evaluatePropUsage = function () {
        var t, e = !!this.localData.fpuUsedProp;
        this.localData.fpuUsedProp = false;
        this.localData.fpuUsedProp = this.localData.fpuUsedProp;
        this.localData.fpuStage || this._defaultStage;
        t = e ? this._defaultStage : this._upgradeStage;
        this.localData.fpuStage = t;
        this.localData.fpuStage = this.localData.fpuStage;
    };
    FlowPropUsageTrait.traitKey = "FlowPropUsage";
    FlowPropUsageTrait = __decorate([
        mj.trait,
        mj.class("FlowPropUsageTrait")
    ], FlowPropUsageTrait);
    return FlowPropUsageTrait;
}(Trait_1.default));
exports.default = FlowPropUsageTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dQcm9wVXNhZ2UvU2NyaXB0cy9GbG93UHJvcFVzYWdlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQWdELHNDQUFLO0lBQXJEOztJQTZEQSxDQUFDO0lBM0RDLG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUNoRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxLQUFLLENB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U0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNwRCxDQUFDO0lBM0RNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQTZEdEM7SUFBRCx5QkFBQztDQTdERCxBQTZEQyxDQTdEK0MsZUFBSyxHQTZEcEQ7a0JBN0RvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmxvd1Byb3BVc2FnZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93UHJvcFVzYWdlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxvd1Byb3BVc2FnZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGEsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5faW50cm9MZXZlbHMgPSBudWxsICE9PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5pbnRyb0xldmVscykgJiYgdm9pZCAwICE9PSBlID8gZSA6IDEwO1xuICAgIHRoaXMuX2RlZmF1bHRTdGFnZSA9IG51bGwgIT09IChhID0gdGhpcy5fdHJhaXREYXRhLmRlZmF1bHRTdGFnZSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDI7XG4gICAgdGhpcy5fdXBncmFkZVN0YWdlID0gbnVsbCAhPT0gKHIgPSB0aGlzLl90cmFpdERhdGEudXBncmFkZVN0YWdlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMztcbiAgICBpZiAodm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcCB8fCBudWxsID09PSB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZnB1VXNlZFByb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZwdVVzZWRQcm9wID0gdGhpcy5sb2NhbERhdGEuZnB1VXNlZFByb3A7XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2NhbERhdGEuZnB1U3RhZ2UpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZwdVN0YWdlID0gdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZnB1U3RhZ2UgPSB0aGlzLmxvY2FsRGF0YS5mcHVTdGFnZTtcbiAgICB9XG4gIH1cbiAgX21hcmtQcm9wVXNlZCgpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmZwdVVzZWRQcm9wICYmIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcCA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcCA9IHRoaXMubG9jYWxEYXRhLmZwdVVzZWRQcm9wO1xuICAgIH1cbiAgfVxuICBvbklwdFQyU2h1ZmZsZV91c2VkKHQsIGUpIHtcbiAgICB0aGlzLl9tYXJrUHJvcFVzZWQoXCJzaHVmZmxlXCIpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFQySGl0VGlwc191c2VkKHQsIGUpIHtcbiAgICB0aGlzLl9tYXJrUHJvcFVzZWQoXCJoaW50XCIpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFQyUmV2ZXJ0X3VzZWQodCwgZSkge1xuICAgIHRoaXMuX21hcmtQcm9wVXNlZChcInJldmVydFwiKTtcbiAgICBlKCk7XG4gIH1cbiAgb25GbHdMdl9nZXRBYmlsU3RnKHQsIGUpIHtcbiAgICB2YXIgYSA9IHQuYXJnc1swXSB8fCAwO1xuICAgIGlmIChhID4gMCAmJiBhIDw9IHRoaXMuX2ludHJvTGV2ZWxzKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZnB1VXNlZFByb3AgPSB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcDtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXZhbHVhdGVQcm9wVXNhZ2UoKTtcbiAgICAgIHZhciByID0gdGhpcy5sb2NhbERhdGEuZnB1U3RhZ2UgfHwgdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiByIC0gMVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9ldmFsdWF0ZVByb3BVc2FnZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSAhIXRoaXMubG9jYWxEYXRhLmZwdVVzZWRQcm9wO1xuICAgIHRoaXMubG9jYWxEYXRhLmZwdVVzZWRQcm9wID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEuZnB1VXNlZFByb3AgPSB0aGlzLmxvY2FsRGF0YS5mcHVVc2VkUHJvcDtcbiAgICB0aGlzLmxvY2FsRGF0YS5mcHVTdGFnZSB8fCB0aGlzLl9kZWZhdWx0U3RhZ2U7XG4gICAgdCA9IGUgPyB0aGlzLl9kZWZhdWx0U3RhZ2UgOiB0aGlzLl91cGdyYWRlU3RhZ2U7XG4gICAgdGhpcy5sb2NhbERhdGEuZnB1U3RhZ2UgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLmZwdVN0YWdlID0gdGhpcy5sb2NhbERhdGEuZnB1U3RhZ2U7XG4gIH1cbn0iXX0=
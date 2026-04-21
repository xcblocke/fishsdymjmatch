
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unifyLibFormat/Scripts/UnifyDynamicLibTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3f18t0yIdLhYkmRj2s1SUp', 'UnifyDynamicLibTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyDynamicLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnifyBaseTrait_1 = require("./UnifyBaseTrait");
var UnifyUtils_1 = require("./UnifyUtils");
var UnifyDynamicLibTrait = /** @class */ (function (_super) {
    __extends(UnifyDynamicLibTrait, _super);
    function UnifyDynamicLibTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnifyDynamicLibTrait.prototype.getPath = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_getLvPath = function (t, e) {
        var r = t.args[0];
        if (this.isSupportMode(r)) {
            var n = this.getPath();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n.map(function (t) {
                    return [t[0], t[1]];
                })
            });
        }
        else
            e();
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_parseLvData = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], n = UnifyUtils_1.default.parseLevelData(r);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    UnifyDynamicLibTrait.prototype.onDCMgr_setCurLvData = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            if (r) {
                var n = ExtractTool_1.default.getCurrentGameType(), i = UserModel_1.default.getInstance().getGameDataByGameType(n).getLevelId();
                this.cacheCurLvData(n, i, r);
            }
            e();
        }
        else
            e();
    };
    UnifyDynamicLibTrait.traitKey = "UnifyDynamicLib";
    UnifyDynamicLibTrait = __decorate([
        mj.trait,
        mj.class("UnifyDynamicLibTrait")
    ], UnifyDynamicLibTrait);
    return UnifyDynamicLibTrait;
}(UnifyBaseTrait_1.default));
exports.default = UnifyDynamicLibTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuaWZ5TGliRm9ybWF0L1NjcmlwdHMvVW5pZnlEeW5hbWljTGliVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE0RTtBQUM1RSxzRUFBaUU7QUFDakUsbURBQThDO0FBQzlDLDJDQUFzQztBQUd0QztJQUFrRCx3Q0FBYztJQUFoRTs7SUF5Q0EsQ0FBQztJQXZDQyxzQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1TSxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLG9CQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLGtCQUFrQixFQUFFLEVBQ3RDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUI7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXZDTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F5Q3hDO0lBQUQsMkJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2lELHdCQUFjLEdBeUMvRDtrQkF6Q29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgVW5pZnlCYXNlVHJhaXQgZnJvbSAnLi9VbmlmeUJhc2VUcmFpdCc7XG5pbXBvcnQgVW5pZnlVdGlscyBmcm9tICcuL1VuaWZ5VXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJVbmlmeUR5bmFtaWNMaWJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZnlEeW5hbWljTGliVHJhaXQgZXh0ZW5kcyBVbmlmeUJhc2VUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVW5pZnlEeW5hbWljTGliXCI7XG4gIGdldFBhdGgoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5wYXRoKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogW1tcImNvbmZpZy9zdGF0aWMwMDFcIiwgXCJsX3VuaWZ5TGliRm9ybWF0XCIsIC0xXSwgW1wiY29uZmlnL3N0YXRpYzAwMVwiLCBcInJfdW5pZnlMaWJGb3JtYXRcIiwgMTAwXV07XG4gIH1cbiAgb25EQ01ncl9nZXRMdlBhdGgodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydE1vZGUocikpIHtcbiAgICAgIHZhciBuID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG4ubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIFt0WzBdLCB0WzFdXTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25EQ01ncl9wYXJzZUx2RGF0YSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHQuYXJnc1swXSxcbiAgICAgICAgbiA9IFVuaWZ5VXRpbHMucGFyc2VMZXZlbERhdGEocik7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25EQ01ncl9zZXRDdXJMdkRhdGEodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgICBpZiAocikge1xuICAgICAgICB2YXIgbiA9IEV4dHJhY3RUb29sLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgICAgIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUobikuZ2V0TGV2ZWxJZCgpO1xuICAgICAgICB0aGlzLmNhY2hlQ3VyTHZEYXRhKG4sIGksIHIpO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=
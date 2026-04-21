
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/SettingsBackButtonTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '604d0wuUlZGpoekU6ceIBFj', 'SettingsBackButtonTrait');
// subpackages/l_settingsDialog/Scripts/SettingsBackButtonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UISettingBtnBack_1 = require("./UISettingBtnBack");
var SettingsBackButtonTrait = /** @class */ (function (_super) {
    __extends(SettingsBackButtonTrait, _super);
    function SettingsBackButtonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsBackButtonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsBackButtonTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        var i = t.ins;
        i && "function" == typeof i.addPreloadRes && i.addPreloadRes("Prefab", UISettingBtnBack_1.UISettingBtnBack.getUrl());
        e();
    };
    SettingsBackButtonTrait.prototype.onUISetDlg_chkAddBack = function (t, e) {
        var i = t.beforReturnVal;
        if (i && cc.isValid(i.dialogContent) && cc.isValid(i.replayBtn)) {
            var o = i.dialogContent, n = i.replayBtn;
            this.addBackButton(o, n);
            e();
        }
        else
            e();
    };
    SettingsBackButtonTrait.prototype.addBackButton = function (t) {
        UISettingBtnBack_1.UISettingBtnBack.createUI().then(function (e) {
            if (cc.isValid(t) && cc.isValid(e)) {
                var i = t.getChildByName("bottom_layout");
                if (cc.isValid(i)) {
                    e.parent = i;
                    e.setSiblingIndex(1);
                    var o = e.height, n = i.getComponent(cc.Layout);
                    n && (o = e.height + n.spacingY);
                    t.height += o;
                }
            }
        });
    };
    SettingsBackButtonTrait.traitKey = "SettingsBackButton";
    SettingsBackButtonTrait = __decorate([
        mj.trait,
        mj.class("SettingsBackButtonTrait")
    ], SettingsBackButtonTrait);
    return SettingsBackButtonTrait;
}(Trait_1.default));
exports.default = SettingsBackButtonTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvU2V0dGluZ3NCYWNrQnV0dG9uVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx1REFBc0Q7QUFHdEQ7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBa0NBLENBQUM7SUFoQ0Msd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsbUNBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx1REFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsbUNBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztpQkFDZjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaENNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFEcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQWtDM0M7SUFBRCw4QkFBQztDQWxDRCxBQWtDQyxDQWxDb0QsZUFBSyxHQWtDekQ7a0JBbENvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVUlTZXR0aW5nQnRuQmFjayB9IGZyb20gJy4vVUlTZXR0aW5nQnRuQmFjayc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNldHRpbmdzQmFja0J1dHRvblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc0JhY2tCdXR0b25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTZXR0aW5nc0JhY2tCdXR0b25cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVUlTZXREbGdDdHJsX2luaXREUmVzKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIGkgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLmFkZFByZWxvYWRSZXMgJiYgaS5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFVJU2V0dGluZ0J0bkJhY2suZ2V0VXJsKCkpO1xuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0RGxnX2Noa0FkZEJhY2sodCwgZSkge1xuICAgIHZhciBpID0gdC5iZWZvclJldHVyblZhbDtcbiAgICBpZiAoaSAmJiBjYy5pc1ZhbGlkKGkuZGlhbG9nQ29udGVudCkgJiYgY2MuaXNWYWxpZChpLnJlcGxheUJ0bikpIHtcbiAgICAgIHZhciBvID0gaS5kaWFsb2dDb250ZW50LFxuICAgICAgICBuID0gaS5yZXBsYXlCdG47XG4gICAgICB0aGlzLmFkZEJhY2tCdXR0b24obywgbik7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBhZGRCYWNrQnV0dG9uKHQpIHtcbiAgICBVSVNldHRpbmdCdG5CYWNrLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21fbGF5b3V0XCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICAgIGUucGFyZW50ID0gaTtcbiAgICAgICAgICBlLnNldFNpYmxpbmdJbmRleCgxKTtcbiAgICAgICAgICB2YXIgbyA9IGUuaGVpZ2h0LFxuICAgICAgICAgICAgbiA9IGkuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgICAgbiAmJiAobyA9IGUuaGVpZ2h0ICsgbi5zcGFjaW5nWSk7XG4gICAgICAgICAgdC5oZWlnaHQgKz0gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19
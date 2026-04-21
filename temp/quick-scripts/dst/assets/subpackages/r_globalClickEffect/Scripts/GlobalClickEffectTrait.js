
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_globalClickEffect/Scripts/GlobalClickEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f6f6p77WJNnI4HVPybmtKO', 'GlobalClickEffectTrait');
// subpackages/r_globalClickEffect/Scripts/GlobalClickEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EClickType = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var EClickType;
(function (EClickType) {
    EClickType[EClickType["Flower"] = 1] = "Flower";
    EClickType[EClickType["Bubble"] = 2] = "Bubble";
})(EClickType = exports.EClickType || (exports.EClickType = {}));
var GlobalClickEffectTrait = /** @class */ (function (_super) {
    __extends(GlobalClickEffectTrait, _super);
    function GlobalClickEffectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalClickEffectTrait_1 = GlobalClickEffectTrait;
    Object.defineProperty(GlobalClickEffectTrait.prototype, "clickType", {
        get: function () {
            return null != this._traitData.clickType ? this._traitData.clickType : EClickType.Flower;
        },
        enumerable: false,
        configurable: true
    });
    GlobalClickEffectTrait.prototype.onTopTouchView_start = function (e, t) {
        if (this.isValentineEffActive())
            t();
        else {
            this.addClickEffect(e.args[0]);
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    GlobalClickEffectTrait.prototype.addClickEffect = function (e) {
        var t = cc.Canvas.instance.node, i = "in_" + this.clickType, n = BaseSpine_1.default.create(GlobalClickEffectTrait_1.CLICK_EFF_PATH, i, 1, null, true, GlobalClickEffectTrait_1.BUNDLE_NAME);
        n.node.zIndex = 999;
        n.node.parent = t;
        var o = e.getLocation(), c = t.convertToNodeSpaceAR(cc.v3(o.x, o.y, 0));
        n.node.position = c;
    };
    GlobalClickEffectTrait.prototype.isValentineEffActive = function () {
        var e, t, r = mj.getClassByName("ValentineModel");
        return null != r && (null === (t = null === (e = r.getInstance) || void 0 === e ? void 0 : e.call(r)) || void 0 === t ? void 0 : t.isEffectActive());
    };
    var GlobalClickEffectTrait_1;
    GlobalClickEffectTrait.traitKey = "GlobalClickEffect";
    GlobalClickEffectTrait.BUNDLE_NAME = "r_globalClickEffect";
    GlobalClickEffectTrait.CLICK_EFF_PATH = "spine/gameplay_touch";
    GlobalClickEffectTrait = GlobalClickEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("GlobalClickEffectTrait")
    ], GlobalClickEffectTrait);
    return GlobalClickEffectTrait;
}(Trait_1.default));
exports.default = GlobalClickEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2dsb2JhbENsaWNrRWZmZWN0L1NjcmlwdHMvR2xvYmFsQ2xpY2tFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFDcEUsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLCtDQUFVLENBQUE7SUFDViwrQ0FBVSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBR0Q7SUFBb0QsMENBQUs7SUFBekQ7O0lBZ0NBLENBQUM7K0JBaENvQixzQkFBc0I7SUFJekMsc0JBQUksNkNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzRixDQUFDOzs7T0FBQTtJQUNELHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELCtDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUM3QixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQzFCLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBc0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHdCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BILENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxxREFBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkosQ0FBQzs7SUE5Qk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUMvQixrQ0FBVyxHQUFHLHFCQUFxQixDQUFDO0lBQ3BDLHFDQUFjLEdBQUcsc0JBQXNCLENBQUM7SUFINUIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQWdDMUM7SUFBRCw2QkFBQztDQWhDRCxBQWdDQyxDQWhDbUQsZUFBSyxHQWdDeEQ7a0JBaENvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmV4cG9ydCBlbnVtIEVDbGlja1R5cGUge1xuICBGbG93ZXIgPSAxLFxuICBCdWJibGUgPSAyLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHbG9iYWxDbGlja0VmZmVjdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxDbGlja0VmZmVjdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkdsb2JhbENsaWNrRWZmZWN0XCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9nbG9iYWxDbGlja0VmZmVjdFwiO1xuICBzdGF0aWMgQ0xJQ0tfRUZGX1BBVEggPSBcInNwaW5lL2dhbWVwbGF5X3RvdWNoXCI7XG4gIGdldCBjbGlja1R5cGUoKSB7XG4gICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLmNsaWNrVHlwZSA/IHRoaXMuX3RyYWl0RGF0YS5jbGlja1R5cGUgOiBFQ2xpY2tUeXBlLkZsb3dlcjtcbiAgfVxuICBvblRvcFRvdWNoVmlld19zdGFydChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxlbnRpbmVFZmZBY3RpdmUoKSkgdCgpO2Vsc2Uge1xuICAgICAgdGhpcy5hZGRDbGlja0VmZmVjdChlLmFyZ3NbMF0pO1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFkZENsaWNrRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLFxuICAgICAgaSA9IFwiaW5fXCIgKyB0aGlzLmNsaWNrVHlwZSxcbiAgICAgIG4gPSBCYXNlU3BpbmUuY3JlYXRlKEdsb2JhbENsaWNrRWZmZWN0VHJhaXQuQ0xJQ0tfRUZGX1BBVEgsIGksIDEsIG51bGwsIHRydWUsIEdsb2JhbENsaWNrRWZmZWN0VHJhaXQuQlVORExFX05BTUUpO1xuICAgIG4ubm9kZS56SW5kZXggPSA5OTk7XG4gICAgbi5ub2RlLnBhcmVudCA9IHQ7XG4gICAgdmFyIG8gPSBlLmdldExvY2F0aW9uKCksXG4gICAgICBjID0gdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MyhvLngsIG8ueSwgMCkpO1xuICAgIG4ubm9kZS5wb3NpdGlvbiA9IGM7XG4gIH1cbiAgaXNWYWxlbnRpbmVFZmZBY3RpdmUoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgIT0gciAmJiAobnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHIuZ2V0SW5zdGFuY2UpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChyKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc0VmZmVjdEFjdGl2ZSgpKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineComboBonus/Scripts/ValentineComboBonusTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f26c7I/Ic1M7bHPmMxftDqS', 'ValentineComboBonusTrait');
// subpackages/r_valentineComboBonus/Scripts/ValentineComboBonusTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineComboBonusTrait = /** @class */ (function (_super) {
    __extends(ValentineComboBonusTrait, _super);
    function ValentineComboBonusTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineComboBonusTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineComboBonus",
            spinePath: "spine/gameplay_comboBonus"
        };
    };
    ValentineComboBonusTrait.prototype.loadSpine = function (t) {
        var e, n = this, o = this.getAniCfg(), r = o.bundleName, i = o.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, r).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            n._currSkData = e || null;
        }).catch(function () {
            n._currSkData = null;
        });
    };
    ValentineComboBonusTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isComboBonusEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineComboBonusTrait.prototype.onRwdComboItem_initComp = function (t, e) {
        var n = t.ins, o = null == n ? void 0 : n._spineAnim;
        cc.isValid(o.skeletonData) || (o.skeletonData = null);
        if (this.isComboBonusEffectActive()) {
            if (cc.isValid(this._currSkData)) {
                var r = this._currSkData;
                o.skeletonData !== r && (o.skeletonData = r);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ValentineComboBonusTrait.prototype.isComboBonusEffectActive = function () {
        if (null != this._traitData.comboBonusEffect)
            return this._traitData.comboBonusEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineComboBonusTrait.traitKey = "ValentineComboBonus";
    ValentineComboBonusTrait = __decorate([
        mj.trait,
        mj.class("ValentineComboBonusTrait")
    ], ValentineComboBonusTrait);
    return ValentineComboBonusTrait;
}(Trait_1.default));
exports.default = ValentineComboBonusTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNvbWJvQm9udXMvU2NyaXB0cy9WYWxlbnRpbmVDb21ib0JvbnVzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQThDQztRQTdDQyxpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUE2Q3JCLENBQUM7SUEzQ0MsNENBQVMsR0FBVDtRQUNFLE9BQU87WUFDTCxVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLFNBQVMsRUFBRSwyQkFBMkI7U0FDdkMsQ0FBQztJQUNKLENBQUM7SUFDRCw0Q0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDaEgsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNQLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRTtZQUNuQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6QixDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUMsRUFBRSxDQUFDO2FBQ0w7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCO1FBQ0UsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0I7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDdEYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQTNDTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRnJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBOEM1QztJQUFELCtCQUFDO0NBOUNELEFBOENDLENBOUNxRCxlQUFLLEdBOEMxRDtrQkE5Q29CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZUNvbWJvQm9udXNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lQ29tYm9Cb251c1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VyclNrRGF0YSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lQ29tYm9Cb251c1wiO1xuICBnZXRBbmlDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1bmRsZU5hbWU6IFwicl92YWxlbnRpbmVDb21ib0JvbnVzXCIsXG4gICAgICBzcGluZVBhdGg6IFwic3BpbmUvZ2FtZXBsYXlfY29tYm9Cb251c1wiXG4gICAgfTtcbiAgfVxuICBsb2FkU3BpbmUodCkge1xuICAgIHZhciBlLFxuICAgICAgbiA9IHRoaXMsXG4gICAgICBvID0gdGhpcy5nZXRBbmlDZmcoKSxcbiAgICAgIHIgPSBvLmJ1bmRsZU5hbWUsXG4gICAgICBpID0gby5zcGluZVBhdGg7XG4gICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgbnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmxvYWRSZXMoaSwgc3AuU2tlbGV0b25EYXRhLCByKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgIG4uX2N1cnJTa0RhdGEgPSBlIHx8IG51bGw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgbi5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgZSkge1xuICAgIGlmICh0aGlzLmlzQ29tYm9Cb251c0VmZmVjdEFjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmxvYWRTcGluZSh0Lmlucy5jb250ZXh0KTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uUndkQ29tYm9JdGVtX2luaXRDb21wKHQsIGUpIHtcbiAgICB2YXIgbiA9IHQuaW5zLFxuICAgICAgbyA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uX3NwaW5lQW5pbTtcbiAgICBjYy5pc1ZhbGlkKG8uc2tlbGV0b25EYXRhKSB8fCAoby5za2VsZXRvbkRhdGEgPSBudWxsKTtcbiAgICBpZiAodGhpcy5pc0NvbWJvQm9udXNFZmZlY3RBY3RpdmUoKSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY3VyclNrRGF0YSkpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgICBvLnNrZWxldG9uRGF0YSAhPT0gciAmJiAoby5za2VsZXRvbkRhdGEgPSByKTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGlzQ29tYm9Cb251c0VmZmVjdEFjdGl2ZSgpIHtcbiAgICBpZiAobnVsbCAhPSB0aGlzLl90cmFpdERhdGEuY29tYm9Cb251c0VmZmVjdCkgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS5jb21ib0JvbnVzRWZmZWN0O1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJWYWxlbnRpbmVNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG59Il19
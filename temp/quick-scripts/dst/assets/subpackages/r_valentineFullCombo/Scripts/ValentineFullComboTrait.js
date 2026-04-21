
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineFullCombo/Scripts/ValentineFullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48f1fBOMq9OcIel6N/ig9If', 'ValentineFullComboTrait');
// subpackages/r_valentineFullCombo/Scripts/ValentineFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineFullComboTrait = /** @class */ (function (_super) {
    __extends(ValentineFullComboTrait, _super);
    function ValentineFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineFullComboTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineFullCombo",
            spinePath: "spine/gameplay_perfectCombo"
        };
    };
    ValentineFullComboTrait.prototype.loadSpine = function (t) {
        var e, n = this, r = this.getAniCfg(), o = r.bundleName, i = r.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, o).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            n._currSkData = e || null;
        }).catch(function () {
            n._currSkData = null;
        });
    };
    ValentineFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isFullComboEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineFullComboTrait.prototype.onFullComboItem_initSpine = function (t, e) {
        var n = t.ins, r = null == n ? void 0 : n._spineAnim;
        cc.isValid(r.skeletonData) || (r.skeletonData = null);
        if (this.isFullComboEffectActive()) {
            if (cc.isValid(this._currSkData)) {
                var o = this._currSkData;
                r.skeletonData !== o && (r.skeletonData = o);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ValentineFullComboTrait.prototype.isFullComboEffectActive = function () {
        if (null != this._traitData.fullComboEffect)
            return this._traitData.fullComboEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineFullComboTrait.traitKey = "ValentineFullCombo";
    ValentineFullComboTrait = __decorate([
        mj.trait,
        mj.class("ValentineFullComboTrait")
    ], ValentineFullComboTrait);
    return ValentineFullComboTrait;
}(Trait_1.default));
exports.default = ValentineFullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUZ1bGxDb21iby9TY3JpcHRzL1ZhbGVudGluZUZ1bGxDb21ib1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUE4Q0M7UUE3Q0MsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBNkNyQixDQUFDO0lBM0NDLDJDQUFTLEdBQVQ7UUFDRSxPQUFPO1lBQ0wsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUUsNkJBQTZCO1NBQ3pDLENBQUM7SUFDSixDQUFDO0lBQ0QsMkNBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2hILElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDUCxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwyREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDeEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUU7WUFDbEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHlEQUF1QixHQUF2QjtRQUNFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZTtZQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDcEYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQTNDTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRnBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0E4QzNDO0lBQUQsOEJBQUM7Q0E5Q0QsQUE4Q0MsQ0E5Q29ELGVBQUssR0E4Q3pEO2tCQTlDb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lRnVsbENvbWJvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUZ1bGxDb21ib1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VyclNrRGF0YSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lRnVsbENvbWJvXCI7XG4gIGdldEFuaUNmZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVuZGxlTmFtZTogXCJyX3ZhbGVudGluZUZ1bGxDb21ib1wiLFxuICAgICAgc3BpbmVQYXRoOiBcInNwaW5lL2dhbWVwbGF5X3BlcmZlY3RDb21ib1wiXG4gICAgfTtcbiAgfVxuICBsb2FkU3BpbmUodCkge1xuICAgIHZhciBlLFxuICAgICAgbiA9IHRoaXMsXG4gICAgICByID0gdGhpcy5nZXRBbmlDZmcoKSxcbiAgICAgIG8gPSByLmJ1bmRsZU5hbWUsXG4gICAgICBpID0gci5zcGluZVBhdGg7XG4gICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgbnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmxvYWRSZXMoaSwgc3AuU2tlbGV0b25EYXRhLCBvKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgIG4uX2N1cnJTa0RhdGEgPSBlIHx8IG51bGw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgbi5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgZSkge1xuICAgIGlmICh0aGlzLmlzRnVsbENvbWJvRWZmZWN0QWN0aXZlKCkpIHtcbiAgICAgIHRoaXMubG9hZFNwaW5lKHQuaW5zLmNvbnRleHQpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25GdWxsQ29tYm9JdGVtX2luaXRTcGluZSh0LCBlKSB7XG4gICAgdmFyIG4gPSB0LmlucyxcbiAgICAgIHIgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLl9zcGluZUFuaW07XG4gICAgY2MuaXNWYWxpZChyLnNrZWxldG9uRGF0YSkgfHwgKHIuc2tlbGV0b25EYXRhID0gbnVsbCk7XG4gICAgaWYgKHRoaXMuaXNGdWxsQ29tYm9FZmZlY3RBY3RpdmUoKSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY3VyclNrRGF0YSkpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgICByLnNrZWxldG9uRGF0YSAhPT0gbyAmJiAoci5za2VsZXRvbkRhdGEgPSBvKTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGlzRnVsbENvbWJvRWZmZWN0QWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5mdWxsQ29tYm9FZmZlY3QpIHJldHVybiB0aGlzLl90cmFpdERhdGEuZnVsbENvbWJvRWZmZWN0O1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJWYWxlbnRpbmVNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG59Il19
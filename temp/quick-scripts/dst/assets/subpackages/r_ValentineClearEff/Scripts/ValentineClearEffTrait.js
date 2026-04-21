
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ValentineClearEff/Scripts/ValentineClearEffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47762EuvLVHTIg13kfrYoBH', 'ValentineClearEffTrait');
// subpackages/r_ValentineClearEff/Scripts/ValentineClearEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineClearEffTrait = /** @class */ (function (_super) {
    __extends(ValentineClearEffTrait, _super);
    function ValentineClearEffTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._isBaseClear = true;
        return _this;
    }
    ValentineClearEffTrait_1 = ValentineClearEffTrait;
    ValentineClearEffTrait.prototype.onChangeCEffTrait_bundle = function (e, t) {
        if (this.isClearEffActive()) {
            var r = e.args[0];
            if (r < 1 || r > 4) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: this.getBundleName(r)
                });
            }
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.getBundleName = function (e) {
        this._isBaseClear = false;
        return "r_resValentineClear" + e;
    };
    ValentineClearEffTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "" + ValentineClearEffTrait_1.BundleName,
            spinePath: "spine/gameplay_elimination_a"
        };
    };
    ValentineClearEffTrait.prototype.loadSpine = function (e) {
        var t, r = this, n = this.getAniCfg(), a = n.bundleName, i = n.spinePath;
        this._currSkData = null;
        null === (t = null == e ? void 0 : e.gameCtr) || void 0 === t || t.loadRes(i, sp.SkeletonData, a).then(function (e) {
            var t = Array.isArray(e) ? e[0] : e;
            r._currSkData = t || null;
        }).catch(function () {
            r._currSkData = null;
        });
    };
    ValentineClearEffTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        if (this.isClearEffActive()) {
            this.loadSpine(e.ins.context);
            t();
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.onClearEffBhv_changeSkd = function (e, t) {
        var r = e.args[0];
        cc.isValid(r.skeletonData) || (r.skeletonData = null);
        if (this._isBaseClear) {
            if (this.isClearEffActive()) {
                if (cc.isValid(this._currSkData)) {
                    var n = this._currSkData;
                    r.skeletonData !== n && (r.skeletonData = n);
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    ValentineClearEffTrait.prototype.onChangeCEffTrait_isGTOpen = function (e, t) {
        if (this.isClearEffActive()) {
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    ValentineClearEffTrait.prototype.isClearEffActive = function () {
        if (null != this._traitData.clearEffect)
            return this._traitData.clearEffect;
        var e = mj.getClassByName("ValentineModel");
        return null != e && e.getInstance().isEffectActive();
    };
    var ValentineClearEffTrait_1;
    ValentineClearEffTrait.traitKey = "ValentineClearEff";
    ValentineClearEffTrait.BundleName = "r_ValentineClearEff";
    ValentineClearEffTrait = ValentineClearEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineClearEffTrait")
    ], ValentineClearEffTrait);
    return ValentineClearEffTrait;
}(Trait_1.default));
exports.default = ValentineClearEffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX1ZhbGVudGluZUNsZWFyRWZmL1NjcmlwdHMvVmFsZW50aW5lQ2xlYXJFZmZUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBaUZDO1FBaEZDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQStFdEIsQ0FBQzsrQkFqRm9CLHNCQUFzQjtJQUt6Qyx5REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixDQUFDLEVBQUUsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2lCQUNqQyxDQUFDLENBQUM7YUFDSjtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDhDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELDBDQUFTLEdBQVQ7UUFDRSxPQUFPO1lBQ0wsVUFBVSxFQUFFLEVBQUUsR0FBRyx3QkFBc0IsQ0FBQyxVQUFVO1lBQ2xELFNBQVMsRUFBRSw4QkFBOEI7U0FDMUMsQ0FBQztJQUNKLENBQUM7SUFDRCwwQ0FBUyxHQUFULFVBQVUs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SSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7SUE3RU0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUMvQixpQ0FBVSxHQUFHLHFCQUFxQixDQUFDO0lBSnZCLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FpRjFDO0lBQUQsNkJBQUM7Q0FqRkQsQUFpRkMsQ0FqRm1ELGVBQUssR0FpRnhEO2tCQWpGb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lQ2xlYXJFZmZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lQ2xlYXJFZmZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJTa0RhdGEgPSBudWxsO1xuICBfaXNCYXNlQ2xlYXIgPSB0cnVlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZUNsZWFyRWZmXCI7XG4gIHN0YXRpYyBCdW5kbGVOYW1lID0gXCJyX1ZhbGVudGluZUNsZWFyRWZmXCI7XG4gIG9uQ2hhbmdlQ0VmZlRyYWl0X2J1bmRsZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNDbGVhckVmZkFjdGl2ZSgpKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXTtcbiAgICAgIGlmIChyIDwgMSB8fCByID4gNCkge1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRoaXMuZ2V0QnVuZGxlTmFtZShyKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGdldEJ1bmRsZU5hbWUoZSkge1xuICAgIHRoaXMuX2lzQmFzZUNsZWFyID0gZmFsc2U7XG4gICAgcmV0dXJuIFwicl9yZXNWYWxlbnRpbmVDbGVhclwiICsgZTtcbiAgfVxuICBnZXRBbmlDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1bmRsZU5hbWU6IFwiXCIgKyBWYWxlbnRpbmVDbGVhckVmZlRyYWl0LkJ1bmRsZU5hbWUsXG4gICAgICBzcGluZVBhdGg6IFwic3BpbmUvZ2FtZXBsYXlfZWxpbWluYXRpb25fYVwiXG4gICAgfTtcbiAgfVxuICBsb2FkU3BpbmUoZSkge1xuICAgIHZhciB0LFxuICAgICAgciA9IHRoaXMsXG4gICAgICBuID0gdGhpcy5nZXRBbmlDZmcoKSxcbiAgICAgIGEgPSBuLmJ1bmRsZU5hbWUsXG4gICAgICBpID0gbi5zcGluZVBhdGg7XG4gICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmxvYWRSZXMoaSwgc3AuU2tlbGV0b25EYXRhLCBhKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZTtcbiAgICAgIHIuX2N1cnJTa0RhdGEgPSB0IHx8IG51bGw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgci5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHMoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzQ2xlYXJFZmZBY3RpdmUoKSkge1xuICAgICAgdGhpcy5sb2FkU3BpbmUoZS5pbnMuY29udGV4dCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X2NoYW5nZVNrZChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgY2MuaXNWYWxpZChyLnNrZWxldG9uRGF0YSkgfHwgKHIuc2tlbGV0b25EYXRhID0gbnVsbCk7XG4gICAgaWYgKHRoaXMuX2lzQmFzZUNsZWFyKSB7XG4gICAgICBpZiAodGhpcy5pc0NsZWFyRWZmQWN0aXZlKCkpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY3VyclNrRGF0YSkpIHtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMuX2N1cnJTa0RhdGE7XG4gICAgICAgICAgci5za2VsZXRvbkRhdGEgIT09IG4gJiYgKHIuc2tlbGV0b25EYXRhID0gbik7XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25DaGFuZ2VDRWZmVHJhaXRfaXNHVE9wZW4oZSwgdCkge1xuICAgIGlmICh0aGlzLmlzQ2xlYXJFZmZBY3RpdmUoKSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBpc0NsZWFyRWZmQWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5jbGVhckVmZmVjdCkgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS5jbGVhckVmZmVjdDtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgIT0gZSAmJiBlLmdldEluc3RhbmNlKCkuaXNFZmZlY3RBY3RpdmUoKTtcbiAgfVxufSJdfQ==
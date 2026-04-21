
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineDragCardEffect/Scripts/ValentineDragCardEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91a459F2tZCUJqDc5y7ZGgG', 'ValentineDragCardEffectTrait');
// subpackages/r_valentineDragCardEffect/Scripts/ValentineDragCardEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DragCardEffect_1 = require("./DragCardEffect");
var ValentineDragCardEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineDragCardEffectTrait, _super);
    function ValentineDragCardEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodePool = [];
        return _this;
    }
    ValentineDragCardEffectTrait_1 = ValentineDragCardEffectTrait;
    Object.defineProperty(ValentineDragCardEffectTrait.prototype, "tailType", {
        get: function () {
            return null != this._traitData.tailType ? this._traitData.tailType : "short";
        },
        enumerable: false,
        configurable: true
    });
    ValentineDragCardEffectTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ['r_valentineDragCardEffect:prefabs/DragCardEffect1', 'r_valentineDragCardEffect:prefabs/DragCardEffect2']);
    };
    ValentineDragCardEffectTrait.prototype.onTileNodeObj_touchEnd = function (t, e) {
        e();
        var r = t.ins.cardNode;
        if (null != r.r_valentineDragCardEffect)
            if ("isLoading" == r.r_valentineDragCardEffect)
                r.r_valentineDragCardEffect = null;
            else {
                var n = r.r_valentineDragCardEffect;
                r.r_valentineDragCardEffect = null;
                if (cc.isValid(n)) {
                    n.parent = null;
                    this.nodePool.push(n);
                }
            }
    };
    ValentineDragCardEffectTrait.prototype.onTileNodeObj_setPosition = function (t, e) {
        e();
        if (this.isDragCardEffectActive()) {
            var r = t.ins.cardNode;
            if (null == r.r_valentineDragCardEffect)
                if (this.nodePool.length > 0) {
                    var n = this.nodePool.splice(0, 1)[0];
                    r.r_valentineDragCardEffect = n;
                    n.parent = r;
                    n.setSiblingIndex(0);
                }
                else {
                    r.r_valentineDragCardEffect = "isLoading";
                    this.load(r);
                }
        }
    };
    ValentineDragCardEffectTrait.prototype.load = function (t) {
        var e = "short" == this.tailType ? "prefabs/DragCardEffect1" : "prefabs/DragCardEffect2";
        DragCardEffect_1.default.createUI(e).then(function (e) {
            if (cc.isValid(e) && cc.isValid(t) && "isLoading" == t.r_valentineDragCardEffect) {
                t.r_valentineDragCardEffect = e;
                e.parent = t;
                e.setSiblingIndex(0);
            }
        }).catch(function (t) {
            console.error();
            console.error("[" + ValentineDragCardEffectTrait_1.traitKey + "] 游戏内创建拖拽特效失败:" + ((null == t ? void 0 : t.message) || "拖拽效果加载失败"));
        });
    };
    ValentineDragCardEffectTrait.prototype.isDragCardEffectActive = function () {
        if (null != this._traitData.dragCardEffect)
            return this._traitData.dragCardEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineDragCardEffectTrait_1;
    ValentineDragCardEffectTrait.traitKey = "ValentineDragCardEffect";
    ValentineDragCardEffectTrait = ValentineDragCardEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineDragCardEffectTrait")
    ], ValentineDragCardEffectTrait);
    return ValentineDragCardEffectTrait;
}(Trait_1.default));
exports.default = ValentineDragCardEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0L1NjcmlwdHMvVmFsZW50aW5lRHJhZ0NhcmRFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELG1EQUE4QztBQUc5QztJQUEwRCxnREFBSztJQUEvRDtRQUFBLHFFQXVEQztRQXREQyxjQUFRLEdBQUcsRUFBRSxDQUFDOztJQXNEaEIsQ0FBQztxQ0F2RG9CLDRCQUE0QjtJQUcvQyxzQkFBSSxrREFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7SUFDRCw2REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxtREFBbUQsQ0FBQyxDQUFDLENBQUM7SUFDNUksQ0FBQztJQUNELDZEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyx5QkFBeUI7WUFBRSxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMseUJBQXlCO2dCQUFFLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7aUJBQUs7Z0JBQy9ILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztnQkFDbkMsSUFBSSxFQUFF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R0F1RDlEO2tCQXZEb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBEcmFnQ2FyZEVmZmVjdCBmcm9tICcuL0RyYWdDYXJkRWZmZWN0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lRHJhZ0NhcmRFZmZlY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lRHJhZ0NhcmRFZmZlY3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgbm9kZVBvb2wgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVEcmFnQ2FyZEVmZmVjdFwiO1xuICBnZXQgdGFpbFR5cGUoKSB7XG4gICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLnRhaWxUeXBlID8gdGhpcy5fdHJhaXREYXRhLnRhaWxUeXBlIDogXCJzaG9ydFwiO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXModCwgZSkge1xuICAgIGUoKTtcbiAgICB0Lmlucy5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFsncl92YWxlbnRpbmVEcmFnQ2FyZEVmZmVjdDpwcmVmYWJzL0RyYWdDYXJkRWZmZWN0MScsICdyX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0OnByZWZhYnMvRHJhZ0NhcmRFZmZlY3QyJ10pO1xuICB9XG4gIG9uVGlsZU5vZGVPYmpfdG91Y2hFbmQodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgciA9IHQuaW5zLmNhcmROb2RlO1xuICAgIGlmIChudWxsICE9IHIucl92YWxlbnRpbmVEcmFnQ2FyZEVmZmVjdCkgaWYgKFwiaXNMb2FkaW5nXCIgPT0gci5yX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0KSByLnJfdmFsZW50aW5lRHJhZ0NhcmRFZmZlY3QgPSBudWxsO2Vsc2Uge1xuICAgICAgdmFyIG4gPSByLnJfdmFsZW50aW5lRHJhZ0NhcmRFZmZlY3Q7XG4gICAgICByLnJfdmFsZW50aW5lRHJhZ0NhcmRFZmZlY3QgPSBudWxsO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgbi5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVQb29sLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uVGlsZU5vZGVPYmpfc2V0UG9zaXRpb24odCwgZSkge1xuICAgIGUoKTtcbiAgICBpZiAodGhpcy5pc0RyYWdDYXJkRWZmZWN0QWN0aXZlKCkpIHtcbiAgICAgIHZhciByID0gdC5pbnMuY2FyZE5vZGU7XG4gICAgICBpZiAobnVsbCA9PSByLnJfdmFsZW50aW5lRHJhZ0NhcmRFZmZlY3QpIGlmICh0aGlzLm5vZGVQb29sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLm5vZGVQb29sLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgci5yX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0ID0gbjtcbiAgICAgICAgbi5wYXJlbnQgPSByO1xuICAgICAgICBuLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHIucl92YWxlbnRpbmVEcmFnQ2FyZEVmZmVjdCA9IFwiaXNMb2FkaW5nXCI7XG4gICAgICAgIHRoaXMubG9hZChyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZCh0KSB7XG4gICAgdmFyIGUgPSBcInNob3J0XCIgPT0gdGhpcy50YWlsVHlwZSA/IFwicHJlZmFicy9EcmFnQ2FyZEVmZmVjdDFcIiA6IFwicHJlZmFicy9EcmFnQ2FyZEVmZmVjdDJcIjtcbiAgICBEcmFnQ2FyZEVmZmVjdC5jcmVhdGVVSShlKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpICYmIFwiaXNMb2FkaW5nXCIgPT0gdC5yX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0KSB7XG4gICAgICAgIHQucl92YWxlbnRpbmVEcmFnQ2FyZEVmZmVjdCA9IGU7XG4gICAgICAgIGUucGFyZW50ID0gdDtcbiAgICAgICAgZS5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKVxuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFZhbGVudGluZURyYWdDYXJkRWZmZWN0VHJhaXQudHJhaXRLZXkgKyBcIl0g5ri45oiP5YaF5Yib5bu65ouW5ou954m55pWI5aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwi5ouW5ou95pWI5p6c5Yqg6L295aSx6LSlXCIpKTtcbiAgICB9KTtcbiAgfVxuICBpc0RyYWdDYXJkRWZmZWN0QWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5kcmFnQ2FyZEVmZmVjdCkgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS5kcmFnQ2FyZEVmZmVjdDtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0LmdldEluc3RhbmNlKCkuaXNFZmZlY3RBY3RpdmUoKTtcbiAgfVxufSJdfQ==
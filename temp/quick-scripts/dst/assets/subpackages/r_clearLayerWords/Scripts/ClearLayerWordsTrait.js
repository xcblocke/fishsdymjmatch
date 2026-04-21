
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_clearLayerWords/Scripts/ClearLayerWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e0561qsP1DobSAjSyMKOq1', 'ClearLayerWordsTrait');
// subpackages/r_clearLayerWords/Scripts/ClearLayerWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearLayerBehavior_1 = require("./ClearLayerBehavior");
var ClearLayerEffect_1 = require("./ClearLayerEffect");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var ClearLayerWordsTrait = /** @class */ (function (_super) {
    __extends(ClearLayerWordsTrait, _super);
    function ClearLayerWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitTop", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitTop) && void 0 !== r ? r : 10;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitBottom", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitBottom) && void 0 !== r ? r : 16;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "isBottomOrigin", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.bottomOrigin) && void 0 !== r && r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitLevel", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitLevel) && void 0 !== r ? r : 1;
        },
        enumerable: false,
        configurable: true
    });
    ClearLayerWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ClearLayer, ClearLayerBehavior_1.default);
    };
    ClearLayerWordsTrait.prototype.onClrNormHlp_tryShwMotWrd = function (e, r) {
        if (this.canShowClearLayerWords(e.ins)) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            r();
        }
    };
    ClearLayerWordsTrait.prototype.canShowClearLayerWords = function (e) {
        var r, t;
        if (!e || !e._baseInput || !e._baseInput._behaviorBuilder)
            return false;
        if (NormalGameData_1.default.getInstance().getLevelId() <= this.limitLevel)
            return false;
        var o = [BehaviorsMapping_1.BehaviorsMapping.ClearLayer, BehaviorsMapping_1.BehaviorsMapping.Fail, BehaviorsMapping_1.BehaviorsMapping.End];
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                if (e._baseInput._behaviorBuilder.findNodeByName(s))
                    return false;
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var l = e._options;
        if (l.isShowFullCombo || l.isShowRewardCombo)
            return false;
        var u = l.tileIds[0], p = l.tileIds[1], f = e._gameContext.getTileMapObject(), y = f.getTileObject(u), h = f.getTileObject(p);
        if (!y || !h)
            return false;
        var d = f.aliveTiles().reduce(function (e, r) {
            return Math.max(e, r.layer);
        }, 0), m = y.layer, _ = h.layer, b = Math.max(m, _);
        if (d >= b)
            return false;
        var g = b - 1;
        if (g < 0)
            return false;
        var C = e._gameContext.getGameData().getLayerTileCount();
        if (b >= C.length)
            return false;
        if (C[b] <= this.limitTop)
            return false;
        var B = f.mapLayers()[g];
        if (!B)
            return false;
        if (this.isBottomOrigin) {
            if (C[g] <= this.limitBottom)
                return false;
        }
        else {
            if (B.allCards.filter(function (e) {
                return e.isValid;
            }).length <= this.limitBottom)
                return false;
        }
        return true;
    };
    ClearLayerWordsTrait.prototype.onClrNormHlp_pushClrFinish = function (e, r) {
        var t = e.ins;
        this.tryExecuteClearLayerWords(t);
        r();
    };
    ClearLayerWordsTrait.prototype.tryExecuteClearLayerWords = function (e) {
        if (this.canShowClearLayerWords(e)) {
            var r = new ClearLayerEffect_1.ClearLayerEffect({});
            e._baseInput.pushEffect(r, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    ClearLayerWordsTrait.prototype.onClrDailyHlp_pushClrFinish = function (e, r) {
        var t = e.ins;
        this.tryExecuteClearLayerWords(t);
        r();
    };
    ClearLayerWordsTrait.traitKey = "ClearLayerWords";
    ClearLayerWordsTrait = __decorate([
        mj.trait,
        mj.class("ClearLayerWordsTrait")
    ], ClearLayerWordsTrait);
    return ClearLayerWordsTrait;
}(Trait_1.default));
exports.default = ClearLayerWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NsZWFyTGF5ZXJXb3Jkcy9TY3JpcHRzL0NsZWFyTGF5ZXJXb3Jkc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBc0U7QUFDdEUsOEVBQTZFO0FBQzdFLG9FQUFtRTtBQUNuRSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDJEQUFzRDtBQUN0RCx1REFBc0Q7QUFDdEQsc0ZBQWlGO0FBR2pGO0lBQWtELHdDQUFLO0lBQXZEOztJQW1HQSxDQUFDO0lBakdDLHNCQUFJLDBDQUFRO2FBQVo7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNkNBQVc7YUFBZjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxnREFB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QUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBQ0QsMERBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBakdNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQW1HeEM7SUFBRCwyQkFBQztDQW5HRCxBQW1HQyxDQW5HaUQsZUFBSyxHQW1HdEQ7a0JBbkdvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBDbGVhckxheWVyQmVoYXZpb3IgZnJvbSAnLi9DbGVhckxheWVyQmVoYXZpb3InO1xuaW1wb3J0IHsgQ2xlYXJMYXllckVmZmVjdCB9IGZyb20gJy4vQ2xlYXJMYXllckVmZmVjdCc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xlYXJMYXllcldvcmRzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyTGF5ZXJXb3Jkc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNsZWFyTGF5ZXJXb3Jkc1wiO1xuICBnZXQgbGltaXRUb3AoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgcmV0dXJuIG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGltaXRUb3ApICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxMDtcbiAgfVxuICBnZXQgbGltaXRCb3R0b20oKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgcmV0dXJuIG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGltaXRCb3R0b20pICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxNjtcbiAgfVxuICBnZXQgaXNCb3R0b21PcmlnaW4oKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgcmV0dXJuIG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuYm90dG9tT3JpZ2luKSAmJiB2b2lkIDAgIT09IHIgJiYgcjtcbiAgfVxuICBnZXQgbGltaXRMZXZlbCgpIHtcbiAgICB2YXIgZSwgcjtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHIgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5saW1pdExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgQmVoYXZpb3JGYWN0b3J5LnJlZ2lzdGVyQmVoYXZpb3IoQmVoYXZpb3JzTWFwcGluZy5DbGVhckxheWVyLCBDbGVhckxheWVyQmVoYXZpb3IpO1xuICB9XG4gIG9uQ2xyTm9ybUhscF90cnlTaHdNb3RXcmQoZSwgcikge1xuICAgIGlmICh0aGlzLmNhblNob3dDbGVhckxheWVyV29yZHMoZS5pbnMpKSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgY2FuU2hvd0NsZWFyTGF5ZXJXb3JkcyhlKSB7XG4gICAgdmFyIHIsIHQ7XG4gICAgaWYgKCFlIHx8ICFlLl9iYXNlSW5wdXQgfHwgIWUuX2Jhc2VJbnB1dC5fYmVoYXZpb3JCdWlsZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJZCgpIDw9IHRoaXMubGltaXRMZXZlbCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gW0JlaGF2aW9yc01hcHBpbmcuQ2xlYXJMYXllciwgQmVoYXZpb3JzTWFwcGluZy5GYWlsLCBCZWhhdmlvcnNNYXBwaW5nLkVuZF07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhvKSwgYSA9IGkubmV4dCgpOyAhYS5kb25lOyBhID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBhLnZhbHVlO1xuICAgICAgICBpZiAoZS5fYmFzZUlucHV0Ll9iZWhhdmlvckJ1aWxkZXIuZmluZE5vZGVCeU5hbWUocykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmICh0ID0gaS5yZXR1cm4pICYmIHQuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbCA9IGUuX29wdGlvbnM7XG4gICAgaWYgKGwuaXNTaG93RnVsbENvbWJvIHx8IGwuaXNTaG93UmV3YXJkQ29tYm8pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdSA9IGwudGlsZUlkc1swXSxcbiAgICAgIHAgPSBsLnRpbGVJZHNbMV0sXG4gICAgICBmID0gZS5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgeSA9IGYuZ2V0VGlsZU9iamVjdCh1KSxcbiAgICAgIGggPSBmLmdldFRpbGVPYmplY3QocCk7XG4gICAgaWYgKCF5IHx8ICFoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGQgPSBmLmFsaXZlVGlsZXMoKS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGUsIHIubGF5ZXIpO1xuICAgICAgfSwgMCksXG4gICAgICBtID0geS5sYXllcixcbiAgICAgIF8gPSBoLmxheWVyLFxuICAgICAgYiA9IE1hdGgubWF4KG0sIF8pO1xuICAgIGlmIChkID49IGIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZyA9IGIgLSAxO1xuICAgIGlmIChnIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBDID0gZS5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRMYXllclRpbGVDb3VudCgpO1xuICAgIGlmIChiID49IEMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKENbYl0gPD0gdGhpcy5saW1pdFRvcCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBCID0gZi5tYXBMYXllcnMoKVtnXTtcbiAgICBpZiAoIUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0JvdHRvbU9yaWdpbikge1xuICAgICAgaWYgKENbZ10gPD0gdGhpcy5saW1pdEJvdHRvbSkgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQi5hbGxDYXJkcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaXNWYWxpZDtcbiAgICAgIH0pLmxlbmd0aCA8PSB0aGlzLmxpbWl0Qm90dG9tKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uQ2xyTm9ybUhscF9wdXNoQ2xyRmluaXNoKGUsIHIpIHtcbiAgICB2YXIgdCA9IGUuaW5zO1xuICAgIHRoaXMudHJ5RXhlY3V0ZUNsZWFyTGF5ZXJXb3Jkcyh0KTtcbiAgICByKCk7XG4gIH1cbiAgdHJ5RXhlY3V0ZUNsZWFyTGF5ZXJXb3JkcyhlKSB7XG4gICAgaWYgKHRoaXMuY2FuU2hvd0NsZWFyTGF5ZXJXb3JkcyhlKSkge1xuICAgICAgdmFyIHIgPSBuZXcgQ2xlYXJMYXllckVmZmVjdCh7fSk7XG4gICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB9XG4gIH1cbiAgb25DbHJEYWlseUhscF9wdXNoQ2xyRmluaXNoKGUsIHIpIHtcbiAgICB2YXIgdCA9IGUuaW5zO1xuICAgIHRoaXMudHJ5RXhlY3V0ZUNsZWFyTGF5ZXJXb3Jkcyh0KTtcbiAgICByKCk7XG4gIH1cbn0iXX0=
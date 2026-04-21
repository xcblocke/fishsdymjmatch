
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f7e2Q1RA1CQbQkaCDOrYYk', 'UpdateComboBehavior');
// Scripts/base/UpdateComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateComboBehavior = /** @class */ (function (_super) {
    __extends(UpdateComboBehavior, _super);
    function UpdateComboBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentComboNum = 0;
        return _this;
    }
    UpdateComboBehavior.prototype.start = function (e) {
        var o, n, i, r, a = this.context.gameView.effectNode;
        UpdateComboBehavior._currentComboNode && cc.isValid(UpdateComboBehavior._currentComboNode) && this.stopAndRecycleCurrentCombo();
        var s = this.context.gameView.gameObjectPool.get(this.getPoolName());
        if (s) {
            UpdateComboBehavior._currentComboNode = s;
            UpdateComboBehavior._comboAnimationId++;
            var c = UpdateComboBehavior._comboAnimationId;
            s.active = true;
            var u = null === (o = cc.find("spinCombo", s)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton), p = null === (n = cc.find("rightNode/spinDown", s)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton), f = null === (i = cc.find("rightNode/spinUp", s)) || void 0 === i ? void 0 : i.getComponent(sp.Skeleton), d = null === (r = cc.find("rightNode/lblCombo", s)) || void 0 === r ? void 0 : r.getComponent(cc.Label);
            if (u && p && f && d) {
                this._currentComboNum = e.data.comboNum;
                d.string = this.formatComboString(e.data.comboNum);
                s.parent = a;
                var h = this.context.gameView.topRootNode, y = h.parent.convertToWorldSpaceAR(cc.v2(h.x, h.y - h.height / 2)), m = s.parent.convertToNodeSpaceAR(y), v = this.getComboPosition(m), g = d.node.width;
                p.node.position = cc.v3(g / 2, p.node.y);
                f.node.position = cc.v3(g / 2, f.node.y);
                var _ = g - 116;
                v.x -= 0.5 * _;
                s.position = v;
                cc.Tween.stopAllByTarget(d.node);
                d.node.scale = 3;
                d.node.opacity = 255;
                this.playComboAnimation(u, p, f, d, c, s);
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    UpdateComboBehavior.prototype.getPoolName = function () {
        return enumRes_1.PoolName.EffectCombo;
    };
    UpdateComboBehavior.prototype.playComboAnimation = function (e, t, o, n, i, r) {
        var a = this;
        GameUtils_1.default.playSpine(e, "in_combo", false, function () { });
        GameUtils_1.default.playSpine(t, "in_down", false, function () { });
        GameUtils_1.default.playSpine(o, "in_up", false, function () { });
        cc.tween(n.node).to(0.17, {
            scale: 0.7
        }).to(0.1, {
            scale: 1
        }).delay(0.37).to(0.17, {
            scale: 0.9,
            opacity: 0
        }).call(function () {
            a.checkAndFinish(i, r);
        }).start();
    };
    UpdateComboBehavior.prototype.stopAndRecycleCurrentCombo = function () {
        var e, o, n, i;
        if (UpdateComboBehavior._currentComboNode && cc.isValid(UpdateComboBehavior._currentComboNode)) {
            var r = UpdateComboBehavior._currentComboNode;
            cc.Tween.stopAllByTarget(r);
            var l = r.children;
            try {
                for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    cc.Tween.stopAllByTarget(u);
                    this.stopAllTweensRecursively(u);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (o = s.return) && o.call(s);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            var p = r.getComponentsInChildren(sp.Skeleton);
            try {
                for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value;
                    h && h.node && h.clearTracks();
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (i = f.return) && i.call(f);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            this.context.gameView.gameObjectPool.push(this.getPoolName(), r);
            UpdateComboBehavior._currentComboNode = null;
        }
    };
    UpdateComboBehavior.prototype.stopAllTweensRecursively = function (e) {
        var t, o;
        cc.Tween.stopAllByTarget(e);
        try {
            for (var n = __values(e.children), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                this.stopAllTweensRecursively(r);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    UpdateComboBehavior.prototype.checkAndFinish = function (e, o) {
        if (e === UpdateComboBehavior._comboAnimationId && UpdateComboBehavior._currentComboNode === o) {
            this.context.gameView.gameObjectPool.push(this.getPoolName(), o);
            UpdateComboBehavior._currentComboNode = null;
        }
    };
    UpdateComboBehavior.prototype.formatComboString = function (e) {
        return e.toString();
    };
    UpdateComboBehavior.prototype.getComboPosition = function (e) {
        return cc.v3(e.x - 56, e.y - 100);
    };
    UpdateComboBehavior._currentComboNode = null;
    UpdateComboBehavior._comboAnimationId = 0;
    __decorate([
        mj.traitEvent("UpdComboBhv_start")
    ], UpdateComboBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("UpdComboBhv_poolName")
    ], UpdateComboBehavior.prototype, "getPoolName", null);
    __decorate([
        mj.traitEvent("UpdComboBhv_playAnim")
    ], UpdateComboBehavior.prototype, "playComboAnimation", null);
    __decorate([
        mj.traitEvent("UpdComboBhv_fmtStr")
    ], UpdateComboBehavior.prototype, "formatComboString", null);
    __decorate([
        mj.traitEvent("UpdComboBhv_getPos")
    ], UpdateComboBehavior.prototype, "getComboPosition", null);
    return UpdateComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateComboBehavior = UpdateComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlQ29tYm9CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSw4REFBeUQ7QUFDekQsK0NBQStDO0FBQy9DLHlEQUF3RDtBQUN4RDtJQUF5Qyx1Q0FBaUI7SUFBMUQ7UUFBQSxxRUErSUM7UUE5SUMsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQThJdkIsQ0FBQztJQTFJQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdkMsbUJBQW1CLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2hJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEVBQUU7WUFDTCxtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7WUFDMUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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RUQsOENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTVJTSxxQ0FBaUIsR0FBRyxJQUFJLENBQUM7SUFDekIscUNBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRTdCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztvREF1Q2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzBEQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztpRUFnQnJDO0lBd0VEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztnRUFHbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7K0RBR25DO0lBQ0gsMEJBQUM7Q0EvSUQsQUErSUMsQ0EvSXdDLHFDQUFpQixHQStJekQ7QUEvSVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgUG9vbE5hbWUgfSBmcm9tICcuLi9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlQ29tYm9CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX2N1cnJlbnRDb21ib051bSA9IDA7XG4gIHN0YXRpYyBfY3VycmVudENvbWJvTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBfY29tYm9BbmltYXRpb25JZCA9IDA7XG4gIEBtai50cmFpdEV2ZW50KFwiVXBkQ29tYm9CaHZfc3RhcnRcIilcbiAgc3RhcnQoZSkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICByLFxuICAgICAgYSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlO1xuICAgIFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib05vZGUgJiYgY2MuaXNWYWxpZChVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9Ob2RlKSAmJiB0aGlzLnN0b3BBbmRSZWN5Y2xlQ3VycmVudENvbWJvKCk7XG4gICAgdmFyIHMgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZU9iamVjdFBvb2wuZ2V0KHRoaXMuZ2V0UG9vbE5hbWUoKSk7XG4gICAgaWYgKHMpIHtcbiAgICAgIFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib05vZGUgPSBzO1xuICAgICAgVXBkYXRlQ29tYm9CZWhhdmlvci5fY29tYm9BbmltYXRpb25JZCsrO1xuICAgICAgdmFyIGMgPSBVcGRhdGVDb21ib0JlaGF2aW9yLl9jb21ib0FuaW1hdGlvbklkO1xuICAgICAgcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgdmFyIHUgPSBudWxsID09PSAobyA9IGNjLmZpbmQoXCJzcGluQ29tYm9cIiwgcykpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSxcbiAgICAgICAgcCA9IG51bGwgPT09IChuID0gY2MuZmluZChcInJpZ2h0Tm9kZS9zcGluRG93blwiLCBzKSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLFxuICAgICAgICBmID0gbnVsbCA9PT0gKGkgPSBjYy5maW5kKFwicmlnaHROb2RlL3NwaW5VcFwiLCBzKSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLFxuICAgICAgICBkID0gbnVsbCA9PT0gKHIgPSBjYy5maW5kKFwicmlnaHROb2RlL2xibENvbWJvXCIsIHMpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBpZiAodSAmJiBwICYmIGYgJiYgZCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50Q29tYm9OdW0gPSBlLmRhdGEuY29tYm9OdW07XG4gICAgICAgIGQuc3RyaW5nID0gdGhpcy5mb3JtYXRDb21ib1N0cmluZyhlLmRhdGEuY29tYm9OdW0pO1xuICAgICAgICBzLnBhcmVudCA9IGE7XG4gICAgICAgIHZhciBoID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRvcFJvb3ROb2RlLFxuICAgICAgICAgIHkgPSBoLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoaC54LCBoLnkgLSBoLmhlaWdodCAvIDIpKSxcbiAgICAgICAgICBtID0gcy5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoeSksXG4gICAgICAgICAgdiA9IHRoaXMuZ2V0Q29tYm9Qb3NpdGlvbihtKSxcbiAgICAgICAgICBnID0gZC5ub2RlLndpZHRoO1xuICAgICAgICBwLm5vZGUucG9zaXRpb24gPSBjYy52MyhnIC8gMiwgcC5ub2RlLnkpO1xuICAgICAgICBmLm5vZGUucG9zaXRpb24gPSBjYy52MyhnIC8gMiwgZi5ub2RlLnkpO1xuICAgICAgICB2YXIgXyA9IGcgLSAxMTY7XG4gICAgICAgIHYueCAtPSAwLjUgKiBfO1xuICAgICAgICBzLnBvc2l0aW9uID0gdjtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGQubm9kZSk7XG4gICAgICAgIGQubm9kZS5zY2FsZSA9IDM7XG4gICAgICAgIGQubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLnBsYXlDb21ib0FuaW1hdGlvbih1LCBwLCBmLCBkLCBjLCBzKTtcbiAgICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXBkQ29tYm9CaHZfcG9vbE5hbWVcIilcbiAgZ2V0UG9vbE5hbWUoKSB7XG4gICAgcmV0dXJuIFBvb2xOYW1lLkVmZmVjdENvbWJvO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXBkQ29tYm9CaHZfcGxheUFuaW1cIilcbiAgcGxheUNvbWJvQW5pbWF0aW9uKGUsIHQsIG8sIG4sIGksIHIpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLCBcImluX2NvbWJvXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0LCBcImluX2Rvd25cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKG8sIFwiaW5fdXBcIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICBjYy50d2VlbihuLm5vZGUpLnRvKDAuMTcsIHtcbiAgICAgIHNjYWxlOiAwLjdcbiAgICB9KS50bygwLjEsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkuZGVsYXkoMC4zNykudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDAuOSxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGEuY2hlY2tBbmRGaW5pc2goaSwgcik7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBzdG9wQW5kUmVjeWNsZUN1cnJlbnRDb21ibygpIHtcbiAgICB2YXIgZSwgbywgbiwgaTtcbiAgICBpZiAoVXBkYXRlQ29tYm9CZWhhdmlvci5fY3VycmVudENvbWJvTm9kZSAmJiBjYy5pc1ZhbGlkKFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib05vZGUpKSB7XG4gICAgICB2YXIgciA9IFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib05vZGU7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocik7XG4gICAgICB2YXIgbCA9IHIuY2hpbGRyZW47XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMobCksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHUgPSBjLnZhbHVlO1xuICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh1KTtcbiAgICAgICAgICB0aGlzLnN0b3BBbGxUd2VlbnNSZWN1cnNpdmVseSh1KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBwID0gci5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMocCksIGQgPSBmLm5leHQoKTsgIWQuZG9uZTsgZCA9IGYubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGggPSBkLnZhbHVlO1xuICAgICAgICAgIGggJiYgaC5ub2RlICYmIGguY2xlYXJUcmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGQgJiYgIWQuZG9uZSAmJiAoaSA9IGYucmV0dXJuKSAmJiBpLmNhbGwoZik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5wdXNoKHRoaXMuZ2V0UG9vbE5hbWUoKSwgcik7XG4gICAgICBVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9Ob2RlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgc3RvcEFsbFR3ZWVuc1JlY3Vyc2l2ZWx5KGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhlLmNoaWxkcmVuKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBpLnZhbHVlO1xuICAgICAgICB0aGlzLnN0b3BBbGxUd2VlbnNSZWN1cnNpdmVseShyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGVja0FuZEZpbmlzaChlLCBvKSB7XG4gICAgaWYgKGUgPT09IFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2NvbWJvQW5pbWF0aW9uSWQgJiYgVXBkYXRlQ29tYm9CZWhhdmlvci5fY3VycmVudENvbWJvTm9kZSA9PT0gbykge1xuICAgICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVPYmplY3RQb29sLnB1c2godGhpcy5nZXRQb29sTmFtZSgpLCBvKTtcbiAgICAgIFVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib05vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVwZENvbWJvQmh2X2ZtdFN0clwiKVxuICBmb3JtYXRDb21ib1N0cmluZyhlKSB7XG4gICAgcmV0dXJuIGUudG9TdHJpbmcoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVwZENvbWJvQmh2X2dldFBvc1wiKVxuICBnZXRDb21ib1Bvc2l0aW9uKGUpIHtcbiAgICByZXR1cm4gY2MudjMoZS54IC0gNTYsIGUueSAtIDEwMCk7XG4gIH1cbn0iXX0=
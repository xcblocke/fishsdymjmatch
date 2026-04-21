
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2MagnetBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9337Wqo2JFj6t2OHlhPM0O', 'Tile2MagnetBehavior');
// Scripts/base/Tile2MagnetBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2MagnetItem_1 = require("../items/Tile2MagnetItem");
var Tile2MagnetBehavior = /** @class */ (function (_super) {
    __extends(Tile2MagnetBehavior, _super);
    function Tile2MagnetBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetBehavior.prototype.start = function (e) {
        var t = e.data.magnetCount || 1;
        try {
            var o = this.context.gameView;
            this.showItem(o, t);
        }
        catch (e) { }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2MagnetBehavior.prototype.showItem = function (e, t) {
        var o = this;
        if (e && cc.isValid(e.nodeTopEffectRoot)) {
            var n = e.nodeTopEffectRoot.getChildByName("magnetNode");
            if (n && cc.isValid(n)) {
                n.active || this.playEnterAnimation(n, t);
            }
            else {
                this.createMagnetNode(e, t, function (e) {
                    o.playEnterAnimation(e, t);
                });
            }
        }
    };
    Tile2MagnetBehavior.prototype.getNodeCfg = function () {
        return null;
    };
    Tile2MagnetBehavior.prototype.createMagnetNode = function (e, t, o) {
        var n = this.getNodeCfg();
        n && Tile2MagnetItem_1.default.createUI(n.url, n.bundleName).then(function (t) {
            if (!cc.isValid(t))
                return null;
            if (!e || !cc.isValid(e.nodeTopEffectRoot)) {
                t.destroy();
                return null;
            }
            e.nodeTopEffectRoot.addChild(t);
            t.active = false;
            null == o || o(t);
        }).catch(function () { });
    };
    Tile2MagnetBehavior.prototype.playEnterAnimation = function (e, t) {
        var o = this.context.gameView, n = null == o ? void 0 : o.getSlotBarNode(), i = null == o ? void 0 : o.nodeTopEffectRoot;
        if (e && cc.isValid(e) && n && cc.isValid(n) && i && cc.isValid(i)) {
            var r = this.getOffset(), a = n.convertToWorldSpaceAR(r), l = i.convertToNodeSpaceAR(a);
            e.active = true;
            var c = e.getComponent(Tile2MagnetItem_1.default);
            if (c && c.playEnterAnimation) {
                var u = {
                    enterDuration: this.getEnterTime(),
                    countdownDuration: this.getDownTime(),
                    exitDuration: this.getExitTime(),
                    targetPos: l,
                    magnetCount: t
                };
                c.playEnterAnimation(u);
            }
        }
    };
    Tile2MagnetBehavior.prototype.getOffset = function () {
        return cc.v2(-455, -120);
    };
    Tile2MagnetBehavior.prototype.getEnterTime = function () {
        return 0.5;
    };
    Tile2MagnetBehavior.prototype.getDownTime = function () {
        return 5;
    };
    Tile2MagnetBehavior.prototype.getExitTime = function () {
        return 0.3;
    };
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_showItem")
    ], Tile2MagnetBehavior.prototype, "showItem", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_nodeCfg")
    ], Tile2MagnetBehavior.prototype, "getNodeCfg", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_offset")
    ], Tile2MagnetBehavior.prototype, "getOffset", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_enterTime")
    ], Tile2MagnetBehavior.prototype, "getEnterTime", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_downTime")
    ], Tile2MagnetBehavior.prototype, "getDownTime", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_exitTime")
    ], Tile2MagnetBehavior.prototype, "getExitTime", null);
    return Tile2MagnetBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MagnetBehavior = Tile2MagnetBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJNYWduZXRCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsNERBQXVEO0FBQ3ZEO0lBQXlDLHVDQUFpQjtJQUExRDs7SUE4RUEsQ0FBQztJQTdFQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLGtCQUFr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QUFDO0lBRUQseUNBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFuRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3VEQWF4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt5REFHdkM7SUFxQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3dEQUd0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzsyREFHekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7MERBR3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzBEQUd4QztJQUNILDBCQUFDO0NBOUVELEFBOEVDLENBOUV3QyxxQ0FBaUIsR0E4RXpEO0FBOUVZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IFRpbGUyTWFnbmV0SXRlbSBmcm9tICcuLi9pdGVtcy9UaWxlMk1hZ25ldEl0ZW0nO1xuZXhwb3J0IGNsYXNzIFRpbGUyTWFnbmV0QmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5tYWduZXRDb3VudCB8fCAxO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IHRoaXMuY29udGV4dC5nYW1lVmlldztcbiAgICAgIHRoaXMuc2hvd0l0ZW0obywgdCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJNYWduZXRCaHZfc2hvd0l0ZW1cIilcbiAgc2hvd0l0ZW0oZSwgdCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUubm9kZVRvcEVmZmVjdFJvb3QpKSB7XG4gICAgICB2YXIgbiA9IGUubm9kZVRvcEVmZmVjdFJvb3QuZ2V0Q2hpbGRCeU5hbWUoXCJtYWduZXROb2RlXCIpO1xuICAgICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgICBuLmFjdGl2ZSB8fCB0aGlzLnBsYXlFbnRlckFuaW1hdGlvbihuLCB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JlYXRlTWFnbmV0Tm9kZShlLCB0LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG8ucGxheUVudGVyQW5pbWF0aW9uKGUsIHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMk1hZ25ldEJodl9ub2RlQ2ZnXCIpXG4gIGdldE5vZGVDZmcoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY3JlYXRlTWFnbmV0Tm9kZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLmdldE5vZGVDZmcoKTtcbiAgICBuICYmIFRpbGUyTWFnbmV0SXRlbS5jcmVhdGVVSShuLnVybCwgbi5idW5kbGVOYW1lKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQodCkpIHJldHVybiBudWxsO1xuICAgICAgaWYgKCFlIHx8ICFjYy5pc1ZhbGlkKGUubm9kZVRvcEVmZmVjdFJvb3QpKSB7XG4gICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGUubm9kZVRvcEVmZmVjdFJvb3QuYWRkQ2hpbGQodCk7XG4gICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgbnVsbCA9PSBvIHx8IG8odCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICB9XG4gIHBsYXlFbnRlckFuaW1hdGlvbihlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcsXG4gICAgICBuID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRTbG90QmFyTm9kZSgpLFxuICAgICAgaSA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8ubm9kZVRvcEVmZmVjdFJvb3Q7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlKSAmJiBuICYmIGNjLmlzVmFsaWQobikgJiYgaSAmJiBjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0T2Zmc2V0KCksXG4gICAgICAgIGEgPSBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihyKSxcbiAgICAgICAgbCA9IGkuY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB2YXIgYyA9IGUuZ2V0Q29tcG9uZW50KFRpbGUyTWFnbmV0SXRlbSk7XG4gICAgICBpZiAoYyAmJiBjLnBsYXlFbnRlckFuaW1hdGlvbikge1xuICAgICAgICB2YXIgdSA9IHtcbiAgICAgICAgICBlbnRlckR1cmF0aW9uOiB0aGlzLmdldEVudGVyVGltZSgpLFxuICAgICAgICAgIGNvdW50ZG93bkR1cmF0aW9uOiB0aGlzLmdldERvd25UaW1lKCksXG4gICAgICAgICAgZXhpdER1cmF0aW9uOiB0aGlzLmdldEV4aXRUaW1lKCksXG4gICAgICAgICAgdGFyZ2V0UG9zOiBsLFxuICAgICAgICAgIG1hZ25ldENvdW50OiB0XG4gICAgICAgIH07XG4gICAgICAgIGMucGxheUVudGVyQW5pbWF0aW9uKHUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyTWFnbmV0Qmh2X29mZnNldFwiKVxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIGNjLnYyKC00NTUsIC0xMjApO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJNYWduZXRCaHZfZW50ZXJUaW1lXCIpXG4gIGdldEVudGVyVGltZSgpIHtcbiAgICByZXR1cm4gMC41O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJNYWduZXRCaHZfZG93blRpbWVcIilcbiAgZ2V0RG93blRpbWUoKSB7XG4gICAgcmV0dXJuIDU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMk1hZ25ldEJodl9leGl0VGltZVwiKVxuICBnZXRFeGl0VGltZSgpIHtcbiAgICByZXR1cm4gMC4zO1xuICB9XG59Il19
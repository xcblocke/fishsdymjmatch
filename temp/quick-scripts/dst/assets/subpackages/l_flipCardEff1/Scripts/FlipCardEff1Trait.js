
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flipCardEff1/Scripts/FlipCardEff1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de05b/9+hNCI44FDOt8WbWy', 'FlipCardEff1Trait');
// subpackages/l_flipCardEff1/Scripts/FlipCardEff1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var FlipCardEff1Trait = /** @class */ (function (_super) {
    __extends(FlipCardEff1Trait, _super);
    function FlipCardEff1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlipCardEff1Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        t();
        e.ins.addPreloadRes("SkeletonData", ['l_flipCardEff1:spine/gameplay_flip']);
    };
    FlipCardEff1Trait.prototype.onFlipAni_playEnter = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        var a = e.ins, n = e.args[0], r = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, n), function () {
            var e = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
            a.createAnimNode().parent = e.node;
            (r = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
            return e.node;
        }, false, "l_flipCardEff1");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = false);
        });
        a.ensureLockBgState(a._baseTileNode);
    };
    FlipCardEff1Trait.prototype.onFlipAni_playExit = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        var a = e.ins, n = e.args[0], r = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, n), function () {
            var e = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
            a.createAnimNode().parent = e.node;
            (r = BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
            r.node.active = false;
            return e.node;
        }, false, "l_flipCardEff1");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = true);
        });
        a.ensureLockBgState(a._baseTileNode);
    };
    FlipCardEff1Trait.traitKey = "FlipCardEff1";
    FlipCardEff1Trait = __decorate([
        mj.trait,
        mj.class("FlipCardEff1Trait")
    ], FlipCardEff1Trait);
    return FlipCardEff1Trait;
}(Trait_1.default));
exports.default = FlipCardEff1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZsaXBDYXJkRWZmMS9TY3JpcHRzL0ZsaXBDYXJkRWZmMVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDJFQUFzRTtBQUd0RTtJQUErQyxxQ0FBSztJQUFwRDs7SUFtREEsQ0FBQztJQWpEQyxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELCtDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDM0gsSUFBSSxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZ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QyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFqRE0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBbURyQztJQUFELHdCQUFDO0NBbkRELEFBbURDLENBbkQ4QyxlQUFLLEdBbURuRDtrQkFuRG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsaXBDYXJkRWZmMVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGlwQ2FyZEVmZjFUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbGlwQ2FyZEVmZjFcIjtcbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCB0KSB7XG4gICAgdCgpO1xuICAgIGUuaW5zLmFkZFByZWxvYWRSZXMoXCJTa2VsZXRvbkRhdGFcIiwgWydsX2ZsaXBDYXJkRWZmMTpzcGluZS9nYW1lcGxheV9mbGlwJ10pO1xuICB9XG4gIG9uRmxpcEFuaV9wbGF5RW50ZXIoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBhID0gZS5pbnMsXG4gICAgICBuID0gZS5hcmdzWzBdLFxuICAgICAgciA9IG51bGw7XG4gICAgYS5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGEuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBpID0gYS5fYmFzZVRpbGVOb2RlLnBsYXlBbmltTm9kZUFuaW1hdGlvbihcInNwaW5lL2dhbWVwbGF5X2ZsaXBcIiwgXCJpblwiLCBmYWxzZSwgYS5oYW5kbGVFbnRlckFuaW1hdGlvbkNvbXBsZXRlLmJpbmQoYSwgbiksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gQmFzZVNwcml0ZS5jcmVhdGVCeUF0bGFzKFwiYXRsYXMvY2FyZEljb25cIiwgXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIik7XG4gICAgICBhLmNyZWF0ZUFuaW1Ob2RlKCkucGFyZW50ID0gZS5ub2RlO1xuICAgICAgKHIgPSBCYXNlU3ByaXRlLmNyZWF0ZUJ5QXRsYXMoXCJhdGxhcy9jYXJkSWNvblwiLCBcImdhbWVwbGF5X2ltZ19tal9kblwiKSkubm9kZS5wYXJlbnQgPSBlLm5vZGU7XG4gICAgICByZXR1cm4gZS5ub2RlO1xuICAgIH0sIGZhbHNlLCBcImxfZmxpcENhcmRFZmYxXCIpO1xuICAgIGkuZ2V0U2tlbGV0b24oKS5zZXRBbmltYXRpb25DYWNoZU1vZGUoc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlJFQUxUSU1FKTtcbiAgICBpLmdldFNrZWxldG9uKCkuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgXCJldmVudF9tYWhqb25nXCIgPT09IHQuZGF0YS5uYW1lICYmIHIgJiYgY2MuaXNWYWxpZChyLm5vZGUpICYmIChyLm5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICAgIH0pO1xuICAgIGEuZW5zdXJlTG9ja0JnU3RhdGUoYS5fYmFzZVRpbGVOb2RlKTtcbiAgfVxuICBvbkZsaXBBbmlfcGxheUV4aXQoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBhID0gZS5pbnMsXG4gICAgICBuID0gZS5hcmdzWzBdLFxuICAgICAgciA9IG51bGw7XG4gICAgYS5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGEuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBpID0gYS5fYmFzZVRpbGVOb2RlLnBsYXlBbmltTm9kZUFuaW1hdGlvbihcInNwaW5lL2dhbWVwbGF5X2ZsaXBcIiwgXCJvdXRcIiwgZmFsc2UsIGEuaGFuZGxlRXhpdEFuaW1hdGlvbkNvbXBsZXRlLmJpbmQoYSwgbiksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gQmFzZVNwcml0ZS5jcmVhdGVCeUF0bGFzKFwiYXRsYXMvY2FyZEljb25cIiwgXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIik7XG4gICAgICBhLmNyZWF0ZUFuaW1Ob2RlKCkucGFyZW50ID0gZS5ub2RlO1xuICAgICAgKHIgPSBCYXNlU3ByaXRlLmNyZWF0ZUJ5QXRsYXMoXCJhdGxhcy9jYXJkSWNvblwiLCBcImdhbWVwbGF5X2ltZ19tal9kblwiKSkubm9kZS5wYXJlbnQgPSBlLm5vZGU7XG4gICAgICByLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICByZXR1cm4gZS5ub2RlO1xuICAgIH0sIGZhbHNlLCBcImxfZmxpcENhcmRFZmYxXCIpO1xuICAgIGkuZ2V0U2tlbGV0b24oKS5zZXRBbmltYXRpb25DYWNoZU1vZGUoc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlJFQUxUSU1FKTtcbiAgICBpLmdldFNrZWxldG9uKCkuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgXCJldmVudF9tYWhqb25nXCIgPT09IHQuZGF0YS5uYW1lICYmIHIgJiYgY2MuaXNWYWxpZChyLm5vZGUpICYmIChyLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgfSk7XG4gICAgYS5lbnN1cmVMb2NrQmdTdGF0ZShhLl9iYXNlVGlsZU5vZGUpO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_flipCardEff2/Scripts/FlipCardEff2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cebf25DgeZDv46xpehBus4P', 'FlipCardEff2Trait');
// subpackages/r_flipCardEff2/Scripts/FlipCardEff2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var FlipCardEff2Trait = /** @class */ (function (_super) {
    __extends(FlipCardEff2Trait, _super);
    function FlipCardEff2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FlipCardEff2Trait.prototype, "playFlipEff", {
        get: function () {
            var e, t;
            return null == (null === (e = this._traitData) || void 0 === e ? void 0 : e.playFlipEff) || (null === (t = this._traitData) || void 0 === t ? void 0 : t.playFlipEff);
        },
        enumerable: false,
        configurable: true
    });
    FlipCardEff2Trait.prototype.onMainGameCtrl_initRes = function (e, t) {
        t();
        e.ins.addPreloadRes("SkeletonData", ['r_flipCardEff2:spine/gameplay_flip', 'r_flipCardEff2:spine/gameplay_flip_efx']);
    };
    FlipCardEff2Trait.prototype.onFlipAni_playEnter = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        this.playNewEnter(e);
    };
    FlipCardEff2Trait.prototype.playNewEnter = function (e) {
        var t = this, a = e.ins, r = e.args[0], n = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, r), function () {
            var e = t.getCardFrontNode();
            a.createAnimNode().parent = e;
            (n = t.getCardBackNode()).parent = e;
            return e;
        }, false, "r_flipCardEff2");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = false);
        });
        if (this.playFlipEff) {
            var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"), l = BaseSpine_1.default.create("spine/gameplay_flip_efx", "in", 1, null, true, "r_flipCardEff2");
            l.node.parent = o;
            l.node.zIndex = 10;
        }
    };
    FlipCardEff2Trait.prototype.onFlipAni_playExit = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
        this.playNewExit(e);
    };
    FlipCardEff2Trait.prototype.playNewExit = function (e) {
        var t = this, a = e.ins, r = e.args[0], n = null;
        a._baseTileNode.tileNode.active = false;
        a._baseTileNode.shadowNode.active = false;
        var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, r), function () {
            var e = t.getCardFrontNode();
            a.createAnimNode().parent = e;
            (n = t.getCardBackNode()).parent = e;
            n.active = false;
            return e;
        }, false, "r_flipCardEff2");
        i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.getSkeleton().setEventListener(function (e, t) {
            "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = true);
        });
        var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"), l = BaseSpine_1.default.create("spine/gameplay_flip_efx", "out", 1, null, true, "r_flipCardEff2");
        l.node.parent = o;
        l.node.zIndex = 10;
    };
    FlipCardEff2Trait.prototype.getCardFrontNode = function () {
        return BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2").node;
    };
    FlipCardEff2Trait.prototype.getCardBackNode = function () {
        return BaseSprite_1.default.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn").node;
    };
    FlipCardEff2Trait.traitKey = "FlipCardEff2";
    __decorate([
        mj.traitEvent("FlipCardEff_frontNode")
    ], FlipCardEff2Trait.prototype, "getCardFrontNode", null);
    __decorate([
        mj.traitEvent("FlipCardEff_backNode")
    ], FlipCardEff2Trait.prototype, "getCardBackNode", null);
    FlipCardEff2Trait = __decorate([
        mj.trait,
        mj.class("FlipCardEff2Trait")
    ], FlipCardEff2Trait);
    return FlipCardEff2Trait;
}(Trait_1.default));
exports.default = FlipCardEff2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2ZsaXBDYXJkRWZmMi9TY3JpcHRzL0ZsaXBDYXJkRWZmMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFHdEU7SUFBK0MscUNBQUs7SUFBcEQ7O0lBK0VBLENBQUM7SUE3RUMsc0JBQUksMENBQVc7YUFBZjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4SyxDQUFDOzs7T0FBQTtJQUNELGtEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0QsK0NBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMs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QjtRQUNFLE9BQU8sb0JBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEYsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxPQUFPLG9CQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9FLENBQUM7SUE3RU0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUF1RWpDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs2REFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NERBR3JDO0lBOUVrQixpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBK0VyQztJQUFELHdCQUFDO0NBL0VELEFBK0VDLENBL0U4QyxlQUFLLEdBK0VuRDtrQkEvRW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGbGlwQ2FyZEVmZjJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENhcmRFZmYyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxpcENhcmRFZmYyXCI7XG4gIGdldCBwbGF5RmxpcEVmZigpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gbnVsbCA9PSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUucGxheUZsaXBFZmYpIHx8IChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5wbGF5RmxpcEVmZik7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCB0KSB7XG4gICAgdCgpO1xuICAgIGUuaW5zLmFkZFByZWxvYWRSZXMoXCJTa2VsZXRvbkRhdGFcIiwgWydyX2ZsaXBDYXJkRWZmMjpzcGluZS9nYW1lcGxheV9mbGlwJywgJ3JfZmxpcENhcmRFZmYyOnNwaW5lL2dhbWVwbGF5X2ZsaXBfZWZ4J10pO1xuICB9XG4gIG9uRmxpcEFuaV9wbGF5RW50ZXIoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucGxheU5ld0VudGVyKGUpO1xuICB9XG4gIHBsYXlOZXdFbnRlcihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgYSA9IGUuaW5zLFxuICAgICAgciA9IGUuYXJnc1swXSxcbiAgICAgIG4gPSBudWxsO1xuICAgIGEuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBhLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgaSA9IGEuX2Jhc2VUaWxlTm9kZS5wbGF5QW5pbU5vZGVBbmltYXRpb24oXCJzcGluZS9nYW1lcGxheV9mbGlwXCIsIFwiaW5cIiwgZmFsc2UsIGEuaGFuZGxlRW50ZXJBbmltYXRpb25Db21wbGV0ZS5iaW5kKGEsIHIpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IHQuZ2V0Q2FyZEZyb250Tm9kZSgpO1xuICAgICAgYS5jcmVhdGVBbmltTm9kZSgpLnBhcmVudCA9IGU7XG4gICAgICAobiA9IHQuZ2V0Q2FyZEJhY2tOb2RlKCkpLnBhcmVudCA9IGU7XG4gICAgICByZXR1cm4gZTtcbiAgICB9LCBmYWxzZSwgXCJyX2ZsaXBDYXJkRWZmMlwiKTtcbiAgICBpLmdldFNrZWxldG9uKCkuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5SRUFMVElNRSk7XG4gICAgaS5nZXRTa2VsZXRvbigpLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIFwiZXZlbnRfbWFoam9uZ1wiID09PSB0LmRhdGEubmFtZSAmJiBjYy5pc1ZhbGlkKG4pICYmIChuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wbGF5RmxpcEVmZikge1xuICAgICAgdmFyIG8gPSBhLl9iYXNlVGlsZU5vZGUuYW5pbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZW1wQW5pbU5vZGVcIiksXG4gICAgICAgIGwgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvZ2FtZXBsYXlfZmxpcF9lZnhcIiwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBcInJfZmxpcENhcmRFZmYyXCIpO1xuICAgICAgbC5ub2RlLnBhcmVudCA9IG87XG4gICAgICBsLm5vZGUuekluZGV4ID0gMTA7XG4gICAgfVxuICB9XG4gIG9uRmxpcEFuaV9wbGF5RXhpdChlLCB0KSB7XG4gICAgdCh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wbGF5TmV3RXhpdChlKTtcbiAgfVxuICBwbGF5TmV3RXhpdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgYSA9IGUuaW5zLFxuICAgICAgciA9IGUuYXJnc1swXSxcbiAgICAgIG4gPSBudWxsO1xuICAgIGEuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBhLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgaSA9IGEuX2Jhc2VUaWxlTm9kZS5wbGF5QW5pbU5vZGVBbmltYXRpb24oXCJzcGluZS9nYW1lcGxheV9mbGlwXCIsIFwib3V0XCIsIGZhbHNlLCBhLmhhbmRsZUV4aXRBbmltYXRpb25Db21wbGV0ZS5iaW5kKGEsIHIpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSA9IHQuZ2V0Q2FyZEZyb250Tm9kZSgpO1xuICAgICAgYS5jcmVhdGVBbmltTm9kZSgpLnBhcmVudCA9IGU7XG4gICAgICAobiA9IHQuZ2V0Q2FyZEJhY2tOb2RlKCkpLnBhcmVudCA9IGU7XG4gICAgICBuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSwgZmFsc2UsIFwicl9mbGlwQ2FyZEVmZjJcIik7XG4gICAgaS5nZXRTa2VsZXRvbigpLnNldEFuaW1hdGlvbkNhY2hlTW9kZShzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuUkVBTFRJTUUpO1xuICAgIGkuZ2V0U2tlbGV0b24oKS5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBcImV2ZW50X21haGpvbmdcIiA9PT0gdC5kYXRhLm5hbWUgJiYgY2MuaXNWYWxpZChuKSAmJiAobi5hY3RpdmUgPSB0cnVlKTtcbiAgICB9KTtcbiAgICB2YXIgbyA9IGEuX2Jhc2VUaWxlTm9kZS5hbmltTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBBbmltTm9kZVwiKSxcbiAgICAgIGwgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvZ2FtZXBsYXlfZmxpcF9lZnhcIiwgXCJvdXRcIiwgMSwgbnVsbCwgdHJ1ZSwgXCJyX2ZsaXBDYXJkRWZmMlwiKTtcbiAgICBsLm5vZGUucGFyZW50ID0gbztcbiAgICBsLm5vZGUuekluZGV4ID0gMTA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbGlwQ2FyZEVmZl9mcm9udE5vZGVcIilcbiAgZ2V0Q2FyZEZyb250Tm9kZSgpIHtcbiAgICByZXR1cm4gQmFzZVNwcml0ZS5jcmVhdGVCeUF0bGFzKFwiYXRsYXMvY2FyZEljb25cIiwgXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIikubm9kZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZsaXBDYXJkRWZmX2JhY2tOb2RlXCIpXG4gIGdldENhcmRCYWNrTm9kZSgpIHtcbiAgICByZXR1cm4gQmFzZVNwcml0ZS5jcmVhdGVCeUF0bGFzKFwiYXRsYXMvY2FyZEljb25cIiwgXCJnYW1lcGxheV9pbWdfbWpfZG5cIikubm9kZTtcbiAgfVxufSJdfQ==
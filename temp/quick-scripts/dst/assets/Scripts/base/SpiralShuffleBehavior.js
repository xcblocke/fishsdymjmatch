
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/SpiralShuffleBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6da0epU8GNPmJzHqBpUfHPT', 'SpiralShuffleBehavior');
// Scripts/base/SpiralShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiralShuffleBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleAnimationManager_1 = require("../animation/manager/ShuffleAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var SpiralShuffleBehavior = /** @class */ (function (_super) {
    __extends(SpiralShuffleBehavior, _super);
    function SpiralShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpiralShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Refresh);
    };
    SpiralShuffleBehavior.prototype.start = function () {
        var e, t;
        this.playShuffleAudio();
        var o = ShuffleUtils_1.default.getPrePlayTime(this.context);
        if (o) {
            var n = null === (t = null === (e = this.context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.timerComponent;
            if (n) {
                n.doOnce(o, this.playShuffleAnimation, this);
            }
            else {
                this.playShuffleAnimation();
            }
        }
        else
            this.playShuffleAnimation();
    };
    SpiralShuffleBehavior.prototype.playShuffleAnimation = function () {
        var e = this, t = ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance(), o = this.context.getTileNodeManager(), n = o.getTileNodes().filter(function (e) {
            var t;
            return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
        });
        if (0 !== n.length) {
            n.forEach(function (e) {
                cc.Tween.stopAllByTarget(e.cardNode);
                cc.Tween.stopAllByTarget(e.shadowCardNode);
                e.stopAllAnimation();
            });
            var i = this.getCenterPosition(n[0].cardNode.parent), r = {
                tileNodes: n,
                centerPos: i,
                onRebuild: function (t) {
                    var n = e.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal;
                    if (n) {
                        o.rebuildTileNodeInfosAfterShuffle(t);
                    }
                    else {
                        o.rebuildChangeTypeTileNodes(t);
                    }
                    var r = o.getTileNodes().filter(function (e) {
                        var t;
                        return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
                    });
                    r.forEach(function (e) {
                        e.cardNode.position = i;
                        e.shadowCardNode.position = i;
                        e.shadowCardNode.opacity = 0;
                        n || e.refreshNode(e.info);
                    });
                    return r;
                }
            };
            t.setStrategy("SpiralShuffle");
            t.play({
                context: r,
                timerComponent: this.context.gameView.timerComponent,
                callbacks: {
                    onStart: function () {
                        e.onShuffleStayStart(n);
                    },
                    onPhaseComplete: function (t) {
                        "stay" === t && e.onShuffleStayEnd(n);
                    },
                    onComplete: function () {
                        e.onShuffleAnimationEnd();
                    }
                }
            });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SpiralShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    SpiralShuffleBehavior.prototype.onShuffleStayStart = function (e) {
        var t, o;
        this.context.gameView.setSwallowEventNodeActive(true);
        if (this.context.gameType !== GameTypeEnums_1.MjGameType.Tile2Normal)
            try {
                for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    r.cancelSelected();
                    r.hidePropHint();
                    r.stopAllAnimation();
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
        this.onShuffleStayStartPlay();
        ShuffleUtils_1.default.onShuffleStayStartPlay(this._context);
    };
    SpiralShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    SpiralShuffleBehavior.prototype.onShuffleStayEnd = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    SpiralShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        this.playShuffleVibrate();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SpiralShuffleBehavior.prototype.playShuffleVibrate = function () {
        this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
    };
    SpiralShuffleBehavior.prototype.onAbort = function () {
        var e;
        ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("SpiralShfBhv_playAud")
    ], SpiralShuffleBehavior.prototype, "playShuffleAudio", null);
    __decorate([
        mj.traitEvent("SpiralShfBhv_vibrate")
    ], SpiralShuffleBehavior.prototype, "playShuffleVibrate", null);
    return SpiralShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SpiralShuffleBehavior = SpiralShuffleBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU3BpcmFsU2h1ZmZsZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTJGO0FBQzNGLDZEQUE2RDtBQUM3RCxxRUFBb0U7QUFDcEUsMEVBQWdGO0FBQ2hGLHdGQUF1RjtBQUN2Rix5REFBd0Q7QUFDeEQsd0RBQW1EO0FBQ25EO0lBQTJDLHlDQUFpQjtJQUE1RDs7SUEwSEEsQ0FBQztJQXhIQyxnREFBZ0IsR0FBaEI7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxxQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDckksSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzdC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QixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLFdBQVcsSUFBSSx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxpQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saURBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBdkhEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztpRUFHckM7SUE4R0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO21FQUdyQztJQU1ILDRCQUFDO0NBMUhELEFBMEhDLENBMUgwQyxxQ0FBaUIsR0EwSDNEO0FBMUhZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoIH0gZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCwgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgU2h1ZmZsZUFuaW1hdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9hbmltYXRpb24vbWFuYWdlci9TaHVmZmxlQW5pbWF0aW9uTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IFNodWZmbGVVdGlscyBmcm9tICcuLi9VaVV0aWxzL1NodWZmbGVVdGlscyc7XG5leHBvcnQgY2xhc3MgU3BpcmFsU2h1ZmZsZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIlNwaXJhbFNoZkJodl9wbGF5QXVkXCIpXG4gIHBsYXlTaHVmZmxlQXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuUmVmcmVzaCk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdGhpcy5wbGF5U2h1ZmZsZUF1ZGlvKCk7XG4gICAgdmFyIG8gPSBTaHVmZmxlVXRpbHMuZ2V0UHJlUGxheVRpbWUodGhpcy5jb250ZXh0KTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSBudWxsID09PSAodCA9IG51bGwgPT09IChlID0gdGhpcy5jb250ZXh0KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnRpbWVyQ29tcG9uZW50O1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgbi5kb09uY2UobywgdGhpcy5wbGF5U2h1ZmZsZUFuaW1hdGlvbiwgdGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXlTaHVmZmxlQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHRoaXMucGxheVNodWZmbGVBbmltYXRpb24oKTtcbiAgfVxuICBwbGF5U2h1ZmZsZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gU2h1ZmZsZUFuaW1hdGlvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksXG4gICAgICBuID0gby5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSBlLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuaXNWYWxpZCkgJiYgIWUudGlsZU9iamVjdC5nZXRJc0luU2xvdEJhcigpO1xuICAgICAgfSk7XG4gICAgaWYgKDAgIT09IG4ubGVuZ3RoKSB7XG4gICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGUuY2FyZE5vZGUpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZS5zaGFkb3dDYXJkTm9kZSk7XG4gICAgICAgIGUuc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0Q2VudGVyUG9zaXRpb24oblswXS5jYXJkTm9kZS5wYXJlbnQpLFxuICAgICAgICByID0ge1xuICAgICAgICAgIHRpbGVOb2RlczogbixcbiAgICAgICAgICBjZW50ZXJQb3M6IGksXG4gICAgICAgICAgb25SZWJ1aWxkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBlLmNvbnRleHQuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICBvLnJlYnVpbGRUaWxlTm9kZUluZm9zQWZ0ZXJTaHVmZmxlKHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgby5yZWJ1aWxkQ2hhbmdlVHlwZVRpbGVOb2Rlcyh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByID0gby5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSBlLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuaXNWYWxpZCkgJiYgIWUudGlsZU9iamVjdC5nZXRJc0luU2xvdEJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZS5jYXJkTm9kZS5wb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICAgIGUuc2hhZG93Q2FyZE5vZGUucG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgICBlLnNoYWRvd0NhcmROb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICBuIHx8IGUucmVmcmVzaE5vZGUoZS5pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgdC5zZXRTdHJhdGVneShcIlNwaXJhbFNodWZmbGVcIik7XG4gICAgICB0LnBsYXkoe1xuICAgICAgICBjb250ZXh0OiByLFxuICAgICAgICB0aW1lckNvbXBvbmVudDogdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLm9uU2h1ZmZsZVN0YXlTdGFydChuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUGhhc2VDb21wbGV0ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIFwic3RheVwiID09PSB0ICYmIGUub25TaHVmZmxlU3RheUVuZChuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUub25TaHVmZmxlQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBnZXRDZW50ZXJQb3NpdGlvbihlKSB7XG4gICAgdmFyIHQgPSBlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAuNSAqIGNjLndpblNpemUud2lkdGgsIDAuNSAqIGNjLndpblNpemUuaGVpZ2h0KSk7XG4gICAgcmV0dXJuIGNjLnYzKHQueCwgdC55KTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKHRydWUpO1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgci5jYW5jZWxTZWxlY3RlZCgpO1xuICAgICAgICByLmhpZGVQcm9wSGludCgpO1xuICAgICAgICByLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uU2h1ZmZsZVN0YXlTdGFydFBsYXkoKTtcbiAgICBTaHVmZmxlVXRpbHMub25TaHVmZmxlU3RheVN0YXJ0UGxheSh0aGlzLl9jb250ZXh0KTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnRQbGF5KCkge31cbiAgb25TaHVmZmxlU3RheUVuZCgpIHtcbiAgICBTaHVmZmxlVXRpbHMucGxheVJlZnJlc2hBbmltYXRpb24odGhpcy5fY29udGV4dCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlU3RheUVuZCwgdGhpcyk7XG4gIH1cbiAgb25TaHVmZmxlQW5pbWF0aW9uRW5kKCkge1xuICAgIHRoaXMucGxheVNodWZmbGVWaWJyYXRlKCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlQmVoYXZpb3JGaW5pc2gpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU3BpcmFsU2hmQmh2X3ZpYnJhdGVcIilcbiAgcGxheVNodWZmbGVWaWJyYXRlKCkge1xuICAgIHRoaXMuY29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZyk7XG4gIH1cbiAgb25BYm9ydCgpIHtcbiAgICB2YXIgZTtcbiAgICBTaHVmZmxlQW5pbWF0aW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3AoKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldykgfHwgdm9pZCAwID09PSBlIHx8IGUuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gIH1cbn0iXX0=
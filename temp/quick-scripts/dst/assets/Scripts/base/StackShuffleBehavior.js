
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/StackShuffleBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7ed6SutL5Du6BPsM/2FSso', 'StackShuffleBehavior');
// Scripts/base/StackShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StackShuffleBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleAnimationManager_1 = require("../animation/manager/ShuffleAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var StackShuffleBehavior = /** @class */ (function (_super) {
    __extends(StackShuffleBehavior, _super);
    function StackShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.RefreshRoll);
    };
    StackShuffleBehavior.prototype.start = function () {
        this.playShuffleAudio();
        this.playShuffleAnimation();
    };
    StackShuffleBehavior.prototype.playShuffleAnimation = function () {
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
            if (this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
                var i = o.root, r = n.length;
                n.forEach(function (e, t) {
                    e.shadowCardNode.parent = i;
                    e.shadowCardNode.zIndex = t;
                    e.cardNode.parent = i;
                    e.cardNode.zIndex = r + t;
                });
            }
            var a = this.getCenterPosition(n[0].cardNode.parent), l = {
                tileNodes: n,
                centerPos: a,
                onRebuild: function (t) {
                    var n = e.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal, i = new Map();
                    t.forEach(function (e) {
                        e.cardNode && e.shadowCardNode && i.set(e.info.tileObject.id, {
                            cardPos: e.cardNode.position.clone(),
                            shadowPos: e.shadowCardNode.position.clone(),
                            cardOpacity: e.cardNode.opacity,
                            shadowOpacity: e.shadowCardNode.opacity
                        });
                    });
                    if (n) {
                        o.rebuildTileNodeInfosAfterShuffle(t);
                    }
                    else {
                        o.rebuildChangeTypeTileNodes(t);
                    }
                    var r = o.getTileNodes().filter(function (e) {
                        var t;
                        return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar() && e.cardNode && e.shadowCardNode;
                    });
                    r.forEach(function (e) {
                        var t = i.get(e.info.tileObject.id);
                        if (t && e.cardNode && e.shadowCardNode) {
                            e.cardNode.position = t.cardPos;
                            e.shadowCardNode.position = t.shadowPos;
                            e.cardNode.opacity = t.cardOpacity;
                            e.shadowCardNode.opacity = t.shadowOpacity;
                        }
                        n || e.refreshNode(e.info);
                    });
                    return r;
                }
            };
            t.setStrategy("StackShuffle");
            t.play({
                context: l,
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
    StackShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    StackShuffleBehavior.prototype.onShuffleStayStart = function (e) {
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
    StackShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    StackShuffleBehavior.prototype.onShuffleStayEnd = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    StackShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        this.playShuffleVibrate();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StackShuffleBehavior.prototype.playShuffleVibrate = function () {
        this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
    };
    StackShuffleBehavior.prototype.onAbort = function () {
        var e;
        ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("StackShfBhv_playAud")
    ], StackShuffleBehavior.prototype, "playShuffleAudio", null);
    __decorate([
        mj.traitEvent("StackShfBhv_vibrate")
    ], StackShuffleBehavior.prototype, "playShuffleVibrate", null);
    return StackShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StackShuffleBehavior = StackShuffleBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU3RhY2tTaHVmZmxlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBMkY7QUFDM0YsNkRBQTZEO0FBQzdELHFFQUFvRTtBQUNwRSwwRUFBZ0Y7QUFDaEYsd0ZBQXVGO0FBQ3ZGLHlEQUF3RDtBQUN4RCx3REFBbUQ7QUFDbkQ7SUFBMEMsd0NBQWlCO0lBQTNEOztJQXdJQSxDQUFDO0lBdElDLCtDQUFnQixHQUFoQjtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELG9DQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsbURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxpREFBdUIsQ0FBQyxXQUFXLEVBQUUsRUFDekMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5RyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsQ0FBQyxDQUFDLE9B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LENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBcklEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztnRUFHcEM7SUE0SEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tFQUdwQztJQU1ILDJCQUFDO0NBeElELEFBd0lDLENBeEl5QyxxQ0FBaUIsR0F3STFEO0FBeElZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoIH0gZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCwgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgU2h1ZmZsZUFuaW1hdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9hbmltYXRpb24vbWFuYWdlci9TaHVmZmxlQW5pbWF0aW9uTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IFNodWZmbGVVdGlscyBmcm9tICcuLi9VaVV0aWxzL1NodWZmbGVVdGlscyc7XG5leHBvcnQgY2xhc3MgU3RhY2tTaHVmZmxlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiU3RhY2tTaGZCaHZfcGxheUF1ZFwiKVxuICBwbGF5U2h1ZmZsZUF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlJlZnJlc2hSb2xsKTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICB0aGlzLnBsYXlTaHVmZmxlQXVkaW8oKTtcbiAgICB0aGlzLnBsYXlTaHVmZmxlQW5pbWF0aW9uKCk7XG4gIH1cbiAgcGxheVNodWZmbGVBbmltYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IFNodWZmbGVBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCksXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLFxuICAgICAgbiA9IG8uZ2V0VGlsZU5vZGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gZS50aWxlT2JqZWN0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzVmFsaWQpICYmICFlLnRpbGVPYmplY3QuZ2V0SXNJblNsb3RCYXIoKTtcbiAgICAgIH0pO1xuICAgIGlmICgwICE9PSBuLmxlbmd0aCkge1xuICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlLmNhcmROb2RlKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGUuc2hhZG93Q2FyZE5vZGUpO1xuICAgICAgICBlLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuY29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgICB2YXIgaSA9IG8ucm9vdCxcbiAgICAgICAgICByID0gbi5sZW5ndGg7XG4gICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGUuc2hhZG93Q2FyZE5vZGUucGFyZW50ID0gaTtcbiAgICAgICAgICBlLnNoYWRvd0NhcmROb2RlLnpJbmRleCA9IHQ7XG4gICAgICAgICAgZS5jYXJkTm9kZS5wYXJlbnQgPSBpO1xuICAgICAgICAgIGUuY2FyZE5vZGUuekluZGV4ID0gciArIHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLmdldENlbnRlclBvc2l0aW9uKG5bMF0uY2FyZE5vZGUucGFyZW50KSxcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICB0aWxlTm9kZXM6IG4sXG4gICAgICAgICAgY2VudGVyUG9zOiBhLFxuICAgICAgICAgIG9uUmVidWlsZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gZS5jb250ZXh0LmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsLFxuICAgICAgICAgICAgICBpID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGUuY2FyZE5vZGUgJiYgZS5zaGFkb3dDYXJkTm9kZSAmJiBpLnNldChlLmluZm8udGlsZU9iamVjdC5pZCwge1xuICAgICAgICAgICAgICAgIGNhcmRQb3M6IGUuY2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICAgICAgICBzaGFkb3dQb3M6IGUuc2hhZG93Q2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICAgICAgICBjYXJkT3BhY2l0eTogZS5jYXJkTm9kZS5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIHNoYWRvd09wYWNpdHk6IGUuc2hhZG93Q2FyZE5vZGUub3BhY2l0eVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgby5yZWJ1aWxkVGlsZU5vZGVJbmZvc0FmdGVyU2h1ZmZsZSh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG8ucmVidWlsZENoYW5nZVR5cGVUaWxlTm9kZXModCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgciA9IG8uZ2V0VGlsZU5vZGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gZS50aWxlT2JqZWN0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzVmFsaWQpICYmICFlLnRpbGVPYmplY3QuZ2V0SXNJblNsb3RCYXIoKSAmJiBlLmNhcmROb2RlICYmIGUuc2hhZG93Q2FyZE5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGkuZ2V0KGUuaW5mby50aWxlT2JqZWN0LmlkKTtcbiAgICAgICAgICAgICAgaWYgKHQgJiYgZS5jYXJkTm9kZSAmJiBlLnNoYWRvd0NhcmROb2RlKSB7XG4gICAgICAgICAgICAgICAgZS5jYXJkTm9kZS5wb3NpdGlvbiA9IHQuY2FyZFBvcztcbiAgICAgICAgICAgICAgICBlLnNoYWRvd0NhcmROb2RlLnBvc2l0aW9uID0gdC5zaGFkb3dQb3M7XG4gICAgICAgICAgICAgICAgZS5jYXJkTm9kZS5vcGFjaXR5ID0gdC5jYXJkT3BhY2l0eTtcbiAgICAgICAgICAgICAgICBlLnNoYWRvd0NhcmROb2RlLm9wYWNpdHkgPSB0LnNoYWRvd09wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbiB8fCBlLnJlZnJlc2hOb2RlKGUuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIHQuc2V0U3RyYXRlZ3koXCJTdGFja1NodWZmbGVcIik7XG4gICAgICB0LnBsYXkoe1xuICAgICAgICBjb250ZXh0OiBsLFxuICAgICAgICB0aW1lckNvbXBvbmVudDogdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLm9uU2h1ZmZsZVN0YXlTdGFydChuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUGhhc2VDb21wbGV0ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIFwic3RheVwiID09PSB0ICYmIGUub25TaHVmZmxlU3RheUVuZChuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUub25TaHVmZmxlQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBnZXRDZW50ZXJQb3NpdGlvbihlKSB7XG4gICAgdmFyIHQgPSBlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAuNSAqIGNjLndpblNpemUud2lkdGgsIDAuNSAqIGNjLndpblNpemUuaGVpZ2h0KSk7XG4gICAgcmV0dXJuIGNjLnYzKHQueCwgdC55KTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKHRydWUpO1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgci5jYW5jZWxTZWxlY3RlZCgpO1xuICAgICAgICByLmhpZGVQcm9wSGludCgpO1xuICAgICAgICByLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uU2h1ZmZsZVN0YXlTdGFydFBsYXkoKTtcbiAgICBTaHVmZmxlVXRpbHMub25TaHVmZmxlU3RheVN0YXJ0UGxheSh0aGlzLl9jb250ZXh0KTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnRQbGF5KCkge31cbiAgb25TaHVmZmxlU3RheUVuZCgpIHtcbiAgICBTaHVmZmxlVXRpbHMucGxheVJlZnJlc2hBbmltYXRpb24odGhpcy5fY29udGV4dCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlU3RheUVuZCwgdGhpcyk7XG4gIH1cbiAgb25TaHVmZmxlQW5pbWF0aW9uRW5kKCkge1xuICAgIHRoaXMucGxheVNodWZmbGVWaWJyYXRlKCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlQmVoYXZpb3JGaW5pc2gpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU3RhY2tTaGZCaHZfdmlicmF0ZVwiKVxuICBwbGF5U2h1ZmZsZVZpYnJhdGUoKSB7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nKTtcbiAgfVxuICBvbkFib3J0KCkge1xuICAgIHZhciBlO1xuICAgIFNodWZmbGVBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcCgpO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgfVxufSJdfQ==
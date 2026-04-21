
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/EnterAnimationBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c38c5JUWSpA8Zxq5X3LETxP', 'EnterAnimationBehavior');
// Scripts/base/EnterAnimationBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EnterAnimationManager_1 = require("../animation/manager/EnterAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameConstant_1 = require("../core/simulator/constant/GameConstant");
var AnimationManager_1 = require("../animation_old/manager/AnimationManager");
var EnterAnimationBehavior = /** @class */ (function (_super) {
    __extends(EnterAnimationBehavior, _super);
    function EnterAnimationBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isAborted = false;
        return _this;
    }
    EnterAnimationBehavior.prototype.start = function (e) {
        this._isAborted = false;
        this._cardLayoutConfig = e.data.cardLayoutConfig;
        this.startPlayEnterAnimation();
    };
    EnterAnimationBehavior.prototype.startPlayEnterAnimation = function () {
        this.playEnterAnimation_old();
    };
    EnterAnimationBehavior.prototype.playEnterAnimation = function () {
        var e = this;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Birth);
        var t = EnterAnimationManager_1.EnterAnimationManager.getInstance(), o = {
            tileNodeMap: this.getFilteredTileNodeMap(),
            cardLayoutConfig: this._cardLayoutConfig,
            screenSize: cc.winSize
        };
        t.play({
            context: o,
            timerComponent: this.context.gameView.timerComponent,
            callbacks: {
                onStart: function () {
                    e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
                },
                onComplete: function () {
                    if (!e._isAborted) {
                        e.context.gameView.setSwallowEventNodeActive(false);
                        e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                }
            }
        });
    };
    EnterAnimationBehavior.prototype.getFilteredTileNodeMap = function () {
        var e, t, o, n = this.context.getTileNodeMap(), i = new Map();
        try {
            for (var r = __values(n), s = r.next(); !s.done; s = r.next()) {
                var c = __read(s.value, 2), u = c[0], p = c[1];
                (null === (o = p.isInSlotBar) || void 0 === o ? void 0 : o.call(p)) || i.set(u, p);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = r.return) && t.call(r);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return i;
    };
    EnterAnimationBehavior.prototype.getHalfCardWidth = function () {
        return 0.5 * this._cardLayoutConfig.cardSize[0];
    };
    EnterAnimationBehavior.prototype.getMaxTileCountX = function () {
        return GameConstant_1.default.MaxTileCountX;
    };
    EnterAnimationBehavior.prototype.getMaxTileCountY = function () {
        return GameConstant_1.default.MaxTileCountY;
    };
    EnterAnimationBehavior.prototype.splitAllCardRects = function () {
        var e, t, o = [], n = this.context.getTileMapObject();
        if (!n || !n.mapLayers)
            return [];
        for (var i = 0; i < n.mapLayers().length; i++) {
            var r = new Map();
            o.push(r);
        }
        try {
            for (var s = __values(this.getFilteredTileNodeMap()), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]), f = p.info.tileObject, d = (i = f.layer, f.gridPosY), h = f.gridPosX;
                o[i] || (o[i] = new Map());
                (r = o[i]).has(d) || r.set(d, new Map());
                r.get(d).set(h, p.cardNode);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (t = s.return) && t.call(s);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    EnterAnimationBehavior.prototype.getAllCardShadows = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this.getFilteredTileNodeMap()), i = n.next(); !i.done; i = n.next()) {
                var r = __read(i.value, 2), s = (r[0], r[1]);
                o.push(s.shadowNode.getComponent(cc.Sprite));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    EnterAnimationBehavior.prototype.playEnterAnimation_old = function () {
        var e = this;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Birth);
        var t = AnimationManager_1.AnimationManager.getInstance();
        t.randomizeAnimationConfig();
        t.playFadeInAnimation({
            timerComponent: this.context.gameView.timerComponent,
            rects: this.splitAllCardRects(),
            shadows: this.getAllCardShadows(),
            halfCardWidth: this.getHalfCardWidth(),
            halfMaxColNum: this.getMaxTileCountX(),
            halfMaxRowNum: this.getMaxTileCountY(),
            startCallback: function () {
                e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
            },
            beforeShadowCallback: function () { },
            endCallback: function () {
                if (!e._isAborted) {
                    e.context.gameView.setSwallowEventNodeActive(false);
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                }
            }
        });
    };
    EnterAnimationBehavior.prototype.onAbort = function () {
        var e;
        this._isAborted = true;
        AnimationManager_1.AnimationManager.getInstance().stopCurrentAnimation();
        EnterAnimationManager_1.EnterAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("EnterAniBhv_startPlay")
    ], EnterAnimationBehavior.prototype, "startPlayEnterAnimation", null);
    __decorate([
        mj.traitEvent("EnterAniBhv_playOld")
    ], EnterAnimationBehavior.prototype, "playEnterAnimation_old", null);
    return EnterAnimationBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.EnterAnimationBehavior = EnterAnimationBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRW50ZXJBbmltYXRpb25CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSwwRUFBb0U7QUFDcEUsb0ZBQW1GO0FBQ25GLHlEQUF3RDtBQUN4RCx3RUFBbUU7QUFDbkUsOEVBQTZFO0FBQzdFO0lBQTRDLDBDQUFpQjtJQUE3RDtRQUFBLHFFQWdLQztRQS9KQyxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUErSnJCLENBQUM7SUE5SkMsc0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0RBQXVCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELG1EQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsNkNBQXFCLENBQUMsV0FBVyxFQUFFLEVBQ3pDLENBQUMsR0FBRztZQUNGLFdBQVcsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDMUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN4QyxVQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU87U0FDdkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTCxPQUFPLEVBQUUsQ0FBQztZQUNWLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjO1lBQ3BELFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVB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QztJQUNELHdDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDdEQsNkNBQXFCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBdkpEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzt5RUFHdEM7SUF1SEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3dFQXdCcEM7SUFRSCw2QkFBQztDQWhLRCxBQWdLQyxDQWhLMkMscUNBQWlCLEdBZ0s1RDtBQWhLWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVudGVyQW5pbWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2FuaW1hdGlvbi9tYW5hZ2VyL0VudGVyQW5pbWF0aW9uTWFuYWdlcic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEdhbWVDb25zdGFudCBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lQ29uc3RhbnQnO1xuaW1wb3J0IHsgQW5pbWF0aW9uTWFuYWdlciB9IGZyb20gJy4uL2FuaW1hdGlvbl9vbGQvbWFuYWdlci9BbmltYXRpb25NYW5hZ2VyJztcbmV4cG9ydCBjbGFzcyBFbnRlckFuaW1hdGlvbkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfaXNBYm9ydGVkID0gZmFsc2U7XG4gIHN0YXJ0KGUpIHtcbiAgICB0aGlzLl9pc0Fib3J0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnID0gZS5kYXRhLmNhcmRMYXlvdXRDb25maWc7XG4gICAgdGhpcy5zdGFydFBsYXlFbnRlckFuaW1hdGlvbigpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRW50ZXJBbmlCaHZfc3RhcnRQbGF5XCIpXG4gIHN0YXJ0UGxheUVudGVyQW5pbWF0aW9uKCkge1xuICAgIHRoaXMucGxheUVudGVyQW5pbWF0aW9uX29sZCgpO1xuICB9XG4gIHBsYXlFbnRlckFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQmlydGgpO1xuICAgIHZhciB0ID0gRW50ZXJBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCksXG4gICAgICBvID0ge1xuICAgICAgICB0aWxlTm9kZU1hcDogdGhpcy5nZXRGaWx0ZXJlZFRpbGVOb2RlTWFwKCksXG4gICAgICAgIGNhcmRMYXlvdXRDb25maWc6IHRoaXMuX2NhcmRMYXlvdXRDb25maWcsXG4gICAgICAgIHNjcmVlblNpemU6IGNjLndpblNpemVcbiAgICAgIH07XG4gICAgdC5wbGF5KHtcbiAgICAgIGNvbnRleHQ6IG8sXG4gICAgICB0aW1lckNvbXBvbmVudDogdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50LFxuICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlLl9pc0Fib3J0ZWQgfHwgZS5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWUuX2lzQWJvcnRlZCkge1xuICAgICAgICAgICAgZS5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgZS5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXRGaWx0ZXJlZFRpbGVOb2RlTWFwKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCksXG4gICAgICBpID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXMobiksIHMgPSByLm5leHQoKTsgIXMuZG9uZTsgcyA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSBjWzBdLFxuICAgICAgICAgIHAgPSBjWzFdO1xuICAgICAgICAobnVsbCA9PT0gKG8gPSBwLmlzSW5TbG90QmFyKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNhbGwocCkpIHx8IGkuc2V0KHUsIHApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHQgPSByLnJldHVybikgJiYgdC5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIGdldEhhbGZDYXJkV2lkdGgoKSB7XG4gICAgcmV0dXJuIDAuNSAqIHRoaXMuX2NhcmRMYXlvdXRDb25maWcuY2FyZFNpemVbMF07XG4gIH1cbiAgZ2V0TWF4VGlsZUNvdW50WCgpIHtcbiAgICByZXR1cm4gR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFg7XG4gIH1cbiAgZ2V0TWF4VGlsZUNvdW50WSgpIHtcbiAgICByZXR1cm4gR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFk7XG4gIH1cbiAgc3BsaXRBbGxDYXJkUmVjdHMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IFtdLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgaWYgKCFuIHx8ICFuLm1hcExheWVycykgcmV0dXJuIFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5tYXBMYXllcnMoKS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHIgPSBuZXcgTWFwKCk7XG4gICAgICBvLnB1c2gocik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXModGhpcy5nZXRGaWx0ZXJlZFRpbGVOb2RlTWFwKCkpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IF9fcmVhZChjLnZhbHVlLCAyKSxcbiAgICAgICAgICBwID0gKHVbMF0sIHVbMV0pLFxuICAgICAgICAgIGYgPSBwLmluZm8udGlsZU9iamVjdCxcbiAgICAgICAgICBkID0gKGkgPSBmLmxheWVyLCBmLmdyaWRQb3NZKSxcbiAgICAgICAgICBoID0gZi5ncmlkUG9zWDtcbiAgICAgICAgb1tpXSB8fCAob1tpXSA9IG5ldyBNYXAoKSk7XG4gICAgICAgIChyID0gb1tpXSkuaGFzKGQpIHx8IHIuc2V0KGQsIG5ldyBNYXAoKSk7XG4gICAgICAgIHIuZ2V0KGQpLnNldChoLCBwLmNhcmROb2RlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmICh0ID0gcy5yZXR1cm4pICYmIHQuY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXRBbGxDYXJkU2hhZG93cygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLmdldEZpbHRlcmVkVGlsZU5vZGVNYXAoKSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gX19yZWFkKGkudmFsdWUsIDIpLFxuICAgICAgICAgIHMgPSAoclswXSwgclsxXSk7XG4gICAgICAgIG8ucHVzaChzLnNoYWRvd05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRW50ZXJBbmlCaHZfcGxheU9sZFwiKVxuICBwbGF5RW50ZXJBbmltYXRpb25fb2xkKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5CaXJ0aCk7XG4gICAgdmFyIHQgPSBBbmltYXRpb25NYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdC5yYW5kb21pemVBbmltYXRpb25Db25maWcoKTtcbiAgICB0LnBsYXlGYWRlSW5BbmltYXRpb24oe1xuICAgICAgdGltZXJDb21wb25lbnQ6IHRoaXMuY29udGV4dC5nYW1lVmlldy50aW1lckNvbXBvbmVudCxcbiAgICAgIHJlY3RzOiB0aGlzLnNwbGl0QWxsQ2FyZFJlY3RzKCksXG4gICAgICBzaGFkb3dzOiB0aGlzLmdldEFsbENhcmRTaGFkb3dzKCksXG4gICAgICBoYWxmQ2FyZFdpZHRoOiB0aGlzLmdldEhhbGZDYXJkV2lkdGgoKSxcbiAgICAgIGhhbGZNYXhDb2xOdW06IHRoaXMuZ2V0TWF4VGlsZUNvdW50WCgpLFxuICAgICAgaGFsZk1heFJvd051bTogdGhpcy5nZXRNYXhUaWxlQ291bnRZKCksXG4gICAgICBzdGFydENhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX2lzQWJvcnRlZCB8fCBlLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZSh0cnVlKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVTaGFkb3dDYWxsYmFjazogZnVuY3Rpb24gKCkge30sXG4gICAgICBlbmRDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWUuX2lzQWJvcnRlZCkge1xuICAgICAgICAgIGUuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICBlLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25BYm9ydCgpIHtcbiAgICB2YXIgZTtcbiAgICB0aGlzLl9pc0Fib3J0ZWQgPSB0cnVlO1xuICAgIEFuaW1hdGlvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9wQ3VycmVudEFuaW1hdGlvbigpO1xuICAgIEVudGVyQW5pbWF0aW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3AoKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldykgfHwgdm9pZCAwID09PSBlIHx8IGUuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gIH1cbn0iXX0=
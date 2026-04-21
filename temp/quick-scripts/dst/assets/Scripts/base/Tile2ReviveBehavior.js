
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ReviveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62a98RM5KtEf49NaLVDDRVc', 'Tile2ReviveBehavior');
// Scripts/base/Tile2ReviveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var Tile2ReviveBehavior = /** @class */ (function (_super) {
    __extends(Tile2ReviveBehavior, _super);
    function Tile2ReviveBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    Tile2ReviveBehavior.prototype.start = function (e) {
        var t = e.data, o = t.returnedTileIds, n = t.reviveType;
        if (o && 0 !== o.length) {
            if ("clear" === n) {
                this.startClearMode(e);
            }
            else {
                this.startReturnMode(e);
            }
        }
        else {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2ReviveBehavior.prototype.startReturnMode = function (e) {
        var t, o, n = this, i = e.data.returnedTileIds, r = this.context.gameView, s = null == r ? void 0 : r.slotBarView, u = this.context.getTileNodeMap();
        if (s) {
            var p = s.getNodeLayer();
            s.removeSlotBar(i);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
            var f = 0, d = function d(e) {
                var t = u.get(e);
                if (!t) {
                    ++f >= i.length && h.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    return "continue";
                }
                t.tile2ReturnFromSlotBar(p, function () {
                    t.tile2RollCard();
                    if (++f >= i.length) {
                        n.playReviveVibrate();
                        n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                });
            }, h = this;
            try {
                for (var y = __values(i), m = y.next(); !m.done; m = y.next())
                    d(m.value);
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    m && !m.done && (o = y.return) && o.call(y);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ReviveBehavior.prototype.playReviveVibrate = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.StrongShort, VibrateManager_1.EVibratePoint.Tile2Revive);
    };
    Tile2ReviveBehavior.prototype.startClearMode = function (e) {
        var t = e.data.returnedTileIds, o = this.context.gameView, n = null == o ? void 0 : o.slotBarView;
        n && n.removeSlotBar(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2RvBhv_start")
    ], Tile2ReviveBehavior.prototype, "start", null);
    return Tile2ReviveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ReviveBehavior = Tile2ReviveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZXZpdmVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsMEVBQW9FO0FBQ3BFLDBFQUEwRztBQUMxRztJQUF5Qyx1Q0FBaUI7SUFBMUQ7UUFBQSxxRUFzRUM7UUFyRUMsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFxRWYsQ0FBQztJQW5FQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRCw2Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFDekIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxj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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuZXhwb3J0IGNsYXNzIFRpbGUyUmV2aXZlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJ2Qmh2X3N0YXJ0XCIpXG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YSxcbiAgICAgIG8gPSB0LnJldHVybmVkVGlsZUlkcyxcbiAgICAgIG4gPSB0LnJldml2ZVR5cGU7XG4gICAgaWYgKG8gJiYgMCAhPT0gby5sZW5ndGgpIHtcbiAgICAgIGlmIChcImNsZWFyXCIgPT09IG4pIHtcbiAgICAgICAgdGhpcy5zdGFydENsZWFyTW9kZShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnRSZXR1cm5Nb2RlKGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxuICBzdGFydFJldHVybk1vZGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLFxuICAgICAgaSA9IGUuZGF0YS5yZXR1cm5lZFRpbGVJZHMsXG4gICAgICByID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgcyA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuc2xvdEJhclZpZXcsXG4gICAgICB1ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCk7XG4gICAgaWYgKHMpIHtcbiAgICAgIHZhciBwID0gcy5nZXROb2RlTGF5ZXIoKTtcbiAgICAgIHMucmVtb3ZlU2xvdEJhcihpKTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyRml0KTtcbiAgICAgIHZhciBmID0gMCxcbiAgICAgICAgZCA9IGZ1bmN0aW9uIGQoZSkge1xuICAgICAgICAgIHZhciB0ID0gdS5nZXQoZSk7XG4gICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICArK2YgPj0gaS5sZW5ndGggJiYgaC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHQudGlsZTJSZXR1cm5Gcm9tU2xvdEJhcihwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnRpbGUyUm9sbENhcmQoKTtcbiAgICAgICAgICAgIGlmICgrK2YgPj0gaS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbi5wbGF5UmV2aXZlVmlicmF0ZSgpO1xuICAgICAgICAgICAgICBuLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoID0gdGhpcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHkgPSBfX3ZhbHVlcyhpKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIGQobS52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbSAmJiAhbS5kb25lICYmIChvID0geS5yZXR1cm4pICYmIG8uY2FsbCh5KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHBsYXlSZXZpdmVWaWJyYXRlKCkge1xuICAgIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nU2hvcnQsIEVWaWJyYXRlUG9pbnQuVGlsZTJSZXZpdmUpO1xuICB9XG4gIHN0YXJ0Q2xlYXJNb2RlKGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5yZXR1cm5lZFRpbGVJZHMsXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgbiA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uc2xvdEJhclZpZXc7XG4gICAgbiAmJiBuLnJlbW92ZVNsb3RCYXIodCk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==
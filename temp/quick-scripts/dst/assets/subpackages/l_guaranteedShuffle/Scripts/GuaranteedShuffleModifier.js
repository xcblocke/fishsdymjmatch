
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5de3dpJRtxLV6HjIM25BbsP', 'GuaranteedShuffleModifier');
// subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../../Scripts/BaseCoreObject");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var LayoutSelector_1 = require("../../../Scripts/process/layout/LayoutSelector");
var GuaranteedShuffleModifier = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleModifier, _super);
    function GuaranteedShuffleModifier(t) {
        var _this = _super.call(this, t) || this;
        _this._shuffleOriginalPositions = new Map();
        return _this;
    }
    GuaranteedShuffleModifier.prototype.getShuffleOriginalPositions = function () {
        return this._shuffleOriginalPositions;
    };
    GuaranteedShuffleModifier.prototype.shuffleToFixedArea = function () {
        var e, t, r, o;
        Date.now();
        this._shuffleOriginalPositions.clear();
        var i = this.collectValidTiles();
        if (0 !== i.length) {
            var n = this._context.getTileMapObject(), l = n.mapLayers(), s = new Set(i);
            try {
                for (var u = __values(l), c = u.next(); !c.done; c = u.next()) {
                    var h = c.value, p = __spreadArrays(h.allCards);
                    try {
                        for (var d = (r = void 0, __values(p)), y = d.next(); !y.done; y = d.next()) {
                            var v = y.value;
                            if (!s.has(v)) {
                                h.removeCard(v);
                                n.tileObjectMap().delete(v.id);
                            }
                        }
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            y && !y.done && (o = d.return) && o.call(d);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (t = u.return) && t.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            this.saveShuffleOriginalData(i);
            this.shuffleFlat(i);
            this._context.getTileMapObject().updateInitGameLayer();
            this.recalculateLayoutScale();
            Date.now();
        }
    };
    GuaranteedShuffleModifier.prototype.shuffleFlat = function (e) {
        for (var t = this.groupAndSortByCardId(e), r = this._context.getTileMapObject(), o = 0, i = 0; i < t.length; i++) {
            var a = t[i], n = Math.floor(i / 16);
            n > o && (o = n);
            var f = 0;
            i % 4 >= 2 && (f = 1);
            var l = 2 * (i % 4 + f), u = 2 * Math.floor(i % 16 / 4);
            r.moveTileToPosition(a, l, u, n);
        }
        this._context.gameType == GameTypeEnums_1.MjGameType.Classic && this._context.getTileMapObject().applyCenterOffsetToAllTiles();
    };
    GuaranteedShuffleModifier.prototype.groupAndSortByCardId = function (e) {
        var t, r, o, i, n = new Map();
        try {
            for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                var u = s.value, c = u.cardId;
                n.has(c) || n.set(c, []);
                n.get(c).push(u);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = l.return) && r.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = [];
        try {
            for (var p = __values(n.values()), d = p.next(); !d.done; d = p.next()) {
                var y = d.value;
                h.push.apply(h, __spreadArrays(y));
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (i = p.return) && i.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return h;
    };
    GuaranteedShuffleModifier.prototype.collectValidTiles = function () {
        return this._context.getTileMapObject().aliveTiles();
    };
    GuaranteedShuffleModifier.prototype.saveShuffleOriginalData = function (e) {
        var t, r;
        try {
            for (var o = __values(e), i = o.next(); !i.done; i = o.next()) {
                var n = i.value, f = n.getPosition();
                this._shuffleOriginalPositions.set(n, f);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (r = o.return) && r.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    GuaranteedShuffleModifier.prototype.recalculateLayoutScale = function () {
        var e = this._context.getContentSize(), t = new LayoutSelector_1.LayoutSelector(this._context).chooseLayout({
            contentSize: new cc.Size(e.width, e.height)
        });
        this._context.getLayoutScale();
        this._context.gameType != GameTypeEnums_1.MjGameType.Classic && this._context.setLayoutScale(t.scale);
        this.context.getTileMapObject().updatePositonOffset();
    };
    return GuaranteedShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.GuaranteedShuffleModifier = GuaranteedShuffleModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1YXJhbnRlZWRTaHVmZmxlL1NjcmlwdHMvR3VhcmFudGVlZFNodWZmbGVNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsaUZBQWdGO0FBQ2hGO0lBQStDLDZDQUFjO0lBRTNELG1DQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUNUO1FBSEQsK0JBQXlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFHdEMsQ0FBQztJQUNELCtEQUEyQixHQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7SUFDRCxzREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFDakIsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcs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Q0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLDBCQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQW5KQSxBQW1KQyxDQW5KOEMsK0JBQWMsR0FtSjVEO0FBbkpZLDhEQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IExheW91dFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9wcm9jZXNzL2xheW91dC9MYXlvdXRTZWxlY3Rvcic7XG5leHBvcnQgY2xhc3MgR3VhcmFudGVlZFNodWZmbGVNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgX3NodWZmbGVPcmlnaW5hbFBvc2l0aW9ucyA9IG5ldyBNYXAoKTtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGdldFNodWZmbGVPcmlnaW5hbFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2h1ZmZsZU9yaWdpbmFsUG9zaXRpb25zO1xuICB9XG4gIHNodWZmbGVUb0ZpeGVkQXJlYSgpIHtcbiAgICB2YXIgZSwgdCwgciwgbztcbiAgICBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3NodWZmbGVPcmlnaW5hbFBvc2l0aW9ucy5jbGVhcigpO1xuICAgIHZhciBpID0gdGhpcy5jb2xsZWN0VmFsaWRUaWxlcygpO1xuICAgIGlmICgwICE9PSBpLmxlbmd0aCkge1xuICAgICAgdmFyIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgbCA9IG4ubWFwTGF5ZXJzKCksXG4gICAgICAgIHMgPSBuZXcgU2V0KGkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGwpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBoID0gYy52YWx1ZSxcbiAgICAgICAgICAgIHAgPSBbLi4uaC5hbGxDYXJkc107XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGQgPSAociA9IHZvaWQgMCwgX192YWx1ZXMocCkpLCB5ID0gZC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBkLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgdiA9IHkudmFsdWU7XG4gICAgICAgICAgICAgIGlmICghcy5oYXModikpIHtcbiAgICAgICAgICAgICAgICBoLnJlbW92ZUNhcmQodik7XG4gICAgICAgICAgICAgICAgbi50aWxlT2JqZWN0TWFwKCkuZGVsZXRlKHYuaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHkgJiYgIXkuZG9uZSAmJiAobyA9IGQucmV0dXJuKSAmJiBvLmNhbGwoZCk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHQgPSB1LnJldHVybikgJiYgdC5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNhdmVTaHVmZmxlT3JpZ2luYWxEYXRhKGkpO1xuICAgICAgdGhpcy5zaHVmZmxlRmxhdChpKTtcbiAgICAgIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVwZGF0ZUluaXRHYW1lTGF5ZXIoKTtcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVMYXlvdXRTY2FsZSgpO1xuICAgICAgRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbiAgc2h1ZmZsZUZsYXQoZSkge1xuICAgIGZvciAodmFyIHQgPSB0aGlzLmdyb3VwQW5kU29ydEJ5Q2FyZElkKGUpLCByID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksIG8gPSAwLCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhID0gdFtpXSxcbiAgICAgICAgbiA9IE1hdGguZmxvb3IoaSAvIDE2KTtcbiAgICAgIG4gPiBvICYmIChvID0gbik7XG4gICAgICB2YXIgZiA9IDA7XG4gICAgICBpICUgNCA+PSAyICYmIChmID0gMSk7XG4gICAgICB2YXIgbCA9IDIgKiAoaSAlIDQgKyBmKSxcbiAgICAgICAgdSA9IDIgKiBNYXRoLmZsb29yKGkgJSAxNiAvIDQpO1xuICAgICAgci5tb3ZlVGlsZVRvUG9zaXRpb24oYSwgbCwgdSwgbik7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFwcGx5Q2VudGVyT2Zmc2V0VG9BbGxUaWxlcygpO1xuICB9XG4gIGdyb3VwQW5kU29ydEJ5Q2FyZElkKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIG4gPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhlKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBzLnZhbHVlLFxuICAgICAgICAgIGMgPSB1LmNhcmRJZDtcbiAgICAgICAgbi5oYXMoYykgfHwgbi5zZXQoYywgW10pO1xuICAgICAgICBuLmdldChjKS5wdXNoKHUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHIgPSBsLnJldHVybikgJiYgci5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBoID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhuLnZhbHVlcygpKSwgZCA9IHAubmV4dCgpOyAhZC5kb25lOyBkID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHkgPSBkLnZhbHVlO1xuICAgICAgICBoLnB1c2guYXBwbHkoaCwgWy4uLnldKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChpID0gcC5yZXR1cm4pICYmIGkuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaDtcbiAgfVxuICBjb2xsZWN0VmFsaWRUaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuYWxpdmVUaWxlcygpO1xuICB9XG4gIHNhdmVTaHVmZmxlT3JpZ2luYWxEYXRhKGUpIHtcbiAgICB2YXIgdCwgcjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGUpLCBpID0gby5uZXh0KCk7ICFpLmRvbmU7IGkgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgbiA9IGkudmFsdWUsXG4gICAgICAgICAgZiA9IG4uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fc2h1ZmZsZU9yaWdpbmFsUG9zaXRpb25zLnNldChuLCBmKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChyID0gby5yZXR1cm4pICYmIHIuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWNhbGN1bGF0ZUxheW91dFNjYWxlKCkge1xuICAgIHZhciBlID0gdGhpcy5fY29udGV4dC5nZXRDb250ZW50U2l6ZSgpLFxuICAgICAgdCA9IG5ldyBMYXlvdXRTZWxlY3Rvcih0aGlzLl9jb250ZXh0KS5jaG9vc2VMYXlvdXQoe1xuICAgICAgICBjb250ZW50U2l6ZTogbmV3IGNjLlNpemUoZS53aWR0aCwgZS5oZWlnaHQpXG4gICAgICB9KTtcbiAgICB0aGlzLl9jb250ZXh0LmdldExheW91dFNjYWxlKCk7XG4gICAgdGhpcy5fY29udGV4dC5nYW1lVHlwZSAhPSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgdGhpcy5fY29udGV4dC5zZXRMYXlvdXRTY2FsZSh0LnNjYWxlKTtcbiAgICB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVwZGF0ZVBvc2l0b25PZmZzZXQoKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile/TileSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9fe7gZF2VDdK9AXUufF+Od', 'TileSelector');
// Scripts/process/tile/TileSelector.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileSelector = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileSelector = /** @class */ (function (_super) {
    __extends(TileSelector, _super);
    function TileSelector(t) {
        return _super.call(this, t) || this;
    }
    TileSelector.prototype.getTouchSizeOffsets = function (e) {
        return e.getTouchSizeOffsets();
    };
    TileSelector.prototype.isMatch = function (e, t) {
        var o = t.getPosition(), n = t.getContentSize(), i = this.getTouchSizeOffsets(t), r = o.x - n.width / 2 - i[0], a = o.x + n.width / 2 + i[1], l = o.y - n.height / 2 - i[3], s = o.y + n.height / 2 + i[2];
        return new cc.Rect(r, l, a - r, s - l).contains(e);
    };
    TileSelector.prototype.getDistance = function (e, t) {
        var o = t.getPosition(), n = e.x - o.x, i = e.y - o.y;
        return Math.sqrt(n * n + i * i);
    };
    TileSelector.prototype.touchStart = function (e) {
        for (var t, o, n = this.context.getTileMapObject().mapLayers(), i = n.length - 1; i >= 0; i--) {
            var r = n[i].allCards;
            try {
                for (var l = (t = void 0, __values(r)), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    if (c.isValid && !c.getIsInSlotBar() && this.isMatch(e, c))
                        return c.id;
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    TileSelector.prototype.checkIsLock = function (e) {
        var t = this.context.getTileMapObject(), o = this.context.getTileMapObject().getTileObject(e);
        return !!o && 0 != t.isCardLock(o);
    };
    TileSelector.prototype.getExpandMultiple = function () {
        return 1.5;
    };
    TileSelector.prototype.checkIsMatchTouchEnd = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this.context.getTileMapObject().getTileObject(t), i = n.getPosition(), r = n.getContentSize(), a = o ? this.getExpandMultiple() : 1;
        return o ? new cc.Rect(i.x - r.width * a, i.y - r.height * a, r.width * a * 2, r.height * a * 2).contains(e) : new cc.Rect(i.x - r.width / 2, i.y - r.height / 2, r.width, r.height).contains(e);
    };
    TileSelector.prototype.touchEnd = function (e, t) {
        var o, n;
        if (t)
            for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
                var s = r[l].allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && p.id != i.id && p.cardId == i.cardId && !this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id))
                            return p.id;
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        u && !u.done && (n = c.return) && n.call(c);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            }
    };
    TileSelector.prototype.getLockTileId = function (e, t) {
        var o, n;
        if (t)
            for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
                var s = r[l].allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && p.id != i.id && this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id, false))
                            return p.id;
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        u && !u.done && (n = c.return) && n.call(c);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            }
    };
    __decorate([
        mj.traitEvent("TileSelector_isMatch")
    ], TileSelector.prototype, "isMatch", null);
    __decorate([
        mj.traitEvent("TileSelector_touchStart")
    ], TileSelector.prototype, "touchStart", null);
    __decorate([
        mj.traitEvent("TileSelector_exMultiple")
    ], TileSelector.prototype, "getExpandMultiple", null);
    return TileSelector;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileSelector = TileSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZS9UaWxlU2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQ7SUFBa0MsZ0NBQWM7SUFDOUMsc0JBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCwwQ0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQy9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FB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QUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3RCO2lCQUNGO2FBQ0Y7SUFDSCxDQUFDO0lBakdEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsrQ0FVckM7SUFRRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7a0RBcUJ4QztJQU9EO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzt5REFHeEM7SUFvREgsbUJBQUM7Q0ExR0QsQUEwR0MsQ0ExR2lDLCtCQUFjLEdBMEcvQztBQTFHWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGVTZWxlY3RvciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGdldFRvdWNoU2l6ZU9mZnNldHMoZSkge1xuICAgIHJldHVybiBlLmdldFRvdWNoU2l6ZU9mZnNldHMoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVTZWxlY3Rvcl9pc01hdGNoXCIpXG4gIGlzTWF0Y2goZSwgdCkge1xuICAgIHZhciBvID0gdC5nZXRQb3NpdGlvbigpLFxuICAgICAgbiA9IHQuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgIGkgPSB0aGlzLmdldFRvdWNoU2l6ZU9mZnNldHModCksXG4gICAgICByID0gby54IC0gbi53aWR0aCAvIDIgLSBpWzBdLFxuICAgICAgYSA9IG8ueCArIG4ud2lkdGggLyAyICsgaVsxXSxcbiAgICAgIGwgPSBvLnkgLSBuLmhlaWdodCAvIDIgLSBpWzNdLFxuICAgICAgcyA9IG8ueSArIG4uaGVpZ2h0IC8gMiArIGlbMl07XG4gICAgcmV0dXJuIG5ldyBjYy5SZWN0KHIsIGwsIGEgLSByLCBzIC0gbCkuY29udGFpbnMoZSk7XG4gIH1cbiAgZ2V0RGlzdGFuY2UoZSwgdCkge1xuICAgIHZhciBvID0gdC5nZXRQb3NpdGlvbigpLFxuICAgICAgbiA9IGUueCAtIG8ueCxcbiAgICAgIGkgPSBlLnkgLSBvLnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChuICogbiArIGkgKiBpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVTZWxlY3Rvcl90b3VjaFN0YXJ0XCIpXG4gIHRvdWNoU3RhcnQoZSkge1xuICAgIGZvciAodmFyIHQsIG8sIG4gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLm1hcExheWVycygpLCBpID0gbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIHIgPSBuW2ldLmFsbENhcmRzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbCA9ICh0ID0gdm9pZCAwLCBfX3ZhbHVlcyhyKSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICAgIGlmIChjLmlzVmFsaWQgJiYgIWMuZ2V0SXNJblNsb3RCYXIoKSAmJiB0aGlzLmlzTWF0Y2goZSwgYykpIHJldHVybiBjLmlkO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGVja0lzTG9jayhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKTtcbiAgICByZXR1cm4gISFvICYmIDAgIT0gdC5pc0NhcmRMb2NrKG8pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZVNlbGVjdG9yX2V4TXVsdGlwbGVcIilcbiAgZ2V0RXhwYW5kTXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIDEuNTtcbiAgfVxuICBjaGVja0lzTWF0Y2hUb3VjaEVuZChlLCB0LCBvID0gdHJ1ZSkge1xuICAgIHZhciBuID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHQpLFxuICAgICAgaSA9IG4uZ2V0UG9zaXRpb24oKSxcbiAgICAgIHIgPSBuLmdldENvbnRlbnRTaXplKCksXG4gICAgICBhID0gbyA/IHRoaXMuZ2V0RXhwYW5kTXVsdGlwbGUoKSA6IDE7XG4gICAgcmV0dXJuIG8gPyBuZXcgY2MuUmVjdChpLnggLSByLndpZHRoICogYSwgaS55IC0gci5oZWlnaHQgKiBhLCByLndpZHRoICogYSAqIDIsIHIuaGVpZ2h0ICogYSAqIDIpLmNvbnRhaW5zKGUpIDogbmV3IGNjLlJlY3QoaS54IC0gci53aWR0aCAvIDIsIGkueSAtIHIuaGVpZ2h0IC8gMiwgci53aWR0aCwgci5oZWlnaHQpLmNvbnRhaW5zKGUpO1xuICB9XG4gIHRvdWNoRW5kKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBpZiAodCkgZm9yICh2YXIgaSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0KSwgciA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkubWFwTGF5ZXJzKCksIGwgPSByLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IHJbbF0uYWxsQ2FyZHM7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBjID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKHMpKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgICAgaWYgKHAuaXNWYWxpZCAmJiBwLmlkICE9IGkuaWQgJiYgcC5jYXJkSWQgPT0gaS5jYXJkSWQgJiYgIXRoaXMuY2hlY2tJc0xvY2socC5pZCkgJiYgdGhpcy5jaGVja0lzTWF0Y2hUb3VjaEVuZChlLCBwLmlkKSkgcmV0dXJuIHAuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG4gPSBjLnJldHVybikgJiYgbi5jYWxsKGMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldExvY2tUaWxlSWQoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIGlmICh0KSBmb3IgKHZhciBpID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHQpLCByID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5tYXBMYXllcnMoKSwgbCA9IHIubGVuZ3RoIC0gMTsgbCA+PSAwOyBsLS0pIHtcbiAgICAgIHZhciBzID0gcltsXS5hbGxDYXJkcztcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGMgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMocykpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgICBpZiAocC5pc1ZhbGlkICYmIHAuaWQgIT0gaS5pZCAmJiB0aGlzLmNoZWNrSXNMb2NrKHAuaWQpICYmIHRoaXMuY2hlY2tJc01hdGNoVG91Y2hFbmQoZSwgcC5pZCwgZmFsc2UpKSByZXR1cm4gcC5pZDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobiA9IGMucmV0dXJuKSAmJiBuLmNhbGwoYyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=
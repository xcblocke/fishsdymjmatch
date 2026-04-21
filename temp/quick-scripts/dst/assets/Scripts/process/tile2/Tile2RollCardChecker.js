
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2RollCardChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '841c5+9hPBP+6AycEmM9VCu', 'Tile2RollCardChecker');
// Scripts/process/tile2/Tile2RollCardChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2RollCardChecker = /** @class */ (function (_super) {
    __extends(Tile2RollCardChecker, _super);
    function Tile2RollCardChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardChecker.prototype.getOpenRollCardTileObjectIds = function () {
        var e, t, o = [], n = this._context.getTileMapObject().getValidTileObjects();
        try {
            for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                !s.checkHasType(TileTypeEnum_1.ETileType.RollCard) || s.getIsBack() || s.getIsInSlotBar() || o.push(s.id);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    Tile2RollCardChecker.prototype.checkCanClearWithIds = function (e, t) {
        if (e == t)
            return false;
        var o = this._context.getTileMapObject().getTileObject(e), n = this._context.getTileMapObject().getTileObject(t);
        if (!o || !n)
            return false;
        if (!o.isValid || !n.isValid)
            return false;
        var i = 0;
        o.getIsInSlotBar() || i++;
        n.getIsInSlotBar() || i++;
        return !(i > this.getEmptySlotBarCount()) && o.cardId === n.cardId;
    };
    Tile2RollCardChecker.prototype.getClearWithOpenRollCard = function (e) {
        var t, o, n = this._context.getTileMapObject().getTileObject(e);
        if (!n)
            return null;
        if (!n.isValid)
            return null;
        var i = this.getOpenRollCardTileObjectIds();
        try {
            for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = this._context.getTileMapObject().getTileObject(s);
                if (e != s && c.cardId === n.cardId && this.checkCanClearWithIds(e, s))
                    return s;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return null;
    };
    Tile2RollCardChecker.prototype.getEmptySlotBarCount = function () {
        var e = this._context.getGameData(), t = e.slotBarIds;
        return e.slotBarCount - t.length;
    };
    return Tile2RollCardChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2RollCardChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJSb2xsQ2FyZENoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxzRUFBa0U7QUFDbEU7SUFBa0Qsd0NBQWM7SUFBaEU7O0lBa0VBLENBQUM7SUFqRUMsMkRBQTRCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJ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QUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsQ0FsRWlELCtCQUFjLEdBa0UvRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlJvbGxDYXJkQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgZ2V0T3BlblJvbGxDYXJkVGlsZU9iamVjdElkcygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW10sXG4gICAgICBuID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VmFsaWRUaWxlT2JqZWN0cygpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gYS52YWx1ZTtcbiAgICAgICAgIXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Sb2xsQ2FyZCkgfHwgcy5nZXRJc0JhY2soKSB8fCBzLmdldElzSW5TbG90QmFyKCkgfHwgby5wdXNoKHMuaWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIGNoZWNrQ2FuQ2xlYXJXaXRoSWRzKGUsIHQpIHtcbiAgICBpZiAoZSA9PSB0KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGUpLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodCk7XG4gICAgaWYgKCFvIHx8ICFuKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFvLmlzVmFsaWQgfHwgIW4uaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gMDtcbiAgICBvLmdldElzSW5TbG90QmFyKCkgfHwgaSsrO1xuICAgIG4uZ2V0SXNJblNsb3RCYXIoKSB8fCBpKys7XG4gICAgcmV0dXJuICEoaSA+IHRoaXMuZ2V0RW1wdHlTbG90QmFyQ291bnQoKSkgJiYgby5jYXJkSWQgPT09IG4uY2FyZElkO1xuICB9XG4gIGdldENsZWFyV2l0aE9wZW5Sb2xsQ2FyZChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgaWYgKCFuKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIW4uaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGkgPSB0aGlzLmdldE9wZW5Sb2xsQ2FyZFRpbGVPYmplY3RJZHMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGkpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWUsXG4gICAgICAgICAgYyA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3Qocyk7XG4gICAgICAgIGlmIChlICE9IHMgJiYgYy5jYXJkSWQgPT09IG4uY2FyZElkICYmIHRoaXMuY2hlY2tDYW5DbGVhcldpdGhJZHMoZSwgcykpIHJldHVybiBzO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSBhLnJldHVybikgJiYgby5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGdldEVtcHR5U2xvdEJhckNvdW50KCkge1xuICAgIHZhciBlID0gdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IGUuc2xvdEJhcklkcztcbiAgICByZXR1cm4gZS5zbG90QmFyQ291bnQgLSB0Lmxlbmd0aDtcbiAgfVxufSJdfQ==
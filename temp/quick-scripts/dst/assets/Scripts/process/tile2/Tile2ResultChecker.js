
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2ResultChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c536d8pyAhJdpjMDSle4DCQ', 'Tile2ResultChecker');
// Scripts/process/tile2/Tile2ResultChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ResultChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ResultChecker = /** @class */ (function (_super) {
    __extends(Tile2ResultChecker, _super);
    function Tile2ResultChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ResultChecker.prototype.getMaxSlotBarCount = function () {
        return this._context.getGameData().slotBarCount;
    };
    Tile2ResultChecker.prototype.checkIsDead = function () {
        var e = this._context.getGameData(), t = e.slotBarIds, o = e.slotBarCount;
        return t.length >= o;
    };
    Tile2ResultChecker.prototype.checkIsEnd = function () {
        var e, t, o, n, i = this._context.getTileMapObject().mapLayers();
        try {
            for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
                var s = l.value.allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && !p.getIsInSlotBar())
                            return false;
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
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    return Tile2ResultChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ResultChecker = Tile2ResultChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJSZXN1bHRDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQXdDLHNDQUFjO0lBQ3BELDRCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsK0NBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx1Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLElBQUk7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFOzRCQUFFLE9BQU8sS0FBSyxDQUFDO3FCQUNwRDtpQkFDRjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixDQUFDLEdBQUc7d0JBQ0YsS0FBSyxFQUFFLENBQUM7cUJBQ1QsQ0FBQztpQkFDSDt3QkFBUztvQkFDUixJQUFJO3dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdDOzRCQUFTO3dCQUNSLElBQUksQ0FBQzs0QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ3RCO2lCQUNGO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FwREEsQUFvREMsQ0FwRHVDLCtCQUFjLEdBb0RyRDtBQXBEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBUaWxlMlJlc3VsdENoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBnZXRNYXhTbG90QmFyQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zbG90QmFyQ291bnQ7XG4gIH1cbiAgY2hlY2tJc0RlYWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICB0ID0gZS5zbG90QmFySWRzLFxuICAgICAgbyA9IGUuc2xvdEJhckNvdW50O1xuICAgIHJldHVybiB0Lmxlbmd0aCA+PSBvO1xuICB9XG4gIGNoZWNrSXNFbmQoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkubWFwTGF5ZXJzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhpKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlLmFsbENhcmRzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGMgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMocykpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgICAgaWYgKHAuaXNWYWxpZCAmJiAhcC5nZXRJc0luU2xvdEJhcigpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAodCA9IGEucmV0dXJuKSAmJiB0LmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXX0=
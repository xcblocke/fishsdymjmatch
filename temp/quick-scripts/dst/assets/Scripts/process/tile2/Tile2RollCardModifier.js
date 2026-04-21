
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2RollCardModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34474u+0PJNBrpkimU3cx2w', 'Tile2RollCardModifier');
// Scripts/process/tile2/Tile2RollCardModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2RollCardModifier = /** @class */ (function (_super) {
    __extends(Tile2RollCardModifier, _super);
    function Tile2RollCardModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardModifier.prototype.getRvertIgnoreIds = function () {
        var e, t, o = [], n = this._context.getTileMapObject().tileObjectMap();
        try {
            for (var i = __values(n.values()), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                l.isHasRollCard() && !l.getIsInSlotBar() && o.push(l.id);
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
    Tile2RollCardModifier.prototype.modifyRollCardDatas = function (e) {
        var t, o;
        e || (e = []);
        var n = [], i = this._context.getTileMapObject().tileObjectMap();
        try {
            for (var a = __values(i.values()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                if (s.isHasRollCard() && !e.includes(s.id))
                    if (s.isValid) {
                        if (s.getIsBack()) {
                            if (s.getIsInSlotBar()) {
                                s.setIsBack(false);
                                n.push({
                                    tileId: s.id,
                                    frontToBack: false
                                });
                            }
                        }
                        else if (!s.getIsInSlotBar()) {
                            s.setIsBack(true);
                            n.push({
                                tileId: s.id,
                                frontToBack: true
                            });
                        }
                    }
                    else if (s.getIsBack()) {
                        s.setIsBack(false);
                        n.push({
                            tileId: s.id,
                            frontToBack: false
                        });
                    }
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
        return n;
    };
    Tile2RollCardModifier.prototype.tryBack2FrontByTileIds = function (e) {
        var t, o, n = [];
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this.tryBack2Front(l);
                s && n.push(s);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2RollCardModifier.prototype.tryBack2Front = function (e) {
        var t = this._context.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && t.getIsBack()) {
            t.setIsBack(false);
            return {
                tileId: e,
                frontToBack: false
            };
        }
        return null;
    };
    Tile2RollCardModifier.prototype.tryFront2Back = function (e) {
        var t, o, n = [];
        if (!e || 0 === e.length)
            return n;
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this._context.getTileMapObject().getTileObject(l);
                if (s && s.isHasRollCard() && !s.getIsBack()) {
                    s.setIsBack(true);
                    n.push({
                        tileId: l,
                        frontToBack: false
                    });
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2RollCardModifier.prototype.getRollCardDatas = function (e) {
        var t, o, n = [], i = this.context.tile2RollCardChecker.getOpenRollCardTileObjectIds(), a = this.tryBack2Front(e);
        if (a) {
            n.push(a);
            try {
                for (var s = __values(i), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    if (!this.context.tile2SlotBarChecker.checkCanClearWithIds(e, u)) {
                        var p = this.tryFront2Back([u]);
                        n.push.apply(n, __spreadArrays(p));
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (o = s.return) && o.call(s);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        return n;
    };
    return Tile2RollCardModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2RollCardModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJSb2xsQ2FyZE1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQ7SUFBbUQseUNBQWM7SUFBakU7O0lBc0tBLENBQUM7SUFyS0MsaURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2RCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2RCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO3dCQUN6RCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTs0QkFDakIsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0NBQ3RCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUM7b0NBQ0wsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFO29DQUNaLFdBQVcsRUFBRSxLQUFLO2lDQUNuQixDQUFDLENBQUM7NkJBQ0o7eUJBQ0Y7NkJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTs0QkFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDTCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0NBQ1osV0FBVyxFQUFFLElBQUk7NkJBQ2xCLENBQUMsQ0FBQzt5QkFDSjtxQkFDRjt5QkFBTSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTt3QkFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDTCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQ1osV0FBVyxFQUFFLEtBQUs7eUJBQ25CLENBQUMsQ0FBQztxQkFDSjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsNkNBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3RDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTztnQkFDTCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxXQUFXLEVBQUUsS0FBSzthQUNuQixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCw2Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUM1QyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNMLE1BQU0sRUFBRSxDQUFDO3dCQUNULFdBQVcsRUFBRSxLQUFLO3FCQUNuQixDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsZ0RBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLEVBQUUsRUFDcEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFNLENBQUMsRUFBRSxDQUFDO3FCQUN6QjtpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0F0S0EsQUFzS0MsQ0F0S2tELCtCQUFjLEdBc0toRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJSb2xsQ2FyZE1vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBnZXRSdmVydElnbm9yZUlkcygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW10sXG4gICAgICBuID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudGlsZU9iamVjdE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobi52YWx1ZXMoKSksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgbC5pc0hhc1JvbGxDYXJkKCkgJiYgIWwuZ2V0SXNJblNsb3RCYXIoKSAmJiBvLnB1c2gobC5pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAodCA9IGkucmV0dXJuKSAmJiB0LmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgbW9kaWZ5Um9sbENhcmREYXRhcyhlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgZSB8fCAoZSA9IFtdKTtcbiAgICB2YXIgbiA9IFtdLFxuICAgICAgaSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnRpbGVPYmplY3RNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGkudmFsdWVzKCkpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgIGlmIChzLmlzSGFzUm9sbENhcmQoKSAmJiAhZS5pbmNsdWRlcyhzLmlkKSkgaWYgKHMuaXNWYWxpZCkge1xuICAgICAgICAgIGlmIChzLmdldElzQmFjaygpKSB7XG4gICAgICAgICAgICBpZiAocy5nZXRJc0luU2xvdEJhcigpKSB7XG4gICAgICAgICAgICAgIHMuc2V0SXNCYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aWxlSWQ6IHMuaWQsXG4gICAgICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXMuZ2V0SXNJblNsb3RCYXIoKSkge1xuICAgICAgICAgICAgcy5zZXRJc0JhY2sodHJ1ZSk7XG4gICAgICAgICAgICBuLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlSWQ6IHMuaWQsXG4gICAgICAgICAgICAgIGZyb250VG9CYWNrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocy5nZXRJc0JhY2soKSkge1xuICAgICAgICAgIHMuc2V0SXNCYWNrKGZhbHNlKTtcbiAgICAgICAgICBuLnB1c2goe1xuICAgICAgICAgICAgdGlsZUlkOiBzLmlkLFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gYS5yZXR1cm4pICYmIG8uY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICB0cnlCYWNrMkZyb250QnlUaWxlSWRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhlKSwgYSA9IGkubmV4dCgpOyAhYS5kb25lOyBhID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBhLnZhbHVlLFxuICAgICAgICAgIHMgPSB0aGlzLnRyeUJhY2syRnJvbnQobCk7XG4gICAgICAgIHMgJiYgbi5wdXNoKHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIHRyeUJhY2syRnJvbnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKTtcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIGlmICghdC5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodC5nZXRJc0luU2xvdEJhcigpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodC5pc0hhc1JvbGxDYXJkKCkgJiYgdC5nZXRJc0JhY2soKSkge1xuICAgICAgdC5zZXRJc0JhY2soZmFsc2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBmcm9udFRvQmFjazogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRyeUZyb250MkJhY2soZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbXTtcbiAgICBpZiAoIWUgfHwgMCA9PT0gZS5sZW5ndGgpIHJldHVybiBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZSxcbiAgICAgICAgICBzID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChsKTtcbiAgICAgICAgaWYgKHMgJiYgcy5pc0hhc1JvbGxDYXJkKCkgJiYgIXMuZ2V0SXNCYWNrKCkpIHtcbiAgICAgICAgICBzLnNldElzQmFjayh0cnVlKTtcbiAgICAgICAgICBuLnB1c2goe1xuICAgICAgICAgICAgdGlsZUlkOiBsLFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBnZXRSb2xsQ2FyZERhdGFzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gW10sXG4gICAgICBpID0gdGhpcy5jb250ZXh0LnRpbGUyUm9sbENhcmRDaGVja2VyLmdldE9wZW5Sb2xsQ2FyZFRpbGVPYmplY3RJZHMoKSxcbiAgICAgIGEgPSB0aGlzLnRyeUJhY2syRnJvbnQoZSk7XG4gICAgaWYgKGEpIHtcbiAgICAgIG4ucHVzaChhKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhpKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdSA9IGMudmFsdWU7XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5jaGVja0NhbkNsZWFyV2l0aElkcyhlLCB1KSkge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLnRyeUZyb250MkJhY2soW3VdKTtcbiAgICAgICAgICAgIG4ucHVzaC5hcHBseShuLCBbLi4ucF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbn0iXX0=
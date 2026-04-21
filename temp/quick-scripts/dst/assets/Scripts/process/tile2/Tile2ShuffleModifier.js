
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2ShuffleModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '337bb9noSZEz5MqbhsQ3FBd', 'Tile2ShuffleModifier');
// Scripts/process/tile2/Tile2ShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2UnityShuffleStrategy_1 = require("./Tile2UnityShuffleStrategy");
var Tile2ShuffleModifier = /** @class */ (function (_super) {
    __extends(Tile2ShuffleModifier, _super);
    function Tile2ShuffleModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2ShuffleModifier.prototype.shuffle = function () {
        Date.now();
        var e = new Tile2UnityShuffleStrategy_1.Tile2UnityShuffleStrategy(this._context), t = e.collectTiles(), o = e.collectState(t), n = e.collectConstraints(t);
        this.computeAndApply(t, o, n, e);
        this.restoreFixedTypeSlots(n.fixedTypeSlots);
        this.afterShuffle();
    };
    Tile2ShuffleModifier.prototype.computeAndApply = function (e, t, o, n) {
        var i = n.compute(t, o);
        if (i) {
            n.applySwap(i, o);
        }
        else {
            n.hasSolution();
        }
    };
    Tile2ShuffleModifier.prototype.afterShuffle = function () { };
    Tile2ShuffleModifier.prototype.snapshotDistribution = function (e) {
        var t, o, n = new Map();
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                n.set(l.cardId, (n.get(l.cardId) || 0) + 1);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2ShuffleModifier.prototype.fmtDistribution = function (e) {
        return Array.from(e.entries()).sort(function (e, t) {
            return e[0] - t[0];
        }).map(function (e) {
            var t = __read(e, 2);
            return t[0] + "x" + t[1];
        }).join(", ");
    };
    Tile2ShuffleModifier.prototype.logSnapshot = function () { };
    Tile2ShuffleModifier.prototype.logSpecialTiles = function (e, t) {
        var o, n, i = [];
        try {
            for (var r = __values(t), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (0 !== s.getTypeBits()) {
                    var c = [];
                    s.checkHasType(TileTypeEnum_1.ETileType.RollCard) && c.push("翻转");
                    s.checkHasType(TileTypeEnum_1.ETileType.Bomb) && c.push("炸弹");
                    s.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && c.push("多消(" + s.getDuoxiaoCount() + ")");
                    s.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) && c.push("大消");
                    c.length > 0 && i.push(s.id + "(" + s.gridPosX + "," + s.gridPosY + "," + s.layer + "):[" + c.join("+") + "]");
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.length;
    };
    Tile2ShuffleModifier.prototype.logDistributionDiff = function (e, t) {
        var o, n;
        this.logSnapshot("洗牌后", t);
        var i = [], r = new Set(__spreadArrays(e.keys(), t.keys()));
        try {
            for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
                var u = c.value, p = e.get(u) || 0, f = t.get(u) || 0;
                p !== f && i.push(u + ": " + p + "→" + f);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.length;
    };
    Tile2ShuffleModifier.prototype.restoreFixedTypeSlots = function (e) {
        var t, o, n, i;
        if (0 !== e.length) {
            var r = this._context.getTileMapObject();
            r.tileObjectMap();
            try {
                for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    r.setTileType_removeTypes(c.id, c.types);
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
            try {
                for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
                    c = f.value;
                    r.setTileTypeByPos_addTypes({
                        x: c.x,
                        y: c.y,
                        z: c.z
                    }, c.types);
                    if (c.types.includes(TileTypeEnum_1.ETileType.RollCard)) {
                        var d = r.getAliveTileByPos({
                            x: c.x,
                            y: c.y,
                            z: c.z
                        });
                        d && d.setIsBack(true);
                    }
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    f && !f.done && (i = p.return) && i.call(p);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_shuffle")
    ], Tile2ShuffleModifier.prototype, "shuffle", null);
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_compute")
    ], Tile2ShuffleModifier.prototype, "computeAndApply", null);
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_afShuf")
    ], Tile2ShuffleModifier.prototype, "afterShuffle", null);
    return Tile2ShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ShuffleModifier = Tile2ShuffleModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJTaHVmZmxlTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsc0VBQWtFO0FBQ2xFLHlFQUF3RTtBQUN4RTtJQUEwQyx3Q0FBYztJQUN0RCw4QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxJQUFJLHFEQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDbEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNMLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCwyQ0FBWSxHQUFaLGNBQWdC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c2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBUaWxlMlVuaXR5U2h1ZmZsZVN0cmF0ZWd5IH0gZnJvbSAnLi9UaWxlMlVuaXR5U2h1ZmZsZVN0cmF0ZWd5JztcbmV4cG9ydCBjbGFzcyBUaWxlMlNodWZmbGVNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJTaHVmZmxlTW9kX3NodWZmbGVcIilcbiAgc2h1ZmZsZSgpIHtcbiAgICBEYXRlLm5vdygpO1xuICAgIHZhciBlID0gbmV3IFRpbGUyVW5pdHlTaHVmZmxlU3RyYXRlZ3kodGhpcy5fY29udGV4dCksXG4gICAgICB0ID0gZS5jb2xsZWN0VGlsZXMoKSxcbiAgICAgIG8gPSBlLmNvbGxlY3RTdGF0ZSh0KSxcbiAgICAgIG4gPSBlLmNvbGxlY3RDb25zdHJhaW50cyh0KTtcbiAgICB0aGlzLmNvbXB1dGVBbmRBcHBseSh0LCBvLCBuLCBlKTtcbiAgICB0aGlzLnJlc3RvcmVGaXhlZFR5cGVTbG90cyhuLmZpeGVkVHlwZVNsb3RzKTtcbiAgICB0aGlzLmFmdGVyU2h1ZmZsZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJTaHVmZmxlTW9kX2NvbXB1dGVcIilcbiAgY29tcHV0ZUFuZEFwcGx5KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IG4uY29tcHV0ZSh0LCBvKTtcbiAgICBpZiAoaSkge1xuICAgICAgbi5hcHBseVN3YXAoaSwgbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4uaGFzU29sdXRpb24oKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMlNodWZmbGVNb2RfYWZTaHVmXCIpXG4gIGFmdGVyU2h1ZmZsZSgpIHt9XG4gIHNuYXBzaG90RGlzdHJpYnV0aW9uKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZTtcbiAgICAgICAgbi5zZXQobC5jYXJkSWQsIChuLmdldChsLmNhcmRJZCkgfHwgMCkgKyAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBmbXREaXN0cmlidXRpb24oZSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGUuZW50cmllcygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZVswXSAtIHRbMF07XG4gICAgfSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IF9fcmVhZChlLCAyKTtcbiAgICAgIHJldHVybiB0WzBdICsgXCJ4XCIgKyB0WzFdO1xuICAgIH0pLmpvaW4oXCIsIFwiKTtcbiAgfVxuICBsb2dTbmFwc2hvdCgpIHt9XG4gIGxvZ1NwZWNpYWxUaWxlcyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgaSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXModCksIGwgPSByLm5leHQoKTsgIWwuZG9uZTsgbCA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKDAgIT09IHMuZ2V0VHlwZUJpdHMoKSkge1xuICAgICAgICAgIHZhciBjID0gW107XG4gICAgICAgICAgcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSAmJiBjLnB1c2goXCLnv7vovaxcIik7XG4gICAgICAgICAgcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkJvbWIpICYmIGMucHVzaChcIueCuOW8uVwiKTtcbiAgICAgICAgICBzLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRHVveGlhb0NhcmQpICYmIGMucHVzaChcIuWkmua2iChcIiArIHMuZ2V0RHVveGlhb0NvdW50KCkgKyBcIilcIik7XG4gICAgICAgICAgcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkRheGlhb0NhcmQpICYmIGMucHVzaChcIuWkp+a2iFwiKTtcbiAgICAgICAgICBjLmxlbmd0aCA+IDAgJiYgaS5wdXNoKHMuaWQgKyBcIihcIiArIHMuZ3JpZFBvc1ggKyBcIixcIiArIHMuZ3JpZFBvc1kgKyBcIixcIiArIHMubGF5ZXIgKyBcIik6W1wiICsgYy5qb2luKFwiK1wiKSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKG4gPSByLnJldHVybikgJiYgbi5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGkubGVuZ3RoO1xuICB9XG4gIGxvZ0Rpc3RyaWJ1dGlvbkRpZmYoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRoaXMubG9nU25hcHNob3QoXCLmtJfniYzlkI5cIiwgdCk7XG4gICAgdmFyIGkgPSBbXSxcbiAgICAgIHIgPSBuZXcgU2V0KFsuLi5lLmtleXMoKSwgLi4udC5rZXlzKCldKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKHIpLCBjID0gbC5uZXh0KCk7ICFjLmRvbmU7IGMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWUsXG4gICAgICAgICAgcCA9IGUuZ2V0KHUpIHx8IDAsXG4gICAgICAgICAgZiA9IHQuZ2V0KHUpIHx8IDA7XG4gICAgICAgIHAgIT09IGYgJiYgaS5wdXNoKHUgKyBcIjogXCIgKyBwICsgXCLihpJcIiArIGYpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBsLnJldHVybikgJiYgbi5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGkubGVuZ3RoO1xuICB9XG4gIHJlc3RvcmVGaXhlZFR5cGVTbG90cyhlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGk7XG4gICAgaWYgKDAgIT09IGUubGVuZ3RoKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgICAgci50aWxlT2JqZWN0TWFwKCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoZSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICAgIHIuc2V0VGlsZVR5cGVfcmVtb3ZlVHlwZXMoYy5pZCwgYy50eXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMoZSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgYyA9IGYudmFsdWU7XG4gICAgICAgICAgci5zZXRUaWxlVHlwZUJ5UG9zX2FkZFR5cGVzKHtcbiAgICAgICAgICAgIHg6IGMueCxcbiAgICAgICAgICAgIHk6IGMueSxcbiAgICAgICAgICAgIHo6IGMuelxuICAgICAgICAgIH0sIGMudHlwZXMpO1xuICAgICAgICAgIGlmIChjLnR5cGVzLmluY2x1ZGVzKEVUaWxlVHlwZS5Sb2xsQ2FyZCkpIHtcbiAgICAgICAgICAgIHZhciBkID0gci5nZXRBbGl2ZVRpbGVCeVBvcyh7XG4gICAgICAgICAgICAgIHg6IGMueCxcbiAgICAgICAgICAgICAgeTogYy55LFxuICAgICAgICAgICAgICB6OiBjLnpcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZCAmJiBkLnNldElzQmFjayh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKGkgPSBwLnJldHVybikgJiYgaS5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
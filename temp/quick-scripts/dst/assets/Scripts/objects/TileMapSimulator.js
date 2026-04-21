
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/objects/TileMapSimulator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ca4eJJjHpLoa3YZkyZO4p5', 'TileMapSimulator');
// Scripts/objects/TileMapSimulator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileMapSimulator = void 0;
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileMapObject_1 = require("./TileMapObject");
var TileObject_1 = require("./TileObject");
var TileMapSimulator = /** @class */ (function (_super) {
    __extends(TileMapSimulator, _super);
    function TileMapSimulator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileMapSimulator.createSim = function (e) {
        var o, n, i, c, p, f, d = e.saveModifier.getAllCardPosData(), h = new TileMapSimulator(e);
        h._isSimulator = true;
        if (e.gameType == GameTypeEnums_1.MjGameType.Classic || e.gameType == GameTypeEnums_1.MjGameType.Tile2Normal) {
            Date.now();
            try {
                for (var y = __values(e.getTileMapObject().tileObjectMap()), m = y.next(); !m.done; m = y.next()) {
                    var v = __read(m.value, 2), g = v[0], _ = v[1], T = new TileObject_1.TileObject(_.id, {
                        id: _.resId,
                        pos: {
                            x: _.gridPosX,
                            y: _.gridPosY,
                            z: _.layer
                        },
                        isAlive: _.isValid
                    }, h);
                    T.init(e, e.getCardConfigMap());
                    e.gameType == GameTypeEnums_1.MjGameType.Tile2Normal && (T._isValid = _.isValid);
                    T._batchId = _.batchId;
                    T._type = _.type;
                    T.setTypeBits(_.getTypeBits());
                    T.setOriginalResId(_.originalResId);
                    T.isHint = _.isHint;
                    T._isSelect = _.isSelect;
                    T.positionOffset = _.positionOffset;
                    T.setTouchSizeOffsets(_.getTouchSizeOffsets());
                    T.setDuoxiaoCount(_.getDuoxiaoCount());
                    T._isInSlotBar = _._isInSlotBar;
                    T._indexInSlotBar = _._indexInSlotBar;
                    var C = h.getSpeLayer(_.layer);
                    if (C) {
                        C.addCard(T);
                        h.tileObjectMap().set(T.id, T);
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
                    m && !m.done && (n = y.return) && n.call(y);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            h.updateInitGameLayer();
        }
        else {
            Date.now();
            var b = LevelGenRule_1.default.serializeTilesToInlineString(d), E = e.getTileMapObject().getAllTileTypes();
            h.initGameLayer(b);
            try {
                for (var S = __values(e.getTileMapObject().tileObjectMap()), I = S.next(); !I.done; I = S.next()) {
                    var w = __read(I.value, 2), B = (g = w[0], (P = w[1]).pos.x + "-" + P.pos.y + "-" + P.pos.z), x = g;
                    if ((_ = h.tileObjectMap().get(B)) && B !== x) {
                        _._id = x;
                        h.tileObjectMap().delete(B);
                        h.tileObjectMap().set(x, _);
                    }
                }
            }
            catch (e) {
                i = {
                    error: e
                };
            }
            finally {
                try {
                    I && !I.done && (c = S.return) && c.call(S);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            try {
                for (var M = __values(E), O = M.next(); !O.done; O = M.next()) {
                    var D = __read(O.value, 2), P = (g = D[0], D[1]);
                    h.setTileType(g, P);
                }
            }
            catch (e) {
                p = {
                    error: e
                };
            }
            finally {
                try {
                    O && !O.done && (f = M.return) && f.call(M);
                }
                finally {
                    if (p)
                        throw p.error;
                }
            }
        }
        return h;
    };
    TileMapSimulator.prototype.onClear = function () { };
    return TileMapSimulator;
}(TileMapObject_1.TileMapObject));
exports.TileMapSimulator = TileMapSimulator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL29iamVjdHMvVGlsZU1hcFNpbXVsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFpRTtBQUNqRSwwRUFBc0U7QUFDdEUsaURBQWdEO0FBQ2hELDJDQUEwQztBQUMxQztJQUFzQyxvQ0FBYTtJQUFuRDs7SUEwR0EsQ0FBQztJQXpHUSwwQkFBUyxHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLDBCQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksMEJBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDNUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1gsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2hHLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksdUJBQVUsQ0FBQyxD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QUN0QjthQUNGO1lBQ0QsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQU8sR0FBUCxjQUFXLENBQUM7SUFDZCx1QkFBQztBQUFELENBMUdBLEFBMEdDLENBMUdxQyw2QkFBYSxHQTBHbEQ7QUExR1ksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsR2VuUnVsZSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25maWcvTGV2ZWxHZW5SdWxlJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRpbGVNYXBPYmplY3QgfSBmcm9tICcuL1RpbGVNYXBPYmplY3QnO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gJy4vVGlsZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgVGlsZU1hcFNpbXVsYXRvciBleHRlbmRzIFRpbGVNYXBPYmplY3Qge1xuICBzdGF0aWMgY3JlYXRlU2ltKGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYyxcbiAgICAgIHAsXG4gICAgICBmLFxuICAgICAgZCA9IGUuc2F2ZU1vZGlmaWVyLmdldEFsbENhcmRQb3NEYXRhKCksXG4gICAgICBoID0gbmV3IFRpbGVNYXBTaW11bGF0b3IoZSk7XG4gICAgaC5faXNTaW11bGF0b3IgPSB0cnVlO1xuICAgIGlmIChlLmdhbWVUeXBlID09IE1qR2FtZVR5cGUuQ2xhc3NpYyB8fCBlLmdhbWVUeXBlID09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIERhdGUubm93KCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXMoZS5nZXRUaWxlTWFwT2JqZWN0KCkudGlsZU9iamVjdE1hcCgpKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdiA9IF9fcmVhZChtLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGcgPSB2WzBdLFxuICAgICAgICAgICAgXyA9IHZbMV0sXG4gICAgICAgICAgICBUID0gbmV3IFRpbGVPYmplY3QoXy5pZCwge1xuICAgICAgICAgICAgICBpZDogXy5yZXNJZCxcbiAgICAgICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICAgICAgeDogXy5ncmlkUG9zWCxcbiAgICAgICAgICAgICAgICB5OiBfLmdyaWRQb3NZLFxuICAgICAgICAgICAgICAgIHo6IF8ubGF5ZXJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaXNBbGl2ZTogXy5pc1ZhbGlkXG4gICAgICAgICAgICB9LCBoKTtcbiAgICAgICAgICBULmluaXQoZSwgZS5nZXRDYXJkQ29uZmlnTWFwKCkpO1xuICAgICAgICAgIGUuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiAoVC5faXNWYWxpZCA9IF8uaXNWYWxpZCk7XG4gICAgICAgICAgVC5fYmF0Y2hJZCA9IF8uYmF0Y2hJZDtcbiAgICAgICAgICBULl90eXBlID0gXy50eXBlO1xuICAgICAgICAgIFQuc2V0VHlwZUJpdHMoXy5nZXRUeXBlQml0cygpKTtcbiAgICAgICAgICBULnNldE9yaWdpbmFsUmVzSWQoXy5vcmlnaW5hbFJlc0lkKTtcbiAgICAgICAgICBULmlzSGludCA9IF8uaXNIaW50O1xuICAgICAgICAgIFQuX2lzU2VsZWN0ID0gXy5pc1NlbGVjdDtcbiAgICAgICAgICBULnBvc2l0aW9uT2Zmc2V0ID0gXy5wb3NpdGlvbk9mZnNldDtcbiAgICAgICAgICBULnNldFRvdWNoU2l6ZU9mZnNldHMoXy5nZXRUb3VjaFNpemVPZmZzZXRzKCkpO1xuICAgICAgICAgIFQuc2V0RHVveGlhb0NvdW50KF8uZ2V0RHVveGlhb0NvdW50KCkpO1xuICAgICAgICAgIFQuX2lzSW5TbG90QmFyID0gXy5faXNJblNsb3RCYXI7XG4gICAgICAgICAgVC5faW5kZXhJblNsb3RCYXIgPSBfLl9pbmRleEluU2xvdEJhcjtcbiAgICAgICAgICB2YXIgQyA9IGguZ2V0U3BlTGF5ZXIoXy5sYXllcik7XG4gICAgICAgICAgaWYgKEMpIHtcbiAgICAgICAgICAgIEMuYWRkQ2FyZChUKTtcbiAgICAgICAgICAgIGgudGlsZU9iamVjdE1hcCgpLnNldChULmlkLCBUKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKG4gPSB5LnJldHVybikgJiYgbi5jYWxsKHkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoLnVwZGF0ZUluaXRHYW1lTGF5ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRGF0ZS5ub3coKTtcbiAgICAgIHZhciBiID0gTGV2ZWxHZW5SdWxlLnNlcmlhbGl6ZVRpbGVzVG9JbmxpbmVTdHJpbmcoZCksXG4gICAgICAgIEUgPSBlLmdldFRpbGVNYXBPYmplY3QoKS5nZXRBbGxUaWxlVHlwZXMoKTtcbiAgICAgIGguaW5pdEdhbWVMYXllcihiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyhlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCkpLCBJID0gUy5uZXh0KCk7ICFJLmRvbmU7IEkgPSBTLm5leHQoKSkge1xuICAgICAgICAgIHZhciB3ID0gX19yZWFkKEkudmFsdWUsIDIpLFxuICAgICAgICAgICAgQiA9IChnID0gd1swXSwgKFAgPSB3WzFdKS5wb3MueCArIFwiLVwiICsgUC5wb3MueSArIFwiLVwiICsgUC5wb3MueiksXG4gICAgICAgICAgICB4ID0gZztcbiAgICAgICAgICBpZiAoKF8gPSBoLnRpbGVPYmplY3RNYXAoKS5nZXQoQikpICYmIEIgIT09IHgpIHtcbiAgICAgICAgICAgIF8uX2lkID0geDtcbiAgICAgICAgICAgIGgudGlsZU9iamVjdE1hcCgpLmRlbGV0ZShCKTtcbiAgICAgICAgICAgIGgudGlsZU9iamVjdE1hcCgpLnNldCh4LCBfKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBJICYmICFJLmRvbmUgJiYgKGMgPSBTLnJldHVybikgJiYgYy5jYWxsKFMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBNID0gX192YWx1ZXMoRSksIE8gPSBNLm5leHQoKTsgIU8uZG9uZTsgTyA9IE0ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEQgPSBfX3JlYWQoTy52YWx1ZSwgMiksXG4gICAgICAgICAgICBQID0gKGcgPSBEWzBdLCBEWzFdKTtcbiAgICAgICAgICBoLnNldFRpbGVUeXBlKGcsIFApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgTyAmJiAhTy5kb25lICYmIChmID0gTS5yZXR1cm4pICYmIGYuY2FsbChNKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaDtcbiAgfVxuICBvbkNsZWFyKCkge31cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/RankCardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f81c3fzuUBDBIuvsPPYC7So', 'RankCardType');
// Scripts/tileTypes/RankCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankCardType = void 0;
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var RankCardType = /** @class */ (function () {
    function RankCardType() {
    }
    RankCardType.modify = function (t) {
        RankCardType.fixModify(t);
    };
    RankCardType.saveToGameData = function (e, t) {
        e.gameType === UserModel_1.default.getInstance().getMainGameType() && e.getGameData().setRankCardCount(t);
    };
    RankCardType.fixModify = function (t) {
        var o, n, r = t.getTileMapObject(), s = new Map();
        try {
            for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (p.checkIsNormal()) {
                    var f = p.cardId;
                    s.has(f) || s.set(f, []);
                    s.get(f).push(p);
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
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (0 !== s.size) {
            var d = Array.from(s.values());
            d.sort(function (e, t) {
                return t.length - e.length;
            });
            for (var h = t.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, y = [], m = [], v = d.length - 1; v >= 0; v--) {
                var g = d[v];
                if (g.length === h) {
                    y = g;
                    break;
                }
                g.length >= h && (m = g);
            }
            0 === y.length && m.length > 0 && (y = m);
            0 === y.length && (h = (y = d[t.randomGenerator.randomIntInclusive(0, d.length - 1)]).length);
            var _ = Math.min(h, y.length);
            for (v = 0; v < _; v++) {
                var T = y[v];
                r.changeTileResId(T.id, GameTypeEnums_1.ResId.emRankId);
                r.setTileType(T.id, TileTypeEnum_1.ETileType.RankCard);
            }
            RankCardType.saveToGameData(t, _);
        }
    };
    __decorate([
        mj.traitEvent("RankCardType_modify")
    ], RankCardType, "modify", null);
    return RankCardType;
}());
exports.RankCardType = RankCardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9SYW5rQ2FyZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsMEVBQWlFO0FBQ2pFLG1FQUErRDtBQUMvRDtJQUFBO0lBeURBLENBQUM7SUF2RFEsbUJBQU0sR0FBYixVQUFjLENBQUM7UUFDYixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSwyQkFBYyxHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsUUFBUSxLQUFLLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFDTSxzQkFBUyxHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQ3hCLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtvQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDakIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ04sTUFBTTtpQkFDUDtnQkFDRCxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjtZQUNELENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLHdCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7WUFDRCxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUF0REQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO29DQUdwQztJQXFESCxtQkFBQztDQXpERCxBQXlEQyxJQUFBO0FBekRZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBSZXNJZCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgY2xhc3MgUmFua0NhcmRUeXBlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ2FyZFR5cGVfbW9kaWZ5XCIpXG4gIHN0YXRpYyBtb2RpZnkodCkge1xuICAgIFJhbmtDYXJkVHlwZS5maXhNb2RpZnkodCk7XG4gIH1cbiAgc3RhdGljIHNhdmVUb0dhbWVEYXRhKGUsIHQpIHtcbiAgICBlLmdhbWVUeXBlID09PSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSAmJiBlLmdldEdhbWVEYXRhKCkuc2V0UmFua0NhcmRDb3VudCh0KTtcbiAgfVxuICBzdGF0aWMgZml4TW9kaWZ5KHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICByID0gdC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBzID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMoci5hbGl2ZVRpbGVzKCkpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgIGlmIChwLmNoZWNrSXNOb3JtYWwoKSkge1xuICAgICAgICAgIHZhciBmID0gcC5jYXJkSWQ7XG4gICAgICAgICAgcy5oYXMoZikgfHwgcy5zZXQoZiwgW10pO1xuICAgICAgICAgIHMuZ2V0KGYpLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCAhPT0gcy5zaXplKSB7XG4gICAgICB2YXIgZCA9IEFycmF5LmZyb20ocy52YWx1ZXMoKSk7XG4gICAgICBkLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHQubGVuZ3RoIC0gZS5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIGZvciAodmFyIGggPSB0LnJhbmRvbUdlbmVyYXRvci5yYW5kb21JbnRJbmNsdXNpdmUoMCwgOTkpID4gODAgPyA0IDogMiwgeSA9IFtdLCBtID0gW10sIHYgPSBkLmxlbmd0aCAtIDE7IHYgPj0gMDsgdi0tKSB7XG4gICAgICAgIHZhciBnID0gZFt2XTtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09PSBoKSB7XG4gICAgICAgICAgeSA9IGc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZy5sZW5ndGggPj0gaCAmJiAobSA9IGcpO1xuICAgICAgfVxuICAgICAgMCA9PT0geS5sZW5ndGggJiYgbS5sZW5ndGggPiAwICYmICh5ID0gbSk7XG4gICAgICAwID09PSB5Lmxlbmd0aCAmJiAoaCA9ICh5ID0gZFt0LnJhbmRvbUdlbmVyYXRvci5yYW5kb21JbnRJbmNsdXNpdmUoMCwgZC5sZW5ndGggLSAxKV0pLmxlbmd0aCk7XG4gICAgICB2YXIgXyA9IE1hdGgubWluKGgsIHkubGVuZ3RoKTtcbiAgICAgIGZvciAodiA9IDA7IHYgPCBfOyB2KyspIHtcbiAgICAgICAgdmFyIFQgPSB5W3ZdO1xuICAgICAgICByLmNoYW5nZVRpbGVSZXNJZChULmlkLCBSZXNJZC5lbVJhbmtJZCk7XG4gICAgICAgIHIuc2V0VGlsZVR5cGUoVC5pZCwgRVRpbGVUeXBlLlJhbmtDYXJkKTtcbiAgICAgIH1cbiAgICAgIFJhbmtDYXJkVHlwZS5zYXZlVG9HYW1lRGF0YSh0LCBfKTtcbiAgICB9XG4gIH1cbn0iXX0=
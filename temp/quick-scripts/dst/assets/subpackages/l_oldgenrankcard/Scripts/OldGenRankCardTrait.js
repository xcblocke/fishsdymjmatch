
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_oldgenrankcard/Scripts/OldGenRankCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae00cbDZGxB16utgVU3/MKV', 'OldGenRankCardTrait');
// subpackages/l_oldgenrankcard/Scripts/OldGenRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardType_1 = require("../../../Scripts/tileTypes/RankCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var OldGenRankCardTrait = /** @class */ (function (_super) {
    __extends(OldGenRankCardTrait, _super);
    function OldGenRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OldGenRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OldGenRankCardTrait.prototype.onRankCardType_modify = function (e, r) {
        var t, n, o = e.args[0], a = (e.ins, o.getTileMapObject()), u = new Map();
        try {
            for (var p = __values(a.aliveTiles()), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                if (d.type === TileTypeEnum_1.ETileType.Normal) {
                    var y = d.cardId;
                    u.has(y) || u.set(y, []);
                    u.get(y).push(d);
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
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 !== u.size) {
            var T = Array.from(u.values());
            T.sort(function (e, r) {
                return r.length - e.length;
            });
            var v = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2;
            if (T[0].length < v)
                r({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            else {
                for (var _ = 0; _ < v; _++) {
                    var h = T[0][_];
                    h.resId;
                    a.changeTileResId(h.id, GameTypeEnums_1.ResId.emRankId);
                    a.setTileType(h.id, TileTypeEnum_1.ETileType.RankCard);
                }
                RankCardType_1.RankCardType.saveToGameData(o, v);
                r({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
        }
        else
            r({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
    };
    OldGenRankCardTrait.traitKey = "OldGenRankCard";
    OldGenRankCardTrait = __decorate([
        mj.trait,
        mj.class("OldGenRankCardTrait")
    ], OldGenRankCardTrait);
    return OldGenRankCardTrait;
}(Trait_1.default));
exports.default = OldGenRankCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX29sZGdlbnJhbmtjYXJkL1NjcmlwdHMvT2xkR2VuUmFua0NhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQStFO0FBQy9FLGlGQUE2RTtBQUM3RSx3RUFBdUU7QUFDdkUsZ0VBQTJEO0FBRzNEO0lBQWlELHVDQUFLO0lBQXREOztJQTBEQSxDQUFDO0lBeERDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFDakMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLE1BQU0sRUFBRTtvQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDakIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxDQUFDLENBQUM7b0JBQ3JCLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7aUJBQUs7Z0JBQ04sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNSLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsMkJBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUM7b0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQzFDLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQzthQUNKO1NBQ0Y7O1lBQU0sQ0FBQyxDQUFDO2dCQUNQLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4RE0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBMER2QztJQUFELDBCQUFDO0NBMURELEFBMERDLENBMURnRCxlQUFLLEdBMERyRDtrQkExRG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc0lkIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBSYW5rQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3RpbGVUeXBlcy9SYW5rQ2FyZFR5cGUnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiT2xkR2VuUmFua0NhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xkR2VuUmFua0NhcmRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJPbGRHZW5SYW5rQ2FyZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25SYW5rQ2FyZFR5cGVfbW9kaWZ5KGUsIHIpIHtcbiAgICB2YXIgdCxcbiAgICAgIG4sXG4gICAgICBvID0gZS5hcmdzWzBdLFxuICAgICAgYSA9IChlLmlucywgby5nZXRUaWxlTWFwT2JqZWN0KCkpLFxuICAgICAgdSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGEuYWxpdmVUaWxlcygpKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICBpZiAoZC50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgICAgdmFyIHkgPSBkLmNhcmRJZDtcbiAgICAgICAgICB1Lmhhcyh5KSB8fCB1LnNldCh5LCBbXSk7XG4gICAgICAgICAgdS5nZXQoeSkucHVzaChkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgwICE9PSB1LnNpemUpIHtcbiAgICAgIHZhciBUID0gQXJyYXkuZnJvbSh1LnZhbHVlcygpKTtcbiAgICAgIFQuc29ydChmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICByZXR1cm4gci5sZW5ndGggLSBlLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHYgPSBvLnJhbmRvbUdlbmVyYXRvci5yYW5kb21JbnRJbmNsdXNpdmUoMCwgOTkpID4gODAgPyA0IDogMjtcbiAgICAgIGlmIChUWzBdLmxlbmd0aCA8IHYpIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBmb3IgKHZhciBfID0gMDsgXyA8IHY7IF8rKykge1xuICAgICAgICAgIHZhciBoID0gVFswXVtfXTtcbiAgICAgICAgICBoLnJlc0lkO1xuICAgICAgICAgIGEuY2hhbmdlVGlsZVJlc0lkKGguaWQsIFJlc0lkLmVtUmFua0lkKTtcbiAgICAgICAgICBhLnNldFRpbGVUeXBlKGguaWQsIEVUaWxlVHlwZS5SYW5rQ2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgUmFua0NhcmRUeXBlLnNhdmVUb0dhbWVEYXRhKG8sIHYpO1xuICAgICAgICByKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Ugcih7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=
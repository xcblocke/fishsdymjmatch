
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_genrankcard/Scripts/GenRankCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7741cx/g1KGqeJNyWuefyO', 'GenRankCardTrait');
// subpackages/l_genrankcard/Scripts/GenRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardType_1 = require("../../../Scripts/tileTypes/RankCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GenRankCardTrait = /** @class */ (function (_super) {
    __extends(GenRankCardTrait, _super);
    function GenRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GenRankCardTrait.prototype.onRankCardType_modify = function (e, t) {
        var r, n, o = e.args[0], a = (e.ins, o.getTileMapObject()), u = new Map();
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
            r = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (0 !== u.size) {
            var h = Array.from(u.values());
            h.sort(function (e, t) {
                return t.length - e.length;
            });
            for (var T = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, v = [], m = 0; m < h.length; m++)
                if (h[m].length == T) {
                    v = h[m];
                    break;
                }
            0 == v.length && (v = h[o.randomGenerator.randomIntInclusive(0, h.length - 1)]);
            for (m = 0; m < v.length; m++) {
                var _ = v[m];
                _.resId;
                a.changeTileResId(_.id, GameTypeEnums_1.ResId.emRankId);
                a.setTileType(_.id, TileTypeEnum_1.ETileType.RankCard);
            }
            RankCardType_1.RankCardType.saveToGameData(o, v.length);
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GenRankCardTrait.traitKey = "GenRankCard";
    GenRankCardTrait = __decorate([
        mj.trait,
        mj.class("GenRankCardTrait")
    ], GenRankCardTrait);
    return GenRankCardTrait;
}(Trait_1.default));
exports.default = GenRankCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dlbnJhbmtjYXJkL1NjcmlwdHMvR2VuUmFua0NhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQStFO0FBQy9FLGlGQUE2RTtBQUM3RSx3RUFBdUU7QUFDdkUsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQXNEQSxDQUFDO0lBcERDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFDakMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLE1BQU0sRUFBRTtvQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDakIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDN0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVCxNQUFNO2lCQUNQO1lBQ0QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSx3QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsMkJBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBcERNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXNEcEM7SUFBRCx1QkFBQztDQXRERCxBQXNEQyxDQXRENkMsZUFBSyxHQXNEbEQ7a0JBdERvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNJZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgUmFua0NhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90aWxlVHlwZXMvUmFua0NhcmRUeXBlJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkdlblJhbmtDYXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlblJhbmtDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR2VuUmFua0NhcmRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uUmFua0NhcmRUeXBlX21vZGlmeShlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBuLFxuICAgICAgbyA9IGUuYXJnc1swXSxcbiAgICAgIGEgPSAoZS5pbnMsIG8uZ2V0VGlsZU1hcE9iamVjdCgpKSxcbiAgICAgIHUgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhhLmFsaXZlVGlsZXMoKSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gZi52YWx1ZTtcbiAgICAgICAgaWYgKGQudHlwZSA9PT0gRVRpbGVUeXBlLk5vcm1hbCkge1xuICAgICAgICAgIHZhciB5ID0gZC5jYXJkSWQ7XG4gICAgICAgICAgdS5oYXMoeSkgfHwgdS5zZXQoeSwgW10pO1xuICAgICAgICAgIHUuZ2V0KHkpLnB1c2goZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChuID0gcC5yZXR1cm4pICYmIG4uY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCAhPT0gdS5zaXplKSB7XG4gICAgICB2YXIgaCA9IEFycmF5LmZyb20odS52YWx1ZXMoKSk7XG4gICAgICBoLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHQubGVuZ3RoIC0gZS5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIGZvciAodmFyIFQgPSBvLnJhbmRvbUdlbmVyYXRvci5yYW5kb21JbnRJbmNsdXNpdmUoMCwgOTkpID4gODAgPyA0IDogMiwgdiA9IFtdLCBtID0gMDsgbSA8IGgubGVuZ3RoOyBtKyspIGlmIChoW21dLmxlbmd0aCA9PSBUKSB7XG4gICAgICAgIHYgPSBoW21dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIDAgPT0gdi5sZW5ndGggJiYgKHYgPSBoW28ucmFuZG9tR2VuZXJhdG9yLnJhbmRvbUludEluY2x1c2l2ZSgwLCBoLmxlbmd0aCAtIDEpXSk7XG4gICAgICBmb3IgKG0gPSAwOyBtIDwgdi5sZW5ndGg7IG0rKykge1xuICAgICAgICB2YXIgXyA9IHZbbV07XG4gICAgICAgIF8ucmVzSWQ7XG4gICAgICAgIGEuY2hhbmdlVGlsZVJlc0lkKF8uaWQsIFJlc0lkLmVtUmFua0lkKTtcbiAgICAgICAgYS5zZXRUaWxlVHlwZShfLmlkLCBFVGlsZVR5cGUuUmFua0NhcmQpO1xuICAgICAgfVxuICAgICAgUmFua0NhcmRUeXBlLnNhdmVUb0dhbWVEYXRhKG8sIHYubGVuZ3RoKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=
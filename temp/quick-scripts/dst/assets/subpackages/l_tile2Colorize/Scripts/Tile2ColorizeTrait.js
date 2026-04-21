
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2Colorize/Scripts/Tile2ColorizeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ac61nmDpBOIKjVhFDW4b/+', 'Tile2ColorizeTrait');
// subpackages/l_tile2Colorize/Scripts/Tile2ColorizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var SolverUtils_1 = require("../../../Scripts/SolverUtils");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var v = new Set([37, 38, 50]);
var Tile2ColorizeTrait = /** @class */ (function (_super) {
    __extends(Tile2ColorizeTrait, _super);
    function Tile2ColorizeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EXCLUDED_TILE_TYPES = new Set([TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga, TileTypeEnum_1.ETileType.Bomb]);
        return _this;
    }
    Tile2ColorizeTrait.prototype.onIptT2SetLv_genFcsAfter = function (e, t) {
        var r = e.ins, i = e.args[0].levelData;
        if (this.shouldProcess(i)) {
            var o = i.slover;
            if (o) {
                this.solverColorize(r.tileMapObject, r.gameContext, o);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2ColorizeTrait.prototype.shouldProcess = function (e) {
        return CardUtil_1.default.getCurrentConfigName() === ConfigType_1.ConfigType.card_config2.name && !!e.isNewGame && !ExtractTool_1.default.getInstance().isFixedLevel(e.levelId);
    };
    Tile2ColorizeTrait.prototype.solverColorize = function (e, t, r) {
        var i, o, n = this, a = LevelUtil_1.LevelUtil.parseStepSolver(r);
        if (0 !== a.length) {
            var s = e.tileObjectMap();
            if (s && 0 !== s.size) {
                var c = SolverUtils_1.SolverUtils.parsePairings(a, s, function (e) {
                    return v.has(e.cardId) || n.EXCLUDED_TILE_TYPES.has(e.type);
                }), p = c.pairs, d = c.unpaired, y = this.buildValidResIdPool(t);
                if (0 !== y.length) {
                    var h = 0;
                    try {
                        for (var g = __values(p), T = g.next(); !T.done; T = g.next()) {
                            var _ = T.value, m = y[h % y.length];
                            e.changeTileResId(_.paving.tile.id, m);
                            e.changeTileResId(_.elim.tile.id, m);
                            h++;
                        }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            T && !T.done && (o = g.return) && o.call(g);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    if (d.length >= 2)
                        for (var b = 0; b < d.length - 1; b += 2) {
                            m = y[h % y.length];
                            e.changeTileResId(d[b].tile.id, m);
                            e.changeTileResId(d[b + 1].tile.id, m);
                            h++;
                        }
                }
            }
        }
    };
    Tile2ColorizeTrait.prototype.buildValidResIdPool = function (e) {
        var t = e.getCardConfigMap(), r = [], i = 0;
        t.forEach(function (e, t) {
            t > i && (i = t);
        });
        for (var o = 1; o <= i; o++) {
            var n = t.get(o);
            n && !v.has(n.cardId) && r.push(o);
        }
        return r;
    };
    Tile2ColorizeTrait.traitKey = "Tile2Colorize";
    Tile2ColorizeTrait = __decorate([
        mj.trait,
        mj.class("Tile2ColorizeTrait")
    ], Tile2ColorizeTrait);
    return Tile2ColorizeTrait;
}(Trait_1.default));
exports.default = Tile2ColorizeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyQ29sb3JpemUvU2NyaXB0cy9UaWxlMkNvbG9yaXplVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxpRkFBNEU7QUFDNUUsaUZBQTZFO0FBQzdFLDhFQUE2RTtBQUM3RSw0REFBMkQ7QUFDM0Qsb0VBQStEO0FBQy9ELDZFQUE0RTtBQUM1RSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUc5QjtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTJFQztRQTFFQyx5QkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLHdCQUFTLENBQUMsUUFBUSxFQUFFLHdCQUFTLENBQUMsSUFBSSxFQUFFLHdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7SUEwRXRGLENBQUM7SUF4RUMscURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxrQkFBUSxDQUFDLG9CQUFvQixFQUFFLEtBQUssdUJBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pKLENBQUM7SUFDRCwyQ0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxFQUNGLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDVixJQUFJO3dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7NEJBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN0QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3JDLENBQUMsRUFBRSxDQUFDO3lCQUNMO3FCQUNGO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNWLENBQUMsR0FBRzs0QkFDRixLQUFLLEVBQUUsQ0FBQzt5QkFDVCxDQUFDO3FCQUNIOzRCQUFTO3dCQUNSLElBQUk7NEJBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDN0M7Z0NBQVM7NEJBQ1IsSUFBSSxDQUFDO2dDQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDdEI7cUJBQ0Y7b0JBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQzNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLENBQUMsRUFBRSxDQUFDO3lCQUNMO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3RCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhFTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUZmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0EyRXRDO0lBQUQseUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRStDLGVBQUssR0EyRXBEO2tCQTNFb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBMZXZlbFV0aWwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbFV0aWwnO1xuaW1wb3J0IHsgU29sdmVyVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1NvbHZlclV0aWxzJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xudmFyIHYgPSBuZXcgU2V0KFszNywgMzgsIDUwXSk7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyQ29sb3JpemVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJDb2xvcml6ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBFWENMVURFRF9USUxFX1RZUEVTID0gbmV3IFNldChbRVRpbGVUeXBlLlJhbmtDYXJkLCBFVGlsZVR5cGUuWW9nYSwgRVRpbGVUeXBlLkJvbWJdKTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkNvbG9yaXplXCI7XG4gIG9uSXB0VDJTZXRMdl9nZW5GY3NBZnRlcihlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucyxcbiAgICAgIGkgPSBlLmFyZ3NbMF0ubGV2ZWxEYXRhO1xuICAgIGlmICh0aGlzLnNob3VsZFByb2Nlc3MoaSkpIHtcbiAgICAgIHZhciBvID0gaS5zbG92ZXI7XG4gICAgICBpZiAobykge1xuICAgICAgICB0aGlzLnNvbHZlckNvbG9yaXplKHIudGlsZU1hcE9iamVjdCwgci5nYW1lQ29udGV4dCwgbyk7XG4gICAgICAgIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBzaG91bGRQcm9jZXNzKGUpIHtcbiAgICByZXR1cm4gQ2FyZFV0aWwuZ2V0Q3VycmVudENvbmZpZ05hbWUoKSA9PT0gQ29uZmlnVHlwZS5jYXJkX2NvbmZpZzIubmFtZSAmJiAhIWUuaXNOZXdHYW1lICYmICFFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRml4ZWRMZXZlbChlLmxldmVsSWQpO1xuICB9XG4gIHNvbHZlckNvbG9yaXplKGUsIHQsIHIpIHtcbiAgICB2YXIgaSxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcyxcbiAgICAgIGEgPSBMZXZlbFV0aWwucGFyc2VTdGVwU29sdmVyKHIpO1xuICAgIGlmICgwICE9PSBhLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSBlLnRpbGVPYmplY3RNYXAoKTtcbiAgICAgIGlmIChzICYmIDAgIT09IHMuc2l6ZSkge1xuICAgICAgICB2YXIgYyA9IFNvbHZlclV0aWxzLnBhcnNlUGFpcmluZ3MoYSwgcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2LmhhcyhlLmNhcmRJZCkgfHwgbi5FWENMVURFRF9USUxFX1RZUEVTLmhhcyhlLnR5cGUpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHAgPSBjLnBhaXJzLFxuICAgICAgICAgIGQgPSBjLnVucGFpcmVkLFxuICAgICAgICAgIHkgPSB0aGlzLmJ1aWxkVmFsaWRSZXNJZFBvb2wodCk7XG4gICAgICAgIGlmICgwICE9PSB5Lmxlbmd0aCkge1xuICAgICAgICAgIHZhciBoID0gMDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZyA9IF9fdmFsdWVzKHApLCBUID0gZy5uZXh0KCk7ICFULmRvbmU7IFQgPSBnLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgXyA9IFQudmFsdWUsXG4gICAgICAgICAgICAgICAgbSA9IHlbaCAlIHkubGVuZ3RoXTtcbiAgICAgICAgICAgICAgZS5jaGFuZ2VUaWxlUmVzSWQoXy5wYXZpbmcudGlsZS5pZCwgbSk7XG4gICAgICAgICAgICAgIGUuY2hhbmdlVGlsZVJlc0lkKF8uZWxpbS50aWxlLmlkLCBtKTtcbiAgICAgICAgICAgICAgaCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBUICYmICFULmRvbmUgJiYgKG8gPSBnLnJldHVybikgJiYgby5jYWxsKGcpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkLmxlbmd0aCA+PSAyKSBmb3IgKHZhciBiID0gMDsgYiA8IGQubGVuZ3RoIC0gMTsgYiArPSAyKSB7XG4gICAgICAgICAgICBtID0geVtoICUgeS5sZW5ndGhdO1xuICAgICAgICAgICAgZS5jaGFuZ2VUaWxlUmVzSWQoZFtiXS50aWxlLmlkLCBtKTtcbiAgICAgICAgICAgIGUuY2hhbmdlVGlsZVJlc0lkKGRbYiArIDFdLnRpbGUuaWQsIG0pO1xuICAgICAgICAgICAgaCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBidWlsZFZhbGlkUmVzSWRQb29sKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0Q2FyZENvbmZpZ01hcCgpLFxuICAgICAgciA9IFtdLFxuICAgICAgaSA9IDA7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB0ID4gaSAmJiAoaSA9IHQpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIG8gPSAxOyBvIDw9IGk7IG8rKykge1xuICAgICAgdmFyIG4gPSB0LmdldChvKTtcbiAgICAgIG4gJiYgIXYuaGFzKG4uY2FyZElkKSAmJiByLnB1c2gobyk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59Il19
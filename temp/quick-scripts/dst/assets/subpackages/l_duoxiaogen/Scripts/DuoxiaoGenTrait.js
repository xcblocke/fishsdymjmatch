
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_duoxiaogen/Scripts/DuoxiaoGenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '337b7cdcmxARJPkZnq8cs6a', 'DuoxiaoGenTrait');
// subpackages/l_duoxiaogen/Scripts/DuoxiaoGenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var DuoxiaoCardType_1 = require("../../../Scripts/tileTypes/DuoxiaoCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DuoxiaoGenTrait = /** @class */ (function (_super) {
    __extends(DuoxiaoGenTrait, _super);
    function DuoxiaoGenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoGenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DuoxiaoGenTrait.prototype.canGenDuoxiaoCard = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t)) && (null != this.traitData.travelLevel && t == GameTypeEnums_1.MjGameType.Travel ? UserModel_1.default.getInstance().travelData.getLevelId() >= this._traitData.level : UserModel_1.default.getInstance().normalData.getLevelId() >= this._traitData.level);
    };
    DuoxiaoGenTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onTravelGaCtl_gTileTypes = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onDailyChCtrl_getTileTypes = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
        e({
            returnVal: this._traitData.genCountRange || [1, 3],
            isBreak: true
        });
    };
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_countRange = function (t, e) {
        e({
            returnVal: this._traitData.countRange || [4, 6],
            isBreak: true
        });
    };
    DuoxiaoGenTrait.prototype.onIptInCollectCd_cTileTypes = function (t, e) {
        var r = t.beforReturnVal || "";
        e({
            returnVal: r = r.replace(TileTypeEnum_1.ETileType.DuoxiaoCard, "")
        });
    };
    DuoxiaoGenTrait.prototype.getNormalCardGroups = function (t) {
        var e, r, o, n, a, l, s = new Map(), p = t.getTileMapObject(), c = t.randomGenerator;
        try {
            for (var y = __values(p.aliveTiles()), f = y.next(); !f.done; f = y.next())
                if ((_ = f.value).type === TileTypeEnum_1.ETileType.Normal) {
                    s.has(_.cardId) || s.set(_.cardId, {
                        cardId: _.cardId,
                        count: 0,
                        layerSum: 0,
                        tiles: []
                    });
                    s.get(_.cardId).count++;
                    s.get(_.cardId).layerSum += _.pos.z;
                    s.get(_.cardId).tiles.push(_);
                }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                f && !f.done && (r = y.return) && r.call(y);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var d = [];
        try {
            for (var T = __values(s.values()), v = T.next(); !v.done; v = T.next()) {
                var h = v.value;
                try {
                    for (var m = (a = void 0, __values(h.tiles)), g = m.next(); !g.done; g = m.next()) {
                        var _ = g.value;
                        d.push({
                            tile: _,
                            layerSum: h.layerSum,
                            random: c.random()
                        });
                    }
                }
                catch (t) {
                    a = {
                        error: t
                    };
                }
                finally {
                    try {
                        g && !g.done && (l = m.return) && l.call(m);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
            }
        }
        catch (t) {
            o = {
                error: t
            };
        }
        finally {
            try {
                v && !v.done && (n = T.return) && n.call(T);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        d.sort(function (t, e) {
            return t.layerSum !== e.layerSum ? t.layerSum - e.layerSum : t.tile.pos.z !== e.tile.pos.z ? t.tile.pos.z - e.tile.pos.z : t.random - e.random;
        });
        return d.map(function (t) {
            return t.tile;
        });
    };
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_modify = function (t, e) {
        var r, o;
        if (1 == this._traitData.genType) {
            var n = t.args[0], a = DuoxiaoCardType_1.default.getGenCountRange(), l = n.randomGenerator, p = l.randomInt(a[0], a[1]), c = this.getNormalCardGroups(n).slice(0, p), y = n.getTileMapObject();
            try {
                for (var f = __values(c), d = f.next(); !d.done; d = f.next()) {
                    var T = d.value, v = DuoxiaoCardType_1.default.getCountRange(), h = l.randomInt(v[0], v[1]);
                    y.setDuoxiaoCount(T.id, h);
                    y.setTileType(T.id, TileTypeEnum_1.ETileType.DuoxiaoCard);
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.traitKey = "DuoxiaoGen";
    DuoxiaoGenTrait = __decorate([
        mj.trait,
        mj.class("DuoxiaoGenTrait")
    ], DuoxiaoGenTrait);
    return DuoxiaoGenTrait;
}(Trait_1.default));
exports.default = DuoxiaoGenTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R1b3hpYW9nZW4vU2NyaXB0cy9EdW94aWFvR2VuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixpRkFBNkU7QUFDN0UsOEVBQXlFO0FBQ3pFLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBbUtBLENBQUM7SUFqS0MsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDJDQUFpQixHQUFqQixVQUFrQixDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdVLENBQUM7SUFDRCxnREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMs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QUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBaktNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBbUtuQztJQUFELHNCQUFDO0NBbktELEFBbUtDLENBbks0QyxlQUFLLEdBbUtqRDtrQkFuS29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgRHVveGlhb0NhcmRUeXBlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdGlsZVR5cGVzL0R1b3hpYW9DYXJkVHlwZSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRHVveGlhb0dlblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW94aWFvR2VuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRHVveGlhb0dlblwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgY2FuR2VuRHVveGlhb0NhcmQodCkge1xuICAgIHJldHVybiAhKHRoaXMudHJhaXREYXRhLmdhbWVUeXBlcyAmJiB0aGlzLnRyYWl0RGF0YS5nYW1lVHlwZXMubGVuZ3RoID4gMCAmJiAhdGhpcy50cmFpdERhdGEuZ2FtZVR5cGVzLmluY2x1ZGVzKHQpKSAmJiAobnVsbCAhPSB0aGlzLnRyYWl0RGF0YS50cmF2ZWxMZXZlbCAmJiB0ID09IE1qR2FtZVR5cGUuVHJhdmVsID8gVXNlck1vZGVsLmdldEluc3RhbmNlKCkudHJhdmVsRGF0YS5nZXRMZXZlbElkKCkgPj0gdGhpcy5fdHJhaXREYXRhLmxldmVsIDogVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkgPj0gdGhpcy5fdHJhaXREYXRhLmxldmVsKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9nZXRUaWxlKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIGlmICh0aGlzLmNhbkdlbkR1b3hpYW9DYXJkKHIuZ2FtZVR5cGUpKSB7XG4gICAgICB0LmJlZm9yUmV0dXJuVmFsID0gdC5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLkR1b3hpYW9DYXJkO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdC5iZWZvclJldHVyblZhbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblRyYXZlbEdhQ3RsX2dUaWxlVHlwZXModCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgaWYgKHRoaXMuY2FuR2VuRHVveGlhb0NhcmQoci5nYW1lVHlwZSkpIHtcbiAgICAgIHQuYmVmb3JSZXR1cm5WYWwgPSB0LmJlZm9yUmV0dXJuVmFsICsgXCIsXCIgKyBFVGlsZVR5cGUuRHVveGlhb0NhcmQ7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRGFpbHlDaEN0cmxfZ2V0VGlsZVR5cGVzKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIGlmICh0aGlzLmNhbkdlbkR1b3hpYW9DYXJkKHIuZ2FtZVR5cGUpKSB7XG4gICAgICB0LmJlZm9yUmV0dXJuVmFsID0gdC5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLkR1b3hpYW9DYXJkO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdC5iZWZvclJldHVyblZhbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkR1b3hpYW9DdF9nZW5Db3VudFJhbmdlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmdlbkNvdW50UmFuZ2UgfHwgWzEsIDNdLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uRHVveGlhb0N0X2NvdW50UmFuZ2UodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuY291bnRSYW5nZSB8fCBbNCwgNl0sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25JcHRJbkNvbGxlY3RDZF9jVGlsZVR5cGVzKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYmVmb3JSZXR1cm5WYWwgfHwgXCJcIjtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogciA9IHIucmVwbGFjZShFVGlsZVR5cGUuRHVveGlhb0NhcmQsIFwiXCIpXG4gICAgfSk7XG4gIH1cbiAgZ2V0Tm9ybWFsQ2FyZEdyb3Vwcyh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMgPSBuZXcgTWFwKCksXG4gICAgICBwID0gdC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBjID0gdC5yYW5kb21HZW5lcmF0b3I7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHkgPSBfX3ZhbHVlcyhwLmFsaXZlVGlsZXMoKSksIGYgPSB5Lm5leHQoKTsgIWYuZG9uZTsgZiA9IHkubmV4dCgpKSBpZiAoKF8gPSBmLnZhbHVlKS50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIHMuaGFzKF8uY2FyZElkKSB8fCBzLnNldChfLmNhcmRJZCwge1xuICAgICAgICAgIGNhcmRJZDogXy5jYXJkSWQsXG4gICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgbGF5ZXJTdW06IDAsXG4gICAgICAgICAgdGlsZXM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICBzLmdldChfLmNhcmRJZCkuY291bnQrKztcbiAgICAgICAgcy5nZXQoXy5jYXJkSWQpLmxheWVyU3VtICs9IF8ucG9zLno7XG4gICAgICAgIHMuZ2V0KF8uY2FyZElkKS50aWxlcy5wdXNoKF8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKHIgPSB5LnJldHVybikgJiYgci5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFQgPSBfX3ZhbHVlcyhzLnZhbHVlcygpKSwgdiA9IFQubmV4dCgpOyAhdi5kb25lOyB2ID0gVC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGggPSB2LnZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIG0gPSAoYSA9IHZvaWQgMCwgX192YWx1ZXMoaC50aWxlcykpLCBnID0gbS5uZXh0KCk7ICFnLmRvbmU7IGcgPSBtLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIF8gPSBnLnZhbHVlO1xuICAgICAgICAgICAgZC5wdXNoKHtcbiAgICAgICAgICAgICAgdGlsZTogXyxcbiAgICAgICAgICAgICAgbGF5ZXJTdW06IGgubGF5ZXJTdW0sXG4gICAgICAgICAgICAgIHJhbmRvbTogYy5yYW5kb20oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgYSA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZyAmJiAhZy5kb25lICYmIChsID0gbS5yZXR1cm4pICYmIGwuY2FsbChtKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobiA9IFQucmV0dXJuKSAmJiBuLmNhbGwoVCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZC5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICByZXR1cm4gdC5sYXllclN1bSAhPT0gZS5sYXllclN1bSA/IHQubGF5ZXJTdW0gLSBlLmxheWVyU3VtIDogdC50aWxlLnBvcy56ICE9PSBlLnRpbGUucG9zLnogPyB0LnRpbGUucG9zLnogLSBlLnRpbGUucG9zLnogOiB0LnJhbmRvbSAtIGUucmFuZG9tO1xuICAgIH0pO1xuICAgIHJldHVybiBkLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQudGlsZTtcbiAgICB9KTtcbiAgfVxuICBvbkR1b3hpYW9DdF9tb2RpZnkodCwgZSkge1xuICAgIHZhciByLCBvO1xuICAgIGlmICgxID09IHRoaXMuX3RyYWl0RGF0YS5nZW5UeXBlKSB7XG4gICAgICB2YXIgbiA9IHQuYXJnc1swXSxcbiAgICAgICAgYSA9IER1b3hpYW9DYXJkVHlwZS5nZXRHZW5Db3VudFJhbmdlKCksXG4gICAgICAgIGwgPSBuLnJhbmRvbUdlbmVyYXRvcixcbiAgICAgICAgcCA9IGwucmFuZG9tSW50KGFbMF0sIGFbMV0pLFxuICAgICAgICBjID0gdGhpcy5nZXROb3JtYWxDYXJkR3JvdXBzKG4pLnNsaWNlKDAsIHApLFxuICAgICAgICB5ID0gbi5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoYyksIGQgPSBmLm5leHQoKTsgIWQuZG9uZTsgZCA9IGYubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIFQgPSBkLnZhbHVlLFxuICAgICAgICAgICAgdiA9IER1b3hpYW9DYXJkVHlwZS5nZXRDb3VudFJhbmdlKCksXG4gICAgICAgICAgICBoID0gbC5yYW5kb21JbnQodlswXSwgdlsxXSk7XG4gICAgICAgICAgeS5zZXREdW94aWFvQ291bnQoVC5pZCwgaCk7XG4gICAgICAgICAgeS5zZXRUaWxlVHlwZShULmlkLCBFVGlsZVR5cGUuRHVveGlhb0NhcmQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZCAmJiAhZC5kb25lICYmIChvID0gZi5yZXR1cm4pICYmIG8uY2FsbChmKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
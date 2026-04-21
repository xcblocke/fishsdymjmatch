
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalshowback/Scripts/Tile2NormalShowBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c862ffetxFLtJOfA1O99Pf/', 'Tile2NormalShowBackTrait');
// subpackages/l_normalshowback/Scripts/Tile2NormalShowBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2NormalShowBackTrait = /** @class */ (function (_super) {
    __extends(Tile2NormalShowBackTrait, _super);
    function Tile2NormalShowBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalShowBackTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2NormalShowBackTrait.prototype.getExcludeTiles = function () {
        var e, t;
        return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.excludes) && void 0 !== t ? t : [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga];
    };
    Tile2NormalShowBackTrait.prototype.isExcludeTile = function (e) {
        return this.getExcludeTiles().some(function (t) {
            return e.checkHasType(t);
        });
    };
    Tile2NormalShowBackTrait.prototype.onT2NorBackMod_isEnable = function (e, t) {
        var o = e.ins.context;
        t({
            returnType: TraitCallbackReturnType.jump,
            returnVal: this.isSupportMode(o.gameType)
        });
    };
    Tile2NormalShowBackTrait.prototype.onT2NorBackMod_getExcludes = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            returnVal: this.getExcludeTiles()
        });
    };
    Tile2NormalShowBackTrait.prototype.onTile2NodeObj_getReqComKs = function (e, t) {
        var o, i = e.args[0], r = i.tileObject;
        if (r) {
            if (this.isSupportMode(null === (o = i.context) || void 0 === o ? void 0 : o.gameType)) {
                if (this.isExcludeTile(r))
                    t();
                else {
                    var a = e.beforReturnVal;
                    if (a.includes(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard))
                        t();
                    else {
                        a.unshift(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
                        t({
                            returnVal: a
                        });
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    Tile2NormalShowBackTrait.prototype.onT2ShuffleBhv_stayEnd = function (e, t) {
        var o, i, r = e.ins, a = null === (o = null == r ? void 0 : r.context) || void 0 === o ? void 0 : o.getTileNodeManager();
        if (this.isSupportMode(null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameType)) {
            this.updateTileNodeStatus(a, true);
            t();
        }
        else
            t();
    };
    Tile2NormalShowBackTrait.prototype.updateTileNodeStatus = function (e, t) {
        if (t === void 0) { t = false; }
        var o, i;
        if (e) {
            var r = e.getTileNodes();
            try {
                for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
                    var p = l.value;
                    if (p && p.info && p.info.tileObject) {
                        var s = p.info.tileObject;
                        s.getIsInSlotBar() || this.isExcludeTile(s) || (t ? s.getIsBack() ? p.tile2ShowBackImmediately() : p.tile2ShowFrontImmediately() : p.tile2RollCard());
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
                    l && !l.done && (i = a.return) && i.call(a);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
        }
    };
    Tile2NormalShowBackTrait.traitKey = "Tile2NormalShowBack";
    Tile2NormalShowBackTrait = __decorate([
        mj.trait,
        mj.class("Tile2NormalShowBackTrait")
    ], Tile2NormalShowBackTrait);
    return Tile2NormalShowBackTrait;
}(Trait_1.default));
exports.default = Tile2NormalShowBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbHNob3diYWNrL1NjcmlwdHMvVGlsZTJOb3JtYWxTaG93QmFja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsaUZBQTZGO0FBQzdGLGdFQUEyRDtBQUczRDtJQUFzRCw0Q0FBSztJQUEzRDs7SUFnRkEsQ0FBQztJQTlFQyxnREFBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxLQUFLLDBCQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxrREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0JBQVMsQ0FBQyxXQUFXLEVBQUUsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6TixDQUFDO0lBQ0QsZ0RBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwwREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFD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Qix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQWdGNUM7SUFBRCwrQkFBQztDQWhGRCxBQWdGQyxDQWhGcUQsZUFBSyxHQWdGMUQ7a0JBaEZvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSwgRVRpbGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJOb3JtYWxTaG93QmFja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk5vcm1hbFNob3dCYWNrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJOb3JtYWxTaG93QmFja1wiO1xuICBpc1N1cHBvcnRNb2RlKGUpIHtcbiAgICByZXR1cm4gZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgfVxuICBnZXRFeGNsdWRlVGlsZXMoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZXhjbHVkZXMpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBbRVRpbGVUeXBlLlJvbGxDYXJkLCBFVGlsZVR5cGUuRGF4aWFvQ2FyZCwgRVRpbGVUeXBlLkR1b3hpYW9DYXJkLCBFVGlsZVR5cGUuUmFua0NhcmQsIEVUaWxlVHlwZS5Zb2dhXTtcbiAgfVxuICBpc0V4Y2x1ZGVUaWxlKGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFeGNsdWRlVGlsZXMoKS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gZS5jaGVja0hhc1R5cGUodCk7XG4gICAgfSk7XG4gIH1cbiAgb25UMk5vckJhY2tNb2RfaXNFbmFibGUoZSwgdCkge1xuICAgIHZhciBvID0gZS5pbnMuY29udGV4dDtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IHRoaXMuaXNTdXBwb3J0TW9kZShvLmdhbWVUeXBlKVxuICAgIH0pO1xuICB9XG4gIG9uVDJOb3JCYWNrTW9kX2dldEV4Y2x1ZGVzKGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IHRoaXMuZ2V0RXhjbHVkZVRpbGVzKClcbiAgICB9KTtcbiAgfVxuICBvblRpbGUyTm9kZU9ial9nZXRSZXFDb21LcyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBpID0gZS5hcmdzWzBdLFxuICAgICAgciA9IGkudGlsZU9iamVjdDtcbiAgICBpZiAocikge1xuICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0TW9kZShudWxsID09PSAobyA9IGkuY29udGV4dCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nYW1lVHlwZSkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFeGNsdWRlVGlsZShyKSkgdCgpO2Vsc2Uge1xuICAgICAgICAgIHZhciBhID0gZS5iZWZvclJldHVyblZhbDtcbiAgICAgICAgICBpZiAoYS5pbmNsdWRlcyhFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKSkgdCgpO2Vsc2Uge1xuICAgICAgICAgICAgYS51bnNoaWZ0KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50Um9sbENhcmQpO1xuICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgIHJldHVyblZhbDogYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UMlNodWZmbGVCaHZfc3RheUVuZChlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBpLFxuICAgICAgciA9IGUuaW5zLFxuICAgICAgYSA9IG51bGwgPT09IChvID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5jb250ZXh0KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldFRpbGVOb2RlTWFuYWdlcigpO1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydE1vZGUobnVsbCA9PT0gKGkgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2FtZVR5cGUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbGVOb2RlU3RhdHVzKGEsIHRydWUpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgdXBkYXRlVGlsZU5vZGVTdGF0dXMoZSwgdCA9IGZhbHNlKSB7XG4gICAgdmFyIG8sIGk7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciByID0gZS5nZXRUaWxlTm9kZXMoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhyKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcCA9IGwudmFsdWU7XG4gICAgICAgICAgaWYgKHAgJiYgcC5pbmZvICYmIHAuaW5mby50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcyA9IHAuaW5mby50aWxlT2JqZWN0O1xuICAgICAgICAgICAgcy5nZXRJc0luU2xvdEJhcigpIHx8IHRoaXMuaXNFeGNsdWRlVGlsZShzKSB8fCAodCA/IHMuZ2V0SXNCYWNrKCkgPyBwLnRpbGUyU2hvd0JhY2tJbW1lZGlhdGVseSgpIDogcC50aWxlMlNob3dGcm9udEltbWVkaWF0ZWx5KCkgOiBwLnRpbGUyUm9sbENhcmQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gYS5yZXR1cm4pICYmIGkuY2FsbChhKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==
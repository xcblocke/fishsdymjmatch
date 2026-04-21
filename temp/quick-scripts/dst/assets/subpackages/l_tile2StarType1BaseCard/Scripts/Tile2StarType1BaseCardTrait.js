
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StarType1BaseCard/Scripts/Tile2StarType1BaseCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45a0da2zmhFXa3Y+eOS+Tj6', 'Tile2StarType1BaseCardTrait');
// subpackages/l_tile2StarType1BaseCard/Scripts/Tile2StarType1BaseCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var p = ["gym2", "farmproduce", "skiing", "livingroom", "countrylife", "music", "wildlife", "spices", "royalwedding", "bakery", "puzzles", "bags", "easter", "parkwalk", "pets", "cardnight", "paris", "birdwatch", "social", "soups", "shoes", "dailygoods", "dogs", "cats", "fashion", "nursery", "fabric", "jewelry", "herbaltea", "breakfast", "retrotech", "cleaning"];
var d = ["W", "b", "t"];
var Tile2StarType1BaseCardTrait = /** @class */ (function (_super) {
    __extends(Tile2StarType1BaseCardTrait, _super);
    function Tile2StarType1BaseCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._whitelistThemes = null;
        return _this;
    }
    Tile2StarType1BaseCardTrait.prototype.getSuitGroupCountFromContext = function (t) {
        var e, r, i = t.ins;
        if (i && "function" == typeof i.getSuitGroupCount)
            return Math.min(3, Math.max(1, i.getSuitGroupCount()));
        var n = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
        return Math.min(3, Math.max(1, n));
    };
    Tile2StarType1BaseCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.addWhitelistBundlesToLoader();
    };
    Tile2StarType1BaseCardTrait.prototype.getWhitelistThemes = function () {
        if (this._whitelistThemes)
            return this._whitelistThemes;
        var t = FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList(), e = new Set(p);
        this._whitelistThemes = t.filter(function (t) {
            return e.has(t.name);
        });
        return this._whitelistThemes;
    };
    Tile2StarType1BaseCardTrait.prototype.addWhitelistBundlesToLoader = function () {
        var t = LowPriorityBundleLoader_1.default.getInstance(), e = this.getWhitelistThemes();
        new Set(e.filter(function (t) {
            return !t.isLocal;
        }).map(function (t) {
            return t.bundle;
        })).forEach(function (e) {
            return t.addTask(e, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    Tile2StarType1BaseCardTrait.prototype.onTile2Star_drawLevel = function (t, e) {
        var r = t.args[0];
        if (1 === ExtractTool_1.default.getInstance().getLevelType(r)) {
            var i = this.getSuitGroupCountFromContext(t), n = this.drawRandomSuits(i);
            if (n.length < i)
                e();
            else {
                for (var a = [], o = [], s = 0; s < i; s++) {
                    var u = this.drawThemeFromWhitelist(o);
                    if (!u) {
                        e();
                        return;
                    }
                    a.push(u);
                    o.push(u.name);
                }
                var c = n.map(function (t, e) {
                    return {
                        suit: t,
                        themeId: a[e].name,
                        bundle: a[e].bundle
                    };
                }), f = a.map(function (t) {
                    return t.name;
                });
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        forLevelId: r,
                        entries: c,
                        themeIds: f
                    }
                });
            }
        }
        else
            e();
    };
    Tile2StarType1BaseCardTrait.prototype.drawRandomSuits = function (t) {
        for (var e = __spreadArrays(d), r = [], i = 0; i < t && e.length > 0; i++) {
            var n = Math.floor(Math.random() * e.length);
            r.push(e[n]);
            e.splice(n, 1);
        }
        return r;
    };
    Tile2StarType1BaseCardTrait.prototype.drawThemeFromWhitelist = function (t) {
        var e = new Set(t), r = this.getWhitelistThemes().filter(function (t) {
            return !e.has(t.name) && (!!t.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(t.bundle));
        });
        if (0 === r.length) {
            var i = this.getWhitelistThemes().filter(function (t) {
                return !e.has(t.name);
            });
            return 0 === i.length ? null : i[Math.floor(Math.random() * i.length)];
        }
        return r[Math.floor(Math.random() * r.length)];
    };
    Tile2StarType1BaseCardTrait.traitKey = "Tile2StarType1BaseCard";
    Tile2StarType1BaseCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2StarType1BaseCardTrait")
    ], Tile2StarType1BaseCardTrait);
    return Tile2StarType1BaseCardTrait;
}(Trait_1.default));
exports.default = Tile2StarType1BaseCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhclR5cGUxQmFzZUNhcmQvU2NyaXB0cy9UaWxlMlN0YXJUeXBlMUJhc2VDYXJkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYscUdBQWdJO0FBQ2hJLGlHQUFnRztBQUNoRyxpRkFBNEU7QUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDNVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBR3hCO0lBQXlELCtDQUFLO0lBQTlEO1FBQUEscUVBNkZDO1FBNUZDLHNCQUFnQixHQUFHLElBQUksQ0FBQzs7SUE0RjFCLENBQUM7SUExRkMsa0VBQTRCLEdBQTVCLFVBQTZCLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQjtZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcs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RyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBMUZNLG9DQUFRLEdBQUcsd0JBQXdCLENBQUM7SUFGeEIsMkJBQTJCO1FBRi9DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztPQUNuQiwyQkFBMkIsQ0E2Ri9DO0lBQUQsa0NBQUM7Q0E3RkQsQUE2RkMsQ0E3RndELGVBQUssR0E2RjdEO2tCQTdGb0IsMkJBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5pbXBvcnQgeyBGbG93ZXJTdGFyQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0Zsb3dlclN0YXJDb25maWdVdGlsJztcbmltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbnZhciBwID0gW1wiZ3ltMlwiLCBcImZhcm1wcm9kdWNlXCIsIFwic2tpaW5nXCIsIFwibGl2aW5ncm9vbVwiLCBcImNvdW50cnlsaWZlXCIsIFwibXVzaWNcIiwgXCJ3aWxkbGlmZVwiLCBcInNwaWNlc1wiLCBcInJveWFsd2VkZGluZ1wiLCBcImJha2VyeVwiLCBcInB1enpsZXNcIiwgXCJiYWdzXCIsIFwiZWFzdGVyXCIsIFwicGFya3dhbGtcIiwgXCJwZXRzXCIsIFwiY2FyZG5pZ2h0XCIsIFwicGFyaXNcIiwgXCJiaXJkd2F0Y2hcIiwgXCJzb2NpYWxcIiwgXCJzb3Vwc1wiLCBcInNob2VzXCIsIFwiZGFpbHlnb29kc1wiLCBcImRvZ3NcIiwgXCJjYXRzXCIsIFwiZmFzaGlvblwiLCBcIm51cnNlcnlcIiwgXCJmYWJyaWNcIiwgXCJqZXdlbHJ5XCIsIFwiaGVyYmFsdGVhXCIsIFwiYnJlYWtmYXN0XCIsIFwicmV0cm90ZWNoXCIsIFwiY2xlYW5pbmdcIl07XG52YXIgZCA9IFtcIldcIiwgXCJiXCIsIFwidFwiXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJTdGFyVHlwZTFCYXNlQ2FyZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlN0YXJUeXBlMUJhc2VDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF93aGl0ZWxpc3RUaGVtZXMgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyU3RhclR5cGUxQmFzZUNhcmRcIjtcbiAgZ2V0U3VpdEdyb3VwQ291bnRGcm9tQ29udGV4dCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgaSA9IHQuaW5zO1xuICAgIGlmIChpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5nZXRTdWl0R3JvdXBDb3VudCkgcmV0dXJuIE1hdGgubWluKDMsIE1hdGgubWF4KDEsIGkuZ2V0U3VpdEdyb3VwQ291bnQoKSkpO1xuICAgIHZhciBuID0gbnVsbCAhPT0gKHIgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5zdWl0R3JvdXBDb3VudCkgJiYgdm9pZCAwICE9PSByID8gciA6IDE7XG4gICAgcmV0dXJuIE1hdGgubWluKDMsIE1hdGgubWF4KDEsIG4pKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5hZGRXaGl0ZWxpc3RCdW5kbGVzVG9Mb2FkZXIoKTtcbiAgfVxuICBnZXRXaGl0ZWxpc3RUaGVtZXMoKSB7XG4gICAgaWYgKHRoaXMuX3doaXRlbGlzdFRoZW1lcykgcmV0dXJuIHRoaXMuX3doaXRlbGlzdFRoZW1lcztcbiAgICB2YXIgdCA9IEZsb3dlclN0YXJDb25maWdVdGlsLmdldFN0YXJMaXN0KCksXG4gICAgICBlID0gbmV3IFNldChwKTtcbiAgICB0aGlzLl93aGl0ZWxpc3RUaGVtZXMgPSB0LmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUuaGFzKHQubmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX3doaXRlbGlzdFRoZW1lcztcbiAgfVxuICBhZGRXaGl0ZWxpc3RCdW5kbGVzVG9Mb2FkZXIoKSB7XG4gICAgdmFyIHQgPSBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLFxuICAgICAgZSA9IHRoaXMuZ2V0V2hpdGVsaXN0VGhlbWVzKCk7XG4gICAgbmV3IFNldChlLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuICF0LmlzTG9jYWw7XG4gICAgfSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5idW5kbGU7XG4gICAgfSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB0LmFkZFRhc2soZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpKTtcbiAgICB9KTtcbiAgfVxuICBvblRpbGUyU3Rhcl9kcmF3TGV2ZWwodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIGlmICgxID09PSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldExldmVsVHlwZShyKSkge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldFN1aXRHcm91cENvdW50RnJvbUNvbnRleHQodCksXG4gICAgICAgIG4gPSB0aGlzLmRyYXdSYW5kb21TdWl0cyhpKTtcbiAgICAgIGlmIChuLmxlbmd0aCA8IGkpIGUoKTtlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBvID0gW10sIHMgPSAwOyBzIDwgaTsgcysrKSB7XG4gICAgICAgICAgdmFyIHUgPSB0aGlzLmRyYXdUaGVtZUZyb21XaGl0ZWxpc3Qobyk7XG4gICAgICAgICAgaWYgKCF1KSB7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGEucHVzaCh1KTtcbiAgICAgICAgICBvLnB1c2godS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IG4ubWFwKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdWl0OiB0LFxuICAgICAgICAgICAgICB0aGVtZUlkOiBhW2VdLm5hbWUsXG4gICAgICAgICAgICAgIGJ1bmRsZTogYVtlXS5idW5kbGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZiA9IGEubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5uYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIGZvckxldmVsSWQ6IHIsXG4gICAgICAgICAgICBlbnRyaWVzOiBjLFxuICAgICAgICAgICAgdGhlbWVJZHM6IGZcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZHJhd1JhbmRvbVN1aXRzKHQpIHtcbiAgICBmb3IgKHZhciBlID0gWy4uLmRdLCByID0gW10sIGkgPSAwOyBpIDwgdCAmJiBlLmxlbmd0aCA+IDA7IGkrKykge1xuICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCk7XG4gICAgICByLnB1c2goZVtuXSk7XG4gICAgICBlLnNwbGljZShuLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZHJhd1RoZW1lRnJvbVdoaXRlbGlzdCh0KSB7XG4gICAgdmFyIGUgPSBuZXcgU2V0KHQpLFxuICAgICAgciA9IHRoaXMuZ2V0V2hpdGVsaXN0VGhlbWVzKCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhZS5oYXModC5uYW1lKSAmJiAoISF0LmlzTG9jYWwgfHwgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5pc0J1bmRsZVByZUxvYWRlZCh0LmJ1bmRsZSkpO1xuICAgICAgfSk7XG4gICAgaWYgKDAgPT09IHIubGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0V2hpdGVsaXN0VGhlbWVzKCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhZS5oYXModC5uYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDAgPT09IGkubGVuZ3RoID8gbnVsbCA6IGlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogci5sZW5ndGgpXTtcbiAgfVxufSJdfQ==
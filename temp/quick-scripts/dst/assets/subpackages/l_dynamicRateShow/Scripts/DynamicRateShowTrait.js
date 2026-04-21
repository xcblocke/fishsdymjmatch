
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dynamicRateShow/Scripts/DynamicRateShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '905demcAFpNPrjANZljKlvl', 'DynamicRateShowTrait');
// subpackages/l_dynamicRateShow/Scripts/DynamicRateShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DynamicRateShowTrait = /** @class */ (function (_super) {
    __extends(DynamicRateShowTrait, _super);
    function DynamicRateShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._experimentType = 1;
        _this._rateThreshold = 86;
        _this._mCoefficient = 1.4388571428571428;
        return _this;
    }
    DynamicRateShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        void 0 !== e.experimentType && (this._experimentType = e.experimentType);
        void 0 !== e.rateThreshold && (this._rateThreshold = e.rateThreshold);
        void 0 !== e.mCoefficient && (this._mCoefficient = e.mCoefficient);
        this.localData.lastRate || (this.localData.lastRate = 0);
        void 0 === this.localData.lastFullCombo && (this.localData.lastFullCombo = false);
        this.localData.lastLevelId || (this.localData.lastLevelId = 0);
        this.registerEvent([{
                event: "Tile2WinVw_show",
                type: 2,
                priority: -10
            }]);
    };
    DynamicRateShowTrait.prototype.calculateRate = function (t, e) {
        if (e <= 0)
            return 0;
        var r = Math.min(10, e), a = 600 * e + 20 * r * r - 420 * r;
        if (a <= 0)
            return 0;
        var o = 100 * Math.sqrt(t / a);
        3 !== this._experimentType && 4 !== this._experimentType || (o *= this._mCoefficient);
        return Math.min(o, 99.99);
    };
    DynamicRateShowTrait.prototype.isCurrentFullCombo = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? UserModel_1.default.getInstance().getCurrentGameData().getHasTriggeredAllClear() : NormalGameData_1.default.getInstance().getHasTriggeredFullCombo();
    };
    DynamicRateShowTrait.prototype.getAdjustedRate = function (t, e) {
        return e ? t : this.localData.lastFullCombo ? 0.7 * t : 0.9 * t;
    };
    DynamicRateShowTrait.prototype.shouldShowRate = function (t, e) {
        if (e)
            return false;
        switch (this._experimentType) {
            case 1:
            case 3:
                return true;
            case 2:
            case 4:
                return t > this._rateThreshold;
            default:
                return true;
        }
    };
    DynamicRateShowTrait.prototype.calculateRateIncrease = function (t) {
        var e = this.localData.lastRate;
        return e <= 0 ? 0 : t / e - 1;
    };
    DynamicRateShowTrait.prototype.createRateRichText = function (t, e) {
        var r = t.toFixed(2) + "%";
        return e.replace("{0}", "<color=#00ff00>" + r + "</color>");
    };
    DynamicRateShowTrait.prototype.getOrCreateRichText = function (t) {
        var e = t._lblSubtitle;
        if (!e || !cc.isValid(e.node))
            return null;
        var r = e.node, a = r.parent;
        if (!a)
            return null;
        var o = a.getChildByName("rate_richtext");
        if (o) {
            o.active = true;
            return o.getComponent(cc.RichText);
        }
        var i = e.fontSize, n = e.lineHeight, c = e.font, l = r.color;
        (o = new cc.Node("rate_richtext")).setParent(a);
        o.setPosition(r.position);
        o.height = r.height;
        o.color = l;
        o.anchorX = r.anchorX;
        o.anchorY = r.anchorY;
        o.opacity = r.opacity;
        o.width = 1000;
        var s = o.addComponent(cc.RichText);
        s.fontSize = i;
        s.lineHeight = n;
        s.maxWidth = 1000;
        s.horizontalAlign = cc.macro.TextAlignment.CENTER;
        c && (s.font = c);
        return s;
    };
    DynamicRateShowTrait.prototype.syncAnimation = function (t, e, r) {
        if (t && e) {
            e.opacity = t.opacity;
            var a = r._animSpeedRate || 1, o = 1.53 * a, i = 0.2 * a;
            cc.tween(e).delay(o).to(i, {
                opacity: 255
            }, {
                easing: "linear"
            }).start();
        }
    };
    DynamicRateShowTrait.prototype.getRateRichText = function (t, e) {
        var r = I18NStrings_1.default.get("MahjongBlast_GameEnd_Word_1", "You beat {0} of players!");
        return this.createRateRichText(e, r);
    };
    DynamicRateShowTrait.prototype.onWinVw_showWinVw = function (t, e) {
        this.handleShowWinView(t.ins, t.args[0]);
        e();
    };
    DynamicRateShowTrait.prototype.onTile2WinVw_show = function (t, e) {
        this.handleShowWinView(t.ins, t.args[0]);
        e();
    };
    DynamicRateShowTrait.prototype.handleShowWinView = function (t, e) {
        if (cc.isValid(t))
            try {
                var r = UserModel_1.default.getInstance().getCurrentGameData(), a = r.getCurrentLevelId(), o = e.data.settlementScore || 0, i = r.getCurLevelComboMaxLimit() || 0, n = this.calculateRate(o, i), c = this.isCurrentFullCombo(), l = this.getAdjustedRate(n, c), u = this.shouldShowRate(l, c);
                1 === a && (u = false);
                var p = t._lblSubtitle;
                if (u) {
                    var h = this.getOrCreateRichText(t);
                    if (h) {
                        var f = this.calculateRateIncrease(l), d = this.getRateRichText(this._experimentType, l, f);
                        h.string = d;
                        this.syncAnimation(p.node, h.node, t);
                    }
                    p && cc.isValid(p.node) && (p.enabled = false);
                }
                else if (p && cc.isValid(p.node)) {
                    var y = p.node.parent;
                    if (y) {
                        var m = y.getChildByName("rate_richtext");
                        m && (m.active = false);
                    }
                    p.enabled = true;
                }
                this.localData.lastRate = l;
                this.localData.lastFullCombo = c;
                this.localData.lastLevelId = a;
            }
            catch (t) { }
    };
    DynamicRateShowTrait.traitKey = "DynamicRateShow";
    __decorate([
        mj.traitEvent("DynRateShow_shouldShow")
    ], DynamicRateShowTrait.prototype, "shouldShowRate", null);
    __decorate([
        mj.traitEvent("DynRateShow_getRateTxt")
    ], DynamicRateShowTrait.prototype, "getRateRichText", null);
    DynamicRateShowTrait = __decorate([
        mj.trait,
        mj.class("DynamicRateShowTrait")
    ], DynamicRateShowTrait);
    return DynamicRateShowTrait;
}(Trait_1.default));
exports.default = DynamicRateShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R5bmFtaWNSYXRlU2hvdy9TY3JpcHRzL0R5bmFtaWNSYXRlU2hvd1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0ZBQWlGO0FBQ2pGLDJFQUFzRTtBQUN0RSxzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBb0pDO1FBbkpDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG1CQUFhLEdBQUcsa0JBQWtCLENBQUM7O0lBaUpyQyxDQUFDO0lBL0lDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2xG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QyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDaEM7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2hCLENBQUM7SUEvSU0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQWdDcEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzhEQWF2QztJQXNERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7K0RBSXZDO0lBekdrQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBb0p4QztJQUFELDJCQUFDO0NBcEpELEFBb0pDLENBcEppRCxlQUFLLEdBb0p0RDtrQkFwSm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRHluYW1pY1JhdGVTaG93VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNSYXRlU2hvd1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZXhwZXJpbWVudFR5cGUgPSAxO1xuICBfcmF0ZVRocmVzaG9sZCA9IDg2O1xuICBfbUNvZWZmaWNpZW50ID0gMS40Mzg4NTcxNDI4NTcxNDI4O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkR5bmFtaWNSYXRlU2hvd1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGUgPSB0aGlzLl90cmFpdERhdGE7XG4gICAgdm9pZCAwICE9PSBlLmV4cGVyaW1lbnRUeXBlICYmICh0aGlzLl9leHBlcmltZW50VHlwZSA9IGUuZXhwZXJpbWVudFR5cGUpO1xuICAgIHZvaWQgMCAhPT0gZS5yYXRlVGhyZXNob2xkICYmICh0aGlzLl9yYXRlVGhyZXNob2xkID0gZS5yYXRlVGhyZXNob2xkKTtcbiAgICB2b2lkIDAgIT09IGUubUNvZWZmaWNpZW50ICYmICh0aGlzLl9tQ29lZmZpY2llbnQgPSBlLm1Db2VmZmljaWVudCk7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFJhdGUgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RSYXRlID0gMCk7XG4gICAgdm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5sYXN0RnVsbENvbWJvICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0RnVsbENvbWJvID0gZmFsc2UpO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMZXZlbElkIHx8ICh0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWxJZCA9IDApO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiVGlsZTJXaW5Wd19zaG93XCIsXG4gICAgICB0eXBlOiAyLFxuICAgICAgcHJpb3JpdHk6IC0xMFxuICAgIH1dKTtcbiAgfVxuICBjYWxjdWxhdGVSYXRlKHQsIGUpIHtcbiAgICBpZiAoZSA8PSAwKSByZXR1cm4gMDtcbiAgICB2YXIgciA9IE1hdGgubWluKDEwLCBlKSxcbiAgICAgIGEgPSA2MDAgKiBlICsgMjAgKiByICogciAtIDQyMCAqIHI7XG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuIDA7XG4gICAgdmFyIG8gPSAxMDAgKiBNYXRoLnNxcnQodCAvIGEpO1xuICAgIDMgIT09IHRoaXMuX2V4cGVyaW1lbnRUeXBlICYmIDQgIT09IHRoaXMuX2V4cGVyaW1lbnRUeXBlIHx8IChvICo9IHRoaXMuX21Db2VmZmljaWVudCk7XG4gICAgcmV0dXJuIE1hdGgubWluKG8sIDk5Ljk5KTtcbiAgfVxuICBpc0N1cnJlbnRGdWxsQ29tYm8oKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkuZ2V0SGFzVHJpZ2dlcmVkQWxsQ2xlYXIoKSA6IE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCk7XG4gIH1cbiAgZ2V0QWRqdXN0ZWRSYXRlKHQsIGUpIHtcbiAgICByZXR1cm4gZSA/IHQgOiB0aGlzLmxvY2FsRGF0YS5sYXN0RnVsbENvbWJvID8gMC43ICogdCA6IDAuOSAqIHQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEeW5SYXRlU2hvd19zaG91bGRTaG93XCIpXG4gIHNob3VsZFNob3dSYXRlKHQsIGUpIHtcbiAgICBpZiAoZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAodGhpcy5fZXhwZXJpbWVudFR5cGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiB0ID4gdGhpcy5fcmF0ZVRocmVzaG9sZDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBjYWxjdWxhdGVSYXRlSW5jcmVhc2UodCkge1xuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEubGFzdFJhdGU7XG4gICAgcmV0dXJuIGUgPD0gMCA/IDAgOiB0IC8gZSAtIDE7XG4gIH1cbiAgY3JlYXRlUmF0ZVJpY2hUZXh0KHQsIGUpIHtcbiAgICB2YXIgciA9IHQudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgIHJldHVybiBlLnJlcGxhY2UoXCJ7MH1cIiwgXCI8Y29sb3I9IzAwZmYwMD5cIiArIHIgKyBcIjwvY29sb3I+XCIpO1xuICB9XG4gIGdldE9yQ3JlYXRlUmljaFRleHQodCkge1xuICAgIHZhciBlID0gdC5fbGJsU3VidGl0bGU7XG4gICAgaWYgKCFlIHx8ICFjYy5pc1ZhbGlkKGUubm9kZSkpIHJldHVybiBudWxsO1xuICAgIHZhciByID0gZS5ub2RlLFxuICAgICAgYSA9IHIucGFyZW50O1xuICAgIGlmICghYSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSBhLmdldENoaWxkQnlOYW1lKFwicmF0ZV9yaWNodGV4dFwiKTtcbiAgICBpZiAobykge1xuICAgICAgby5hY3RpdmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG8uZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICB9XG4gICAgdmFyIGkgPSBlLmZvbnRTaXplLFxuICAgICAgbiA9IGUubGluZUhlaWdodCxcbiAgICAgIGMgPSBlLmZvbnQsXG4gICAgICBsID0gci5jb2xvcjtcbiAgICAobyA9IG5ldyBjYy5Ob2RlKFwicmF0ZV9yaWNodGV4dFwiKSkuc2V0UGFyZW50KGEpO1xuICAgIG8uc2V0UG9zaXRpb24oci5wb3NpdGlvbik7XG4gICAgby5oZWlnaHQgPSByLmhlaWdodDtcbiAgICBvLmNvbG9yID0gbDtcbiAgICBvLmFuY2hvclggPSByLmFuY2hvclg7XG4gICAgby5hbmNob3JZID0gci5hbmNob3JZO1xuICAgIG8ub3BhY2l0eSA9IHIub3BhY2l0eTtcbiAgICBvLndpZHRoID0gMTAwMDtcbiAgICB2YXIgcyA9IG8uYWRkQ29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICBzLmZvbnRTaXplID0gaTtcbiAgICBzLmxpbmVIZWlnaHQgPSBuO1xuICAgIHMubWF4V2lkdGggPSAxMDAwO1xuICAgIHMuaG9yaXpvbnRhbEFsaWduID0gY2MubWFjcm8uVGV4dEFsaWdubWVudC5DRU5URVI7XG4gICAgYyAmJiAocy5mb250ID0gYyk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgc3luY0FuaW1hdGlvbih0LCBlLCByKSB7XG4gICAgaWYgKHQgJiYgZSkge1xuICAgICAgZS5vcGFjaXR5ID0gdC5vcGFjaXR5O1xuICAgICAgdmFyIGEgPSByLl9hbmltU3BlZWRSYXRlIHx8IDEsXG4gICAgICAgIG8gPSAxLjUzICogYSxcbiAgICAgICAgaSA9IDAuMiAqIGE7XG4gICAgICBjYy50d2VlbihlKS5kZWxheShvKS50byhpLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRHluUmF0ZVNob3dfZ2V0UmF0ZVR4dFwiKVxuICBnZXRSYXRlUmljaFRleHQodCwgZSkge1xuICAgIHZhciByID0gSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ0JsYXN0X0dhbWVFbmRfV29yZF8xXCIsIFwiWW91IGJlYXQgezB9IG9mIHBsYXllcnMhXCIpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhdGVSaWNoVGV4dChlLCByKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdGhpcy5oYW5kbGVTaG93V2luVmlldyh0LmlucywgdC5hcmdzWzBdKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMldpblZ3X3Nob3codCwgZSkge1xuICAgIHRoaXMuaGFuZGxlU2hvd1dpblZpZXcodC5pbnMsIHQuYXJnc1swXSk7XG4gICAgZSgpO1xuICB9XG4gIGhhbmRsZVNob3dXaW5WaWV3KHQsIGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkgdHJ5IHtcbiAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCksXG4gICAgICAgIGEgPSByLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgIG8gPSBlLmRhdGEuc2V0dGxlbWVudFNjb3JlIHx8IDAsXG4gICAgICAgIGkgPSByLmdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpIHx8IDAsXG4gICAgICAgIG4gPSB0aGlzLmNhbGN1bGF0ZVJhdGUobywgaSksXG4gICAgICAgIGMgPSB0aGlzLmlzQ3VycmVudEZ1bGxDb21ibygpLFxuICAgICAgICBsID0gdGhpcy5nZXRBZGp1c3RlZFJhdGUobiwgYyksXG4gICAgICAgIHUgPSB0aGlzLnNob3VsZFNob3dSYXRlKGwsIGMpO1xuICAgICAgMSA9PT0gYSAmJiAodSA9IGZhbHNlKTtcbiAgICAgIHZhciBwID0gdC5fbGJsU3VidGl0bGU7XG4gICAgICBpZiAodSkge1xuICAgICAgICB2YXIgaCA9IHRoaXMuZ2V0T3JDcmVhdGVSaWNoVGV4dCh0KTtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICB2YXIgZiA9IHRoaXMuY2FsY3VsYXRlUmF0ZUluY3JlYXNlKGwpLFxuICAgICAgICAgICAgZCA9IHRoaXMuZ2V0UmF0ZVJpY2hUZXh0KHRoaXMuX2V4cGVyaW1lbnRUeXBlLCBsLCBmKTtcbiAgICAgICAgICBoLnN0cmluZyA9IGQ7XG4gICAgICAgICAgdGhpcy5zeW5jQW5pbWF0aW9uKHAubm9kZSwgaC5ub2RlLCB0KTtcbiAgICAgICAgfVxuICAgICAgICBwICYmIGNjLmlzVmFsaWQocC5ub2RlKSAmJiAocC5lbmFibGVkID0gZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChwICYmIGNjLmlzVmFsaWQocC5ub2RlKSkge1xuICAgICAgICB2YXIgeSA9IHAubm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgdmFyIG0gPSB5LmdldENoaWxkQnlOYW1lKFwicmF0ZV9yaWNodGV4dFwiKTtcbiAgICAgICAgICBtICYmIChtLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBwLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFJhdGUgPSBsO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEZ1bGxDb21ibyA9IGM7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWxJZCA9IGE7XG4gICAgfSBjYXRjaCAodCkge31cbiAgfVxufSJdfQ==
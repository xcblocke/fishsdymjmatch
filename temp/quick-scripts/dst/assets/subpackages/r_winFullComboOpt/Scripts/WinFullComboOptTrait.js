
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winFullComboOpt/Scripts/WinFullComboOptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50e62wq8MpHFbaUW6gVxRqB', 'WinFullComboOptTrait');
// subpackages/r_winFullComboOpt/Scripts/WinFullComboOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinFullComboOptView_1 = require("./WinFullComboOptView");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var WinFullComboOptTrait = /** @class */ (function (_super) {
    __extends(WinFullComboOptTrait, _super);
    function WinFullComboOptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winFullComboOpt:prefabs/WinFullComboOptView"];
        return _this;
    }
    WinFullComboOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinFullComboOptTrait.prototype.showRainbowUI = function () {
        return GameUtils_1.default.isFullComboTriggered();
    };
    WinFullComboOptTrait.prototype.onWinVw_getDescAniDly = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_getDescAniDly = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onWinVw_getSubSize = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: cc.size(888, 192),
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_getSubSize = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: cc.size(888, 192),
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onWinCtrl_initRes = function (e, t) {
        var i = e.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    WinFullComboOptTrait.prototype.onTile2WinCtrl_initRes = function (e, t) {
        var i = e.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    WinFullComboOptTrait.prototype.onLevelBox_pbDelay = function (e, t) {
        this.showRainbowUI() && (e.args[0].delayTime += 0.33);
        t();
    };
    WinFullComboOptTrait.prototype.onLvBoxProg_barBoxEnter = function (e, t) {
        var i = e.ins;
        if (cc.isValid(null == i ? void 0 : i.node)) {
            var o = i.node.getChildByName("BarLayout"), r = i.node.getChildByName("BoxBtn");
            o.y = -310;
            r.y = -310;
        }
        t();
    };
    WinFullComboOptTrait.prototype.onBoxRwdUI_barBoxEnter = function (e, t) {
        var i = e.ins;
        if (cc.isValid(null == i ? void 0 : i.node)) {
            var o = i.node.getChildByName("BarLayout"), r = i.node.getChildByName("BoxBtn");
            if (o && r) {
                o.y = -310;
                r.y = -310;
            }
        }
        t();
    };
    WinFullComboOptTrait.prototype.onWinVw_showWinVw = function (e, t) {
        this._doShowUI(e.ins, e.args[0]);
        t();
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_show = function (e, t) {
        this._doShowUI(e.ins, e.args[0]);
        t();
    };
    WinFullComboOptTrait.prototype._doShowUI = function (e, t) {
        var i;
        if (cc.isValid(e)) {
            var o = e.getContentNode();
            if (cc.isValid(o)) {
                this.fixPos(o);
                if (this.showRainbowUI()) {
                    var r = o.getChildByName("WinFullComboOptView");
                    if (!cc.isValid(r)) {
                        r = e.createUISync(WinFullComboOptView_1.default);
                        cc.isValid(r) && o.addChild(r);
                    }
                    cc.isValid(r) && (null === (i = r.getComponent(WinFullComboOptView_1.default)) || void 0 === i || i.showFullComboUI(t, o));
                }
            }
        }
    };
    WinFullComboOptTrait.prototype.fixPos = function (e) {
        var t, i;
        try {
            for (var o = __values([["lbl_score", 0, 254], ["lbl_scoreDec", 0, 405], ["spr_bg_wellDone", 0, 634], ["lbl_title", 0, 629], ["spin_wellDone", 0, 254], ["btn_next", 0, -552], ["lbl_subtitle", 0, 34], ["rate_richtext", 0, 34]]), r = o.next(); !r.done; r = o.next()) {
                var n = __read(r.value, 3), a = n[0], _ = n[1], u = n[2], d = e.getChildByName(a);
                cc.isValid(d) && d.setPosition(_, u);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (i = o.return) && i.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    WinFullComboOptTrait.traitKey = "WinFullComboOpt";
    __decorate([
        mj.traitEvent("WinFullComboOpt_rainbow")
    ], WinFullComboOptTrait.prototype, "showRainbowUI", null);
    WinFullComboOptTrait = __decorate([
        mj.trait,
        mj.class("WinFullComboOptTrait")
    ], WinFullComboOptTrait);
    return WinFullComboOptTrait;
}(Trait_1.default));
exports.default = WinFullComboOptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbkZ1bGxDb21ib09wdC9TY3JpcHRzL1dpbkZ1bGxDb21ib09wdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsNkRBQXdEO0FBQ3hELDRFQUF1RTtBQUd2RTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQTBIQztRQXpIQyxnQkFBVSxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQzs7SUF5SGpFLENBQUM7SUF2SEMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDRSxPQUFPLG1CQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsb0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUIsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qs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QVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQXZITSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBS3BDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzs2REFHeEM7SUFUa0Isb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTBIeEM7SUFBRCwyQkFBQztDQTFIRCxBQTBIQyxDQTFIaUQsZUFBSyxHQTBIdEQ7a0JBMUhvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFdpbkZ1bGxDb21ib09wdFZpZXcgZnJvbSAnLi9XaW5GdWxsQ29tYm9PcHRWaWV3JztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpbkZ1bGxDb21ib09wdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5GdWxsQ29tYm9PcHRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgcmVxdWlyZVJlcyA9IFtcInJfd2luRnVsbENvbWJvT3B0OnByZWZhYnMvV2luRnVsbENvbWJvT3B0Vmlld1wiXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5GdWxsQ29tYm9PcHRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2luRnVsbENvbWJvT3B0X3JhaW5ib3dcIilcbiAgc2hvd1JhaW5ib3dVSSgpIHtcbiAgICByZXR1cm4gR2FtZVV0aWxzLmlzRnVsbENvbWJvVHJpZ2dlcmVkKCk7XG4gIH1cbiAgb25XaW5Wd19nZXREZXNjQW5pRGx5KGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogMC45LFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19nZXREZXNjQW5pRGx5KGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogMC45LFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uV2luVndfZ2V0U3ViU2l6ZShlLCB0KSB7XG4gICAgdCh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGNjLnNpemUoODg4LCAxOTIpLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19nZXRTdWJTaXplKGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogY2Muc2l6ZSg4ODgsIDE5MiksXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25XaW5DdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnM7XG4gICAgbnVsbCA9PSBpIHx8IGkuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCB0aGlzLnJlcXVpcmVSZXMpO1xuICAgIHQoKTtcbiAgfVxuICBvblRpbGUyV2luQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICB2YXIgaSA9IGUuaW5zO1xuICAgIG51bGwgPT0gaSB8fCBpLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgdGhpcy5yZXF1aXJlUmVzKTtcbiAgICB0KCk7XG4gIH1cbiAgb25MZXZlbEJveF9wYkRlbGF5KGUsIHQpIHtcbiAgICB0aGlzLnNob3dSYWluYm93VUkoKSAmJiAoZS5hcmdzWzBdLmRlbGF5VGltZSArPSAwLjMzKTtcbiAgICB0KCk7XG4gIH1cbiAgb25MdkJveFByb2dfYmFyQm94RW50ZXIoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnM7XG4gICAgaWYgKGNjLmlzVmFsaWQobnVsbCA9PSBpID8gdm9pZCAwIDogaS5ub2RlKSkge1xuICAgICAgdmFyIG8gPSBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYXJMYXlvdXRcIiksXG4gICAgICAgIHIgPSBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3hCdG5cIik7XG4gICAgICBvLnkgPSAtMzEwO1xuICAgICAgci55ID0gLTMxMDtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uQm94UndkVUlfYmFyQm94RW50ZXIoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnM7XG4gICAgaWYgKGNjLmlzVmFsaWQobnVsbCA9PSBpID8gdm9pZCAwIDogaS5ub2RlKSkge1xuICAgICAgdmFyIG8gPSBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYXJMYXlvdXRcIiksXG4gICAgICAgIHIgPSBpLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3hCdG5cIik7XG4gICAgICBpZiAobyAmJiByKSB7XG4gICAgICAgIG8ueSA9IC0zMTA7XG4gICAgICAgIHIueSA9IC0zMTA7XG4gICAgICB9XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdGhpcy5fZG9TaG93VUkoZS5pbnMsIGUuYXJnc1swXSk7XG4gICAgdCgpO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19zaG93KGUsIHQpIHtcbiAgICB0aGlzLl9kb1Nob3dVSShlLmlucywgZS5hcmdzWzBdKTtcbiAgICB0KCk7XG4gIH1cbiAgX2RvU2hvd1VJKGUsIHQpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIG8gPSBlLmdldENvbnRlbnROb2RlKCk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgICB0aGlzLmZpeFBvcyhvKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1JhaW5ib3dVSSgpKSB7XG4gICAgICAgICAgdmFyIHIgPSBvLmdldENoaWxkQnlOYW1lKFwiV2luRnVsbENvbWJvT3B0Vmlld1wiKTtcbiAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICAgIHIgPSBlLmNyZWF0ZVVJU3luYyhXaW5GdWxsQ29tYm9PcHRWaWV3KTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQocikgJiYgby5hZGRDaGlsZChyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2MuaXNWYWxpZChyKSAmJiAobnVsbCA9PT0gKGkgPSByLmdldENvbXBvbmVudChXaW5GdWxsQ29tYm9PcHRWaWV3KSkgfHwgdm9pZCAwID09PSBpIHx8IGkuc2hvd0Z1bGxDb21ib1VJKHQsIG8pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmaXhQb3MoZSkge1xuICAgIHZhciB0LCBpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXMoW1tcImxibF9zY29yZVwiLCAwLCAyNTRdLCBbXCJsYmxfc2NvcmVEZWNcIiwgMCwgNDA1XSwgW1wic3ByX2JnX3dlbGxEb25lXCIsIDAsIDYzNF0sIFtcImxibF90aXRsZVwiLCAwLCA2MjldLCBbXCJzcGluX3dlbGxEb25lXCIsIDAsIDI1NF0sIFtcImJ0bl9uZXh0XCIsIDAsIC01NTJdLCBbXCJsYmxfc3VidGl0bGVcIiwgMCwgMzRdLCBbXCJyYXRlX3JpY2h0ZXh0XCIsIDAsIDM0XV0pLCByID0gby5uZXh0KCk7ICFyLmRvbmU7IHIgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgbiA9IF9fcmVhZChyLnZhbHVlLCAzKSxcbiAgICAgICAgICBhID0gblswXSxcbiAgICAgICAgICBfID0gblsxXSxcbiAgICAgICAgICB1ID0gblsyXSxcbiAgICAgICAgICBkID0gZS5nZXRDaGlsZEJ5TmFtZShhKTtcbiAgICAgICAgY2MuaXNWYWxpZChkKSAmJiBkLnNldFBvc2l0aW9uKF8sIHUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKGkgPSBvLnJldHVybikgJiYgaS5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
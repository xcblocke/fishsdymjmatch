
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameTxtShow/Scripts/MainGameTxtShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dee1XyEKZDtKqz4aU4nnT5', 'MainGameTxtShowTrait');
// subpackages/l_mainGameTxtShow/Scripts/MainGameTxtShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MainGameTxtShowTrait = /** @class */ (function (_super) {
    __extends(MainGameTxtShowTrait, _super);
    function MainGameTxtShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preOpacitys = Object.create(null);
        _this.notHideNames = ["lblDate", "labelMatch", "levelDesc", "nodeScore"];
        return _this;
    }
    MainGameTxtShowTrait_1 = MainGameTxtShowTrait;
    MainGameTxtShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameTxtShowTrait.prototype.isSupportedGameType = function (e) {
        return e === GameTypeEnums_1.MjGameType.Normal || e === GameTypeEnums_1.MjGameType.DailyChallenge;
    };
    MainGameTxtShowTrait.prototype.setTopTextVisible = function (e, t, i) {
        var a, r;
        if (e)
            try {
                for (var l = __values(MainGameTxtShowTrait_1.TOP_NODE_NAMES), c = l.next(); !c.done; c = l.next()) {
                    var p = c.value, u = e.getChildByName(p);
                    u && this.setNodeOpacity(p, u, t, i);
                }
            }
            catch (e) {
                a = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (r = l.return) && r.call(l);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
    };
    MainGameTxtShowTrait.prototype.updateMatchHide = function (e) {
        if (cc.isValid(e)) {
            var t = true, o = mj.getClassByName("MainGameMatchNumTrait"), i = null == o ? void 0 : o.getInstance();
            true !== (null == i ? void 0 : i.eventEnabled) && (t = false);
            e.active = t;
            e.opacity = t ? 255 : 0;
        }
    };
    MainGameTxtShowTrait.prototype.isCanChangeActive = function () {
        return true;
    };
    MainGameTxtShowTrait.prototype.setNodeOpacity = function (e, t, o, i) {
        var a;
        if (this.isCanChangeActive(e, o, i)) {
            var r = null;
            "nodeScore" == e && (r = t.getChildByName("scoreItem"));
            if (i == GameTypeEnums_1.MjGameType.DailyChallenge && "levelDesc" == e || i == GameTypeEnums_1.MjGameType.Normal && "lblDate" == e)
                t.opacity = 0;
            else if (o) {
                t.opacity = null !== (a = this._preOpacitys[e]) && void 0 !== a ? a : 255;
                r && (r.opacity = 255);
                "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
            }
            else {
                void 0 === this._preOpacitys[e] && (this._preOpacitys[e] = t.opacity);
                if (-1 == this.notHideNames.indexOf(e))
                    t.opacity = 0;
                else {
                    t.active = true;
                    "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
                }
                r && (r.opacity = 0);
            }
        }
    };
    MainGameTxtShowTrait.prototype.onMainGRTop_applyTSCfg = function (e, t) {
        var o, i, a, r, n, l = null === (o = e.args) || void 0 === o ? void 0 : o[0];
        if (this.isSupportedGameType(null == l ? void 0 : l.gameType)) {
            var u = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), s = null !== (n = null !== (a = null === (i = null == u ? void 0 : u.getCurrentLevelId) || void 0 === i ? void 0 : i.call(u)) && void 0 !== a ? a : null === (r = null == u ? void 0 : u.getLevelId) || void 0 === r ? void 0 : r.call(u)) && void 0 !== n ? n : null;
            if ("number" != typeof s || s <= 1)
                t();
            else {
                var d = (null == l ? void 0 : l.topRootNode) || null;
                this.setTopTextVisible(d, false, null == l ? void 0 : l.gameType);
                t();
            }
        }
        else
            t();
    };
    MainGameTxtShowTrait.prototype.onEnterAniBhv_startPlay = function (e, t) {
        var o, i = e.ins, a = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
        if (this.isSupportedGameType(null == a ? void 0 : a.gameType)) {
            var r = null == a ? void 0 : a.gameUI, n = null == r ? void 0 : r.node;
            if (n) {
                var l = n.getChildByName("nodeTop");
                l && this.setTopTextVisible(l, true, null == a ? void 0 : a.gameType);
            }
            t();
        }
        else
            t();
    };
    var MainGameTxtShowTrait_1;
    MainGameTxtShowTrait.traitKey = "MainGameTxtShow";
    MainGameTxtShowTrait.TOP_NODE_NAMES = ["levelDesc", "labelMatch", "lblDate", "labelLevel", "labelCanMatchNum", "nodeScore"];
    __decorate([
        mj.traitEvent("MGTxtShow_updateMatchHide")
    ], MainGameTxtShowTrait.prototype, "updateMatchHide", null);
    __decorate([
        mj.traitEvent("MGTxtShow_canChgActive")
    ], MainGameTxtShowTrait.prototype, "isCanChangeActive", null);
    __decorate([
        mj.traitEvent("MGTxtShow_setNodeOpacity")
    ], MainGameTxtShowTrait.prototype, "setNodeOpacity", null);
    MainGameTxtShowTrait = MainGameTxtShowTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameTxtShowTrait")
    ], MainGameTxtShowTrait);
    return MainGameTxtShowTrait;
}(Trait_1.default));
exports.default = MainGameTxtShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lVHh0U2hvdy9TY3JpcHRzL01haW5HYW1lVHh0U2hvd1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQWlHQztRQWhHQyxrQkFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsa0JBQVksR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztJQStGckUsQ0FBQzs2QkFqR29CLG9CQUFvQjtJQUt2QyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsY0FBYyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxnREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQztZQUFFLElBQUk7Z0JBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsc0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDL0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIs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QUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDOytEQVUxQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpRUFHdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7OERBbUJ6QztJQWpFa0Isb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWlHeEM7SUFBRCwyQkFBQztDQWpHRCxBQWlHQyxDQWpHaUQsZUFBSyxHQWlHdEQ7a0JBakdvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZVR4dFNob3dUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWVUeHRTaG93VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9wcmVPcGFjaXR5cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIG5vdEhpZGVOYW1lcyA9IFtcImxibERhdGVcIiwgXCJsYWJlbE1hdGNoXCIsIFwibGV2ZWxEZXNjXCIsIFwibm9kZVNjb3JlXCJdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1haW5HYW1lVHh0U2hvd1wiO1xuICBzdGF0aWMgVE9QX05PREVfTkFNRVMgPSBbXCJsZXZlbERlc2NcIiwgXCJsYWJlbE1hdGNoXCIsIFwibGJsRGF0ZVwiLCBcImxhYmVsTGV2ZWxcIiwgXCJsYWJlbENhbk1hdGNoTnVtXCIsIFwibm9kZVNjb3JlXCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNTdXBwb3J0ZWRHYW1lVHlwZShlKSB7XG4gICAgcmV0dXJuIGUgPT09IE1qR2FtZVR5cGUuTm9ybWFsIHx8IGUgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U7XG4gIH1cbiAgc2V0VG9wVGV4dFZpc2libGUoZSwgdCwgaSkge1xuICAgIHZhciBhLCByO1xuICAgIGlmIChlKSB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKE1haW5HYW1lVHh0U2hvd1RyYWl0LlRPUF9OT0RFX05BTUVTKSwgYyA9IGwubmV4dCgpOyAhYy5kb25lOyBjID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBjLnZhbHVlLFxuICAgICAgICAgIHUgPSBlLmdldENoaWxkQnlOYW1lKHApO1xuICAgICAgICB1ICYmIHRoaXMuc2V0Tm9kZU9wYWNpdHkocCwgdSwgdCwgaSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAociA9IGwucmV0dXJuKSAmJiByLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNR1R4dFNob3dfdXBkYXRlTWF0Y2hIaWRlXCIpXG4gIHVwZGF0ZU1hdGNoSGlkZShlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciB0ID0gdHJ1ZSxcbiAgICAgICAgbyA9IG1qLmdldENsYXNzQnlOYW1lKFwiTWFpbkdhbWVNYXRjaE51bVRyYWl0XCIpLFxuICAgICAgICBpID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRJbnN0YW5jZSgpO1xuICAgICAgdHJ1ZSAhPT0gKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZXZlbnRFbmFibGVkKSAmJiAodCA9IGZhbHNlKTtcbiAgICAgIGUuYWN0aXZlID0gdDtcbiAgICAgIGUub3BhY2l0eSA9IHQgPyAyNTUgOiAwO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1HVHh0U2hvd19jYW5DaGdBY3RpdmVcIilcbiAgaXNDYW5DaGFuZ2VBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNR1R4dFNob3dfc2V0Tm9kZU9wYWNpdHlcIilcbiAgc2V0Tm9kZU9wYWNpdHkoZSwgdCwgbywgaSkge1xuICAgIHZhciBhO1xuICAgIGlmICh0aGlzLmlzQ2FuQ2hhbmdlQWN0aXZlKGUsIG8sIGkpKSB7XG4gICAgICB2YXIgciA9IG51bGw7XG4gICAgICBcIm5vZGVTY29yZVwiID09IGUgJiYgKHIgPSB0LmdldENoaWxkQnlOYW1lKFwic2NvcmVJdGVtXCIpKTtcbiAgICAgIGlmIChpID09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UgJiYgXCJsZXZlbERlc2NcIiA9PSBlIHx8IGkgPT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgXCJsYmxEYXRlXCIgPT0gZSkgdC5vcGFjaXR5ID0gMDtlbHNlIGlmIChvKSB7XG4gICAgICAgIHQub3BhY2l0eSA9IG51bGwgIT09IChhID0gdGhpcy5fcHJlT3BhY2l0eXNbZV0pICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAyNTU7XG4gICAgICAgIHIgJiYgKHIub3BhY2l0eSA9IDI1NSk7XG4gICAgICAgIFwibGFiZWxDYW5NYXRjaE51bVwiICE9PSBlICYmIFwibGFiZWxNYXRjaFwiICE9PSBlIHx8IHRoaXMudXBkYXRlTWF0Y2hIaWRlKHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm9pZCAwID09PSB0aGlzLl9wcmVPcGFjaXR5c1tlXSAmJiAodGhpcy5fcHJlT3BhY2l0eXNbZV0gPSB0Lm9wYWNpdHkpO1xuICAgICAgICBpZiAoLTEgPT0gdGhpcy5ub3RIaWRlTmFtZXMuaW5kZXhPZihlKSkgdC5vcGFjaXR5ID0gMDtlbHNlIHtcbiAgICAgICAgICB0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgXCJsYWJlbENhbk1hdGNoTnVtXCIgIT09IGUgJiYgXCJsYWJlbE1hdGNoXCIgIT09IGUgfHwgdGhpcy51cGRhdGVNYXRjaEhpZGUodCk7XG4gICAgICAgIH1cbiAgICAgICAgciAmJiAoci5vcGFjaXR5ID0gMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTWFpbkdSVG9wX2FwcGx5VFNDZmcoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICByLFxuICAgICAgbixcbiAgICAgIGwgPSBudWxsID09PSAobyA9IGUuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXTtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRlZEdhbWVUeXBlKG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuZ2FtZVR5cGUpKSB7XG4gICAgICB2YXIgdSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCksXG4gICAgICAgIHMgPSBudWxsICE9PSAobiA9IG51bGwgIT09IChhID0gbnVsbCA9PT0gKGkgPSBudWxsID09IHUgPyB2b2lkIDAgOiB1LmdldEN1cnJlbnRMZXZlbElkKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwodSkpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiBudWxsID09PSAociA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUuZ2V0TGV2ZWxJZCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYWxsKHUpKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogbnVsbDtcbiAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBzIHx8IHMgPD0gMSkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgZCA9IChudWxsID09IGwgPyB2b2lkIDAgOiBsLnRvcFJvb3ROb2RlKSB8fCBudWxsO1xuICAgICAgICB0aGlzLnNldFRvcFRleHRWaXNpYmxlKGQsIGZhbHNlLCBudWxsID09IGwgPyB2b2lkIDAgOiBsLmdhbWVUeXBlKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FbnRlckFuaUJodl9zdGFydFBsYXkoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgaSA9IGUuaW5zLFxuICAgICAgYSA9IG51bGwgPT09IChvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5jb250ZXh0KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdhbWVWaWV3O1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkR2FtZVR5cGUobnVsbCA9PSBhID8gdm9pZCAwIDogYS5nYW1lVHlwZSkpIHtcbiAgICAgIHZhciByID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nYW1lVUksXG4gICAgICAgIG4gPSBudWxsID09IHIgPyB2b2lkIDAgOiByLm5vZGU7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgbCA9IG4uZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpO1xuICAgICAgICBsICYmIHRoaXMuc2V0VG9wVGV4dFZpc2libGUobCwgdHJ1ZSwgbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nYW1lVHlwZSk7XG4gICAgICB9XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classic/Scripts/ClassicTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71e20El5hlIKKULZUnYNxsr', 'ClassicTrait');
// subpackages/l_classic/Scripts/ClassicTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallClassicBtn_1 = require("./HallClassicBtn");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var HallBtnTip_1 = require("./HallBtnTip");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HighestScoreItem_1 = require("./HighestScoreItem");
var ClassicGameData_1 = require("../../../Scripts/core/simulator/data/ClassicGameData");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var ClassicTrait = /** @class */ (function (_super) {
    __extends(ClassicTrait, _super);
    function ClassicTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._classicBtn = null;
        _this._highestScoreItem = null;
        _this._stageRightItem = null;
        _this._lastBatchId = -1;
        _this._isClassicMode = false;
        return _this;
    }
    ClassicTrait_1 = ClassicTrait;
    ClassicTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "UpdComboBhv_getPos"
            }, {
                event: "GameUI_onLoad",
                priority: 999,
                type: 2
            }, {
                event: "ScoreItem_updScore"
            }, {
                event: "HallCtl_initRes"
            }, {
                event: "ValHallBtn_setLabCol"
            }, {
                event: "HTravelBtnRP_getDotPos"
            }]);
    };
    ClassicTrait.prototype.onHTravelBtnRP_getDotPos = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: cc.v2(55, 78)
        });
    };
    ClassicTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ["l_classic:prefabs/HallTravelLeftBtn"]);
        this.bandConflictTrait("TravelBtnYogaCardTrait");
    };
    ClassicTrait.prototype.bandConflictTrait = function (t) {
        var e, n = mj.getClassByName(t);
        n && (null === (e = n.getInstance()) || void 0 === e ? void 0 : e.eventEnabled) && (n.getInstance().eventEnabled = false);
    };
    ClassicTrait.prototype.onValHallBtn_setLabCol = function (t, e) {
        var n, i, o = t.args[0];
        if (cc.isValid(o)) {
            var r = null === (i = null === (n = null == o ? void 0 : o.parent) || void 0 === n ? void 0 : n.parent) || void 0 === i ? void 0 : i.name;
            if (!["HallClassicBtn", "HallNormalBtn"].includes(r)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: false
                });
                return;
            }
        }
        e();
    };
    ClassicTrait.prototype.onHallVw_updateUI = function (t, e) {
        var n;
        this.addEnterHallCount();
        this.createHallButton(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
        e();
    };
    ClassicTrait.prototype.onJourney_doCreateBtn = function (t, e) {
        t.args[3] = "prefabs/HallTravelLeftBtn";
        t.args[4] = "l_classic";
        e();
    };
    ClassicTrait.prototype.onTravelBtn_changeLock = function (t, e) {
        var n = t.ins;
        n.lockNode.active = true;
        n.titleNode.active = false;
        GameUtils_1.default.playSpine(n.lockAnim, "in", false, function () {
            n.lockAnim.setAnimation(0, "init", false);
        });
        n.lockDesc.string = "Lv." + n.unlockLevel;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    ClassicTrait.prototype.createHallButton = function (t) {
        var e, i = this;
        if ((null === (e = this._classicBtn) || void 0 === e ? void 0 : e.parent) && cc.isValid(this._classicBtn)) {
            this.updateBtnShow();
        }
        else {
            cc.isValid(t) && HallClassicBtn_1.default.createUI().then(function (e) {
                i._classicBtn = e;
                cc.isValid(e) && cc.isValid(t) && t.addChild(e);
                i.updateBtnShow();
            }).catch(function (t) {
                console.error("[" + ClassicTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallClassicBtn按钮加载失败"));
            });
        }
    };
    ClassicTrait.prototype.updateBtnShow = function () {
        if (cc.isValid(this._classicBtn)) {
            var t = this._classicBtn.getComponent(HallClassicBtn_1.default);
            t && t.updateUI();
        }
    };
    ClassicTrait.prototype.onClassicBtn_updateUI = function (t, e) {
        if (this.getEnterHallCount() > 1) {
            this.hideTipAnim(t.ins);
        }
        else {
            this.playTipAnim(t.ins, HallBtnTip_1.ETipAnimType.NewModel);
        }
        e();
    };
    ClassicTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        if (this.getEnterHallCount() > 1) {
            this.hideTipAnim(t.ins);
        }
        else {
            this.playTipAnim(t.ins, HallBtnTip_1.ETipAnimType.Continue);
        }
        e();
    };
    ClassicTrait.prototype.playTipAnim = function (t, e) {
        if (cc.isValid(t) && cc.isValid(t.node) && !t._tipNode_) {
            var i = t.node, o = t.node.parent;
            HallBtnTip_1.default.createUI().then(function (n) {
                if (cc.isValid(t) && cc.isValid(i)) {
                    var r = i.convertToWorldSpaceAR(cc.v2(300, 60)), a = o.convertToNodeSpaceAR(r);
                    n.setPosition(a.x, a.y);
                    o.addChild(n, 10);
                    n.getComponent(HallBtnTip_1.default).playTipAnim(e);
                    t._tipNode_ = n;
                }
            }).catch(function (t) {
                console.error("[" + ClassicTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallClassicBtn按钮加载失败"));
            });
        }
    };
    ClassicTrait.prototype.hideTipAnim = function (t) {
        if (cc.isValid(t)) {
            var e = t._tipNode_;
            if (cc.isValid(e)) {
                e.destroy();
                t._tipNode_ = null;
            }
        }
    };
    ClassicTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    ClassicTrait.prototype.addEnterHallCount = function () {
        this.isLocalEmpty(this.localData.enterHallCount) && (this.localData.enterHallCount = 0);
        this.localData.enterHallCount++;
    };
    ClassicTrait.prototype.getEnterHallCount = function () {
        return this.isLocalEmpty(this.localData.enterHallCount) ? 0 : this.localData.enterHallCount;
    };
    ClassicTrait.prototype.isClassicMode = function () {
        return this._isClassicMode;
    };
    ClassicTrait.prototype.onGameUI_onLoad = function (t, e) {
        var n;
        this._isClassicMode = UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
        if (this._isClassicMode) {
            this.createHighestScoreItem(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    ClassicTrait.prototype.createHighestScoreItem = function (t) {
        if (cc.isValid(t)) {
            if (cc.isValid(this._highestScoreItem)) {
                this._highestScoreItem.destroy();
                this._highestScoreItem = null;
            }
            var e = ResManager_1.resManager.getBundle("l_classic");
            if (e) {
                var n = e.get(HighestScoreItem_1.default.getUrl(), cc.Prefab);
                if (cc.isValid(n)) {
                    var i = HighestScoreItem_1.default.createUISync(n);
                    if (cc.isValid(i)) {
                        this._highestScoreItem = i;
                        var o = t.getChildByName("nodeTop");
                        if (cc.isValid(o)) {
                            o.addChild(i);
                            i.x = 98 - o.width * o.anchorX;
                            i.y = o.height * (1 - o.anchorY) - 89;
                        }
                        var r = i.getComponent(HighestScoreItem_1.default);
                        if (cc.isValid(r)) {
                            var a = ClassicGameData_1.default.getInstance().getMaxScore();
                            r.updateScore(a);
                        }
                    }
                }
            }
        }
    };
    ClassicTrait.prototype.onScoreItem_updScore = function (t, e) {
        if (this.isClassicMode()) {
            this.updateHighestScore();
            e();
        }
        else
            e();
    };
    ClassicTrait.prototype.updateHighestScore = function () {
        if (cc.isValid(this._highestScoreItem)) {
            var t = this._highestScoreItem.getComponent(HighestScoreItem_1.default);
            if (cc.isValid(t)) {
                var e = ClassicGameData_1.default.getInstance(), n = e.getScore(), i = e.getMaxScore();
                t.checkAndUpdate(n, i);
            }
        }
    };
    ClassicTrait.prototype.onUpdComboBhv_getPos = function (t, e) {
        if (this.isClassicMode()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: cc.v3(t.args[0].x - 56, t.args[0].y - 240, 0)
            });
        }
        else {
            e();
        }
    };
    var ClassicTrait_1;
    ClassicTrait.traitKey = "Classic";
    ClassicTrait = ClassicTrait_1 = __decorate([
        mj.trait,
        mj.class("ClassicTrait")
    ], ClassicTrait);
    return ClassicTrait;
}(Trait_1.default));
exports.default = ClassicTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWMvU2NyaXB0cy9DbGFzc2ljVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSxnRUFBMkQ7QUFDM0QsbURBQThDO0FBQzlDLDhFQUF3RjtBQUN4RiwyQ0FBd0Q7QUFDeEQsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSx1REFBa0Q7QUFDbEQsd0ZBQW1GO0FBQ25GLDRFQUEyRTtBQUczRTtJQUEwQyxnQ0FBSztJQUEvQztRQUFBLHFFQWdPQztRQS9OQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUEyTnpCLENBQUM7cUJBaE9vQixZQUFZO0lBTy9CLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLG9CQUFvQjthQUM1QixFQUFFO2dCQUNELEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUUsR0FBRztnQkFDYixJQUFJLEVBQUUsQ0FBQzthQUNSLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLG9CQUFvQjthQUM1QixFQUFFO2dCQUNELEtBQUssRUFBRSxpQkFBaUI7YUFDekIsRUFBRTtnQkFDRCxLQUFLLEVBQUUsc0JBQXNCO2FBQzlCLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLHdCQUF3QjthQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCwrQ0FBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFD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T0MsQ0FoT3lDLGVBQUssR0FnTzlDO2tCQWhPb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEhhbGxDbGFzc2ljQnRuIGZyb20gJy4vSGFsbENsYXNzaWNCdG4nO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEhhbGxCdG5UaXAsIHsgRVRpcEFuaW1UeXBlIH0gZnJvbSAnLi9IYWxsQnRuVGlwJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBIaWdoZXN0U2NvcmVJdGVtIGZyb20gJy4vSGlnaGVzdFNjb3JlSXRlbSc7XG5pbXBvcnQgQ2xhc3NpY0dhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9DbGFzc2ljR2FtZURhdGEnO1xuaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNsYXNzaWNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY2xhc3NpY0J0biA9IG51bGw7XG4gIF9oaWdoZXN0U2NvcmVJdGVtID0gbnVsbDtcbiAgX3N0YWdlUmlnaHRJdGVtID0gbnVsbDtcbiAgX2xhc3RCYXRjaElkID0gLTE7XG4gIF9pc0NsYXNzaWNNb2RlID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xhc3NpY1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJVcGRDb21ib0Jodl9nZXRQb3NcIlxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIkdhbWVVSV9vbkxvYWRcIixcbiAgICAgIHByaW9yaXR5OiA5OTksXG4gICAgICB0eXBlOiAyXG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiU2NvcmVJdGVtX3VwZFNjb3JlXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJIYWxsQ3RsX2luaXRSZXNcIlxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIlZhbEhhbGxCdG5fc2V0TGFiQ29sXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJIVHJhdmVsQnRuUlBfZ2V0RG90UG9zXCJcbiAgICB9XSk7XG4gIH1cbiAgb25IVHJhdmVsQnRuUlBfZ2V0RG90UG9zKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogY2MudjIoNTUsIDc4KVxuICAgIH0pO1xuICB9XG4gIG9uSGFsbEN0bF9pbml0UmVzKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdC5pbnMuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBbXCJsX2NsYXNzaWM6cHJlZmFicy9IYWxsVHJhdmVsTGVmdEJ0blwiXSk7XG4gICAgdGhpcy5iYW5kQ29uZmxpY3RUcmFpdChcIlRyYXZlbEJ0bllvZ2FDYXJkVHJhaXRcIik7XG4gIH1cbiAgYmFuZENvbmZsaWN0VHJhaXQodCkge1xuICAgIHZhciBlLFxuICAgICAgbiA9IG1qLmdldENsYXNzQnlOYW1lKHQpO1xuICAgIG4gJiYgKG51bGwgPT09IChlID0gbi5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmV2ZW50RW5hYmxlZCkgJiYgKG4uZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgPSBmYWxzZSk7XG4gIH1cbiAgb25WYWxIYWxsQnRuX3NldExhYkNvbCh0LCBlKSB7XG4gICAgdmFyIG4sXG4gICAgICBpLFxuICAgICAgbyA9IHQuYXJnc1swXTtcbiAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgdmFyIHIgPSBudWxsID09PSAoaSA9IG51bGwgPT09IChuID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5wYXJlbnQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ucGFyZW50KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLm5hbWU7XG4gICAgICBpZiAoIVtcIkhhbGxDbGFzc2ljQnRuXCIsIFwiSGFsbE5vcm1hbEJ0blwiXS5pbmNsdWRlcyhyKSkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB2YXIgbjtcbiAgICB0aGlzLmFkZEVudGVySGFsbENvdW50KCk7XG4gICAgdGhpcy5jcmVhdGVIYWxsQnV0dG9uKG51bGwgPT09IChuID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubm9kZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uSm91cm5leV9kb0NyZWF0ZUJ0bih0LCBlKSB7XG4gICAgdC5hcmdzWzNdID0gXCJwcmVmYWJzL0hhbGxUcmF2ZWxMZWZ0QnRuXCI7XG4gICAgdC5hcmdzWzRdID0gXCJsX2NsYXNzaWNcIjtcbiAgICBlKCk7XG4gIH1cbiAgb25UcmF2ZWxCdG5fY2hhbmdlTG9jayh0LCBlKSB7XG4gICAgdmFyIG4gPSB0LmlucztcbiAgICBuLmxvY2tOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgbi50aXRsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZShuLmxvY2tBbmltLCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBuLmxvY2tBbmltLnNldEFuaW1hdGlvbigwLCBcImluaXRcIiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIG4ubG9ja0Rlc2Muc3RyaW5nID0gXCJMdi5cIiArIG4udW5sb2NrTGV2ZWw7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlSGFsbEJ1dHRvbih0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpID0gdGhpcztcbiAgICBpZiAoKG51bGwgPT09IChlID0gdGhpcy5fY2xhc3NpY0J0bikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wYXJlbnQpICYmIGNjLmlzVmFsaWQodGhpcy5fY2xhc3NpY0J0bikpIHtcbiAgICAgIHRoaXMudXBkYXRlQnRuU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYy5pc1ZhbGlkKHQpICYmIEhhbGxDbGFzc2ljQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpLl9jbGFzc2ljQnRuID0gZTtcbiAgICAgICAgY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpICYmIHQuYWRkQ2hpbGQoZSk7XG4gICAgICAgIGkudXBkYXRlQnRuU2hvdygpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENsYXNzaWNUcmFpdC50cmFpdEtleSArIFwiXSDliJvlu7rmjInpkq7lpLHotKU6XCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgXCJIYWxsQ2xhc3NpY0J0buaMiemSruWKoOi9veWksei0pVwiKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQnRuU2hvdygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9jbGFzc2ljQnRuKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9jbGFzc2ljQnRuLmdldENvbXBvbmVudChIYWxsQ2xhc3NpY0J0bik7XG4gICAgICB0ICYmIHQudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGFzc2ljQnRuX3VwZGF0ZVVJKHQsIGUpIHtcbiAgICBpZiAodGhpcy5nZXRFbnRlckhhbGxDb3VudCgpID4gMSkge1xuICAgICAgdGhpcy5oaWRlVGlwQW5pbSh0Lmlucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheVRpcEFuaW0odC5pbnMsIEVUaXBBbmltVHlwZS5OZXdNb2RlbCk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxObWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIGlmICh0aGlzLmdldEVudGVySGFsbENvdW50KCkgPiAxKSB7XG4gICAgICB0aGlzLmhpZGVUaXBBbmltKHQuaW5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5VGlwQW5pbSh0LmlucywgRVRpcEFuaW1UeXBlLkNvbnRpbnVlKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIHBsYXlUaXBBbmltKHQsIGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSAmJiBjYy5pc1ZhbGlkKHQubm9kZSkgJiYgIXQuX3RpcE5vZGVfKSB7XG4gICAgICB2YXIgaSA9IHQubm9kZSxcbiAgICAgICAgbyA9IHQubm9kZS5wYXJlbnQ7XG4gICAgICBIYWxsQnRuVGlwLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSAmJiBjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgICAgdmFyIHIgPSBpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigzMDAsIDYwKSksXG4gICAgICAgICAgICBhID0gby5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgICBuLnNldFBvc2l0aW9uKGEueCwgYS55KTtcbiAgICAgICAgICBvLmFkZENoaWxkKG4sIDEwKTtcbiAgICAgICAgICBuLmdldENvbXBvbmVudChIYWxsQnRuVGlwKS5wbGF5VGlwQW5pbShlKTtcbiAgICAgICAgICB0Ll90aXBOb2RlXyA9IG47XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDbGFzc2ljVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yib5bu65oyJ6ZKu5aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwiSGFsbENsYXNzaWNCdG7mjInpkq7liqDovb3lpLHotKVcIikpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhpZGVUaXBBbmltKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSB0Ll90aXBOb2RlXztcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICB0Ll90aXBOb2RlXyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlzTG9jYWxFbXB0eSh0KSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdCB8fCBcIlwiID09PSB0O1xuICB9XG4gIGFkZEVudGVySGFsbENvdW50KCkge1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmVudGVySGFsbENvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuZW50ZXJIYWxsQ291bnQgPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5lbnRlckhhbGxDb3VudCsrO1xuICB9XG4gIGdldEVudGVySGFsbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5lbnRlckhhbGxDb3VudCkgPyAwIDogdGhpcy5sb2NhbERhdGEuZW50ZXJIYWxsQ291bnQ7XG4gIH1cbiAgaXNDbGFzc2ljTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDbGFzc2ljTW9kZTtcbiAgfVxuICBvbkdhbWVVSV9vbkxvYWQodCwgZSkge1xuICAgIHZhciBuO1xuICAgIHRoaXMuX2lzQ2xhc3NpY01vZGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljO1xuICAgIGlmICh0aGlzLl9pc0NsYXNzaWNNb2RlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhpZ2hlc3RTY29yZUl0ZW0obnVsbCA9PT0gKG4gPSB0LmlucykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNyZWF0ZUhpZ2hlc3RTY29yZUl0ZW0odCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9oaWdoZXN0U2NvcmVJdGVtKSkge1xuICAgICAgICB0aGlzLl9oaWdoZXN0U2NvcmVJdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5faGlnaGVzdFNjb3JlSXRlbSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IHJlc01hbmFnZXIuZ2V0QnVuZGxlKFwibF9jbGFzc2ljXCIpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIG4gPSBlLmdldChIaWdoZXN0U2NvcmVJdGVtLmdldFVybCgpLCBjYy5QcmVmYWIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgIHZhciBpID0gSGlnaGVzdFNjb3JlSXRlbS5jcmVhdGVVSVN5bmMobik7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hlc3RTY29yZUl0ZW0gPSBpO1xuICAgICAgICAgICAgdmFyIG8gPSB0LmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKTtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgICAgIG8uYWRkQ2hpbGQoaSk7XG4gICAgICAgICAgICAgIGkueCA9IDk4IC0gby53aWR0aCAqIG8uYW5jaG9yWDtcbiAgICAgICAgICAgICAgaS55ID0gby5oZWlnaHQgKiAoMSAtIG8uYW5jaG9yWSkgLSA4OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByID0gaS5nZXRDb21wb25lbnQoSGlnaGVzdFNjb3JlSXRlbSk7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChyKSkge1xuICAgICAgICAgICAgICB2YXIgYSA9IENsYXNzaWNHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldE1heFNjb3JlKCk7XG4gICAgICAgICAgICAgIHIudXBkYXRlU2NvcmUoYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uU2NvcmVJdGVtX3VwZFNjb3JlKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlSGlnaGVzdFNjb3JlKCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICB1cGRhdGVIaWdoZXN0U2NvcmUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5faGlnaGVzdFNjb3JlSXRlbSkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5faGlnaGVzdFNjb3JlSXRlbS5nZXRDb21wb25lbnQoSGlnaGVzdFNjb3JlSXRlbSk7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgZSA9IENsYXNzaWNHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLFxuICAgICAgICAgIG4gPSBlLmdldFNjb3JlKCksXG4gICAgICAgICAgaSA9IGUuZ2V0TWF4U2NvcmUoKTtcbiAgICAgICAgdC5jaGVja0FuZFVwZGF0ZShuLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25VcGRDb21ib0Jodl9nZXRQb3ModCwgZSkge1xuICAgIGlmICh0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBjYy52Myh0LmFyZ3NbMF0ueCAtIDU2LCB0LmFyZ3NbMF0ueSAtIDI0MCwgMClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
"use strict";
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
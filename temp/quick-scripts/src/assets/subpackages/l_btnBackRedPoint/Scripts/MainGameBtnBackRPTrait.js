"use strict";
cc._RF.push(module, '9d36fm+E5hCzIxvnqI+OVCo', 'MainGameBtnBackRPTrait');
// subpackages/l_btnBackRedPoint/Scripts/MainGameBtnBackRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MainGameBtnBackRPTrait = /** @class */ (function (_super) {
    __extends(MainGameBtnBackRPTrait, _super);
    function MainGameBtnBackRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._gameRedDotNode = null;
        _this._btnBackNode = null;
        return _this;
    }
    MainGameBtnBackRPTrait_1 = MainGameBtnBackRPTrait;
    MainGameBtnBackRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    MainGameBtnBackRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    MainGameBtnBackRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    MainGameBtnBackRPTrait.prototype.checkTaskRedDot = function () {
        var t, e, n, o;
        if (!(null !== (t = this._config.checkTask) && void 0 !== t ? t : MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.checkTask))
            return false;
        try {
            var i = mj.getClassByName("HallTaskBtnRPTrait");
            if (null == i ? void 0 : i.getInstance) {
                var r = i.getInstance();
                if (true === (null === (e = null == r ? void 0 : r.localData) || void 0 === e ? void 0 : e.clicked))
                    return false;
                var c = null === (o = null === (n = mj.getClassByName("TaskModel")) || void 0 === n ? void 0 : n.getInstance) || void 0 === o ? void 0 : o.call(n);
                if (null == c ? void 0 : c.isTaskOpen())
                    return true;
            }
        }
        catch (t) { }
        return false;
    };
    MainGameBtnBackRPTrait.prototype.checkRankRedDot = function () {
        var t, e;
        if (!(null !== (t = this._config.checkRank) && void 0 !== t ? t : MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.checkRank))
            return false;
        try {
            var n = mj.getClassByName("HallRankBtnRPTrait");
            if (null == n ? void 0 : n.getInstance) {
                var o = n.getInstance();
                if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked))
                    return false;
                var i = mj.getClassByName("HallRankBtnLockTrait");
                if (null == i ? void 0 : i.getInstance) {
                    var r = i.getInstance();
                    if (null == r ? void 0 : r.isRankOpen())
                        return true;
                }
            }
        }
        catch (t) { }
        return false;
    };
    MainGameBtnBackRPTrait.prototype.checkTravelRedDot = function () {
        var t, e;
        if (!(null !== (t = this._config.checkTravel) && void 0 !== t ? t : MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.checkTravel))
            return false;
        try {
            var n = mj.getClassByName("HallTravelBtnRPTrait");
            if (null == n ? void 0 : n.getInstance) {
                var o = n.getInstance();
                if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked))
                    return false;
                var i = mj.getClassByName("JourneyTrait");
                if (null == i ? void 0 : i.getInstance) {
                    var r = i.getInstance();
                    if ((null == r ? void 0 : r.isActiveJourney) && r.isActiveJourney())
                        return true;
                }
            }
        }
        catch (t) { }
        return false;
    };
    MainGameBtnBackRPTrait.prototype.checkDailyRedDot = function () {
        var t, e;
        if (!(null !== (t = this._config.checkDaily) && void 0 !== t ? t : MainGameBtnBackRPTrait_1.DEFAULT_CONFIG.checkDaily))
            return false;
        try {
            var n = mj.getClassByName("HallDailyBtnRPTrait");
            if (null == n ? void 0 : n.getInstance) {
                var o = n.getInstance();
                if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked))
                    return false;
                var i = mj.getClassByName("DailyLockTrait");
                if (null == i ? void 0 : i.getInstance) {
                    var r = i.getInstance();
                    if ((null == r ? void 0 : r.isOpenDaily) && r.isOpenDaily())
                        return true;
                }
            }
        }
        catch (t) { }
        return false;
    };
    MainGameBtnBackRPTrait.prototype.hasRedDot = function () {
        if (!this.isEnabled())
            return false;
        var t = this.checkTaskRedDot(), e = this.checkRankRedDot(), a = this.checkTravelRedDot(), n = this.checkDailyRedDot();
        return !!(t || e || a || n);
    };
    MainGameBtnBackRPTrait.prototype.showGameRedDot = function (t) {
        if (cc.isValid(t)) {
            this._gameRedDotNode = t.getChildByName("unlockRedDot_btnBack");
            if (cc.isValid(this._gameRedDotNode))
                this._gameRedDotNode.active = true;
            else {
                var e = this.getRedDotPath();
                this._gameRedDotNode = new cc.Node("unlockRedDot_btnBack");
                if (this._gameRedDotNode) {
                    this._gameRedDotNode.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
                    BaseSprite_1.default.refreshWithNode(this._gameRedDotNode, e, false, false, "mainRes");
                    this._gameRedDotNode.setPosition(37, 36);
                    t.addChild(this._gameRedDotNode);
                }
            }
        }
    };
    MainGameBtnBackRPTrait.prototype.hideGameRedDot = function () {
        this._gameRedDotNode && cc.isValid(this._gameRedDotNode) && (this._gameRedDotNode.active = false);
    };
    MainGameBtnBackRPTrait.prototype.onGameUI_onLoad = function (t, e) {
        var a;
        try {
            var n = t.ins, o = null === (a = null == n ? void 0 : n.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop");
            this._btnBackNode = null == o ? void 0 : o.getChildByName("btnBack");
            if (this.hasRedDot()) {
                this.showGameRedDot(this._btnBackNode);
            }
            else {
                this.hideGameRedDot();
            }
        }
        catch (t) {
            console.error("[MainGameBtnBackRPTrait] onGameUI_onLoad 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MainGameBtnBackRPTrait.prototype.onWinVw_showWinVw = function (t, e) {
        try {
            this.hasRedDot() && cc.isValid(this._btnBackNode) && this.showGameRedDot(this._btnBackNode);
        }
        catch (t) {
            console.error("[MainGameBtnBackRPTrait] onWinVw_showWinVw 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MainGameBtnBackRPTrait.prototype.onMainGameBtnBack_onClick = function (t, e) {
        this.hideGameRedDot();
        e();
    };
    var MainGameBtnBackRPTrait_1;
    MainGameBtnBackRPTrait.traitKey = "MainGameBtnBackRP";
    MainGameBtnBackRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian",
        checkTask: true,
        checkRank: true,
        checkTravel: true,
        checkDaily: true
    };
    __decorate([
        mj.traitEvent("MGBtnBackRP_chkTaskRD")
    ], MainGameBtnBackRPTrait.prototype, "checkTaskRedDot", null);
    __decorate([
        mj.traitEvent("MGBtnBackRP_chkRankRD")
    ], MainGameBtnBackRPTrait.prototype, "checkRankRedDot", null);
    __decorate([
        mj.traitEvent("MGBtnBackRP_chkTravelRD")
    ], MainGameBtnBackRPTrait.prototype, "checkTravelRedDot", null);
    __decorate([
        mj.traitEvent("MGBtnBackRP_chkDailyRD")
    ], MainGameBtnBackRPTrait.prototype, "checkDailyRedDot", null);
    __decorate([
        mj.traitEvent("MGBtnBackRP_hasRedDot")
    ], MainGameBtnBackRPTrait.prototype, "hasRedDot", null);
    MainGameBtnBackRPTrait = MainGameBtnBackRPTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameBtnBackRPTrait")
    ], MainGameBtnBackRPTrait);
    return MainGameBtnBackRPTrait;
}(Trait_1.default));
exports.default = MainGameBtnBackRPTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'b14ddmVeoVBDqaGrcMI/6eI', 'DailySignClassicTrait');
// subpackages/r_dailySignClassic/Scripts/view/DailySignClassicTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../../Scripts/framework/trait/TraitManager");
var DailySignClassicModel_1 = require("../model/DailySignClassicModel");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var HallSignBtn_1 = require("./HallSignBtn");
var GameEvent_1 = require("../../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var DailySignClassicTrait = /** @class */ (function (_super) {
    __extends(DailySignClassicTrait, _super);
    function DailySignClassicTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hallParentNode = null;
        _this._hallSignBtnInstance = null;
        _this._isSignButtonCreated = false;
        return _this;
    }
    DailySignClassicTrait_1 = DailySignClassicTrait;
    DailySignClassicTrait.prototype.onLoad = function () {
        var e, i, o, n;
        _super.prototype.onLoad.call(this);
        var a = DailySignClassicModel_1.default.getInstance(), s = (null === (e = this._traitData) || void 0 === e ? void 0 : e.rewards) || [];
        s.length > 0 && a.setWeeklyRewardsFromConfig(s);
        var r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.longTermRewards) || [];
        r.length > 0 && a.setLongTermRewardsFromConfig(r);
        var c = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockLevel;
        void 0 !== c && (a.getConfig().unlockLevel = c);
        var d = null === (n = this._traitData) || void 0 === n ? void 0 : n.maxLongTermDays;
        void 0 !== d && (a.getConfig().maxLongTermDays = d);
        mj.EventManager.on("DAILY_SIGN_VIEW_CLOSED", this.onSignViewClosed, this);
    };
    DailySignClassicTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        e();
        this.updateSettingRedDot();
    };
    DailySignClassicTrait.prototype.onHallVw_initBtns = function (t, e) {
        var i;
        this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
        this.canShowSignButton() && this.createHallButton(this._hallParentNode);
        e();
    };
    DailySignClassicTrait.prototype.onHallCtl_initRes = function (t, e) {
        t.ins.addPreloadRes("Prefab", "r_dailySignClassic:" + HallSignBtn_1.default.getUrl());
        e();
    };
    DailySignClassicTrait.prototype.onHallVw_updateUI = function (t, e) {
        var i, o = this.canShowSignButton();
        this._hallParentNode = null === (i = t.ins) || void 0 === i ? void 0 : i.node;
        o && !this._isSignButtonCreated && this._hallParentNode && this.createHallButton(this._hallParentNode);
        this._hallSignBtnInstance && this.updateHallButtonShow();
        this.updateSettingRedDot();
        e();
    };
    DailySignClassicTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.showSignPopView()
        });
    };
    DailySignClassicTrait.prototype.showSignPopView = function () {
        var t = DailySignClassicModel_1.default.getInstance();
        this.updateSettingRedDot();
        if (!t.isUnlocked())
            return false;
        if (t.checkTodaySigned())
            return false;
        if (t.hasAutoPopedToday())
            return false;
        t.markAutoPopedToday();
        t.markSignViewOpened();
        this.updateSettingRedDot();
        ControllerManager_1.default.getInstance().pushViewByController("DailySignClassicController");
        return true;
    };
    DailySignClassicTrait.prototype.canShowSignButton = function () {
        return true;
    };
    DailySignClassicTrait.prototype.createHallButton = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            this._isSignButtonCreated = true;
            HallSignBtn_1.default.createUI().then(function (i) {
                if (cc.isValid(i) && cc.isValid(t)) {
                    t.addChild(i);
                    e._hallSignBtnInstance = i.getComponent(HallSignBtn_1.default);
                    e.updateHallButtonShow();
                }
            }).catch(function (t) {
                e._isSignButtonCreated = false;
                console.error("[" + DailySignClassicTrait_1.traitKey + "] 游戏内创建签到按钮失败:" + ((null == t ? void 0 : t.message) || "HallSignBtn按钮加载失败"));
            });
        }
    };
    DailySignClassicTrait.prototype.updateHallButtonShow = function () {
        if (cc.isValid(this._hallSignBtnInstance)) {
            this._hallSignBtnInstance.updateLock();
            this.updateRedDot();
        }
    };
    DailySignClassicTrait.prototype.updateRedDot = function () {
        cc.isValid(this._hallSignBtnInstance) && this._hallSignBtnInstance.checkRedDot();
    };
    DailySignClassicTrait.prototype.getUnlockLevel = function () {
        return DailySignClassicModel_1.default.getInstance().getConfig().unlockLevel;
    };
    DailySignClassicTrait.prototype.onSignViewClosed = function () {
        this.updateRedDot();
        this.updateSettingRedDot();
    };
    DailySignClassicTrait.prototype.updateSettingRedDot = function () {
        var t = DailySignClassicModel_1.default.getInstance();
        if (t.isUnlocked() && !t.hasOpenedSignView()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.DailySignClassic);
        }
        else {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.DailySignClassic);
        }
    };
    DailySignClassicTrait.prototype.onHDailyBtn_onLoad = function (t, e) {
        e();
    };
    DailySignClassicTrait.prototype.onMGBtnBackRP_hasRedDot = function (t, e) {
        var i = DailySignClassicModel_1.default.getInstance();
        if (i.isUnlocked() && !i.hasOpenedSignView()) {
            e({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    var DailySignClassicTrait_1;
    DailySignClassicTrait.traitKey = "DailySignClassic";
    __decorate([
        mj.traitEvent("DSClassic_showPopVw")
    ], DailySignClassicTrait.prototype, "showSignPopView", null);
    __decorate([
        mj.traitEvent("DSClassic_canShowBtn")
    ], DailySignClassicTrait.prototype, "canShowSignButton", null);
    DailySignClassicTrait = DailySignClassicTrait_1 = __decorate([
        mj.trait,
        mj.class("DailySignClassicTrait")
    ], DailySignClassicTrait);
    return DailySignClassicTrait;
}(Trait_1.default));
exports.default = DailySignClassicTrait;

cc._RF.pop();
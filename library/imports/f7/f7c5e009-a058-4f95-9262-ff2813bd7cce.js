"use strict";
cc._RF.push(module, 'f7c5eAJoFhPlZJi/ygTvXzO', 'HallRankBtnLockTrait');
// subpackages/l_hallRankBtnLock/Scripts/HallRankBtnLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var HallRankBtnLockTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnLockTrait, _super);
    function HallRankBtnLockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankTrait = null;
        _this._rankUnopenSpine = null;
        _this._lockSpine = null;
        return _this;
    }
    HallRankBtnLockTrait.prototype.onRankTrait_startEnterHall = function (t, e) {
        e();
        this._rankTrait = t.ins;
    };
    HallRankBtnLockTrait.prototype.onRankTrait_checkLv = function (t, e) {
        e({
            returnVal: true,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    HallRankBtnLockTrait.prototype.onRankBtn_updateAll = function (t, e) {
        if (this._rankTrait) {
            var n = t.ins;
            if (cc.isValid(n._labelTime)) {
                var i = this.isRankOpen();
                n.node.getChildByName("bg").active = i;
                var r = n._labelTime, o = r.getComponent(cc.Label);
                r.setPosition(i ? 0 : 19, r.position.y);
                o.fontSize = i ? 30 : 36;
                var a = n._labelRankNode.getComponent(cc.Label);
                if (i) {
                    this.destroyRankUnopenSpine();
                    this.destroyLockSpine();
                    this.changeLockState(true, n);
                    e();
                }
                else {
                    this.createRankUnopenSpine(n.node);
                    this.createLockSpine(n.node);
                    var c = this.getUnlockLevel(), p = this.getLevel(c);
                    p || (p = c);
                    o.string = "Lv." + p;
                    a.string = "";
                    this.changeLockState(false, n);
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
            }
            else
                e();
        }
        else
            e();
    };
    HallRankBtnLockTrait.prototype.changeLockState = function () { };
    HallRankBtnLockTrait.prototype.onRankBtn_closeOutCD = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    HallRankBtnLockTrait.prototype.onRankBtn_click = function (t, e) {
        if (this._rankTrait) {
            if (this.isRankOpen())
                e();
            else {
                this.playLockAnim();
                var n = this.getUnlockLevel(), i = this.getOpenTips(n);
                ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
                    isReuse: false,
                    tips: i,
                    noBlock: true,
                    isGlobal: false,
                    bgStyle: null,
                    isShowAction: false
                });
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            e();
    };
    HallRankBtnLockTrait.prototype.getLevel = function (t) {
        return t;
    };
    HallRankBtnLockTrait.prototype.getUnlockLevel = function () {
        var t, e;
        return null === (e = null === (t = this._rankTrait.traitData) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.unLockLevel;
    };
    HallRankBtnLockTrait.prototype.getOpenTips = function (t) {
        return I18NStrings_1.default.get("Common_Reward_target_1", "Finish Level {0}").replace("{0}", String(t));
    };
    HallRankBtnLockTrait.prototype.isRankOpen = function () {
        return !!this._rankTrait && UserModel_1.default.getInstance().getMainGameData().getLevelId() > this.getUnlockLevel();
    };
    HallRankBtnLockTrait.prototype.createRankUnopenSpine = function (t) {
        if (!cc.isValid(this._rankUnopenSpine) && cc.isValid(t)) {
            var e = BaseSpine_1.default.create("spine/rank/main_iconB_gardeningMaster", "init", -1, null, false);
            e.node.parent = t;
            e.node.position = cc.v3(0, 0, 0);
            e.node.setSiblingIndex(0);
            this._rankUnopenSpine = e;
        }
    };
    HallRankBtnLockTrait.prototype.playLockAnim = function () {
        if (cc.isValid(this._lockSpine)) {
            var t = this._lockSpine.getSkeleton();
            GameUtils_1.default.playSpine(t, "in", false, function () {
                GameUtils_1.default.playSpine(t, "init", true);
            });
        }
    };
    HallRankBtnLockTrait.prototype.destroyRankUnopenSpine = function () {
        if (cc.isValid(this._rankUnopenSpine)) {
            this._rankUnopenSpine.node.destroy();
            this._rankUnopenSpine = null;
        }
    };
    HallRankBtnLockTrait.prototype.createLockSpine = function (t) {
        if (!cc.isValid(this._lockSpine) && cc.isValid(t)) {
            var e = BaseSpine_1.default.create("spine/lock/main_icon_lock", "init", 1, null, false);
            e.node.parent = t;
            e.node.position = cc.v3(-63, -53);
            this._lockSpine = e;
        }
    };
    HallRankBtnLockTrait.prototype.destroyLockSpine = function () {
        if (cc.isValid(this._lockSpine)) {
            this._lockSpine.node.destroy();
            this._lockSpine = null;
        }
    };
    HallRankBtnLockTrait.traitKey = "HallRankBtnLock";
    __decorate([
        mj.traitEvent("HallRankBLockTt_chgLock")
    ], HallRankBtnLockTrait.prototype, "changeLockState", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_getLv")
    ], HallRankBtnLockTrait.prototype, "getLevel", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_unlockLv")
    ], HallRankBtnLockTrait.prototype, "getUnlockLevel", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_getOTips")
    ], HallRankBtnLockTrait.prototype, "getOpenTips", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_crtBtnSp")
    ], HallRankBtnLockTrait.prototype, "createRankUnopenSpine", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_doLckAni")
    ], HallRankBtnLockTrait.prototype, "playLockAnim", null);
    HallRankBtnLockTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnLockTrait")
    ], HallRankBtnLockTrait);
    return HallRankBtnLockTrait;
}(Trait_1.default));
exports.default = HallRankBtnLockTrait;

cc._RF.pop();
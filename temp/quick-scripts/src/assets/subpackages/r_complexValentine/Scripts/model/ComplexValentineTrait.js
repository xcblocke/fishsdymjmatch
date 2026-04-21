"use strict";
cc._RF.push(module, '7ca2eFzT8ZHc64N7oeuU4V7', 'ComplexValentineTrait');
// subpackages/r_complexValentine/Scripts/model/ComplexValentineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../../Scripts/simulator/constant/GameEvent");
var HallValentineBtn_1 = require("../components/HallValentineBtn");
var ValentineModel_1 = require("./ValentineModel");
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var ComplexValentineTrait = /** @class */ (function (_super) {
    __extends(ComplexValentineTrait, _super);
    function ComplexValentineTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hallIconBtn = null;
        _this.hallViewNode = null;
        return _this;
    }
    ComplexValentineTrait_1 = ComplexValentineTrait;
    Object.defineProperty(ComplexValentineTrait.prototype, "model", {
        get: function () {
            return ValentineModel_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    ComplexValentineTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.config;
        n && ValentineModel_1.default.getInstance().setConfig(n);
        this.registerEvent([{
                event: "HallCtl_initRes"
            }]);
    };
    ComplexValentineTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel] = this.onMsgIptSetLevelAfterSetLevel.bind(this);
        _t[ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
        _t[ValentineModel_1.ValentineEvents.VALENTINE_GAME_SHOW] = this.onMsgGameShow.bind(this);
        _t[ValentineModel_1.ValentineEvents.UPDATE_ACTIVITY_STATE] = this.onMsgUpdActState.bind(this);
        return _t;
    };
    ComplexValentineTrait.prototype.onMsgUpdActState = function () { };
    ComplexValentineTrait.prototype.onMsgGameShow = function () {
        if (!UserModel_1.default.getInstance().isInGameView()) {
            this.model.checkInitAct();
            this.createOrUpdateHallIcon(this.hallViewNode);
            this.popValentineViewLogic();
        }
    };
    ComplexValentineTrait.prototype.onMsgIptSetLevelAfterSetLevel = function () {
        if (this.model.shouldShowActivatePopup()) {
            this.showActivatePopup(true);
        }
        else {
            this.model.shouldShowEndPopup() && this.showEndPopup();
        }
    };
    ComplexValentineTrait.prototype.onMsgCloseValentineActivateView = function () {
        ValentineModel_1.ValentineActState.Ended == this.model.getActivityState() && this.model.shouldShowEndPopup() && this.showEndPopup();
    };
    ComplexValentineTrait.prototype.isEffectActive = function () {
        return this.model.isEffectActive();
    };
    ComplexValentineTrait.prototype.getEffectEnabled = function () {
        return this.model.getEffectEnabled();
    };
    ComplexValentineTrait.prototype.enterHall = function (t) {
        var e, n;
        this.hallViewNode = null === (e = t.ins) || void 0 === e ? void 0 : e.node;
        this.model.checkInitAct();
        this.createOrUpdateHallIcon(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
    };
    ComplexValentineTrait.prototype.createOrUpdateHallIcon = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            var o = this.model.getActivityState();
            if (ValentineModel_1.ValentineActState.NotStarted !== o && ValentineModel_1.ValentineActState.Ended !== o) {
                if (cc.isValid(this._hallIconBtn)) {
                    this._hallIconBtn.getComponent(HallValentineBtn_1.default).updateUI();
                }
                else {
                    HallValentineBtn_1.default.createUI().then(function (n) {
                        var o;
                        if (cc.isValid(n) && cc.isValid(t)) {
                            t.addChild(n);
                            e._hallIconBtn = n;
                            null === (o = n.getComponent(HallValentineBtn_1.default)) || void 0 === o || o.updateUI();
                        }
                    }).catch(function (t) {
                        console.error("[" + ComplexValentineTrait_1.traitKey + "] 创建主界面icon失败: " + ((null == t ? void 0 : t.message) || "HallValentineBtn按钮加载失败"));
                    });
                }
            }
            else if (cc.isValid(this._hallIconBtn)) {
                this._hallIconBtn.destroy();
                this._hallIconBtn = null;
            }
        }
    };
    ComplexValentineTrait.prototype.popValentineViewLogic = function () {
        var t = true;
        if (this.model.shouldShowIntroPopup()) {
            this.showIntroducePopup();
        }
        else {
            if (this.model.shouldShowActivatePopup()) {
                this.showActivatePopup();
            }
            else {
                if (this.model.shouldShowEndPopup()) {
                    this.showEndPopup();
                }
                else {
                    t = false;
                }
            }
        }
        return t;
    };
    ComplexValentineTrait.prototype.showIntroducePopup = function () {
        this.model.markIntroPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineIntroController", {
            isReuse: false,
            isShowAction: true
        });
    };
    ComplexValentineTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", [ComplexValentineTrait_1.BUNDLE_NAME + ":prefabs/HallValentineBtn"]);
    };
    ComplexValentineTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var o, i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i)
            e();
        else {
            if (!this.model.isEffectActive()) {
                e();
                return;
            }
            var a = "texture/" + i;
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: a,
                    bundleName: ComplexValentineTrait_1.BUNDLE_NAME,
                    fromAtlas: false
                }
            });
        }
    };
    ComplexValentineTrait.prototype.onTileNodeObj_playAnim = function (t, e) {
        var o;
        if (this.isEffectActive())
            try {
                if ("spine/rollcard/gameplay_flip" === (null === (o = t.args) || void 0 === o ? void 0 : o[0])) {
                    t.args[0] = "spine/gameplay_flip";
                    t.args[6] = ComplexValentineTrait_1.BUNDLE_NAME;
                    e();
                    return;
                }
                e();
            }
            catch (t) {
                console.error("[" + ComplexValentineTrait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
                e();
            }
        else
            e();
    };
    ComplexValentineTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.enterHall(t);
        e();
    };
    ComplexValentineTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.popValentineViewLogic()
        });
    };
    ComplexValentineTrait.prototype.onWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.dealWithWinView = function () {
        var t = this.model.getActivityState();
        ValentineModel_1.ValentineActState.InProgress == t && this.model.addProgress(1);
    };
    ComplexValentineTrait.prototype.showActivatePopup = function (t) {
        if (t === void 0) { t = false; }
        ValentineModel_1.default.getInstance().markActivatePopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineActivateController", {
            isReuse: false,
            isShowAction: true,
            isGaming: t
        });
    };
    ComplexValentineTrait.prototype.showEndPopup = function () {
        ValentineModel_1.default.getInstance().markEndPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineEndController", {
            isReuse: false,
            isShowAction: true
        });
        if (cc.isValid(this._hallIconBtn)) {
            this._hallIconBtn.destroy();
            this._hallIconBtn = null;
        }
    };
    var ComplexValentineTrait_1;
    ComplexValentineTrait.traitKey = "ComplexValentine";
    ComplexValentineTrait.BUNDLE_NAME = "r_complexValentine";
    __decorate([
        mj.traitEvent("ComplexVal_onMsgSetLevel")
    ], ComplexValentineTrait.prototype, "onMsgIptSetLevelAfterSetLevel", null);
    ComplexValentineTrait = ComplexValentineTrait_1 = __decorate([
        mj.trait,
        mj.class("ComplexValentineTrait")
    ], ComplexValentineTrait);
    return ComplexValentineTrait;
}(Trait_1.default));
exports.default = ComplexValentineTrait;

cc._RF.pop();
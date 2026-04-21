"use strict";
cc._RF.push(module, '8060f7hyWFBoZX5QfTcsx+2', 'AutoClearSwitchTrait');
// subpackages/l_autoClearSwitch/Scripts/AutoClearSwitchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UIAutoClearSwitch_1 = require("./UIAutoClearSwitch");
var FullComboItem_1 = require("../../../Scripts/items/FullComboItem");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var AutoClearSwitchTrait = /** @class */ (function (_super) {
    __extends(AutoClearSwitchTrait, _super);
    function AutoClearSwitchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fullComboSkipped = false;
        _this._rewardComboSkipped = false;
        return _this;
    }
    AutoClearSwitchTrait_1 = AutoClearSwitchTrait;
    AutoClearSwitchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        "boolean" != typeof this.localData.autoClearEnabled && (this.localData.autoClearEnabled = true);
        UserModel_1.default.getInstance().setAutoClearEnabled(this.localData.autoClearEnabled);
    };
    AutoClearSwitchTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        this._fullComboSkipped = false;
        this._rewardComboSkipped = false;
        e();
    };
    AutoClearSwitchTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    AutoClearSwitchTrait.prototype.addPreloadRes = function (t) {
        var e = t.ins;
        e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UIAutoClearSwitch_1.default.getUrl());
    };
    AutoClearSwitchTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        this.adjustPanelHeight(t, function () {
            e();
        });
    };
    AutoClearSwitchTrait.prototype.adjustPanelHeight = function (t, e) {
        UIAutoClearSwitch_1.default.createUI().then(function (o) {
            if (cc.isValid(o) && (null == t ? void 0 : t.args)) {
                var r = t.args[0] || [];
                o.CustomSlibingIndex = 0;
                r.push(o);
                t.args[0] = r;
            }
            e();
        }).catch(function (t) {
            console.error("[" + AutoClearSwitchTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "AutoClear 按钮加载失败"));
            e();
        });
    };
    AutoClearSwitchTrait.prototype.toggleSwitch = function () {
        var t = !this.localData.autoClearEnabled;
        this.localData.autoClearEnabled = t;
        UserModel_1.default.getInstance().setAutoClearEnabled(t);
    };
    AutoClearSwitchTrait.prototype.isAutoClearEnabled = function () {
        return this.localData.autoClearEnabled;
    };
    AutoClearSwitchTrait.prototype.onFullComboBhv_shouldSkip = function (t, e) {
        if (this.localData.autoClearEnabled)
            e();
        else {
            this._fullComboSkipped = true;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    AutoClearSwitchTrait.prototype.onRwdComboBhv_shouldSkip = function (t, e) {
        if (this.localData.autoClearEnabled)
            e();
        else {
            this._rewardComboSkipped = true;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    AutoClearSwitchTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this.handleBeforeWinLogic(t, e, "主线模式");
    };
    AutoClearSwitchTrait.prototype.onBeforeDCWinBhv_doOthLgc = function (t, e) {
        this.handleBeforeWinLogic(t, e, "每日挑战");
    };
    AutoClearSwitchTrait.prototype.handleBeforeWinLogic = function (t, e) {
        if (this._fullComboSkipped && this.checkFullComboTriggered()) {
            var o = t.ins.context.gameView.effectNode;
            this.showFullComboAnimation(o, function () {
                e();
            });
            this._fullComboSkipped = false;
        }
        else
            e();
    };
    AutoClearSwitchTrait.prototype.checkFullComboTriggered = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameData();
        return !!t && t.getHasTriggeredFullCombo();
    };
    AutoClearSwitchTrait.prototype.showFullComboAnimation = function (t, e) {
        FullComboItem_1.default.createUI().then(function (o) {
            if (o && cc.isValid(t)) {
                o.setParent(t);
                o.position = cc.v3(0, 0, 0);
                var r = o.getComponent(FullComboItem_1.default);
                if (r) {
                    mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.FullCombo);
                    r.startPlayAni(o, function () { }, function () {
                        e();
                    });
                }
                else {
                    o.destroy();
                    e();
                }
            }
            else
                e();
        }).catch(function () {
            e();
        });
    };
    AutoClearSwitchTrait.prototype.onClrNormHlp_shldChkFail = function (t, e) {
        var o = t.args[0], r = t.args[1];
        if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    AutoClearSwitchTrait.prototype.onClrDailyHlp_shldChkFail = function (t, e) {
        var o = t.args[0], r = t.args[1];
        if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    var AutoClearSwitchTrait_1;
    AutoClearSwitchTrait.traitKey = "AutoClearSwitch";
    AutoClearSwitchTrait = AutoClearSwitchTrait_1 = __decorate([
        mj.trait,
        mj.class("AutoClearSwitchTrait")
    ], AutoClearSwitchTrait);
    return AutoClearSwitchTrait;
}(Trait_1.default));
exports.default = AutoClearSwitchTrait;

cc._RF.pop();
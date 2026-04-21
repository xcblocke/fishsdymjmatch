"use strict";
cc._RF.push(module, '69f59NKL0NLv5AzcdftuYI+', 'TimeoutStopComboTrait');
// subpackages/l_timeoutStopCombo/Scripts/TimeoutStopComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TimeoutCheckerComponent_1 = require("./TimeoutCheckerComponent");
var TimeoutStopComboTrait = /** @class */ (function (_super) {
    __extends(TimeoutStopComboTrait, _super);
    function TimeoutStopComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClickTime = 0;
        _this._timeoutSeconds = 10;
        _this._timerNode = null;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._isInStop = false;
        _this._isInComplete = false;
        return _this;
    }
    TimeoutStopComboTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        (null === (e = this._traitData) || void 0 === e ? void 0 : e.timeout) && (this._timeoutSeconds = this._traitData.timeout);
    };
    TimeoutStopComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var o, i;
        this._gameType = null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
        this._isInComplete = false;
        this._isInStop = false;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            this.updateTime();
        }
        else {
            this.stopTimer();
        }
        e();
    };
    TimeoutStopComboTrait.prototype.onIptTchStart_exec = function (t, e) {
        this.updateTime();
        this._isInStop = false;
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        this.updateTime();
        this._isInStop = true;
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdVw_setContent = function (t, e) {
        this._isInStop = true;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onUISetDlg_close = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onShuffleBhv_onAnimEnd = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onFailVw_show = function (t, e) {
        this._isInStop = true;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdVw_closeClick = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onWatchAdCtrl_onAdSuccess = function (t, e) {
        this._isInStop = false;
        this.updateTime();
        e();
    };
    TimeoutStopComboTrait.prototype.onComboChk_canBreakCb = function (t, e) {
        if (this._gameType != GameTypeEnums_1.MjGameType.Normal) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
    };
    TimeoutStopComboTrait.prototype.onIptStartAutoMrg_exec = function (t, e) {
        this._isInComplete = true;
        this.stopTimer();
        e();
    };
    TimeoutStopComboTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this._isInComplete = true;
        this.stopTimer();
        e();
    };
    TimeoutStopComboTrait.prototype.updateTime = function () {
        var t;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            var e = ControllerManager_1.default.getInstance().getControByName("MainGameController");
            e && (this._lastClickTime = (null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0);
            this.startTimer();
        }
    };
    TimeoutStopComboTrait.prototype.startTimer = function () {
        var t;
        if (!(this._isInComplete || this._timerNode && cc.isValid(this._timerNode))) {
            this._timerNode = new cc.Node("TimeoutChecker");
            this._timerNode.addComponent(TimeoutCheckerComponent_1.default).init(this.checkTimeout.bind(this), 1);
            var e = null === (t = ControllerManager_1.default.getInstance().getTopSceneController()) || void 0 === t ? void 0 : t.rootView;
            e && (this._timerNode.parent = e);
        }
    };
    TimeoutStopComboTrait.prototype.stopTimer = function () {
        if (this._timerNode && cc.isValid(this._timerNode)) {
            this._timerNode.destroy();
            this._timerNode = null;
        }
    };
    TimeoutStopComboTrait.prototype.checkTimeout = function () {
        var t;
        if (!this._isInStop) {
            var e = ControllerManager_1.default.getInstance().getControByName("MainGameController");
            if (e) {
                if (((null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0) - this._lastClickTime >= this._timeoutSeconds) {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TimeoutBreakCombo
                    });
                    this.stopTimer();
                }
            }
        }
    };
    TimeoutStopComboTrait.traitKey = "TimeoutStopCombo";
    TimeoutStopComboTrait = __decorate([
        mj.trait,
        mj.class("TimeoutStopComboTrait")
    ], TimeoutStopComboTrait);
    return TimeoutStopComboTrait;
}(Trait_1.default));
exports.default = TimeoutStopComboTrait;

cc._RF.pop();
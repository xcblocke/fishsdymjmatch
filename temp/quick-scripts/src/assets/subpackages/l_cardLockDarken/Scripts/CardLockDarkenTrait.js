"use strict";
cc._RF.push(module, '41401fB655LmZGoSk+VzrU/', 'CardLockDarkenTrait');
// subpackages/l_cardLockDarken/Scripts/CardLockDarkenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardLockDarkenEffect_1 = require("../../../Scripts/CardLockDarkenEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var CardLockDarkenBehavior_1 = require("../../../Scripts/base/CardLockDarkenBehavior");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardLockDarkenTrait = /** @class */ (function (_super) {
    __extends(CardLockDarkenTrait, _super);
    function CardLockDarkenTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isEnabled = false;
        _this._enableForFirstLevel = true;
        return _this;
    }
    CardLockDarkenTrait.prototype.onLoad = function () {
        var t = this;
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
        this._initSettingsState();
        Promise.resolve().then(function () {
            t.registerEvent([{
                    event: "ClearT4Hlp_modifyStepCnt"
                }, {
                    event: "ClearT2Hlp_modifyStepCnt"
                }, {
                    event: "IptT2Revert_revetEnd"
                }, {
                    event: "IptT2Revive_reviveEnd"
                }, {
                    event: "UISetDlg_isHideLkT2"
                }]);
        });
    };
    CardLockDarkenTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.Effect_ClearAfter] = this.onEffectClearAfterCB.bind(this);
        _e[GameEvent_1.EGameEvent.Effect_StartAutoMerge] = this.onEffectStartAutoMergeCB.bind(this);
        _e[GameEvent_1.EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
        _e[GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd] = this.onShuffleStayEndCB.bind(this);
        return _e;
    };
    CardLockDarkenTrait.prototype.onUISetDlg_isHideLkT2 = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: false
        });
    };
    CardLockDarkenTrait.prototype.onClearT2Hlp_modifyStepCnt = function (e, t) {
        this._pushRefreshCardLockDarkenIfEnabled();
        t();
    };
    CardLockDarkenTrait.prototype.onClearT4Hlp_modifyStepCnt = function (e, t) {
        this._pushRefreshCardLockDarkenIfEnabled();
        t();
    };
    CardLockDarkenTrait.prototype._pushRefreshCardLockDarkenIfEnabled = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameData();
        this._shouldEnableCardLockDarkenForGameData(e) && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
            isShowAni: true
        });
    };
    CardLockDarkenTrait.prototype.onIptT2Revert_revetEnd = function (e, t) {
        var r = e.ins;
        if (r) {
            if (this._isTile2Mode()) {
                this._shouldEnableCardLockDarken(r) && this._pushDarkenEffect(r, BehaviorsEnum_1.EInsertType.Root);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    CardLockDarkenTrait.prototype.onIptT2Revive_reviveEnd = function (e, t) {
        var r = e.ins;
        if (r) {
            if (this._isTile2Mode()) {
                this._shouldEnableCardLockDarken(r) && this._pushDarkenEffect(r, BehaviorsEnum_1.EInsertType.Root);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    CardLockDarkenTrait.prototype._pushDarkenEffect = function (e, t) {
        if (t === void 0) { t = BehaviorsEnum_1.EInsertType.Parallel; }
        e && "function" == typeof e.pushEffect && e.pushEffect(new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isAutoMerge: false
        }), t);
    };
    CardLockDarkenTrait.prototype.onUISetDlg_updLckHL = function (e, t) {
        var r = e.args[0];
        this._isEnabled = r;
        t();
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ToggleCardLockDarken,
            enabled: r
        });
    };
    CardLockDarkenTrait.prototype.onGuide_skip = function (e, t) {
        var r = UserModel_1.default.getInstance().isLockHighlightEnabled();
        t();
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ToggleCardLockDarken,
            enabled: r
        });
    };
    CardLockDarkenTrait.prototype.onShuffleStayEndCB = function (e) {
        if (e && e.context) {
            var t = e.context.gameCtr;
            if (t && t._gameSimulator) {
                var r = t._gameSimulator;
                this._shouldEnableCardLockDarken(r) && GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
                    isShowAni: false
                });
            }
        }
    };
    CardLockDarkenTrait.prototype._isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    CardLockDarkenTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.CardLockDarken, CardLockDarkenBehavior_1.CardLockDarkenBehavior);
    };
    CardLockDarkenTrait.prototype.onEffectClearAfterCB = function (e, t) {
        t.options.input.inputType !== GameInputEnum_1.EGameInputEnum.AutoMerge && this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffect(e);
    };
    CardLockDarkenTrait.prototype.onEffectStartAutoMergeCB = function (e) {
        this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffectForAutoMerge(e);
    };
    CardLockDarkenTrait.prototype.onEffectInitViewCB = function (e) {
        this._isEnabled = this._getSettingsState();
        this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    CardLockDarkenTrait.prototype._pushCardLockDarkenEffect = function (e, t) {
        if (t === void 0) { t = BehaviorsEnum_1.EInsertType.Parallel; }
        var r = new CardLockDarkenEffect_1.CardLockDarkenEffect({});
        e.pushEffect(r, t);
    };
    CardLockDarkenTrait.prototype._pushCardLockDarkenEffectForAutoMerge = function (e) {
        var t = new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isAutoMerge: true
        });
        e.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    CardLockDarkenTrait.prototype._shouldEnableCardLockDarken = function (e) {
        var t, r, n = null === (r = null === (t = null == e ? void 0 : e.gameContext) || void 0 === t ? void 0 : t.getGameData) || void 0 === r ? void 0 : r.call(t);
        return this._shouldEnableCardLockDarkenForGameData(n);
    };
    CardLockDarkenTrait.prototype._shouldEnableCardLockDarkenForGameData = function (e) {
        if (!e)
            return this._isEnabled;
        var t = e.getLevelId(), r = mj.getClassByName("GuideTrait");
        return UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Normal && 1 === t && r && r.getInstance() && true === r.getInstance().eventEnabled && !UserModel_1.default.getInstance().isGuideFinished() ? this._enableForFirstLevel : this._isEnabled;
    };
    CardLockDarkenTrait.prototype._initSettingsState = function () {
        var e;
        this._enableForFirstLevel = (null === (e = this._traitData) || void 0 === e ? void 0 : e.firstLevel) || false;
    };
    CardLockDarkenTrait.prototype._getSettingsState = function () {
        return UserModel_1.default.getInstance().isLockHighlightEnabled();
    };
    CardLockDarkenTrait.prototype.isEnabled = function () {
        return this._traitData.firstLevel;
    };
    CardLockDarkenTrait.traitKey = "CardLockDarken";
    CardLockDarkenTrait = __decorate([
        mj.trait,
        mj.class("CardLockDarkenTrait")
    ], CardLockDarkenTrait);
    return CardLockDarkenTrait;
}(Trait_1.default));
exports.default = CardLockDarkenTrait;

cc._RF.pop();
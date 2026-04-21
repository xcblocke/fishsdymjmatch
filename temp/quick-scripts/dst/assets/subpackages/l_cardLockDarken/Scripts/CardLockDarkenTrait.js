
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardLockDarken/Scripts/CardLockDarkenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRMb2NrRGFya2VuL1NjcmlwdHMvQ2FyZExvY2tEYXJrZW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSxtRkFBbUY7QUFDbkYsd0ZBQW9GO0FBQ3BGLDhFQUE2RTtBQUM3RSw4RUFBNkU7QUFDN0Usb0VBQW1FO0FBQ25FLHVGQUFzRjtBQUN0RixvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFHakU7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUF5SkM7UUF4SkMsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDOztJQXVKOUIsQ0FBQztJQXJKQyxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUUsMEJBQTBCO2lCQUNsQyxFQUFFO29CQUNELEtBQUssRUFBRSwwQkFBMEI7aUJBQ2xDLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLHNCQUFzQjtpQkFDOUIsRUFBRTtvQkFDRCxLQUFLLEVBQUUsdUJBQXVCO2lCQUMvQixFQUFFO29CQUNELEtBQUssRUFBRSxxQkFBcUI7aUJBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFD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QUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNqUCxDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDaEgsQ0FBQztJQUNELCtDQUFpQixHQUFqQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFDRCx1Q0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBckpNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFIaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQXlKdkM7SUFBRCwwQkFBQztDQXpKRCxBQXlKQyxDQXpKZ0QsZUFBSyxHQXlKckQ7a0JBekpvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IENhcmRMb2NrRGFya2VuRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9DYXJkTG9ja0RhcmtlbkVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZExvY2tEYXJrZW5CZWhhdmlvciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9DYXJkTG9ja0RhcmtlbkJlaGF2aW9yJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZExvY2tEYXJrZW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZExvY2tEYXJrZW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2lzRW5hYmxlZCA9IGZhbHNlO1xuICBfZW5hYmxlRm9yRmlyc3RMZXZlbCA9IHRydWU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZExvY2tEYXJrZW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9yZWdpc3RlckJlaGF2aW9ycygpO1xuICAgIHRoaXMuX2luaXRTZXR0aW5nc1N0YXRlKCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgICAgZXZlbnQ6IFwiQ2xlYXJUNEhscF9tb2RpZnlTdGVwQ250XCJcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiQ2xlYXJUMkhscF9tb2RpZnlTdGVwQ250XCJcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiSXB0VDJSZXZlcnRfcmV2ZXRFbmRcIlxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJJcHRUMlJldml2ZV9yZXZpdmVFbmRcIlxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJVSVNldERsZ19pc0hpZGVMa1QyXCJcbiAgICAgIH1dKTtcbiAgICB9KTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lW0VHYW1lRXZlbnQuRWZmZWN0X0NsZWFyQWZ0ZXJdID0gdGhpcy5vbkVmZmVjdENsZWFyQWZ0ZXJDQi5iaW5kKHRoaXMpO1xuICAgIF9lW0VHYW1lRXZlbnQuRWZmZWN0X1N0YXJ0QXV0b01lcmdlXSA9IHRoaXMub25FZmZlY3RTdGFydEF1dG9NZXJnZUNCLmJpbmQodGhpcyk7XG4gICAgX2VbRUdhbWVFdmVudC5FZmZlY3RfSW5pdFZpZXddID0gdGhpcy5vbkVmZmVjdEluaXRWaWV3Q0IuYmluZCh0aGlzKTtcbiAgICBfZVtFR2FtZUV2ZW50LkJlaGF2aW9yX1NodWZmbGVTdGF5RW5kXSA9IHRoaXMub25TaHVmZmxlU3RheUVuZENCLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF9lO1xuICB9XG4gIG9uVUlTZXREbGdfaXNIaWRlTGtUMihlLCB0KSB7XG4gICAgdCh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyVDJIbHBfbW9kaWZ5U3RlcENudChlLCB0KSB7XG4gICAgdGhpcy5fcHVzaFJlZnJlc2hDYXJkTG9ja0RhcmtlbklmRW5hYmxlZCgpO1xuICAgIHQoKTtcbiAgfVxuICBvbkNsZWFyVDRIbHBfbW9kaWZ5U3RlcENudChlLCB0KSB7XG4gICAgdGhpcy5fcHVzaFJlZnJlc2hDYXJkTG9ja0RhcmtlbklmRW5hYmxlZCgpO1xuICAgIHQoKTtcbiAgfVxuICBfcHVzaFJlZnJlc2hDYXJkTG9ja0RhcmtlbklmRW5hYmxlZCgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpO1xuICAgIHRoaXMuX3Nob3VsZEVuYWJsZUNhcmRMb2NrRGFya2VuRm9yR2FtZURhdGEoZSkgJiYgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVmcmVzaENhcmRMb2NrRGFya2VuLFxuICAgICAgaXNTaG93QW5pOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25JcHRUMlJldmVydF9yZXZldEVuZChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucztcbiAgICBpZiAocikge1xuICAgICAgaWYgKHRoaXMuX2lzVGlsZTJNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlQ2FyZExvY2tEYXJrZW4ocikgJiYgdGhpcy5fcHVzaERhcmtlbkVmZmVjdChyLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0VDJSZXZpdmVfcmV2aXZlRW5kKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuaW5zO1xuICAgIGlmIChyKSB7XG4gICAgICBpZiAodGhpcy5faXNUaWxlMk1vZGUoKSkge1xuICAgICAgICB0aGlzLl9zaG91bGRFbmFibGVDYXJkTG9ja0RhcmtlbihyKSAmJiB0aGlzLl9wdXNoRGFya2VuRWZmZWN0KHIsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgX3B1c2hEYXJrZW5FZmZlY3QoZSwgdCA9IEVJbnNlcnRUeXBlLlBhcmFsbGVsKSB7XG4gICAgZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUucHVzaEVmZmVjdCAmJiBlLnB1c2hFZmZlY3QobmV3IENhcmRMb2NrRGFya2VuRWZmZWN0KHtcbiAgICAgIGlzQXV0b01lcmdlOiBmYWxzZVxuICAgIH0pLCB0KTtcbiAgfVxuICBvblVJU2V0RGxnX3VwZExja0hMKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuYXJnc1swXTtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSByO1xuICAgIHQoKTtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub2dnbGVDYXJkTG9ja0RhcmtlbixcbiAgICAgIGVuYWJsZWQ6IHJcbiAgICB9KTtcbiAgfVxuICBvbkd1aWRlX3NraXAoZSwgdCkge1xuICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNMb2NrSGlnaGxpZ2h0RW5hYmxlZCgpO1xuICAgIHQoKTtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub2dnbGVDYXJkTG9ja0RhcmtlbixcbiAgICAgIGVuYWJsZWQ6IHJcbiAgICB9KTtcbiAgfVxuICBvblNodWZmbGVTdGF5RW5kQ0IoZSkge1xuICAgIGlmIChlICYmIGUuY29udGV4dCkge1xuICAgICAgdmFyIHQgPSBlLmNvbnRleHQuZ2FtZUN0cjtcbiAgICAgIGlmICh0ICYmIHQuX2dhbWVTaW11bGF0b3IpIHtcbiAgICAgICAgdmFyIHIgPSB0Ll9nYW1lU2ltdWxhdG9yO1xuICAgICAgICB0aGlzLl9zaG91bGRFbmFibGVDYXJkTG9ja0RhcmtlbihyKSAmJiBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVmcmVzaENhcmRMb2NrRGFya2VuLFxuICAgICAgICAgIGlzU2hvd0FuaTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9pc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgX3JlZ2lzdGVyQmVoYXZpb3JzKCkge1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuQ2FyZExvY2tEYXJrZW4sIENhcmRMb2NrRGFya2VuQmVoYXZpb3IpO1xuICB9XG4gIG9uRWZmZWN0Q2xlYXJBZnRlckNCKGUsIHQpIHtcbiAgICB0Lm9wdGlvbnMuaW5wdXQuaW5wdXRUeXBlICE9PSBFR2FtZUlucHV0RW51bS5BdXRvTWVyZ2UgJiYgdGhpcy5fc2hvdWxkRW5hYmxlQ2FyZExvY2tEYXJrZW4oZSkgJiYgdGhpcy5fcHVzaENhcmRMb2NrRGFya2VuRWZmZWN0KGUpO1xuICB9XG4gIG9uRWZmZWN0U3RhcnRBdXRvTWVyZ2VDQihlKSB7XG4gICAgdGhpcy5fc2hvdWxkRW5hYmxlQ2FyZExvY2tEYXJrZW4oZSkgJiYgdGhpcy5fcHVzaENhcmRMb2NrRGFya2VuRWZmZWN0Rm9yQXV0b01lcmdlKGUpO1xuICB9XG4gIG9uRWZmZWN0SW5pdFZpZXdDQihlKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdGhpcy5fZ2V0U2V0dGluZ3NTdGF0ZSgpO1xuICAgIHRoaXMuX3Nob3VsZEVuYWJsZUNhcmRMb2NrRGFya2VuKGUpICYmIHRoaXMuX3B1c2hDYXJkTG9ja0RhcmtlbkVmZmVjdChlLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBfcHVzaENhcmRMb2NrRGFya2VuRWZmZWN0KGUsIHQgPSBFSW5zZXJ0VHlwZS5QYXJhbGxlbCkge1xuICAgIHZhciByID0gbmV3IENhcmRMb2NrRGFya2VuRWZmZWN0KHt9KTtcbiAgICBlLnB1c2hFZmZlY3QociwgdCk7XG4gIH1cbiAgX3B1c2hDYXJkTG9ja0RhcmtlbkVmZmVjdEZvckF1dG9NZXJnZShlKSB7XG4gICAgdmFyIHQgPSBuZXcgQ2FyZExvY2tEYXJrZW5FZmZlY3Qoe1xuICAgICAgaXNBdXRvTWVyZ2U6IHRydWVcbiAgICB9KTtcbiAgICBlLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIF9zaG91bGRFbmFibGVDYXJkTG9ja0RhcmtlbihlKSB7XG4gICAgdmFyIHQsXG4gICAgICByLFxuICAgICAgbiA9IG51bGwgPT09IChyID0gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdhbWVDb250ZXh0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldEdhbWVEYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwodCk7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEVuYWJsZUNhcmRMb2NrRGFya2VuRm9yR2FtZURhdGEobik7XG4gIH1cbiAgX3Nob3VsZEVuYWJsZUNhcmRMb2NrRGFya2VuRm9yR2FtZURhdGEoZSkge1xuICAgIGlmICghZSkgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcbiAgICB2YXIgdCA9IGUuZ2V0TGV2ZWxJZCgpLFxuICAgICAgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiR3VpZGVUcmFpdFwiKTtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsICYmIDEgPT09IHQgJiYgciAmJiByLmdldEluc3RhbmNlKCkgJiYgdHJ1ZSA9PT0gci5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCAmJiAhVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkgPyB0aGlzLl9lbmFibGVGb3JGaXJzdExldmVsIDogdGhpcy5faXNFbmFibGVkO1xuICB9XG4gIF9pbml0U2V0dGluZ3NTdGF0ZSgpIHtcbiAgICB2YXIgZTtcbiAgICB0aGlzLl9lbmFibGVGb3JGaXJzdExldmVsID0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmZpcnN0TGV2ZWwpIHx8IGZhbHNlO1xuICB9XG4gIF9nZXRTZXR0aW5nc1N0YXRlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0xvY2tIaWdobGlnaHRFbmFibGVkKCk7XG4gIH1cbiAgaXNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFpdERhdGEuZmlyc3RMZXZlbDtcbiAgfVxufSJdfQ==
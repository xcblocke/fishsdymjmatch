import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { CardLockDarkenEffect } from '../../../Scripts/CardLockDarkenEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { CardLockDarkenBehavior } from '../../../Scripts/base/CardLockDarkenBehavior';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("CardLockDarkenTrait")
export default class CardLockDarkenTrait extends Trait {
  _isEnabled = false;
  _enableForFirstLevel = true;
  static traitKey = "CardLockDarken";
  onLoad() {
    var t = this;
    super.onLoad.call(this);
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
  }
  getMessageListeners() {
    var _e = {};
    _e[EGameEvent.Effect_ClearAfter] = this.onEffectClearAfterCB.bind(this);
    _e[EGameEvent.Effect_StartAutoMerge] = this.onEffectStartAutoMergeCB.bind(this);
    _e[EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
    _e[EGameEvent.Behavior_ShuffleStayEnd] = this.onShuffleStayEndCB.bind(this);
    return _e;
  }
  onUISetDlg_isHideLkT2(e, t) {
    t({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true,
      returnVal: false
    });
  }
  onClearT2Hlp_modifyStepCnt(e, t) {
    this._pushRefreshCardLockDarkenIfEnabled();
    t();
  }
  onClearT4Hlp_modifyStepCnt(e, t) {
    this._pushRefreshCardLockDarkenIfEnabled();
    t();
  }
  _pushRefreshCardLockDarkenIfEnabled() {
    var e = UserModel.getInstance().getCurrentGameData();
    this._shouldEnableCardLockDarkenForGameData(e) && GameInteraction.input({
      inputType: EGameInputEnum.RefreshCardLockDarken,
      isShowAni: true
    });
  }
  onIptT2Revert_revetEnd(e, t) {
    var r = e.ins;
    if (r) {
      if (this._isTile2Mode()) {
        this._shouldEnableCardLockDarken(r) && this._pushDarkenEffect(r, EInsertType.Root);
        t();
      } else t();
    } else t();
  }
  onIptT2Revive_reviveEnd(e, t) {
    var r = e.ins;
    if (r) {
      if (this._isTile2Mode()) {
        this._shouldEnableCardLockDarken(r) && this._pushDarkenEffect(r, EInsertType.Root);
        t();
      } else t();
    } else t();
  }
  _pushDarkenEffect(e, t = EInsertType.Parallel) {
    e && "function" == typeof e.pushEffect && e.pushEffect(new CardLockDarkenEffect({
      isAutoMerge: false
    }), t);
  }
  onUISetDlg_updLckHL(e, t) {
    var r = e.args[0];
    this._isEnabled = r;
    t();
    GameInteraction.input({
      inputType: EGameInputEnum.ToggleCardLockDarken,
      enabled: r
    });
  }
  onGuide_skip(e, t) {
    var r = UserModel.getInstance().isLockHighlightEnabled();
    t();
    GameInteraction.input({
      inputType: EGameInputEnum.ToggleCardLockDarken,
      enabled: r
    });
  }
  onShuffleStayEndCB(e) {
    if (e && e.context) {
      var t = e.context.gameCtr;
      if (t && t._gameSimulator) {
        var r = t._gameSimulator;
        this._shouldEnableCardLockDarken(r) && GameInteraction.input({
          inputType: EGameInputEnum.RefreshCardLockDarken,
          isShowAni: false
        });
      }
    }
  }
  _isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  _registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.CardLockDarken, CardLockDarkenBehavior);
  }
  onEffectClearAfterCB(e, t) {
    t.options.input.inputType !== EGameInputEnum.AutoMerge && this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffect(e);
  }
  onEffectStartAutoMergeCB(e) {
    this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffectForAutoMerge(e);
  }
  onEffectInitViewCB(e) {
    this._isEnabled = this._getSettingsState();
    this._shouldEnableCardLockDarken(e) && this._pushCardLockDarkenEffect(e, EInsertType.Root);
  }
  _pushCardLockDarkenEffect(e, t = EInsertType.Parallel) {
    var r = new CardLockDarkenEffect({});
    e.pushEffect(r, t);
  }
  _pushCardLockDarkenEffectForAutoMerge(e) {
    var t = new CardLockDarkenEffect({
      isAutoMerge: true
    });
    e.pushEffect(t, EInsertType.Parallel);
  }
  _shouldEnableCardLockDarken(e) {
    var t,
      r,
      n = null === (r = null === (t = null == e ? void 0 : e.gameContext) || void 0 === t ? void 0 : t.getGameData) || void 0 === r ? void 0 : r.call(t);
    return this._shouldEnableCardLockDarkenForGameData(n);
  }
  _shouldEnableCardLockDarkenForGameData(e) {
    if (!e) return this._isEnabled;
    var t = e.getLevelId(),
      r = mj.getClassByName("GuideTrait");
    return UserModel.getInstance().getMainGameType() === MjGameType.Normal && 1 === t && r && r.getInstance() && true === r.getInstance().eventEnabled && !UserModel.getInstance().isGuideFinished() ? this._enableForFirstLevel : this._isEnabled;
  }
  _initSettingsState() {
    var e;
    this._enableForFirstLevel = (null === (e = this._traitData) || void 0 === e ? void 0 : e.firstLevel) || false;
  }
  _getSettingsState() {
    return UserModel.getInstance().isLockHighlightEnabled();
  }
  isEnabled() {
    return this._traitData.firstLevel;
  }
}
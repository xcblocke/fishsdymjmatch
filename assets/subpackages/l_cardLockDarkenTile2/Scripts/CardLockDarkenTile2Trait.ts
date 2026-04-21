import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { CardLockDarkenEffect } from '../../../Scripts/CardLockDarkenEffect';
import DateManager from '../../../Scripts/core/simulator/util/DateManager';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("CardLockDarkenTile2Trait")
export default class CardLockDarkenTile2Trait extends Trait {
  _isColdStart = true;
  _shouldShowDarkenCurrentGame = false;
  static traitKey = "CardLockDarkenTile2";
  get _cfg() {
    var t;
    return null !== (t = this._traitData) && void 0 !== t ? t : {};
  }
  onLoad() {
    super.onLoad.call(this);
    this.localData || (this.localData = {
      lastTile2PlayDate: 0,
      darkLevelId: -1
    });
    if (void 0 === this.localData.darkLevelId) {
      this.localData.darkLevelId = -1;
      this.localData = this.localData;
    }
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Effect_InitView] = this._onEffectInitViewCB.bind(this);
    _t[EGameEvent.Effect_StartAutoMerge] = this._onEffectStartAutoMergeCB.bind(this);
    _t[EGameEvent.Behavior_ShuffleStayEnd] = this._onShuffleStayEndCB.bind(this);
    return _t;
  }
  onUISetDlg_adjustPH(t, e) {
    var r;
    if (this._isTile2Mode()) {
      var a = t.ins,
        i = null === (r = null == a ? void 0 : a.getLockHighlightSwitchNode) || void 0 === r ? void 0 : r.call(a);
      i && cc.isValid(i) && (i.active = false);
    }
    e();
  }
  onUISetDlg_updLckHL(t, e) {
    if (this._isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      e();
    }
  }
  onGuide_skip(t, e) {
    if (this._isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      e();
    }
  }
  onTile2IptTchEnd_runClr(t, e) {
    if (this._isTile2Mode()) {
      var r = t.ins;
      if (r) {
        this._pushDarkenEffect(r, this._shouldShowDarkenCurrentGame, EInsertType.Root);
        e();
      } else e();
    } else e();
  }
  _onEffectInitViewCB(t) {
    if (this._isTile2Mode()) {
      var e = this._getTile2MainLevel(),
        r = this._isTodayFirstTile2Game(),
        a = this._isColdStart;
      this._updatePlayTracking();
      var i = this.localData.darkLevelId === e;
      this._shouldShowDarkenCurrentGame = i || this._computeShouldShow(r, a);
      if (this._shouldShowDarkenCurrentGame && this.localData.darkLevelId !== e) {
        this.localData.darkLevelId = e;
        this.localData = this.localData;
      }
      this._pushDarkenEffect(t, this._shouldShowDarkenCurrentGame, EInsertType.Root);
    }
  }
  _onEffectStartAutoMergeCB(t) {
    this._isTile2Mode() && this._pushDarkenEffect(t, false);
  }
  _onShuffleStayEndCB(t) {
    if (this._isTile2Mode() && t && t.context) {
      var e = t.context.gameCtr;
      if (e && e._gameSimulator) {
        e._gameSimulator;
        this._shouldShowDarkenCurrentGame && GameInteraction.input({
          inputType: EGameInputEnum.RefreshCardLockDarken,
          isShowAni: false
        });
      }
    }
  }
  _computeShouldShow(t, e) {
    var r,
      a,
      i = t && this._checkParam(null !== (r = this._cfg.dailyFirst) && void 0 !== r ? r : [1, -1]),
      o = e && this._checkParam(null !== (a = this._cfg.coldStart) && void 0 !== a ? a : [1, -1]);
    return i || o;
  }
  _checkParam(t) {
    var e = __read(t, 2),
      r = e[0],
      a = e[1];
    return -1 !== a && (0 === a || (1 === r ? UserModel.getInstance().getGameActiveDays() >= a : 2 === r && this._getTile2MainLevel() >= a));
  }
  _isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  _isTodayFirstTile2Game() {
    var t = this.localData.lastTile2PlayDate;
    return !t || DateManager.getInstance().isNewDay(t, Date.now());
  }
  _getTile2MainLevel() {
    return UserModel.getInstance().tile2NormalData.getLevelId();
  }
  _updatePlayTracking() {
    this.localData.lastTile2PlayDate = Date.now();
    this.localData = this.localData;
    this._isColdStart = false;
  }
  _pushDarkenEffect(t, e, r = EInsertType.Parallel) {
    t && "function" == typeof t.pushEffect && t.pushEffect(new CardLockDarkenEffect({
      isAutoMerge: !e
    }), r);
  }
}
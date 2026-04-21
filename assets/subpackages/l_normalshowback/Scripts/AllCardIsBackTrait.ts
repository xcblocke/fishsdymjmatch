import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("AllCardIsBackTrait")
export default class AllCardIsBackTrait extends Trait {
  _gameTypes = [MjGameType.Normal];
  static traitKey = "AllCardIsBack";
  onLoad() {
    var t, o;
    super.onLoad.call(this);
    this._gameTypes = null !== (o = null === (t = this._traitData) || void 0 === t ? void 0 : t.gameTypes) && void 0 !== o ? o : [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
    this.localData.shuffledByGameType || (this.localData.shuffledByGameType = {});
    this.registerEvent([{
      event: "IptSetLv_newGComp",
      type: TraitEventPositionType.after
    }]);
  }
  hasShuffledForType(e) {
    var t;
    return true === (null === (t = this.localData.shuffledByGameType) || void 0 === t ? void 0 : t[e]);
  }
  setShuffledForType(e, t) {
    this.localData.shuffledByGameType || (this.localData.shuffledByGameType = {});
    this.localData.shuffledByGameType[e] = t;
    this.localData.shuffledByGameType = this.localData.shuffledByGameType;
  }
  getMessageListeners() {
    var _e = {};
    _e[EGameEvent.Behavior_ShuffleStayEnd] = this.onShuffleStayEndCB.bind(this);
    return _e;
  }
  shouldHandleFlip(e) {
    return e !== ETileType.RankCard && e !== ETileType.Yoga && e !== ETileType.RollCard;
  }
  isBackCardLevel(e) {
    var t, o, i, r, a, n;
    return ((null === (n = null === (a = null === (r = null === (i = null === (o = null === (t = null == e ? void 0 : e.getTileMapObject) || void 0 === t ? void 0 : t.call(e)) || void 0 === o ? void 0 : o.gameContext) || void 0 === i ? void 0 : i.getGameData) || void 0 === r ? void 0 : r.call(i)) || void 0 === a ? void 0 : a.getTileTypes) || void 0 === n ? void 0 : n.call(a)) || "").split(",").includes(ETileType.RollCard);
  }
  isGameTypeOpen(e) {
    return -1 !== this._gameTypes.indexOf(e);
  }
  onIptSetLv_newGComp(e, t) {
    var o = e.ins,
      i = null == o ? void 0 : o.gameContext;
    this.setShuffledForType(i.gameType, false);
    this.localData.shuffledByGameType = this.localData.shuffledByGameType;
    t();
  }
  onShuffleStayEndCB(e) {
    var t = null == e ? void 0 : e.context;
    t && this.isGameTypeOpen(t.gameType) && (this.isBackCardLevel(t) || this.setShuffledForType(t.gameType, true));
  }
  updateSpecialCardEffect(e, t, o) {
    var i = "";
    if (t === ETileType.DaxiaoCard) i = "DaxiaoCardFlagNode";else {
      if (t !== ETileType.DuoxiaoCard) return;
      i = "DuoxiaoCardFlagNode";
    }
    var r = e.tileNode;
    if (r && cc.isValid(r)) {
      var a = r.getChildByName(i);
      a && (a.active = o);
    }
  }
  onInitViewBhv_crtTls(e, t) {
    var o,
      i,
      r = this,
      a = e.ins,
      n = null == a ? void 0 : a.context;
    if (n) {
      if (this.isGameTypeOpen(n.gameType)) {
        if (this.isBackCardLevel(n)) t();else {
          var l = n.gameType,
            p = this.hasShuffledForType(l),
            s = null === (o = n.getTileNodeManager) || void 0 === o ? void 0 : o.call(n);
          ((null === (i = null == s ? void 0 : s.getTileNodes) || void 0 === i ? void 0 : i.call(s)) || []).forEach(function (e) {
            var t,
              o,
              i,
              a = e.info.tileObject.type;
            if (r.shouldHandleFlip(a)) {
              e.updateNormalFlip();
              if (p) {
                null === (t = e.normalFlip) || void 0 === t || t.forceEnter();
                r.updateSpecialCardEffect(e, a, true);
              } else if (2 === e.info.tileObject.isCardLock()) {
                null === (o = e.normalFlip) || void 0 === o || o.forceExit();
                r.updateSpecialCardEffect(e, a, false);
              } else {
                null === (i = e.normalFlip) || void 0 === i || i.forceEnter();
                r.updateSpecialCardEffect(e, a, true);
              }
            }
          });
          t();
        }
      } else t();
    } else t();
  }
  onClearBhv_collision(e, t) {
    var o = this,
      i = e.ins;
    if (this.isGameTypeOpen(i.context.gameType)) {
      if (this.isBackCardLevel(i.context)) t();else if (this.hasShuffledForType(i.context.gameType)) t();else {
        i.context.getTileNodeManager().getTileNodes().forEach(function (e) {
          var t = e.info.tileObject.type;
          if (o.shouldHandleFlip(t)) {
            var i = e.normalFlip;
            i && !i.hasRun && 2 !== e.info.tileObject.isCardLock() && i.tryPlayAni();
          }
        });
        t();
      }
    } else t();
  }
  onNorFlipStateAni_onEnd(e, t) {
    var o = e.ins,
      i = null == o ? void 0 : o._baseTileNode;
    if (i) {
      if (this.isGameTypeOpen(i.context.gameType) && !this.isBackCardLevel(i.context)) {
        var r = i.info.tileObject.type;
        this.shouldHandleFlip(r) && this.updateSpecialCardEffect(i, r, true);
        t();
      } else t();
    } else t();
  }
  getAnimCfg() {
    return {
      path: "spine/spinebase/gameplay_flip_regular",
      anims: ["normal_in_1", "normal_in_2"],
      bundleName: "l_normalshowback"
    };
  }
  onNorFlipStateAni_spineCfg(e, t) {
    t({
      returnVal: this.getAnimCfg(),
      isBreak: true,
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTileNodeObj_reToNormal(e, t) {
    var o,
      i = e.ins;
    if (this.isGameTypeOpen(i.context.gameType)) {
      if (this.isBackCardLevel(i.context)) t();else {
        var r = i.info.tileObject.type;
        if (this.shouldHandleFlip(r)) {
          null === (o = i.normalFlip) || void 0 === o || o.forceEnter();
          this.updateSpecialCardEffect(i, r, true);
        }
        t();
      }
    } else t();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { EVT_MSG_KEY_EVENT_HIDE, EVT_MSG_KEY_EVENT_SHOW } from '../../../Scripts/Config';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { AddDuoxiaoOutTimeBehavior } from './AddDuoxiaoOutTimeBehavior';
import { ADD_DUOXIAO_OUT_TIME_BEHAVIOR, AddDuoxiaoOutTimeEffect } from './AddDuoxiaoOutTimeEffect';
@mj.trait
@mj.class("AddDuoxiaoOutTimeTrait")
export default class AddDuoxiaoOutTimeTrait extends Trait {
  _lastUpdateTimeSnapshot = 0;
  _pendingInitTileId = "";
  static traitKey = "AddDuoxiaoOutTime";
  onLoad() {
    var t, i, o, a, n, r, s, l, c;
    super.onLoad.call(this);
    this._config = {
      offlineHours: null !== (i = null === (t = this._traitData) || void 0 === t ? void 0 : t.offlineHours) && void 0 !== i ? i : 24,
      duoxiaoCount: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.duoxiaoCount) && void 0 !== a ? a : 4,
      checkCount: null !== (r = null === (n = this._traitData) || void 0 === n ? void 0 : n.checkCount) && void 0 !== r ? r : 2,
      gameTypes: null !== (l = null === (s = this._traitData) || void 0 === s ? void 0 : s.gameTypes) && void 0 !== l ? l : [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge]
    };
    this.localData.addedTileIds || (this.localData.addedTileIds = "");
    BehaviorFactory.registerBehavior(ADD_DUOXIAO_OUT_TIME_BEHAVIOR, AddDuoxiaoOutTimeBehavior);
    var p = UserModel.getInstance().normalData;
    this._lastUpdateTimeSnapshot = (null === (c = p.localData) || void 0 === c ? void 0 : c.lastUpdateTime) || 0;
  }
  getMessageListeners() {
    var _e = {};
    _e[EVT_MSG_KEY_EVENT_HIDE] = this._onAppHide.bind(this);
    _e[EVT_MSG_KEY_EVENT_SHOW] = this._onAppShow.bind(this);
    return _e;
  }
  _onAppHide() {
    this._lastUpdateTimeSnapshot = Date.now();
  }
  _onAppShow() {
    if (0 !== this._lastUpdateTimeSnapshot && !this._isGuideActive()) {
      if ((Date.now() - this._lastUpdateTimeSnapshot) / 3600000 < this._config.offlineHours) this._lastUpdateTimeSnapshot = Date.now();else {
        GameInteraction.input({
          inputType: EGameInputEnum.GameActive
        });
        this._lastUpdateTimeSnapshot = Date.now();
      }
    }
  }
  isGameTypeEnabled(e) {
    var t = this._config.gameTypes;
    return !t || 0 === t.length || t.includes(e);
  }
  _isGuideActive() {
    var e = UserModel.getInstance().getMainGameData(),
      t = 1;
    e && (t = e.getLevelId());
    return !UserModel.getInstance().isGuideFinished() || 1 === t;
  }
  isOfflineLongEnough() {
    return 0 !== this._lastUpdateTimeSnapshot && (Date.now() - this._lastUpdateTimeSnapshot) / 3600000 >= this._config.offlineHours;
  }
  hasBoardBlockingCondition(e) {
    var t,
      i,
      o = e.getTileMapObject(),
      a = 0;
    try {
      for (var n = __values(o.aliveTiles()), s = n.next(); !s.done; s = n.next()) {
        var u = s.value;
        if (u.type === ETileType.DuoxiaoCard && ++a >= this._config.checkCount) return true;
        if (u.type === ETileType.DaxiaoCard) return true;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (i = n.return) && i.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    return false;
  }
  convertOneTileToDuoxiao(e) {
    var t = e.getTileMapObject(),
      i = t.aliveTiles().filter(function (e) {
        return e.type === ETileType.Normal;
      });
    if (0 === i.length) return null;
    var o = i[Math.floor(Math.random() * i.length)];
    t.setDuoxiaoCount(o.id, this._config.duoxiaoCount);
    t.setTileType(o.id, ETileType.DuoxiaoCard);
    var a = this.localData.addedTileIds ? this.localData.addedTileIds.split(",").filter(function (e) {
      return e;
    }) : [];
    a.push(o.id);
    this.localData.addedTileIds = a.join(",");
    this.addOurEntryToGameData(e, o.id, this._config.duoxiaoCount);
    return o.id;
  }
  addOurEntryToGameData(e, t, i) {
    var o = e.getGameData(),
      a = o.getTileId2Type();
    try {
      var n = a ? JSON.parse(a) : {};
      n[t] = ETileType.DuoxiaoCard;
      o.setTileId2Type(JSON.stringify(n));
    } catch (e) {}
    var r = o.getTileTypesExtra();
    try {
      var s = r ? JSON.parse(r) : {};
      s[t] = {
        duoxiaoCount: i
      };
      o.setTileTypesExtra(JSON.stringify(s));
    } catch (e) {}
  }
  removeOurEntriesFromGameData(e) {
    var t,
      i,
      o,
      a,
      n = this.localData.addedTileIds ? this.localData.addedTileIds.split(",").filter(function (e) {
        return e;
      }) : [];
    if (0 !== n.length) {
      var s = e.getTileId2Type();
      if (s) try {
        var l = JSON.parse(s),
          u = false;
        try {
          for (var d = __values(n), c = d.next(); !c.done; c = d.next()) if ((T = c.value) in l) {
            delete l[T];
            u = true;
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            c && !c.done && (i = d.return) && i.call(d);
          } finally {
            if (t) throw t.error;
          }
        }
        u && e.setTileId2Type(JSON.stringify(l));
      } catch (e) {}
      var p = e.getTileTypesExtra();
      if (p) try {
        var f = JSON.parse(p);
        u = false;
        try {
          for (var h = __values(n), v = h.next(); !v.done; v = h.next()) {
            var T;
            if ((T = v.value) in f) {
              delete f[T];
              u = true;
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            v && !v.done && (a = h.return) && a.call(h);
          } finally {
            if (o) throw o.error;
          }
        }
        u && e.setTileTypesExtra(JSON.stringify(f));
      } catch (e) {}
      this.localData.addedTileIds = "";
    }
  }
  onTileTyModiy_resetMTypes(e, t) {
    var i = e.ins._context || e.ins.context;
    if (i) {
      if (i.getIsRestart()) {
        if (this.isGameTypeEnabled(i.gameType)) {
          this.removeOurEntriesFromGameData(i.getGameData());
          t();
        } else t();
      } else t();
    } else t();
  }
  onIptGameAct_doGTiles(e, t) {
    var i = e.ins,
      o = null == i ? void 0 : i.gameContext;
    if (o) {
      if (this._isGuideActive()) t();else if (this.isGameTypeEnabled(o.gameType)) {
        if (this.hasBoardBlockingCondition(o)) t();else {
          var a = this.convertOneTileToDuoxiao(o);
          a && i.pushEffect(new AddDuoxiaoOutTimeEffect({
            tileId: a
          }), EInsertType.Parallel);
          t();
        }
      } else t();
    } else t();
  }
  onIptInitView_pushEff(e, t) {
    var i = e.ins;
    if (null == i ? void 0 : i.gameContext) {
      var o = i.gameContext,
        a = o.gameType;
      if (this.isGameTypeEnabled(a)) {
        if (this._isGuideActive()) t();else if (o.getIsRestart()) t();else {
          o.getIsNewGame() && (this.localData.addedTileIds = "");
          if (this.isOfflineLongEnough()) {
            if (this.hasBoardBlockingCondition(o)) {
              this._lastUpdateTimeSnapshot = Date.now();
              t();
            } else {
              var n = this.convertOneTileToDuoxiao(o);
              n && (this._pendingInitTileId = n);
              this._lastUpdateTimeSnapshot = Date.now();
              t();
            }
          } else {
            this._lastUpdateTimeSnapshot = Date.now();
            t();
          }
        }
      } else t();
    } else t();
  }
  onInitViewBhv_crtTls(e, t) {
    var i, o, a;
    t();
    if (this._pendingInitTileId) {
      var n = (null === (i = e.ins) || void 0 === i ? void 0 : i._context) || (null === (o = e.ins) || void 0 === o ? void 0 : o.context);
      if (n) {
        var r = null === (a = n.getTileNodeMap) || void 0 === a ? void 0 : a.call(n);
        if (r) {
          var s = r.get(this._pendingInitTileId),
            l = null == s ? void 0 : s.tileNode;
          if (l && cc.isValid(l)) {
            var u = l.getChildByName("DuoxiaoCardFlagNode");
            u && (u.active = false);
          }
        }
      }
    }
  }
  onIptEnterAniFin_excute(e, t) {
    if (this._pendingInitTileId) {
      e.ins.pushEffect(new AddDuoxiaoOutTimeEffect({
        tileId: this._pendingInitTileId
      }), EInsertType.Serial);
      this._pendingInitTileId = "";
      t();
    } else t();
  }
}
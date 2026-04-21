import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ReturnAutoShuffleTrait")
export default class ReturnAutoShuffleTrait extends Trait {
  _matchThreshold = 1;
  _cdHours = 3.5;
  _isCdChange = false;
  _startLevel = 2;
  static traitKey = "ReturnAutoShuffle";
  _getLastInGameTimeMs(t) {
    return this.localData.lastInGameTimeMsMap[t] || 0;
  }
  _setLastInGameTimeMs(t, a) {
    this.localData.lastInGameTimeMsMap[t] = a;
    this.localData.lastInGameTimeMsMap = this.localData.lastInGameTimeMsMap;
  }
  _getHasNormalExit(t) {
    return this.localData.hasNormalExitMap[t] || false;
  }
  _setHasNormalExit(t, a) {
    this.localData.hasNormalExitMap[t] = a;
    this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
  }
  _updateContinuousLoginDays() {
    var t = Date.now(),
      a = this.localData.lastLoginDate;
    if (a) {
      var e = new Date(a),
        i = new Date(t);
      if (e.getFullYear() !== i.getFullYear() || e.getMonth() !== i.getMonth() || e.getDate() !== i.getDate()) {
        if (1 === this._getDaysDiff(a, t)) {
          this.localData.continuousLoginDays++;
          this.localData.lastLoginDate = t;
        } else {
          this.localData.continuousLoginDays = 0;
          this.localData.lastLoginDate = t;
        }
        this.localData.continuousLoginDays = this.localData.continuousLoginDays;
        this.localData.lastLoginDate = this.localData.lastLoginDate;
      }
    } else {
      this.localData.continuousLoginDays = 0;
      this.localData.lastLoginDate = t;
    }
  }
  _getDaysDiff(t, a) {
    var e = new Date(t),
      i = new Date(a);
    e.setHours(0, 0, 0, 0);
    i.setHours(0, 0, 0, 0);
    var o = Math.abs(i.getTime() - e.getTime());
    return Math.floor(o / 86400000);
  }
  _getContinuousLoginDays() {
    return 0 === this.localData.continuousLoginDays ? 1 : this.localData.continuousLoginDays;
  }
  _getCurrentCdHours() {
    if (!this._isCdChange) return this._cdHours;
    var t = this._getContinuousLoginDays();
    return this._cdHours * t;
  }
  onLoad() {
    var a, e, i, o, s;
    super.onLoad.call(this);
    this._matchThreshold = (null === (a = this._traitData) || void 0 === a ? void 0 : a.matchThreshold) || 1;
    this._cdHours = (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdHours) || 3.5;
    this._isCdChange = (null === (i = this._traitData) || void 0 === i ? void 0 : i.isCdChange) || false;
    this._startLevel = (null === (o = this._traitData) || void 0 === o ? void 0 : o.startLevel) || 2;
    this.localData.currentGameType || (this.localData.currentGameType = "");
    this.localData.lastInGameTimeMsMap || (this.localData.lastInGameTimeMsMap = {});
    this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
    void 0 === this.localData.continuousLoginDays && (this.localData.continuousLoginDays = 0);
    this.localData.lastLoginDate || (this.localData.lastLoginDate = 0);
    this._isCdChange && this._updateContinuousLoginDays();
    if (this.localData.currentGameType) {
      var r = this.localData.currentGameType;
      if (!this._getHasNormalExit(r)) {
        var l = (null === (s = UserModel.getInstance().getGameDataByGameType(r).localData) || void 0 === s ? void 0 : s.lastUpdateTime) || 0;
        this._setLastInGameTimeMs(r, l || Date.now());
      }
    }
  }
  onMainGameCtrl_uiDes(t, a) {
    if (UserModel.getInstance().normalData.getLevelId() < this._startLevel) a();else {
      var e = this.localData.currentGameType;
      if (e !== MjGameType.Tile2Normal) {
        if (e) {
          this._setHasNormalExit(e, true);
          this._setLastInGameTimeMs(e, Date.now());
          a();
        } else a();
      } else a();
    }
  }
  onIptInitView_pushEff(t, a) {
    var e = t.ins;
    if (e && e.gameContext) {
      var i = e.gameContext,
        o = i.getTileMapObject(),
        s = i.gameType;
      this.localData.currentGameType = s;
      if (s !== MjGameType.Tile2Normal) {
        if (UserModel.getInstance().normalData.getLevelId() < this._startLevel) a();else {
          var r = i.getIsNewGame(),
            u = i.getIsRestart();
          if (r || u) {
            this._resetNormalExit(s);
            a();
          } else {
            var c = this._getLastInGameTimeMs(s);
            this._getHasNormalExit(s);
            if (c) {
              var h = Date.now(),
                f = 3600000 * this._getCurrentCdHours(),
                p = h - c;
              if (p < 0) {
                this._resetNormalExit(s);
                a();
              } else if (p < f) {
                this._resetNormalExit(s);
                a();
              } else {
                if (o.getCanMatchCardPairNum() == this._matchThreshold) {
                  i.shuffleModifier.shuffle();
                  o.updateCanMatchTiles();
                  i.gameModifier.modifyShuffle();
                  this._resetNormalExit(s);
                  a();
                } else {
                  this._resetNormalExit(s);
                  a();
                }
              }
            } else {
              this._resetNormalExit(s);
              a();
            }
          }
        }
      } else a();
    } else a();
  }
  _resetNormalExit(t) {
    this._setHasNormalExit(t, false);
    this._setLastInGameTimeMs(t, Date.now());
    this.localData.currentGameType = t;
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("IdleReturnShuffleTrait")
export default class IdleReturnShuffleTrait extends Trait {
  _idleSeconds = 10;
  _maxTriggersPerLevel = 3;
  _startLevel = 2;
  static traitKey = "IdleReturnShuffle";
  _getLevelKey(t, e) {
    return t + "-" + e;
  }
  _getTriggerCount(t, e) {
    var a = this._getLevelKey(t, e);
    return this.localData.triggerCountMap[a] || 0;
  }
  _incrementTriggerCount(t, e) {
    var a = this._getLevelKey(t, e),
      r = this._getTriggerCount(t, e);
    this.localData.triggerCountMap[a] = r + 1;
    this.localData.triggerCountMap = this.localData.triggerCountMap;
  }
  _getHasIdled(t) {
    return this.localData.hasIdledMap[t] || false;
  }
  _setHasIdled(t, e) {
    this.localData.hasIdledMap[t] = e;
    this.localData.hasIdledMap = this.localData.hasIdledMap;
  }
  _getLastMatchTimeMs(t) {
    return this.localData.lastMatchTimeMsMap[t] || 0;
  }
  _setLastMatchTimeMs(t, e) {
    this.localData.lastMatchTimeMsMap[t] = e;
    this.localData.lastMatchTimeMsMap = this.localData.lastMatchTimeMsMap;
  }
  _getHasNormalExit(t) {
    return this.localData.hasNormalExitMap[t] || false;
  }
  _setHasNormalExit(t, e) {
    this.localData.hasNormalExitMap[t] = e;
    this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
  }
  onLoad() {
    var e, a, r, i;
    super.onLoad.call(this);
    this._idleSeconds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.idleSeconds) || 10;
    this._maxTriggersPerLevel = (null === (a = this._traitData) || void 0 === a ? void 0 : a.maxTriggersPerLevel) || 3;
    this._startLevel = (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) || 2;
    this.localData.currentGameType || (this.localData.currentGameType = "");
    this.localData.currentLevelId || (this.localData.currentLevelId = 0);
    this.localData.triggerCountMap || (this.localData.triggerCountMap = {});
    this.localData.hasIdledMap || (this.localData.hasIdledMap = {});
    this.localData.lastMatchTimeMsMap || (this.localData.lastMatchTimeMsMap = {});
    this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
    if (this.localData.currentGameType) {
      var s = this.localData.currentGameType,
        l = this._getHasNormalExit(s),
        n = this._getLastMatchTimeMs(s);
      if (!l && n > 0) {
        (((null === (i = UserModel.getInstance().getGameDataByGameType(s).localData) || void 0 === i ? void 0 : i.lastUpdateTime) || 0) - n) / 1000 >= this._idleSeconds && this._setHasIdled(s, true);
      }
    }
    var c = this._getLevelKey(this.localData.currentGameType, this.localData.currentLevelId);
    this.localData.triggerCountMap[c], this._getHasIdled(this.localData.currentGameType);
  }
  onClearBhv_collision(t, e) {
    var a = UserModel.getInstance();
    if (a.normalData.getLevelId() < this._startLevel) e();else {
      var r = a.getCurrentGameType(),
        i = Date.now();
      this._setLastMatchTimeMs(r, i);
      e();
    }
  }
  onMainGameCtrl_uiDes(t, e) {
    var a = UserModel.getInstance();
    if (a.normalData.getLevelId() < this._startLevel) e();else {
      var r = this.localData.currentGameType || a.getCurrentGameType();
      this._setHasNormalExit(r, true);
      var i = this._getLastMatchTimeMs(r);
      if (i && 0 !== i) {
        if ((Date.now() - i) / 1000 >= this._idleSeconds) {
          this._setHasIdled(r, true);
        } else {
          this._setHasIdled(r, false);
        }
        e();
      } else e();
    }
  }
  onIptInitView_pushEff(t, e) {
    var a = t.ins;
    if (a && a.gameContext) {
      var r = a.gameContext,
        i = r.getTileMapObject();
      if (UserModel.getInstance().normalData.getLevelId() < this._startLevel) e();else {
        var s = r.getIsNewGame(),
          l = r.getIsRestart(),
          n = r.getGameData().getLevelId(),
          c = r.gameType;
        this.localData.currentGameType = c;
        if (s || l) {
          this.localData.currentLevelId, this.localData.currentGameType;
          this._setHasIdled(c, false);
          this._setHasNormalExit(c, false);
          this._setLastMatchTimeMs(c, Date.now());
          this.localData.currentGameType = c;
          this.localData.currentLevelId = n;
          e();
        } else if (this._getHasIdled(c)) {
          if (this._getTriggerCount(c, n) >= this._maxTriggersPerLevel) {
            this._setHasIdled(c, false);
            this._setHasNormalExit(c, false);
            e();
          } else {
            r.shuffleModifier.shuffle();
            i.updateCanMatchTiles();
            r.gameModifier.modifyShuffle();
            this._incrementTriggerCount(c, n);
            this._setHasIdled(c, false);
            this._setHasNormalExit(c, false);
            this._setLastMatchTimeMs(c, Date.now());
            this.localData.currentGameType = c;
            this.localData.currentLevelId = n;
            this._getTriggerCount(c, n);
            e();
          }
        } else {
          var h = this._getLastMatchTimeMs(c);
          h && 0 !== h || this._setLastMatchTimeMs(c, Date.now());
          this._setHasNormalExit(c, false);
          e();
        }
      }
    } else e();
  }
}
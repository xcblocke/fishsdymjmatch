import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
var p = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];
var m = {
  1: "Z_dong",
  2: "Z_nan",
  3: "Z_xi",
  4: "Z_bei",
  5: "Z_zhong",
  6: "Z_fa",
  7: "Z_bai",
  8: "H_mei",
  9: "J_chun"
};
@mj.trait
@mj.class("WinStreakBaseCardSkinTrait")
export default class WinStreakBaseCardSkinTrait extends Trait {
  _config = {};
  _currentGameType = MjGameType.Normal;
  _cachedIsFeatureEnabled = false;
  _lastGameType = null;
  static traitKey = "WinStreakBaseCardSkin";
  get _starThemesList() {
    return FlowerStarConfigUtil.getStarList();
  }
  onLoad() {
    var e,
      a,
      r = (this._traitData.events || []).find(function (t) {
        return "MainGameCtrl_initRes" === t.event;
      });
    r && void 0 === r.type && (r.type = 2);
    super.onLoad.call(this);
    this.registerEvent([{
      event: "DotUtil_getBaseTheme"
    }, {
      event: "Tile2WinCtrl_viewShow"
    }]);
    this._config = {
      startLevel: null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== a ? a : 2
    };
    this.resetWinStreak();
    this.addRemoteBundlesToLoader();
  }
  resetWinStreak() {
    var t, e, a, r;
    this.localData.winStreak = 0;
    this.localData.currentTheme = null;
    this.localData.activeCardIds = [];
    null !== (t = (a = this.localData).lastTriggerThemeId) && void 0 !== t || (a.lastTriggerThemeId = null);
    null !== (e = (r = this.localData).lastRoundThemeId) && void 0 !== e || (r.lastRoundThemeId = null);
    this.saveLocalData();
  }
  addRemoteBundlesToLoader() {
    var t = LowPriorityBundleLoader.getInstance(),
      e = this._starThemesList.filter(function (t) {
        return !t.isLocal;
      }).map(function (t) {
        return t.bundle;
      });
    Array.from(new Set(e)).forEach(function (e) {
      t.addTask(e, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    });
  }
  onMainGameCtrl_initRes(t, e) {
    try {
      var a = t.ins;
      this._currentGameType = a.gameType;
      null !== this._lastGameType && this._lastGameType !== this._currentGameType && this.resetWinStreak();
      this._lastGameType = this._currentGameType;
      var r = UserModel.getInstance(),
        i = r.getMainGameType();
      if (this._currentGameType !== i) {
        this._cachedIsFeatureEnabled = false;
        e();
        return;
      }
      var n = r.getMainGameData(),
        o = (null == n ? void 0 : n.getLevelId()) || 0;
      this._cachedIsFeatureEnabled = o >= this._config.startLevel;
      this._cachedIsFeatureEnabled && this.localData.currentTheme && this.localData.activeCardIds.length > 0 && this.addPreloadThemeAtlas(a);
    } finally {
      e();
    }
  }
  onGsListener_onReplayGame(t, e) {
    this.resetWinStreak();
    e();
  }
  onWinCtrl_viewShow(t, e) {
    this.handleWinViewShow(t, e);
  }
  onTile2WinCtrl_viewShow(t, e) {
    this.handleWinViewShow(t, e);
  }
  handleWinViewShow(t, e) {
    var a,
      r = UserModel.getInstance(),
      i = r.getMainGameType();
    if (this._currentGameType === i) {
      var n = r.getMainGameData();
      if (((null == n ? void 0 : n.getLevelId()) || 0) < this._config.startLevel) e();else {
        this._cachedIsFeatureEnabled = true;
        this.localData.winStreak++;
        var o = this.localData.winStreak;
        if (3 === o) {
          this.drawNewThemeAndCards(3);
        } else {
          if (4 === o) {
            this.addMoreCards(3);
          } else {
            if (5 === o) {
              this.addMoreCards(3);
            } else {
              o >= 6 && this.drawNewThemeForStreak6Plus();
            }
          }
        }
        this.saveLocalData();
        var l = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
        this.localData.currentTheme && this.localData.activeCardIds.length > 0 && this.loadThemeAtlas(l);
        e();
      }
    } else e();
  }
  drawNewThemeAndCards(t) {
    var e = this.drawRandomTheme(this.localData.lastTriggerThemeId);
    if (e) {
      this.localData.currentTheme = e;
      this.localData.lastTriggerThemeId = e.id;
      this.localData.lastRoundThemeId = e.id;
      this.localData.activeCardIds = this.drawRandomCardIds(t, []);
    }
  }
  addMoreCards(t) {
    if (this.localData.currentTheme) {
      var e = this.drawRandomCardIds(t, this.localData.activeCardIds);
      this.localData.activeCardIds = [...this.localData.activeCardIds, ...e];
    }
  }
  drawNewThemeForStreak6Plus() {
    var t = this.drawRandomTheme(this.localData.lastRoundThemeId);
    if (t) {
      this.localData.currentTheme = t;
      this.localData.lastRoundThemeId = t.id;
      this.localData.activeCardIds = this.drawRandomCardIds(9, []);
    }
  }
  drawRandomTheme(t) {
    var e = this,
      a = this._starThemesList.filter(function (a) {
        return (null === t || a.id !== t) && (!!a.isLocal || e.isBundleReady(a.bundle));
      });
    if (0 === a.length) {
      var r = this._starThemesList.filter(function (t) {
        return !!t.isLocal || e.isBundleReady(t.bundle);
      });
      return 0 === r.length ? null : r[Math.floor(Math.random() * r.length)];
    }
    return a[Math.floor(Math.random() * a.length)];
  }
  drawRandomCardIds(t, e) {
    var a = new Set();
    e.forEach(function (t) {
      var e = t.match(/[Wbt](\d)/);
      e && a.add(Number.parseInt(e[1]));
    });
    for (var r = p.filter(function (t) {
        if (e.includes(t)) return false;
        var r = t.match(/[Wbt](\d)/);
        return !r || !a.has(Number.parseInt(r[1]));
      }), i = [], n = 0; n < t && r.length > 0; n++) {
      var o = Math.floor(Math.random() * r.length),
        l = r[o];
      i.push(l);
      r.splice(o, 1);
      var s = l.match(/[Wbt](\d)/);
      if (s) {
        var d = Number.parseInt(s[1]);
        a.add(d);
        for (var c = r.length - 1; c >= 0; c--) {
          var u = r[c].match(/[Wbt](\d)/);
          u && Number.parseInt(u[1]) === d && r.splice(c, 1);
        }
      }
    }
    return i;
  }
  isBundleReady(t) {
    return LowPriorityBundleLoader.getInstance().isBundlePreLoaded(t);
  }
  onCardUtil_atlasPathBundle(t, e) {
    if (this._cachedIsFeatureEnabled && this.localData.currentTheme && 0 !== this.localData.activeCardIds.length) {
      var a = t.args[0];
      if (a) {
        if (this.localData.activeCardIds.includes(a)) {
          var r = this.mapToFlowerCardName(a);
          if (r) {
            var i = this.localData.currentTheme;
            e({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: {
                path: "atlas/flowerCardIcon/" + r,
                bundleName: i.bundle,
                fromAtlas: true
              }
            });
          } else e();
        } else e();
      } else e();
    } else e();
  }
  mapToFlowerCardName(t) {
    var e = t.match(/[Wbt](\d)/);
    if (!e) return null;
    var a = Number.parseInt(e[1]);
    return m[a] || null;
  }
  addPreloadThemeAtlas(t) {
    if (t && "function" == typeof t.addPreloadRes && this.localData.currentTheme) {
      var e = this.localData.currentTheme.bundle + ":atlas/flowerCardIcon";
      t.addPreloadRes("SpriteAtlas", e);
    }
  }
  loadThemeAtlas(t) {
    if (t && "function" == typeof t.loadRes && this.localData.currentTheme) {
      var e = this.localData.currentTheme;
      (e.isLocal || this.isBundleReady(e.bundle)) && t.loadRes("atlas/flowerCardIcon", cc.SpriteAtlas, e.bundle).catch(function () {});
    }
  }
  saveLocalData() {
    this.localData.winStreak = this.localData.winStreak;
  }
  onDotUtil_getBaseTheme(t, e) {
    var a,
      r,
      i = this;
    try {
      if (!this._cachedIsFeatureEnabled || !this.localData.currentTheme || 0 === this.localData.activeCardIds.length) {
        e();
        return;
      }
      var n = this.localData.activeCardIds,
        o = null !== (r = null === (a = this.localData.currentTheme) || void 0 === a ? void 0 : a.name) && void 0 !== r ? r : "",
        l = n.map(function (t) {
          var e = i.mapToFlowerCardName(t),
            a = e.split("_");
          return a.length > 1 ? o + "_" + a[a.length - 1] + "_" + t : o + "_" + e + "_" + t;
        });
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: {
          active: 1,
          map: l,
          id: o
        }
      });
    } catch (t) {
      e();
    }
  }
}
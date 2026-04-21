import { EVT_MSG_KEY_RESETTHEME, EVT_MSG_KEY_CHANGETHEME } from '../../../Scripts/Config';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import BaseSprite, { SPRITE_LOAD_COMPLETE } from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
var y = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge, MjGameType.Tile2Normal];
@mj.trait
@mj.class("DailyWallpaperTrait")
export default class DailyWallpaperTrait extends Trait {
  _startDay = 2;
  static traitKey = "DailyWallpaper";
  static C_BUNDLE_NAME = "r_changeWallpaper";
  static C_THEME_PREFIX = "DailyWallpaperTheme";
  static WALLPAPER_LIST = [{
    type: "DailyWallpaperTheme8",
    path: "texture/8/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme11",
    path: "texture/11/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme6",
    path: "texture/6/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme10",
    path: "texture/10/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme2",
    path: "texture/2/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme5",
    path: "texture/5/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme4",
    path: "texture/4/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme7",
    path: "texture/7/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme9",
    path: "texture/9/gameplay_bg_board"
  }, {
    type: "DailyWallpaperTheme1",
    path: "texture/1/gameplay_bg_board"
  }];
  onLoad() {
    var t, a;
    super.onLoad.call(this);
    this._startDay = null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.startDay) && void 0 !== a ? a : 2;
    void 0 === this.localData.wallpaperIndex && (this.localData.wallpaperIndex = 0);
    this.localData.lastShowTimestamp || (this.localData.lastShowTimestamp = 0);
    this.localData.lastWinTimestamp || (this.localData.lastWinTimestamp = 0);
    void 0 === this.localData.todayStartWallpaperIndex && (this.localData.todayStartWallpaperIndex = -1);
    this.localData.recordDate || (this.localData.recordDate = 0);
    this.registerEvent([{
      event: "Tile2WinVw_show"
    }]);
  }
  isSameDay(e, t) {
    var a = new Date(e),
      r = new Date(t);
    return a.getFullYear() === r.getFullYear() && a.getMonth() === r.getMonth() && a.getDate() === r.getDate();
  }
  getTodayDate() {
    var e = new Date();
    return 10000 * e.getFullYear() + 100 * (e.getMonth() + 1) + e.getDate();
  }
  getDateFromTimestamp(e) {
    if (!e) return 0;
    var t = new Date(e);
    return 10000 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
  }
  isEnabled() {
    return !((UserModel.getInstance().getGameActiveDays() || 0) < this._startDay);
  }
  hasLastWallpaperWon() {
    return !!this.localData.lastShowTimestamp && !!this.localData.lastWinTimestamp && this.localData.lastWinTimestamp >= this.localData.lastShowTimestamp;
  }
  checkAndUpdateDailyRecord() {
    var e = this.getTodayDate();
    if (this.localData.recordDate !== e) {
      this.localData.todayStartWallpaperIndex = this.localData.wallpaperIndex;
      this.localData.todayStartWallpaperIndex = this.localData.todayStartWallpaperIndex;
      this.localData.recordDate = e;
      this.localData.recordDate = this.localData.recordDate;
      0 === this.localData.todayStartWallpaperIndex && this.localData.recordDate;
    }
  }
  hasTodayShownNewWallpaper() {
    if (this.localData.wallpaperIndex !== this.localData.todayStartWallpaperIndex) return true;
    if (this.localData.lastShowTimestamp > 0) {
      var e = this.getTodayDate();
      return this.getDateFromTimestamp(this.localData.lastShowTimestamp) === e;
    }
    return false;
  }
  hasTodayNewWallpaperWon() {
    return !!this.hasTodayShownNewWallpaper() && !!this.localData.lastWinTimestamp && this.localData.lastWinTimestamp >= this.localData.lastShowTimestamp;
  }
  markTodayWon() {
    var e,
      t = null === (e = UserModel.getInstance().getMainGameData()) || void 0 === e ? void 0 : e.getTheme();
    if (t && this.isDailyWallpaperTheme(t)) {
      var a = Date.now();
      this.localData.lastWinTimestamp = a;
      this.localData.lastWinTimestamp = this.localData.lastWinTimestamp;
    }
  }
  getCurrentWallpaper() {
    var e = this.localData.wallpaperIndex % DailyWallpaperTrait.WALLPAPER_LIST.length;
    return DailyWallpaperTrait.WALLPAPER_LIST[e];
  }
  nextWallpaper() {
    this.localData.wallpaperIndex = (this.localData.wallpaperIndex + 1) % DailyWallpaperTrait.WALLPAPER_LIST.length;
    this.localData.wallpaperIndex = this.localData.wallpaperIndex;
    this.localData.lastShowTimestamp = Date.now();
    this.localData.lastShowTimestamp = this.localData.lastShowTimestamp;
  }
  onMainGameCtrl_initRes(e, t) {
    if (this.isEnabled()) {
      if (this.hasTodayNewWallpaperWon()) t();else {
        if (!this.hasTodayShownNewWallpaper() && this.hasLastWallpaperWon()) {
          var r = (this.localData.wallpaperIndex + 1) % DailyWallpaperTrait.WALLPAPER_LIST.length,
            l = DailyWallpaperTrait.WALLPAPER_LIST[r];
          try {
            e.ins.addPreloadRes("SpriteFrame", [DailyWallpaperTrait.C_BUNDLE_NAME + ":" + l.path]);
          } catch (e) {}
        } else {
          var i = this.getCurrentWallpaper();
          try {
            e.ins.addPreloadRes("SpriteFrame", [DailyWallpaperTrait.C_BUNDLE_NAME + ":" + i.path]);
          } catch (e) {}
        }
        t();
      }
    } else t();
  }
  onWinVw_showWinVw(e, t) {
    this.isEnabled() && this.markTodayWon();
    t();
  }
  onTLWinVw_showTLWinVw(e, t) {
    this.isEnabled() && this.markTodayWon();
    t();
  }
  onDCWinVw_showWinVw(e, t) {
    this.isEnabled() && this.markTodayWon();
    t();
  }
  onTile2WinVw_show(e, t) {
    this.isEnabled() && this.markTodayWon();
    t();
  }
  handleGameStart(e = "") {
    var t;
    var a = UserModel.getInstance(),
      r = a.getCurrentGameType();
    this.checkAndUpdateDailyRecord();
    if (this.hasTodayNewWallpaperWon()) {
      if (r) {
        var l = null === (t = a.getMainGameData()) || void 0 === t ? void 0 : t.getTheme();
        if (l && this.isDailyWallpaperTheme(l)) {
          this.dispatchEvent(EVT_MSG_KEY_RESETTHEME, r, "", l);
          this.setThemeForAllGameTypes("");
        }
      }
    } else if (!this.hasTodayShownNewWallpaper() && this.hasLastWallpaperWon()) {
      this.nextWallpaper();
      if (r) {
        var i = this.getCurrentWallpaper();
        this.dispatchEvent(EVT_MSG_KEY_CHANGETHEME, r, i.type, true);
        this.setThemeForAllGameTypes(i.type);
      }
    } else {
      if (!this.localData.lastShowTimestamp) {
        this.localData.lastShowTimestamp = Date.now();
        this.localData.lastShowTimestamp = this.localData.lastShowTimestamp;
      }
      if (r) {
        i = this.getCurrentWallpaper();
        this.dispatchEvent(EVT_MSG_KEY_CHANGETHEME, r, i.type, true);
        this.setThemeForAllGameTypes(i.type);
        this.hasTodayShownNewWallpaper();
      }
    }
  }
  onGsListener_onNewGame(e, t) {
    if (this.isEnabled()) {
      this.handleGameStart();
      t();
    } else t();
  }
  onMainGmVw_beChangeTheme(e, t) {
    if (this.isEnabled()) {
      var a = e.ins,
        r = e.args[1];
      a && r && !this.isDailyWallpaperTheme(r) && this.resetBg(a);
      t();
    } else t();
  }
  onMainGmVw_afChangeTheme(e, t) {
    var a = e.ins,
      r = e.args[1];
    if (a && r && this.isDailyWallpaperTheme(r)) {
      var l = this.getCurrentWallpaper();
      l && this.changeBg(l, a);
    }
    t();
  }
  onMainGmVw_resetTheme(e, t) {
    var a = e.ins,
      r = e.args[2];
    if (r && this.isDailyWallpaperTheme(r)) {
      this.isEnabled() && this.markTodayWon();
      this.setThemeForAllGameTypes("", true);
      this.resetBg(a);
    }
    t();
  }
  onUISetDlgCtrl_showRstSkin(e, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
  isDailyWallpaperTheme(e) {
    return e && e.startsWith(DailyWallpaperTrait.C_THEME_PREFIX);
  }
  setThemeForAllGameTypes(e, t = false) {
    var a, r;
    var l = UserModel.getInstance(),
      i = l.getCurrentGameType();
    try {
      for (var n = __values(y), p = n.next(); !p.done; p = n.next()) {
        var s = p.value;
        if (s !== i) {
          var c = l.getGameDataByGameType(s);
          if (c) {
            var d = null == c ? void 0 : c.getTheme();
            if (t) {
              d && this.isDailyWallpaperTheme(d) && c.setTheme(e);
            } else {
              c.setTheme(e);
            }
          }
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (r = n.return) && r.call(n);
      } finally {
        if (a) throw a.error;
      }
    }
  }
  changeBg(e, t) {
    var r,
      l = t.gameNode;
    if (cc.isValid(l)) {
      var i = l.getSiblingIndex(),
        o = t.node.getChildByName("bg"),
        n = null === (r = null == o ? void 0 : o.parent) || void 0 === r ? void 0 : r.getChildByName("dailyWallpaperBg");
      cc.isValid(n) && n.destroy();
      var p = new cc.Node("dailyWallpaperBg");
      p.parent = null == o ? void 0 : o.parent;
      p.setSiblingIndex(i);
      p.once(SPRITE_LOAD_COMPLETE, function (e) {
        if (t && cc.isValid(t.node)) {
          var a = e.spriteFrame;
          if (a) {
            if (a.getRect().width > 0 && a.getRect().height > 0) {
              var r = cc.size(a.getRect().width, a.getRect().height);
              p.setContentSize(r);
              var l = cc.Canvas.instance.node.getContentSize(),
                i = r.width / r.height;
              if (l.width / l.height > i) {
                p.setScale(l.width / r.width);
              } else {
                p.setScale(l.height / r.height);
              }
            }
            var o = t.node.getChildByName("bg");
            cc.isValid(o) && (o.active = false);
          }
        }
      });
      BaseSprite.refreshWithNode(p, e.path, false, true, DailyWallpaperTrait.C_BUNDLE_NAME);
    }
  }
  resetBg(e) {
    if (e && cc.isValid(e.node)) {
      var t = e.node.getChildByName("bg"),
        a = e.node.getChildByName("dailyWallpaperBg");
      cc.isValid(t) && (t.active = true);
      cc.isValid(a) && a.destroy();
    }
  }
}
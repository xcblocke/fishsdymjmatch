import { EVT_MSG_KEY_RESETTHEME, EVT_MSG_KEY_CHANGETHEME } from '../../../Scripts/Config';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import BaseSprite, { SPRITE_LOAD_COMPLETE } from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("LevelWallpaperTrait")
export default class LevelWallpaperTrait extends Trait {
  _startLevel = 6;
  _levelInterval = 5;
  static traitKey = "LevelWallpaper";
  static C_BUNDLE_NAME = "r_changeWallpaper";
  static C_THEME_PREFIX = "LevelWallpaperTheme";
  static WALLPAPER_LIST = [{
    type: "LevelWallpaperTheme5",
    path: "texture/5/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme6",
    path: "texture/6/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme1",
    path: "texture/1/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme11",
    path: "texture/11/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme8",
    path: "texture/8/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme2",
    path: "texture/2/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme10",
    path: "texture/10/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme4",
    path: "texture/4/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme7",
    path: "texture/7/gameplay_bg_board",
    isDefault: false
  }, {
    type: "LevelWallpaperTheme9",
    path: "texture/9/gameplay_bg_board",
    isDefault: false
  }, {
    type: "",
    path: "",
    isDefault: true
  }];
  onLoad() {
    var t, a, r, l;
    super.onLoad.call(this);
    this._startLevel = null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== a ? a : 6;
    this._levelInterval = null !== (l = null === (r = this._traitData) || void 0 === r ? void 0 : r.levelInterval) && void 0 !== l ? l : 5;
  }
  getMainLineLevelId() {
    var e = UserModel.getInstance().getGameDataByGameType(MjGameType.Normal);
    return (null == e ? void 0 : e.getLevelId()) || 0;
  }
  isEnabled() {
    return !(this.getMainLineLevelId() < this._startLevel);
  }
  calculateWallpaperIndex(e) {
    return e < this._startLevel ? 0 : Math.floor((e - this._startLevel) / this._levelInterval) % LevelWallpaperTrait.WALLPAPER_LIST.length;
  }
  getCurrentWallpaper() {
    var e = this.getMainLineLevelId(),
      t = this.calculateWallpaperIndex(e);
    return LevelWallpaperTrait.WALLPAPER_LIST[t];
  }
  setThemeForAllGameTypes(e, t = false) {
    var a, r;
    var l = UserModel.getInstance(),
      i = l.getCurrentGameType(),
      n = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
    try {
      for (var p = __values(n), h = p.next(); !h.done; h = p.next()) {
        var d = h.value;
        if (d !== i) {
          var y = l.getGameDataByGameType(d);
          if (y) {
            var u = null == y ? void 0 : y.getTheme();
            if (t) {
              u && this.isLevelWallpaperTheme(u) && y.setTheme(e);
            } else {
              y.setTheme(e);
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
        h && !h.done && (r = p.return) && r.call(p);
      } finally {
        if (a) throw a.error;
      }
    }
  }
  onMainGameCtrl_initRes(e, t) {
    if (this.isEnabled()) {
      var r = this.getCurrentWallpaper();
      if (r.isDefault) t();else {
        try {
          e.ins.addPreloadRes("SpriteFrame", [LevelWallpaperTrait.C_BUNDLE_NAME + ":" + r.path]);
        } catch (e) {}
        t();
      }
    } else t();
  }
  onGsListener_onNewGame(e, t) {
    var a;
    if (this.isEnabled()) {
      var r = UserModel.getInstance(),
        l = r.getCurrentGameType();
      if (l == MjGameType.Normal) {
        if ((this.getMainLineLevelId() - this._startLevel) % this._levelInterval == 0) {
          var i = this.getCurrentWallpaper();
          if (i.isDefault) {
            var o = null === (a = r.getGameDataByGameType(l)) || void 0 === a ? void 0 : a.getTheme();
            this.dispatchEvent(EVT_MSG_KEY_RESETTHEME, l, "", o);
            this.setThemeForAllGameTypes("");
            t();
          } else {
            this.dispatchEvent(EVT_MSG_KEY_CHANGETHEME, l, i.type, true);
            this.setThemeForAllGameTypes(i.type);
            t();
          }
        } else t();
      } else t();
    } else t();
  }
  onMainGmVw_beChangeTheme(e, t) {
    if (this.isEnabled()) {
      var a = e.ins,
        r = (e.args[0], e.args[1]);
      e.args[2];
      r && !this.isLevelWallpaperTheme(r) && this.resetBg(a);
      t();
    } else t();
  }
  onMainGmVw_afChangeTheme(e, t) {
    var a = e.ins,
      r = e.args[1];
    if (a && r && this.isLevelWallpaperTheme(r)) {
      var l = this.getCurrentWallpaper();
      l && !l.isDefault && this.changeBg(l, a);
    }
    t();
  }
  onMainGmVw_resetTheme(e, t) {
    var a = e.ins,
      r = e.args[2];
    if (r && this.isLevelWallpaperTheme(r)) {
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
  isLevelWallpaperTheme(e) {
    return e && e.startsWith(LevelWallpaperTrait.C_THEME_PREFIX);
  }
  changeBg(e, t) {
    var r,
      l = t.gameNode;
    if (cc.isValid(l)) {
      var i = l.getSiblingIndex(),
        o = t.node.getChildByName("bg"),
        n = null === (r = null == o ? void 0 : o.parent) || void 0 === r ? void 0 : r.getChildByName("levelWallpaperBg");
      cc.isValid(n) && n.destroy();
      var p = new cc.Node("levelWallpaperBg");
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
      BaseSprite.refreshWithNode(p, e.path, false, true, LevelWallpaperTrait.C_BUNDLE_NAME);
    }
  }
  resetBg(e) {
    if (e && cc.isValid(e.node)) {
      var t = e.node.getChildByName("bg"),
        a = e.node.getChildByName("levelWallpaperBg");
      cc.isValid(t) && (t.active = true);
      cc.isValid(a) && a.destroy();
    }
  }
}
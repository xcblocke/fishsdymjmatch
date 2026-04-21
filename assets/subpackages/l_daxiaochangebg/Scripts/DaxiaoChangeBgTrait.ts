import { EVT_MSG_KEY_CHANGETHEME } from '../../../Scripts/Config';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EDaxiaoPlayAnimType } from '../../../Scripts/base/DaxiaoClearEffectBehavior';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite, { SPRITE_LOAD_COMPLETE } from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("DaxiaoChangeBgTrait")
export default class DaxiaoChangeBgTrait extends Trait {
  C_DaxiaoTheme = "DaxiaoTheme";
  static traitKey = "DaxiaoChangeBg";
  onLoad() {
    var t, a;
    super.onLoad.call(this);
    this._bgconfig = new Map();
    this._bgconfig.set(EDaxiaoPlayAnimType.Base, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg1base"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.CaiDai, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg2caidai"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Maxituan, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg4mxt"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Garden, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg5garden"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Haiyang, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg6haiyang"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Hudie, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg7hudie"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Guofeng, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg8guofeng"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Shipin, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg9shipin"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Zheshan, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg10zheshan"
    });
    this._bgconfig.set(EDaxiaoPlayAnimType.Yinxiang, {
      path: "texture/gameplay_bg_board",
      bundle: "r_daxiaobg11yinxiang"
    });
    var i = this.curUseType(MjGameType.Normal),
      r = this.curUseType(MjGameType.Travel),
      n = this.curUseType(MjGameType.DailyChallenge);
    i && LowPriorityBundleLoader.getInstance().addTask(this._bgconfig.get(i).bundle, ELowPriorityBundlePriority.DefaultDaXiao);
    r && LowPriorityBundleLoader.getInstance().addTask(this._bgconfig.get(r).bundle, ELowPriorityBundlePriority.DefaultDaXiao);
    n && LowPriorityBundleLoader.getInstance().addTask(this._bgconfig.get(n).bundle, ELowPriorityBundlePriority.DefaultDaXiao);
    try {
      for (var s = __values(this._bgconfig.keys()), l = s.next(); !l.done; l = s.next()) {
        var d = l.value;
        LowPriorityBundleLoader.getInstance().addTask(this._bgconfig.get(d).bundle, ELowPriorityBundlePriority.DefaultDaXiao);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (a = s.return) && a.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    this.resetSkinBtnData();
    this.registerEvent([{
      event: "UISetDlgCtrl_showRstSkin"
    }]);
  }
  curUseType(e) {
    var t,
      a = null === (t = UserModel.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
    return a && a.startsWith(this.C_DaxiaoTheme) && this._bgconfig.has(a) ? a : null;
  }
  onDaxiaoBhr_changeBg(e, t) {
    var a,
      i = null === (a = e.args[1]) || void 0 === a ? void 0 : a.gameView,
      r = this.curUseType(null == i ? void 0 : i.gameType),
      n = e.args[0];
    if (n && r != n) {
      var o = n,
        c = this._bgconfig.get(o);
      if (!c || !LowPriorityBundleLoader.getInstance().isBundlePreLoaded(c.bundle)) {
        t();
        return;
      }
      mj.EventManager.emit(EVT_MSG_KEY_CHANGETHEME, i.gameType, o, false);
    }
    t();
  }
  onMainGmVw_beChangeTheme(e, t) {
    var a = e.ins,
      i = (e.args[0], e.args[1]);
    e.args[2];
    i && !i.startsWith(this.C_DaxiaoTheme) && this.resetBg(a);
    t();
  }
  onMainGmVw_afChangeTheme(e, t) {
    var a = e.ins,
      i = (e.args[0], e.args[1]),
      r = e.args[2];
    a && i && i.startsWith(this.C_DaxiaoTheme) && this.changeBg(i, a, !r);
    t();
  }
  isHideMask() {
    return -1 != this._traitData.hideMask;
  }
  changeBg(e, t, a = true) {
    var i = this;
    var r = t.gameNode,
      n = this._bgconfig.get(e);
    if (n && LowPriorityBundleLoader.getInstance().isBundlePreLoaded(n.bundle) && cc.isValid(r)) {
      var o = r.getSiblingIndex(),
        s = t.node.getChildByName("bg"),
        c = s.parent.getChildByName("daxiaobg");
      cc.isValid(c) && (c.name = "daxiaobg_reset");
      if (this.isHideMask()) {
        var g = cc.find("gameplay_bg_mask_bottom", r);
        cc.isValid(g) && (g.active = false);
        t.gameUI && cc.isValid(t.gameUI.node) && (cc.find("nodeTop/gameplay_bg_mask_top", t.gameUI.node).active = false);
      }
      var l = new cc.Node("daxiaobg");
      l.parent = s.parent;
      l.setSiblingIndex(o);
      l.once(SPRITE_LOAD_COMPLETE, function (e) {
        if (t && cc.isValid(t.node)) {
          var r = e.spriteFrame;
          if (r) {
            if (r && r.getRect().width > 0 && r.getRect().height > 0) {
              var n = cc.size(r.getRect().width, r.getRect().height);
              l.setContentSize(n);
              var o = cc.Canvas.instance.node.getContentSize(),
                s = n.width / n.height;
              if (o.width / o.height > s) {
                l.setScale(o.width / n.width);
              } else {
                l.setScale(o.height / n.height);
              }
            }
            var g = t.node.getChildByName("bg");
            i.resetOtherNodes(t);
            if (a) i.runShowTween(l, function () {
              cc.isValid(g) && (g.active = false);
              cc.isValid(c) && c.destroy();
            });else {
              cc.isValid(g) && (g.active = false);
              cc.isValid(c) && c.destroy();
            }
          }
        }
      });
      BaseSprite.refreshWithNode(l, n.path, false, true, n.bundle);
      a && (l.opacity = 0);
    }
  }
  resetOtherNodes(e) {
    var t,
      a,
      i = null === (t = e.gameUI.btnShuffle) || void 0 === t ? void 0 : t.getChildByName("Background"),
      r = null === (a = e.gameUI.btnHitTips) || void 0 === a ? void 0 : a.getChildByName("Background");
    cc.isValid(i) && BaseSprite.refreshWithNode(i, "texture/gamePlay/gameplay_btn_refresh", false, true, "mainRes");
    cc.isValid(r) && BaseSprite.refreshWithNode(r, "texture/gamePlay/gameplay_btn_hint", false, true, "mainRes");
  }
  runShowTween(e, t) {
    if (cc.isValid(e)) {
      cc.tween(e).to(0.2, {
        opacity: 255
      }).call(t).start();
    } else {
      null == t || t();
    }
  }
  resetBg(e) {
    if (e && cc.isValid(e.node)) {
      var t = e.node.getChildByName("bg"),
        a = e.node.getChildByName("daxiaobg");
      cc.isValid(t) && (t.active = true);
      if (cc.isValid(a)) {
        a.name = "daxiaobg_reset";
        cc.tween(a).to(0.2, {
          opacity: 0
        }).call(function () {
          cc.isValid(a) && a.destroy();
        }).start();
      }
      if (this.isHideMask()) {
        var i = cc.find("gameplay_bg_mask_bottom", e.gameNode);
        cc.isValid(i) && (i.active = true);
        e.gameUI && cc.isValid(e.gameUI.node) && (cc.find("nodeTop/gameplay_bg_mask_top", e.gameUI.node).active = true);
      }
    }
  }
  onMainGameCtrl_initRes(e, t) {
    var a = this.curUseType(e.ins.gameType);
    if (a) {
      var i = e.ins;
      try {
        LowPriorityBundleLoader.getInstance().isBundlePreLoaded(this._bgconfig.get(a).bundle) && i.addPreloadRes("SpriteFrame", [this._bgconfig.get(a).bundle + ":" + this._bgconfig.get(a).path]);
      } catch (e) {}
    }
    t();
  }
  onMainGmVw_resetTheme(e, t) {
    var a = e.ins,
      i = (e.args[0], e.args[1], e.args[2]);
    i && i.startsWith(this.C_DaxiaoTheme) && this.resetBg(a);
    t();
  }
  onUISetDlgCtrl_initDRes(e, t) {
    t();
  }
  onUISetDlg_chkAddBack(e, t) {
    t();
  }
  onUISetDlgCtrl_showRstSkin(e, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
  resetSkinBtnData() {
    var e,
      t,
      a = UserModel.getInstance(),
      i = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
    try {
      for (var r = __values(i), n = r.next(); !n.done; n = r.next()) {
        var s = n.value,
          g = "hasShowResetSkinBtn_" + s;
        if (1 === this.localData[g]) {
          var l = a.getGameDataByGameType(s);
          if (!l) continue;
          l.setHasShowResetSkinBtn(1);
          delete this.localData[g];
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = r.return) && t.call(r);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  hasChangedWallpaper(e) {
    return !!this.curUseType(e);
  }
}
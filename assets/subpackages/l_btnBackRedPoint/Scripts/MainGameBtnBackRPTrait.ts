import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("MainGameBtnBackRPTrait")
export default class MainGameBtnBackRPTrait extends Trait {
  _config = {};
  _gameRedDotNode = null;
  _btnBackNode = null;
  static traitKey = "MainGameBtnBackRP";
  static DEFAULT_CONFIG = {
    enabled: true,
    redDotPath: "texture/gamePlay/gameplay_img_hongdian",
    checkTask: true,
    checkRank: true,
    checkTravel: true,
    checkDaily: true
  };
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  isEnabled() {
    var t;
    return null !== (t = this._config.enabled) && void 0 !== t ? t : MainGameBtnBackRPTrait.DEFAULT_CONFIG.enabled;
  }
  getRedDotPath() {
    return this._config.redDotPath || MainGameBtnBackRPTrait.DEFAULT_CONFIG.redDotPath;
  }
  @mj.traitEvent("MGBtnBackRP_chkTaskRD")
  checkTaskRedDot() {
    var t, e, n, o;
    if (!(null !== (t = this._config.checkTask) && void 0 !== t ? t : MainGameBtnBackRPTrait.DEFAULT_CONFIG.checkTask)) return false;
    try {
      var i = mj.getClassByName("HallTaskBtnRPTrait");
      if (null == i ? void 0 : i.getInstance) {
        var r = i.getInstance();
        if (true === (null === (e = null == r ? void 0 : r.localData) || void 0 === e ? void 0 : e.clicked)) return false;
        var c = null === (o = null === (n = mj.getClassByName("TaskModel")) || void 0 === n ? void 0 : n.getInstance) || void 0 === o ? void 0 : o.call(n);
        if (null == c ? void 0 : c.isTaskOpen()) return true;
      }
    } catch (t) {}
    return false;
  }
  @mj.traitEvent("MGBtnBackRP_chkRankRD")
  checkRankRedDot() {
    var t, e;
    if (!(null !== (t = this._config.checkRank) && void 0 !== t ? t : MainGameBtnBackRPTrait.DEFAULT_CONFIG.checkRank)) return false;
    try {
      var n = mj.getClassByName("HallRankBtnRPTrait");
      if (null == n ? void 0 : n.getInstance) {
        var o = n.getInstance();
        if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked)) return false;
        var i = mj.getClassByName("HallRankBtnLockTrait");
        if (null == i ? void 0 : i.getInstance) {
          var r = i.getInstance();
          if (null == r ? void 0 : r.isRankOpen()) return true;
        }
      }
    } catch (t) {}
    return false;
  }
  @mj.traitEvent("MGBtnBackRP_chkTravelRD")
  checkTravelRedDot() {
    var t, e;
    if (!(null !== (t = this._config.checkTravel) && void 0 !== t ? t : MainGameBtnBackRPTrait.DEFAULT_CONFIG.checkTravel)) return false;
    try {
      var n = mj.getClassByName("HallTravelBtnRPTrait");
      if (null == n ? void 0 : n.getInstance) {
        var o = n.getInstance();
        if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked)) return false;
        var i = mj.getClassByName("JourneyTrait");
        if (null == i ? void 0 : i.getInstance) {
          var r = i.getInstance();
          if ((null == r ? void 0 : r.isActiveJourney) && r.isActiveJourney()) return true;
        }
      }
    } catch (t) {}
    return false;
  }
  @mj.traitEvent("MGBtnBackRP_chkDailyRD")
  checkDailyRedDot() {
    var t, e;
    if (!(null !== (t = this._config.checkDaily) && void 0 !== t ? t : MainGameBtnBackRPTrait.DEFAULT_CONFIG.checkDaily)) return false;
    try {
      var n = mj.getClassByName("HallDailyBtnRPTrait");
      if (null == n ? void 0 : n.getInstance) {
        var o = n.getInstance();
        if (true === (null === (e = null == o ? void 0 : o.localData) || void 0 === e ? void 0 : e.clicked)) return false;
        var i = mj.getClassByName("DailyLockTrait");
        if (null == i ? void 0 : i.getInstance) {
          var r = i.getInstance();
          if ((null == r ? void 0 : r.isOpenDaily) && r.isOpenDaily()) return true;
        }
      }
    } catch (t) {}
    return false;
  }
  @mj.traitEvent("MGBtnBackRP_hasRedDot")
  hasRedDot() {
    if (!this.isEnabled()) return false;
    var t = this.checkTaskRedDot(),
      e = this.checkRankRedDot(),
      a = this.checkTravelRedDot(),
      n = this.checkDailyRedDot();
    return !!(t || e || a || n);
  }
  showGameRedDot(t) {
    if (cc.isValid(t)) {
      this._gameRedDotNode = t.getChildByName("unlockRedDot_btnBack");
      if (cc.isValid(this._gameRedDotNode)) this._gameRedDotNode.active = true;else {
        var e = this.getRedDotPath();
        this._gameRedDotNode = new cc.Node("unlockRedDot_btnBack");
        if (this._gameRedDotNode) {
          this._gameRedDotNode.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
          BaseSprite.refreshWithNode(this._gameRedDotNode, e, false, false, "mainRes");
          this._gameRedDotNode.setPosition(37, 36);
          t.addChild(this._gameRedDotNode);
        }
      }
    }
  }
  hideGameRedDot() {
    this._gameRedDotNode && cc.isValid(this._gameRedDotNode) && (this._gameRedDotNode.active = false);
  }
  onGameUI_onLoad(t, e) {
    var a;
    try {
      var n = t.ins,
        o = null === (a = null == n ? void 0 : n.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop");
      this._btnBackNode = null == o ? void 0 : o.getChildByName("btnBack");
      if (this.hasRedDot()) {
        this.showGameRedDot(this._btnBackNode);
      } else {
        this.hideGameRedDot();
      }
    } catch (t) {
      console.error("[MainGameBtnBackRPTrait] onGameUI_onLoad 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onWinVw_showWinVw(t, e) {
    try {
      this.hasRedDot() && cc.isValid(this._btnBackNode) && this.showGameRedDot(this._btnBackNode);
    } catch (t) {
      console.error("[MainGameBtnBackRPTrait] onWinVw_showWinVw 异常: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onMainGameBtnBack_onClick(t, e) {
    this.hideGameRedDot();
    e();
  }
}
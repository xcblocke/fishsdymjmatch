import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID, MjGameType, EGetItemReasonId, ResId } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import UIView from '../framework/ui/UIView';
import AdManager from '../base/ad/AdManager';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
import { DotAdRewardEnter } from '../gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../gamePlay/dot/DAdVisit';
import { EAdPosition } from '../gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EReviveClickType } from '../dot/DGameBtnClick';
import CardUtil from '../gamePlay/user/CardUtil';
import BaseSprite from '../gamePlay/base/ui/BaseSprite';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import BaseLabel from '../gamePlay/base/ui/BaseLabel';
import UserModel from '../gamePlay/user/UserModel';
@mj.class
export default class Tile2FailView extends UIView {
  btnUse = null;
  btnReplay = null;
  nodeNum = null;
  nodeUse = null;
  nodeAd = null;
  labelNum = null;
  contentNode = null;
  btnUsePos = null;
  tilesContainer = null;
  reviveNum = 0;
  _tilePreviewLayout = "threePlusOne";
  _adReviveAllowed = void 0;
  static prefabUrl = "prefabs/ui/Tile2FailView";
  @mj.traitEvent("Tile2FailVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.contentNode = this.node.getChildByName("content_node");
    this.btnUse = this.contentNode.getChildByName("btn_use");
    this.btnReplay = this.contentNode.getChildByName("btn_replay");
    this.nodeNum = this.btnUse.getChildByName("spr").getChildByName("nodeNum");
    this.nodeUse = this.btnUse.getChildByName("spr").getChildByName("use");
    this.nodeAd = this.btnUse.getChildByName("spr").getChildByName("ad");
    this.labelNum = this.nodeNum.getChildByName("labelNum").getComponent(cc.Label);
    this.btnUsePos = this.btnUse.getPosition();
    this.btnUse && this.OnButtonClick(this.btnUse, this.onUseBtnClick.bind(this));
    this.btnReplay && this.OnButtonClick(this.btnReplay, this.onReplayBtnClick.bind(this));
    mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
  }
  resetRow4UI() {
    var e = function e(e, t, o, n, i) {
        if (e && cc.isValid(e)) {
          e.setPosition(t, o);
          e.setContentSize(n, i);
        }
      },
      t = this.node.getChildByName("bg1");
    if (t) {
      e(t, -1, 438, 878, 986);
      var o = t.getChildByName("top");
      o && e(o, 0, 37, 886, 143);
      var n = t.getChildByName("com_bg_pop_2");
      n && e(n, 0, -259, 768, 416);
    }
    if (this.contentNode && cc.isValid(this.contentNode)) {
      this.contentNode.setPosition(0, 0);
      var i = this.contentNode.getChildByName("title");
      i && e(i, 3, 475, 840, 110);
      var r = this.contentNode.getChildByName("slot_bg");
      if (r) {
        e(r, 0.779, 176.133, 632, 211);
        var a = r.getComponent(cc.Sprite);
        a || (a = r.addComponent(cc.Sprite));
        a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        a.trim = false;
        BaseSprite.refreshWithNode(r, "texture/tile2Fail/gameplay_img_tile2_grid", false, false, "mainRes");
      }
    }
    if (this.btnUse && cc.isValid(this.btnUse)) {
      this.btnUse.setPosition(0, -180.259);
      this.btnUse.getChildByName("spr").scale = 1;
    }
    if (this.btnReplay && cc.isValid(this.btnReplay)) {
      this.btnReplay.setPosition(0, -367.968);
      this.btnReplay.getChildByName("spr").scale = 1;
    }
    this.btnUsePos = this.btnUse ? this.btnUse.getPosition() : null;
  }
  onCloseBtnClick() {
    this.delegate.close();
  }
  @mj.traitEvent("Tile2FailVw_show")
  show(e) {
    var t;
    this.reviveNum = e.reviveNum || 0;
    this._adReviveAllowed = e.adReviveAllowed;
    this._tilePreviewLayout = null !== (t = e.tilePreviewLayout) && void 0 !== t ? t : "threePlusOne";
    "row4" === this._tilePreviewLayout && this.resetRow4UI();
    this.addPopupFailCnt();
    this.initBtnUse();
    this.createPreview(e.tiles);
    this.reviveNum <= 0 && DotAdRewardEnter.dot(true, EAdPosition.InGameMotivation_Revive);
    DotGameBtnClick.dotRevive(EReviveClickType.Show);
    "row4" === this._tilePreviewLayout && mj.audioManager.playEffect(EAudioID.Tile2Fail);
    UserModel.getInstance().isVibrationEnabled() && VibrateManager.executeVibrate(EVibrateStrength.DoubleWeak, EVibratePoint.Tile2Fail);
  }
  addPopupFailCnt() {
    var e = UserModel.getInstance().getCurrentGameType();
    e !== MjGameType.None && UserModel.getInstance().getGameDataByGameType(e).addPopupFailCnt();
  }
  @mj.traitEvent("Tile2FailVw_initBtnUse")
  initBtnUse() {
    var e = this.reviveNum > 0,
      t = AdManager.getInstance().checkVideoAdIsReady(),
      o = false !== this._adReviveAllowed;
    if (e || o && t) {
      this.btnUse.active = true;
      this.nodeNum.active = e;
      this.nodeUse.active = e;
      this.nodeAd.active = !e;
      if (e) {
        this.labelNum.string = this.reviveNum.toString();
      } else {
        this.showAdBtnView();
      }
    } else {
      this.btnUse.active = false;
      var n = cc.find("bg1", this.node);
      if ("row4" === this._tilePreviewLayout) {
        n && (n.height = 786);
      } else {
        n && (n.height = 850);
      }
      this.btnReplay.setPosition(this.btnUsePos);
    }
  }
  onUseBtnClick() {
    if (this.reviveNum > 0) {
      this.useRevive();
    } else {
      this.watchAdForRevive();
    }
  }
  @mj.traitEvent("Tile2FailVw_useRevive")
  useRevive() {
    GameInteraction.input({
      inputType: EGameInputEnum.Tile2Revive,
      from: "item"
    });
    this.delegate.close();
  }
  @mj.traitEvent("Tile2FailVw_watchAdRevive")
  watchAdForRevive() {
    var e = this;
    DotGameBtnClick.dotRevive(EReviveClickType.ShuffleAd);
    DotAdRewardEnter.dot(false, EAdPosition.InGameMotivation_Revive);
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.InGameMotivation_Revive, true);
    DotGameAdShowStage.dot(false, "clickAdLock");
    AdManager.getInstance().checkVideoAdIsReady() && this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 0);
    AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_Revive, {
      onSuccess: function () {
        e.onAdReviveSuccess();
      },
      onFailed: function (t) {
        e.onAdReviveFailed(t);
      }
    });
  }
  @mj.traitEvent("Tile2FailVw_adReviveSucc")
  onAdReviveSuccess() {
    if (this.delegate && cc.isValid(this.delegate.rootView)) {
      GameInteraction.input({
        inputType: EGameInputEnum.Tile2AddProp,
        propType: "revive",
        num: 1,
        reasonId: EGetItemReasonId.AdReward,
        reasonInfo: "游戏内激励广告-复活"
      });
      GameInteraction.input({
        inputType: EGameInputEnum.Tile2Revive,
        from: "ad"
      });
      this.delegate.close();
    }
  }
  @mj.traitEvent("Tile2FailVw_showAdBtnVw")
  showAdBtnView() {
    if (this.btnUse && cc.isValid(this.btnUse)) {
      var e = cc.find("spr/ad/desc", this.btnUse);
      if (e && e.width > 380) {
        var t = e.getComponent(cc.Label);
        t && (t.overflow = cc.Label.Overflow.SHRINK);
        e.width = 380;
      }
    }
  }
  onAdReviveFailed() {
    this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 255);
  }
  @mj.traitEvent("Tile2FailVw_replay")
  onReplayBtnClick() {
    if (cc.isValid(this.node) && this.delegate && cc.isValid(this.delegate.rootView)) {
      DotGameBtnClick.dotRevive(EReviveClickType.Restart);
      GameInteraction.input({
        inputType: EGameInputEnum.Restart,
        dieResult: 0,
        callFrom: "fail"
      });
      DotAdVisit.dotAdVisitRewardAD(EAdPosition.InGameMotivation_Revive, false);
      this.delegate.close();
    }
  }
  @mj.traitEvent("Tile2FailVw_createPreview")
  createPreview(e) {
    if ("row4" === this._tilePreviewLayout) {
      this._createPreviewRow4(e);
    } else {
      this._createPreviewThreePlusOne(e);
    }
  }
  _createPreviewRow4(e) {
    var t = this.node.getChildByName("content_node");
    this.tilesContainer = new cc.Node("tiles_container");
    this.tilesContainer.setPosition(-3, 12);
    t.getChildByName("slot_bg").addChild(this.tilesContainer, 10);
    var o = new cc.Node("shadow_layer");
    this.tilesContainer.addChild(o, 0);
    var n = new cc.Node("tile_layer");
    this.tilesContainer.addChild(n, 1);
    for (var i = 0; i < 4; i++) {
      var r = 150 * i - 225,
        a = null == e ? void 0 : e[i];
      this.createShadow(o, r, 0, 0);
      this.createSingleTileUniform(n, r, 0, null == a ? void 0 : a.resId, a);
    }
  }
  _createPreviewThreePlusOne(e) {
    var t = this.node.getChildByName("content_node");
    this.tilesContainer = new cc.Node("tiles_container");
    this.tilesContainer.setPosition(12, 1);
    t.getChildByName("slot_bg").addChild(this.tilesContainer, 10);
    var o = new cc.Node("shadow_layer");
    this.tilesContainer.addChild(o, 0);
    var n = new cc.Node("tile_layer");
    this.tilesContainer.addChild(n, 1);
    for (var i = [-151, -1, 130], r = 0; r < 3; r++) {
      var a = null == e ? void 0 : e[r];
      this.createSingleTileReviveStyled(n, i[r], 0, null == a ? void 0 : a.resId, 0, r, a);
    }
    a = null == e ? void 0 : e[3];
    this.createShadow(o, 8, 208, -15);
    this.createSingleTileReviveStyled(n, 8, 208, null == a ? void 0 : a.resId, -15, 3, a);
  }
  createShadow(e, t, o, n = 0) {
    var i = new cc.Node("imgShadow");
    i.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
    i.getComponent(cc.Sprite).trim = false;
    i.setAnchorPoint(0.5, 0.5);
    i.setPosition(t, o);
    i.angle = n;
    0 !== n && (i.scale = 0.9);
    e.addChild(i);
    var r = CardUtil.getAtlasPathAndBundleName("gameplay_img_shadow_dn"),
      a = r.path,
      l = r.bundleName,
      s = r.fromAtlas;
    BaseSprite.refreshWithNode(i, a, s, false, l);
  }
  createSingleTileUniform(e, t, o, n, i) {
    var r,
      a = new cc.Node("tile_" + (null != n ? n : "back"));
    a.setPosition(t, o);
    var s = new cc.Node("imgCardBg");
    s.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
    s.setAnchorPoint(0.5, 0.5);
    s.zIndex = 0;
    a.addChild(s);
    var c = new cc.Node("imgCard");
    c.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
    c.setAnchorPoint(0.5, 0.5);
    c.setPosition(-3, 3);
    c.zIndex = 1;
    a.addChild(c);
    var u = n === ResId.emRankId,
      p = u ? "gameplay_special_mj_2" : "gameplay_img_mj_up",
      f = CardUtil.getAtlasPathAndBundleName(p),
      d = f.path,
      h = f.bundleName,
      y = f.fromAtlas;
    BaseSprite.refreshWithNode(s, d, y, false, h);
    var m = null;
    if (u) m = UserModel.getInstance().getRankCardResName();else {
      var _ = void 0 !== n ? CardUtil.getByKey(n) : null;
      m = null !== (r = null == _ ? void 0 : _.resName) && void 0 !== r ? r : null;
    }
    if (m) {
      var T = CardUtil.getAtlasPathAndBundleName(m),
        b = T.path,
        E = T.bundleName,
        S = T.fromAtlas;
      BaseSprite.refreshWithNode(c, b, S, false, E);
    } else {
      var I = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn");
      b = I.path, E = I.bundleName, S = I.fromAtlas;
      BaseSprite.refreshWithNode(c, b, S, false, E);
    }
    this._appendSpecialCardSpine(a, i, 2);
    e.addChild(a);
  }
  createSingleTileReviveStyled(e, t, o, n, i = 0, r = 0, a?) {
    var s;
    var c = new cc.Node("tile_" + (null != n ? n : "back"));
    c.setPosition(t, o);
    c.angle = i;
    var u = new cc.Node("imgCardBg");
    u.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
    u.setAnchorPoint(0.5, 0.5);
    u.zIndex = 0;
    c.addChild(u);
    var p = new cc.Node("imgCard");
    p.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
    p.setAnchorPoint(0.5, 0.5);
    if (3 === r) {
      p.setPosition(-3, 5);
    } else {
      if (r <= 1 && r >= 0) {
        p.setPosition(-10, 2);
      } else {
        p.setPosition(6, 2);
      }
    }
    p.zIndex = 1;
    c.addChild(p);
    var f = n === ResId.emRankId;
    if (3 === r) {
      var d = f ? "gameplay_special_mj_2" : "gameplay_img_mj_up",
        h = CardUtil.getAtlasPathAndBundleName(d),
        y = h.path,
        m = h.bundleName,
        _ = h.fromAtlas;
      BaseSprite.refreshWithNode(u, y, _, false, m);
    } else if (2 === r) {
      d = f ? "revive_img_mj4" : "revive_img_mj2";
      BaseSprite.refreshWithNode(u, "texture/tile2Fail/" + d, false, false, "mainRes");
    } else {
      d = f ? "revive_img_mj3" : "revive_img_mj1";
      BaseSprite.refreshWithNode(u, "texture/tile2Fail/" + d, false, false, "mainRes");
    }
    var T = null;
    if (f) T = UserModel.getInstance().getRankCardResName();else {
      var b = void 0 !== n ? CardUtil.getByKey(n) : null;
      T = null !== (s = null == b ? void 0 : b.resName) && void 0 !== s ? s : null;
    }
    if (T) {
      var E = CardUtil.getAtlasPathAndBundleName(T),
        S = E.path,
        I = E.bundleName,
        w = E.fromAtlas;
      BaseSprite.refreshWithNode(p, S, w, false, I);
    } else {
      var B = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up");
      S = B.path, I = B.bundleName, w = B.fromAtlas;
      BaseSprite.refreshWithNode(p, S, w, false, I);
    }
    var x = [cc.v2(-8, -6), cc.v2(-8, -6), cc.v2(10, -6)];
    this._appendSpecialCardSpine(c, a, 2, x[r]);
    e.addChild(c);
  }
  _appendSpecialCardSpine(e, t, o, n) {
    if (t) {
      if (t.isDaxiao) {
        (i = new cc.Node("DaxiaoCardFlagNode")).zIndex = o;
        e.addChild(i);
        (r = BaseSpine.refreshWithNode(i, "spine/daxiao/idle/gameplay_hintGreat", "mainRes")).setAnimation("init", -1, null, false);
        n && i.setPosition(n);
      }
      if (t.duoxiaoCount > 0) {
        var i, r;
        (i = new cc.Node("DuoxiaoCardFlagNode")).zIndex = o;
        e.addChild(i);
        (r = BaseSpine.refreshWithNode(i, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes")).setAnimation("init", -1, null, false);
        r.attachNode("hook_number", function () {
          var e = BaseLabel.create(t.duoxiaoCount.toString(), "font/SPARTAN-BOLD", "mainRes", 36);
          e.node.name = "DuoxiaoCardCountNode";
          e.setColor(new cc.Color().fromHEX("#013713"));
          e.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
          return e.node;
        });
        n && i.setPosition(n);
      }
    }
  }
  @mj.traitEvent("Tile2FailVw_destroy")
  onDestroy() {
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    super.onDestroy && super.onDestroy.call(this);
  }
}
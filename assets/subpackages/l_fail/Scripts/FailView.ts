import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType, EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import UIView from '../../../Scripts/framework/ui/UIView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EReviveClickType } from '../../../Scripts/dot/DGameBtnClick';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import I18NComponent from '../../../Scripts/component/I18NComponent';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class FailView extends UIView {
  btnUse = null;
  btnReplay = null;
  nodeNum = null;
  nodeUse = null;
  nodeAd = null;
  labelNum = null;
  desc = null;
  shuffleNum = 0;
  scaleExtra = 0.05;
  preShuffleData = null;
  previewContainer = null;
  tileSprites = new Map();
  static prefabUrl = "prefabs/ui/FailView";
  @mj.traitEvent("FailVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    var t = this.node.getChildByName("content_node");
    this.btnUse = t.getChildByName("btn_use");
    this.btnReplay = t.getChildByName("btn_replay");
    this.nodeNum = this.btnUse.getChildByName("nodeNum");
    this.nodeUse = this.btnUse.getChildByName("use");
    this.nodeAd = this.btnUse.getChildByName("ad");
    this.labelNum = this.nodeNum.getChildByName("labelNum").getComponent(cc.Label);
    this.desc = t.getChildByName("desc").getComponent(cc.Label);
    this.btnUse && this.OnButtonClick(this.btnUse, this.onUseBtnClick.bind(this));
    this.btnReplay && this.OnButtonClick(this.btnReplay, this.onReplayBtnClick.bind(this));
    mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
  }
  onCloseBtnClick() {
    this.delegate.close();
  }
  @mj.traitEvent("FailVw_show")
  show(e) {
    this.shuffleNum = e.shuffleNum || 0;
    this.preShuffleData = e.preShuffleData || null;
    this.addPopupFailCnt();
    this.initBtnUse();
    this.preShuffleData && this.createPreview(this.preShuffleData);
    this.shuffleNum <= 0 && DotAdRewardEnter.dot(true, EAdPosition.InGameMotivation_Revive);
    DotGameBtnClick.dotRevive(EReviveClickType.Show);
  }
  addPopupFailCnt() {
    var e = UserModel.getInstance().getCurrentGameType();
    e !== MjGameType.None && UserModel.getInstance().getGameDataByGameType(e).addPopupFailCnt();
  }
  @mj.traitEvent("FailVw_initBtnUse")
  initBtnUse() {
    var e = this.shuffleNum > 0;
    this.nodeNum.active = e;
    this.nodeUse.active = e;
    this.nodeAd.active = !e;
    e && (this.labelNum.string = this.shuffleNum.toString());
  }
  onUseBtnClick() {
    if (this.shuffleNum > 0) {
      this.useShuffleProp();
    } else {
      this.watchAdForShuffle();
    }
  }
  @mj.traitEvent("FailVw_useShuffle")
  useShuffleProp() {
    DotGameBtnClick.dotRevive(EReviveClickType.ShuffleItem);
    DotGameBtnClick.dotRevive(EReviveClickType.Close);
    this.delegate.close();
    GameInteraction.input({
      inputType: EGameInputEnum.Shuffle,
      from: EShuffleFrom.Normal,
      preShuffleData: this.preShuffleData
    });
  }
  @mj.traitEvent("FailVw_watchAdShuffle")
  watchAdForShuffle() {
    var e = this;
    DotGameBtnClick.dotRevive(EReviveClickType.ShuffleAd);
    DotAdRewardEnter.dot(false, EAdPosition.InGameMotivation_Revive);
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.InGameMotivation_Revive, true);
    DotGameAdShowStage.dot(false, "clickAdLock");
    AdManager.getInstance().checkVideoAdIsReady() && this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 0);
    AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_Revive, {
      onSuccess: function () {
        e.onAdSuccess();
      },
      onFailed: function (t) {
        e.onAdFailed(t);
      }
    });
  }
  onAdSuccess() {
    if (this.delegate && cc.isValid(this.delegate.rootView)) {
      DotGameBtnClick.dotRevive(EReviveClickType.Close);
      this.delegate.close();
      var e = {
        inputType: EGameInputEnum.AddProp,
        propType: "shuffle",
        num: 1,
        reasonId: EGetItemReasonId.AdReward,
        reasonInfo: "游戏内激励广告-复活"
      };
      GameInteraction.input(e);
      GameInteraction.input({
        inputType: EGameInputEnum.Shuffle,
        from: EShuffleFrom.Revive,
        preShuffleData: this.preShuffleData
      });
    }
  }
  onAdFailed() {
    this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 255);
  }
  @mj.traitEvent("FailVw_replay")
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
  createPreview(e) {
    var t = this.node.getChildByName("content_node");
    this.btnReplay.position = cc.v3(0, -473);
    this.btnUse.position = cc.v3(0, -304);
    var i = this.desc.node.getComponent(I18NComponent);
    if (i) {
      i.setTranslateId("TileMatch_Revive_Details_3", "Revive & Shuffle");
    } else {
      this.desc.string = "Revive & Shuffle";
    }
    this.desc.fontSize = 46;
    this.desc.lineHeight = 46;
    this.desc.node.setPosition(0, -166);
    this.previewContainer = new cc.Node("preview_window");
    this.previewContainer.setPosition(0, 120);
    t.addChild(this.previewContainer, 10);
    var o = new cc.Node("bg_mask");
    o.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    o.setContentSize(750, 600);
    o.color = cc.color(0, 0, 0);
    o.opacity = 180;
    this.previewContainer.addChild(o, 0);
    var a = new cc.Node("window_panel");
    a.setPosition(0, 0);
    this.previewContainer.addChild(a, 1);
    var n = new cc.Node("panel_bg");
    n.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    n.setContentSize(650, 450);
    n.color = cc.color(40, 40, 50);
    n.opacity = 255;
    a.addChild(n, 0);
    var r = new cc.Node("mask_node");
    a.addChild(r, 1);
    r.setPosition(0, 30);
    r.setContentSize(758, 467);
    r.addComponent(cc.Mask).type = cc.Mask.Type.RECT;
    var s = new cc.Node("game_bg");
    s.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    s.setContentSize(758, 467);
    s.setPosition(0, 0);
    this.loadGameBackground(s);
    r.addChild(s, -1);
    var l = new cc.Node("tiles_container");
    r.addChild(l, 0);
    this.createTileSprites(e.tilePositions, e.tilePositionsAfter, l);
    this.fitTilesToMask(l, r.getContentSize(), e.tilePositionsAfter);
    this.playPreviewAnimation(e, l);
    var c = mj.getClassByName("FailTipRateByPropTrait");
    if (c && c.getInstance() && true === c.getInstance().eventEnabled) {
      var d = this.node.getChildByName("bg1");
      if (cc.isValid(d)) {
        var p = d.getContentSize();
        d.setContentSize(p.width, p.height + 50);
        this.btnReplay.position = cc.v3(0, -513);
        this.btnUse.position = cc.v3(0, -344);
      }
    }
  }
  createTileSprites(e, t, i) {
    var o = this,
      a = function a(e, t, i) {
        return {
          x: 65 * e + 2 * i,
          y: 85 * -t + 2 * i
        };
      },
      n = this.computeRowCompressionOffsets(e),
      r = this.computeRowCompressionOffsets(t);
    if (n.size > 0 || r.size > 0) {
      this.scaleExtra = 0;
    } else {
      this.scaleExtra = 0.05;
    }
    var s = 0,
      l = 0;
    e.forEach(function (e) {
      var t = a(e.gridX, e.gridY, e.layer);
      s += t.x;
      l += t.y + (n.get(e.tileId) || 0);
    });
    var c = s / e.length,
      d = l / e.length,
      p = 0,
      u = 0;
    t.forEach(function (e) {
      var t = a(e.gridX, e.gridY, e.layer);
      p += t.x;
      u += t.y + (r.get(e.tileId) || 0);
    });
    var f = p / t.length,
      h = u / t.length,
      m = new Map();
    t.forEach(function (e) {
      m.set(e.tileId, e);
    });
    e.forEach(function (e) {
      var t = new cc.Node("tile_" + e.tileId),
        s = new cc.Node("imgShadow"),
        l = s.addComponent(cc.Sprite);
      l.sizeMode = cc.Sprite.SizeMode.RAW;
      l.trim = false;
      s.setAnchorPoint(0.5, 0.5);
      s.setPosition(0, 0);
      s.zIndex = -1;
      t.addChild(s);
      var p = new cc.Node("imgCardBg");
      p.addComponent(cc.Sprite);
      p.setAnchorPoint(0.5, 0.5);
      p.setPosition(0, 0);
      p.zIndex = 0;
      t.addChild(p);
      var u = new cc.Node("imgCard");
      u.addComponent(cc.Sprite);
      u.setAnchorPoint(0.5, 0.5);
      u.zIndex = 1;
      t.addChild(u);
      u.setPosition(-3, 3);
      var v = a(e.gridX, e.gridY, e.layer),
        w = v.x - c,
        _ = v.y + (n.get(e.tileId) || 0) - d;
      t.setPosition(w, _);
      t.scale = 0.82;
      t._originalPos = cc.v3(w, _, 0);
      var C = m.get(e.tileId);
      if (C) {
        var S = a(C.gridX, C.gridY, C.layer),
          P = S.x - f,
          b = S.y + (r.get(C.tileId) || 0) - h;
        t._targetPos = cc.v3(P, b, 0);
      } else t._targetPos = cc.v3(w, _, 0);
      var N = 0 === e.layer ? "gameplay_img_shadow_dn" : "gameplay_img_shadow_up",
        A = CardUtil.getAtlasPathAndBundleName(N),
        R = A.path,
        I = A.bundleName,
        E = A.fromAtlas;
      BaseSprite.refreshWithNode(s, R, E, false, I);
      var B = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up"),
        D = B.path,
        F = B.bundleName,
        M = B.fromAtlas;
      BaseSprite.refreshWithNode(p, D, M, false, F);
      if (e.isBack) {
        var T = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn"),
          k = T.path,
          V = T.bundleName,
          j = T.fromAtlas;
        BaseSprite.refreshWithNode(u, k, j, false, V);
      } else {
        var G = CardUtil.getByKey(e.resId);
        if (G && G.resName) {
          var O = CardUtil.getAtlasPathAndBundleName(G.resName);
          k = O.path, V = O.bundleName, j = O.fromAtlas;
          BaseSprite.refreshWithNode(u, k, j, false, V);
        }
      }
      t._isBack = e.isBack || false;
      i.addChild(t, e.layer);
      o.tileSprites.set(e.tileId, t);
    });
  }
  computeRowCompressionOffsets(e) {
    var t = new Map();
    e.forEach(function (e) {
      var i = Number(e.gridY);
      if (Number.isFinite(i)) {
        var o = t.get(i) || {
          sumY: 0,
          count: 0
        };
        o.sumY += e.position.y;
        o.count += 1;
        t.set(i, o);
      }
    });
    var i = Array.from(t.keys()).sort(function (e, t) {
      return e - t;
    });
    if (i.length < 2) return new Map();
    var o = new Map();
    i.forEach(function (e) {
      var i = t.get(e);
      i && i.count > 0 && o.set(e, i.sumY / i.count);
    });
    for (var a = 0, n = new Map(), r = 0; r < i.length; r++) {
      var s = i[r];
      n.set(s, -a);
      if (!(r >= i.length - 1)) {
        var l = i[r + 1],
          c = o.get(s),
          d = o.get(l),
          p = l - s,
          u = p - 1;
        void 0 === c || void 0 === d || p <= 0 || u < 4 || (a += (d - c) / p * Math.ceil(0.5 * u));
      }
    }
    var f = new Map();
    e.forEach(function (e) {
      var t = Number(e.gridY),
        i = n.get(t) || 0;
      i && f.set(e.tileId, i);
    });
    return f;
  }
  fitTilesToMask(e, t) {
    var i = Infinity,
      o = -Infinity,
      a = Infinity,
      n = -Infinity;
    this.tileSprites.forEach(function (e) {
      var t = e.getPosition();
      i = Math.min(i, t.x - 30);
      o = Math.max(o, t.x + 30);
      a = Math.min(a, t.y - 40);
      n = Math.max(n, t.y + 40);
      var r = e._targetPos;
      if (r) {
        i = Math.min(i, r.x - 30);
        o = Math.max(o, r.x + 30);
        a = Math.min(a, r.y - 40);
        n = Math.max(n, r.y + 40);
      }
    });
    var r = o - i,
      s = n - a,
      l = 0.9 * t.width / r,
      c = 0.9 * t.height / s,
      d = Math.min(l, c);
    e.scale = Math.min(d + this.scaleExtra, 1.05);
  }
  playPreviewAnimation(e) {
    var t = this,
      i = cc.v3(0, 0, 0),
      o = 0,
      a = this.tileSprites.size;
    this.tileSprites.forEach(function (n) {
      cc.tween(n).delay(0.2).to(0.2, {
        position: i
      }).call(function () {
        if (++o >= a) {
          t.changeTileFaces(e.afterMapping);
          t.scheduleOnce(function () {
            t.scatterTiles();
          }, 0.1);
        }
      }).start();
    });
  }
  changeTileFaces(e) {
    this.tileSprites.forEach(function (t, i) {
      var o = e[i],
        a = t._isBack || false;
      if (void 0 !== o) {
        var n = t.getChildByName("imgCard");
        if (n) if (a) {
          var r = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn"),
            s = r.path,
            l = r.bundleName,
            c = r.fromAtlas;
          BaseSprite.refreshWithNode(n, s, c, false, l);
        } else {
          var d = CardUtil.getByKey(o);
          if (d && d.resName) {
            var p = CardUtil.getAtlasPathAndBundleName(d.resName);
            s = p.path, l = p.bundleName, c = p.fromAtlas;
            BaseSprite.refreshWithNode(n, s, c, false, l);
          }
        }
      }
    });
  }
  scatterTiles() {
    this.tileSprites.forEach(function (e) {
      var t = e._targetPos || e._originalPos || cc.v3(0, 0, 0);
      cc.tween(e).to(0.2, {
        position: t
      }).start();
    });
  }
  loadGameBackground(e) {
    var t,
      i,
      o = cc.find("Canvas");
    if (o) try {
      for (var a = __values(["rootNode/stageLayer/MainGameView_rootView/root/bg", "rootNode/stageLayer/DailyChallengeView_rootView/root/bg", "rootNode/stageLayer/TravelGameView_rootView/root/bg"]), n = a.next(); !n.done; n = a.next()) {
        var s = n.value,
          l = cc.find(s, o);
        if (l) {
          var c = l.getComponent(cc.Sprite);
          if (c && c.spriteFrame) {
            var d = e.getComponent(cc.Sprite);
            if (d) {
              d.spriteFrame = c.spriteFrame;
              return;
            }
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (i = a.return) && i.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    e.color = cc.color(45, 85, 120);
    var p = e.getComponent(cc.Sprite);
    p && (p.spriteFrame = null);
  }
  @mj.traitEvent("FailVw_destroy")
  onDestroy() {
    if (this.previewContainer && cc.isValid(this.previewContainer)) {
      this.previewContainer.destroy();
      this.previewContainer = null;
    }
    this.tileSprites.clear();
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    super.onDestroy && super.onDestroy.call(this);
  }
}
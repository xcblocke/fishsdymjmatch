import UIView from '../../../Scripts/framework/ui/UIView';
import RankBonusListView from './RankBonusListView';
import CountdownComponent from './component/CountdownComponent';
import RankModel from './RankModel';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import RankBonusCollectEffect from './RankBonusCollectEffect';
import RankBonusItem from './RankBonusItem';
import { DotGameBtnClick, ERankClickType } from '../../../Scripts/dot/DGameBtnClick';
import { DotGamePageShow, EPageShowType } from '../../../Scripts/dot/DGamePageShow';
import GameData from '../../../Scripts/core/simulator/data/GameData';
import { ERankAudioID } from './util/RankEnums';
import RankBonusWinRateView from './RankBonusWinRateView';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../Scripts/Config';
@mj.class
export default class RankBonusView extends UIView {
  _titleNode = null;
  _title2Node = null;
  _timeNode = null;
  _timeLabelNode = null;
  _contentNode = null;
  _maskNode = null;
  _closeBtnNode = null;
  _maskBtnNode = null;
  _myselfItemNode = null;
  _myselfRankBonusItem = null;
  _winRateView = null;
  _rankListView = null;
  _isLoad = false;
  _isNeedShow = false;
  _isAnimPlaying = false;
  _isCollectPlaying = false;
  _isUpRankPlaying = false;
  static prefabUrl = "prefabs/rank/RankBonusView";
  get myselfRankBonusItem() {
    return this._myselfRankBonusItem;
  }
  get isUpRankPlaying() {
    return this._isUpRankPlaying;
  }
  getContentNode() {
    return this._contentNode;
  }
  @mj.traitEvent("RankBonusVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._contentNode = this.node.getChildByName("content");
    this._maskNode = this.node.getChildByName("bg");
    this._titleNode = this.node.getChildByName("title");
    this._title2Node = this.node.getChildByName("title2");
    this._timeNode = cc.find("time_node", this.node);
    this._maskBtnNode = cc.find("mask", this.node);
    this._closeBtnNode = cc.find("btn_next", this._contentNode);
    this._closeBtnNode && this.OnButtonClick(this._closeBtnNode, this.onCloseClick.bind(this));
    this.initComponents();
    this.initMyRankBonusItem();
    this._isLoad = true;
    this._isNeedShow && this.show();
    mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
  }
  initComponents() {
    var t, e;
    this._rankListView = null === (t = this._contentNode.getChildByName("scrollView")) || void 0 === t ? void 0 : t.addComponent(RankBonusListView);
    (null === (e = this._rankListView) || void 0 === e ? void 0 : e.node) && (this._rankListView.node.active = false);
    this._timeLabelNode = cc.find("time_node/time", this.node);
    this.updateCountdown();
    var o = this.node.getChildByName("progress");
    this._winRateView = o.addComponent(RankBonusWinRateView);
  }
  initMyRankBonusItem() {
    if (!this._myselfItemNode) {
      var t = RankBonusItem.createCell("rank");
      if (t) {
        var e = t.getComponent(RankBonusItem);
        t.parent = this._contentNode;
        t.active = false;
        t.position = cc.v3(0, 0, 0);
        this._myselfRankBonusItem = e;
        this._myselfItemNode = t;
        this._myselfItemNode.active = false;
      }
    }
  }
  getCDComp() {
    var t;
    this._timeLabelNode || (this._timeLabelNode = cc.find("time_node/time", this.node));
    return null === (t = this._timeLabelNode) || void 0 === t ? void 0 : t.getComponent(CountdownComponent);
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    return _t;
  }
  onGameShow() {
    this.updateCountdown();
  }
  onGameHide() {}
  @mj.traitEvent("RankBonusVw_show")
  show() {
    var t,
      e,
      o = this;
    if (this._isLoad) {
      this._isNeedShow = false;
      DotGamePageShow.dot(EPageShowType.LeaderBoardResultPage);
      var n = RankModel.getInstance().getCurBoardData();
      n && I18NStrings.setText(this._titleNode, "Gardening Master", n.Name);
      this._maskNode.opacity = 0;
      this._titleNode.opacity = 0;
      this._timeNode.opacity = 0;
      this._title2Node.opacity = 0;
      this._closeBtnNode.opacity = 0;
      this.changeTouchState(false, true);
      null === (t = this._winRateView) || void 0 === t || t.show();
      if (this._rankListView) {
        this._rankListView.node.active = true;
        this._rankListView.node.opacity = 0;
        this._rankListView.refreshList(this.delegate.model.getRankList() || []);
      }
      null === (e = this._winRateView) || void 0 === e || e.updateWinStreakDisplay();
      this.updateCountdown();
      this.playRankBonusSound();
      this.scheduleOnce(function () {
        o.moveToMyRank();
      }, 0);
    } else this._isNeedShow = true;
  }
  @mj.traitEvent("RankBonusVw_moveToMyRk")
  moveToMyRank() {
    var t,
      e = this;
    null === (t = this._rankListView) || void 0 === t || t.scrollToMyRank(function () {
      e.playEnterAnimation();
    });
  }
  updateCountdown() {
    if (this._timeLabelNode) {
      var t = this._timeLabelNode.getComponent(CountdownComponent),
        e = RankModel.getInstance().getLeftTime();
      e > 0 && (null == t || t.setRemainTime(e));
    }
  }
  playEnterAnimation() {
    var t, e;
    this._isAnimPlaying = true;
    this._maskNode.opacity = 0;
    cc.tween(this._maskNode).to(0.1, {
      opacity: 150
    }).start();
    [this._titleNode, this._timeNode, this._title2Node].forEach(function (t, e) {
      if (cc.isValid(t)) {
        t.opacity = 255;
        t.scale = 0;
        cc.tween(t).delay(0.06 * e).to(0.26, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
      }
    });
    null === (t = this._winRateView) || void 0 === t || t.playEnterAnimation();
    var o = null === (e = this._rankListView) || void 0 === e ? void 0 : e.playListItemAnimation(),
      n = Math.max(0, o - 0.89);
    if (this._closeBtnNode) {
      this._closeBtnNode.opacity = 255;
      this._closeBtnNode.scale = 0;
      var a = this.onEnterAniEnd.bind(this);
      cc.tween(this._closeBtnNode).delay(0.66).to(0.23, {
        scale: 1
      }, {
        easing: "backOut"
      }).delay(n).call(a).start();
    }
  }
  @mj.traitEvent("RankBonusVw_onEnterAniEnd")
  onEnterAniEnd() {
    this.showRateLevelEffect();
  }
  changeMaskOrder() {
    if (this._maskBtnNode && this._contentNode && this._closeBtnNode && this._closeBtnNode.activeInHierarchy && this._maskBtnNode.parent !== this._contentNode) {
      this._maskBtnNode.parent = this._contentNode;
      var t = this._closeBtnNode.getSiblingIndex();
      this._maskBtnNode.setSiblingIndex(t);
    }
  }
  showRateLevelEffect() {
    var t,
      e,
      o,
      n,
      a,
      i = this,
      r = this.delegate.model.localData.myWinStreakCount,
      s = null === (e = null === (t = this.delegate.model.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount;
    if (r !== s && void 0 !== s) {
      var l = null === (o = RankModel.getInstance().getRobotLogic()) || void 0 === o ? void 0 : o.getWinStreakRateLevel(s);
      if (null == l || null !== (n = this._winRateView) && void 0 !== n && n.isRateLevelActive(l)) {
        this.playCollectEffect();
      } else {
        null === (a = this._winRateView) || void 0 === a || a.playRateLevelAnimation(l, function () {
          cc.isValid(i.node) && i.playCollectEffect();
        });
      }
    } else this.playCollectEffect();
  }
  playCollectEffect() {
    var t,
      e,
      o,
      n,
      a = this;
    this._isAnimPlaying = false;
    this._isCollectPlaying = true;
    var i = this.delegate.model.localData,
      r = null === (t = i.rankGameData) || void 0 === t ? void 0 : t.joinActInfo;
    if (r) {
      var s = r.score - i.myScore;
      if (s <= 0) this.playAllEffectEnd();else {
        var l = null === (e = this._winRateView) || void 0 === e ? void 0 : e.getActiveBarPos();
        if (l) {
          var c = null === (o = this._rankListView) || void 0 === o ? void 0 : o.getRankSelfItemWorldPos(),
            d = c.worldPos,
            p = c.item;
          if (p) {
            var u = this.createAndPlayCardEffect.bind(this),
              h = 0;
            cc.tween(this.node).repeat(s, cc.tween().delay(0.2).call(function () {
              a._isCollectPlaying && u(l, d, h == s - 1, p);
              h++;
            })).start();
            null === (n = this._winRateView) || void 0 === n || n.playAddScoreAnimation(s);
          } else this.playAllEffectEnd();
        } else this.playAllEffectEnd();
      }
    } else this.playAllEffectEnd();
  }
  createAndPlayCardEffect(t, e, o, n) {
    var a = this;
    try {
      var i = this.showUpLevelEffect.bind(this);
      RankBonusCollectEffect.createUI(RankBonusCollectEffect.prefabUrl).then(function (r) {
        if (cc.isValid(r) && cc.isValid(a.node)) {
          if (a._isCollectPlaying) {
            a.node.addChild(r);
            r.setPosition(t);
            var s = r.getComponent(RankBonusCollectEffect);
            if (s) {
              s.playEffect(e, o, function () {
                if (cc.isValid(a.node)) {
                  n && cc.isValid(n.node) && n.addScore(1);
                  o && i(n);
                }
              });
            } else {
              o && a.playAllEffectEnd();
            }
          } else {
            r.destroy();
            o && a.playAllEffectEnd();
          }
        } else o && a.playAllEffectEnd();
      });
    } catch (t) {}
  }
  showUpLevelEffect(t) {
    var e,
      o = this;
    if (t && (null === (e = t.node) || void 0 === e ? void 0 : e.activeInHierarchy)) {
      if (this._rankListView) {
        this._isCollectPlaying = false;
        this._isUpRankPlaying = true;
        var n = this._rankListView.getMyIndex();
        RankModel.getInstance().syncMyScore();
        var a = this.delegate.model.localData.myRank,
          i = n + 1,
          r = t.getRank() > this.delegate.model.localData.myRank;
        t.playUpLevelEffect(r, function (t) {
          if (cc.isValid(o.node) && o._isUpRankPlaying && o._rankListView && t && cc.isValid(t.node) && t.node.activeInHierarchy && r) {
            o.playUpLevelEffect(t, i, a);
          } else {
            o.playAllEffectEnd();
          }
        });
      } else this.playAllEffectEnd();
    } else this.playAllEffectEnd();
  }
  playUpLevelEffect(t, e, o) {
    var n = this;
    this._rankListView && cc.isValid(t.node) && this._rankListView.scrollToRankIfNeeded(o, false, true).then(function (a) {
      if (n._isUpRankPlaying && n._rankListView && cc.isValid(t.node)) if (a) n._rankListView.moveItemToRank(e, o, function (t) {
        if (n._isUpRankPlaying && n._rankListView) {
          mj.audioManager.stopEffect(n._upRankLoopAudioId);
          if (t && t.enabledInHierarchy) {
            t.showRankOutEffect(function () {
              cc.isValid(n.node) && n.upRankEnd(t.node);
            });
          } else {
            n.playAllEffectEnd();
          }
        }
      });else {
        n._rankListView.exchangeRankData(e, o);
        n.updateMyselfItem(t, e);
      }
    });
  }
  @mj.traitEvent("RankBonusVw_upRkScroll")
  upRankScroll() {
    var t = RankModel.getInstance(),
      e = Math.min(t.localData.myRank - 1, 48),
      o = this._rankListView.computeScrollParams(e),
      n = o.targetOffsetY,
      a = o.scrollTime;
    this._rankListView.scrollToIndex(e, n, a);
    return {
      toIndex: e,
      scrollTime: a
    };
  }
  @mj.traitEvent("RankBonusVw_getItmAniDly")
  getItemAniDelay() {
    return 0.2;
  }
  updateMyselfItem(t, e) {
    var o = this;
    if (t && cc.isValid(t.node) && this._myselfRankBonusItem && cc.isValid(this._myselfRankBonusItem.node)) {
      var n = t.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
        a = t.node.height;
      this._myselfRankBonusItem.updateCell(t.getData());
      var i = this._myselfRankBonusItem.node.parent.convertToNodeSpaceAR(n);
      this._myselfRankBonusItem.node.position = new cc.Vec3(0, i.y + a / 2, 0);
      this._myselfRankBonusItem.node.active = true;
      t.node.opacity = 0;
      t.getContentNode().scale = 0;
      this._myselfRankBonusItem.playUpLevelLoopEffect();
      this._upRankLoopAudioId = 0;
      mj.audioManager.playEffect(ERankAudioID.ItemMove, true).then(function (t) {
        o._upRankLoopAudioId = t;
      });
      var r = this.delegate.model.localData.myRank,
        s = this.upRankScroll(),
        l = (s.toIndex, s.scrollTime),
        c = l > 1 ? l - this.getItemAniDelay() : l,
        d = this._rankListView.getRankUpWorldPos(r),
        p = this._myselfRankBonusItem.node.parent.convertToNodeSpaceAR(d).y,
        u = Math.abs(this._myselfRankBonusItem.node.y - p) / a * 0.2;
      this.startSelfItemAni(c, p, u, r, e);
    }
  }
  @mj.traitEvent("RankBonusVw_stSelfItmAni")
  startSelfItemAni(t, e, o, n) {
    var a = this;
    this._myselfRankBonusItem && cc.isValid(this._myselfRankBonusItem.node) && cc.tween(this._myselfRankBonusItem.node).delay(t).call(function () {
      a.onRankUpStart();
    }).to(o, {
      y: e
    }).call(function () {
      var t;
      a.onRankUpEnd();
      if (a._isUpRankPlaying && a._myselfRankBonusItem && (null === (t = a._myselfRankBonusItem.node) || void 0 === t ? void 0 : t.activeInHierarchy)) {
        mj.audioManager.stopEffect(a._upRankLoopAudioId);
        a._myselfRankBonusItem.node.active = true;
        var e = a._rankListView.getCellByIndex(n - 1);
        cc.isValid(e) && e.convertToWorldSpaceAR(cc.Vec2.ZERO);
        a._myselfRankBonusItem.showRankOutEffect(function () {
          cc.isValid(a.node) && a.upRankEnd(e);
        });
      }
    }).start();
  }
  @mj.traitEvent("RankBonusVw_rankUpStart")
  onRankUpStart() {}
  @mj.traitEvent("RankBonusVw_rankUpEnd")
  onRankUpEnd() {}
  upRankEnd(t) {
    var e, o, n, a;
    null === (e = this._rankListView) || void 0 === e || e.addScoreScrollEnd();
    cc.isValid(t) && (null === (o = t.getComponent(RankBonusItem)) || void 0 === o || o.updateContentOpacity());
    this._upRankLoopAudioId = null;
    (null === (a = null === (n = this._myselfRankBonusItem) || void 0 === n ? void 0 : n.node) || void 0 === a ? void 0 : a.activeInHierarchy) && (this._myselfRankBonusItem.node.active = false);
    this.playAllEffectEnd();
  }
  playAllEffectEnd() {
    this._isCollectPlaying = false;
    this._isUpRankPlaying = false;
    this._isAnimPlaying = false;
    this.changeTouchState(true, false);
  }
  changeTouchState(t, e) {
    if (cc.isValid(this._closeBtnNode)) {
      var o = this._closeBtnNode.getComponent(cc.Button);
      o && (o.interactable = t);
    }
    cc.isValid(this._maskBtnNode) && (this._maskBtnNode.active = e);
  }
  playRankBonusSound() {
    mj.audioManager.playEffect(ERankAudioID.Ranking1);
  }
  @mj.traitEvent("RankBonusVw_cancelActs")
  cancelActions() {
    var t, e, o, n, a, i, r, s, l;
    null === (t = this.node) || void 0 === t || t.stopAllActions();
    null === (e = this._maskNode) || void 0 === e || e.stopAllActions();
    null === (o = this._titleNode) || void 0 === o || o.stopAllActions();
    null === (n = this._timeNode) || void 0 === n || n.stopAllActions();
    null === (a = this._title2Node) || void 0 === a || a.stopAllActions();
    null === (i = this._closeBtnNode) || void 0 === i || i.stopAllActions();
    null === (r = this._rankListView) || void 0 === r || r.cancelActions();
    null === (s = this._winRateView) || void 0 === s || s.cancelActions();
    this._myselfRankBonusItem && (null === (l = this._myselfRankBonusItem.node) || void 0 === l ? void 0 : l.activeInHierarchy) && this._myselfRankBonusItem.node.stopAllActions();
    mj.audioManager.stopEffect(this._upRankLoopAudioId);
    this._isAnimPlaying = false;
    this._isCollectPlaying = false;
    this._isUpRankPlaying = false;
  }
  onCloseClick() {
    var t;
    DotGameBtnClick.dotRank(ERankClickType.ClickRankBonusContinue, GameData.getInstance().getLevelId());
    this.cancelActions();
    null === (t = this.delegate) || void 0 === t || t.close();
  }
  @mj.traitEvent("RankBonusVw_destroy")
  onDestroy() {
    super.onDestroy.call(this);
    this.dispatchEvent("RankBonusVw_destroy");
    RankModel.getInstance().syncMyScore();
    this._myselfRankBonusItem = null;
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
  }
}
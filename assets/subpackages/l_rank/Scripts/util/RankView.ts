import UIView from '../../../../Scripts/framework/ui/UIView';
import RankListView from '../RankListView';
import RankModel from '../RankModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import CountdownComponent from '../component/CountdownComponent';
import BoxTips from '../BoxTips';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserInfoManager from '../../../../Scripts/gamePlay/base/user/UserInfoManager';
import { DotGameBtnClick, ERankClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../../Scripts/Config';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import { DotGamePageShow, EPageShowType } from '../../../../Scripts/dot/DGamePageShow';
import { ERankAudioID } from './RankEnums';
import RankBoxBtn from '../RankBoxBtn';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
var C = {
  data: [{
    rankNum: 1,
    prefabPath: "prefabs/rank/buttons/Rank1BoxBtn",
    position: cc.v2(0, 210)
  }, {
    rankNum: 2,
    prefabPath: "prefabs/rank/buttons/Rank2BoxBtn",
    position: cc.v2(0, 185)
  }, {
    rankNum: 3,
    prefabPath: "prefabs/rank/buttons/Rank3BoxBtn",
    position: cc.v2(0, 188)
  }]
};
@mj.class
export default class RankView extends UIView {
  _contentNode = null;
  _topAdaptNode = null;
  _bottomAdaptNode = null;
  _maskNode = null;
  _rankListView = null;
  _scrollView = null;
  _scViewCntNode = null;
  _goBtnNode = null;
  _backBtnNode = null;
  _tipsBtnNode = null;
  _rankTitleNode = null;
  _rankTimeNode = null;
  _btnLabelNode = null;
  _flagSkeleton = null;
  _rank123RootNode = null;
  _rankBlockNode = null;
  _boxTipsNode = null;
  _upBgNode = null;
  _downBgNode = null;
  _isOldData = false;
  curFont = null;
  _boxBtnNodeArray = [];
  _scrollTimer = -1;
  static prefabUrl = "prefabs/rank/RankView";
  getContentNode() {
    return this._contentNode;
  }
  @mj.traitEvent("RankVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._contentNode = this.node.getChildByName("content");
    this._topAdaptNode = this.node.getChildByName("top_adapt");
    this._bottomAdaptNode = this.node.getChildByName("bottom_adapt");
    this._maskNode = this.node.getChildByName("bg");
    this._scrollView = this._contentNode.getChildByName("scrollView").getComponent(cc.ScrollView);
    this._scViewCntNode = cc.find("scrollView/view/content", this._contentNode);
    this._goBtnNode = this._bottomAdaptNode.getChildByName("btn_next");
    this._downBgNode = this._bottomAdaptNode.getChildByName("journey_bg_dn");
    this._btnLabelNode = this._goBtnNode.getChildByName("content").getChildByName("text");
    this._backBtnNode = this._topAdaptNode.getChildByName("btn_back");
    this._tipsBtnNode = this._topAdaptNode.getChildByName("btn_tips");
    this._rankTitleNode = this._topAdaptNode.getChildByName("title");
    this._rankTimeNode = this._topAdaptNode.getChildByName("bg").getChildByName("time");
    this._flagSkeleton = this._topAdaptNode.getChildByName("in_ani").getComponent(sp.Skeleton);
    this._rank123RootNode = this._topAdaptNode.getChildByName("123");
    this._upBgNode = this._topAdaptNode.getChildByName("gameplay_bg_up");
    this._rankBlockNode = this.node.getChildByName("block");
    this.OnButtonClick(this._goBtnNode, this.onBtnGoClick.bind(this));
    this.OnButtonClick(this._backBtnNode, this.onBtnBackClick.bind(this));
    this.OnButtonClick(this._tipsBtnNode, this.onBtnTipsClick.bind(this));
    this.addBoxBtns();
    this.curFont = this._rankTitleNode.getComponent(cc.Label).font;
  }
  onRefreshSelf() {
    for (var t = RankModel.getInstance(), e = this.getRankList(), o = Math.min(e.length, 3), n = 0; n < o; n++) if (this.delegate.model.isMySelf(e[n].id)) {
      var a = this._rank123RootNode.getChildByName(String(n + 1)),
        i = a.getChildByName("head"),
        r = i.children[0].getComponent(cc.Sprite),
        s = i.children[1].getComponent(cc.Sprite),
        c = t.getRankAvatarAndFrame(e[n], true),
        d = c.avatarId,
        p = c.frameId;
      this.updateAvatarAndFrame(r, s, d, p);
      var u = a.getChildByName("name").getComponent(cc.Label);
      u.string = t.getRankName(e[n], true);
      var f = UserModel.getInstance().getUserName(),
        m = UserInfoManager.getInstance().isKoreanName(f),
        y = UserInfoManager.getInstance().isRussianName(f);
      if (m || y) {
        u.useSystemFont = true;
        u.font = null;
      } else {
        u.useSystemFont = false;
        u.font = this.curFont;
      }
      break;
    }
  }
  @mj.traitEvent("RankVw_show")
  show(t) {
    var e;
    this._isOldData = null !== (e = t.isOldData) && void 0 !== e && e;
    mj.audioManager.playEffect(ERankAudioID.Ranking2);
    DotGamePageShow.dot(EPageShowType.LeaderBoard);
    this.showContent();
  }
  showContent() {
    this.getRankList();
    this.updateLabels();
    this.updateCountdown();
    this.initRank123();
    this.playEnterAnimation();
  }
  @mj.traitEvent("RankVw_getBoardData")
  getCurBoardData() {
    return RankModel.getInstance().getCurBoardData();
  }
  @mj.traitEvent("RankVw_updateLabels")
  updateLabels() {
    var t = this.getCurBoardData();
    if (t) {
      I18NStrings.setText(this._rankTitleNode, "Gardening Master", t.Name);
      I18NStrings.setText(this._btnLabelNode, "Let's go", "LeaderBoard_Start_Btn_Jump");
    }
  }
  produceList() {
    this.initRankListView();
    this.refreshList();
    this.moveListOutOfScreen();
  }
  getCDComp() {
    var t;
    return null === (t = this._rankTimeNode) || void 0 === t ? void 0 : t.getComponent(CountdownComponent);
  }
  @mj.traitEvent("RankVw_getLeftTime")
  getLeftTime() {
    return RankModel.getInstance().getLeftTime();
  }
  updateCountdown() {
    var t = this._rankTimeNode.getComponent(CountdownComponent),
      e = this.getLeftTime();
    if (e > 0) {
      t.setRemainTime(e, this.finishCountdown.bind(this));
    } else {
      this.closeOutCD();
    }
  }
  setTimeString(t = 0) {
    this._rankTimeNode.getComponent(CountdownComponent).setRemainTime(t);
  }
  @mj.traitEvent("RankVw_closeOutCD")
  closeOutCD() {
    this.removeRankBoxTips();
    this.delegate.close();
  }
  @mj.traitEvent("RankVw_finishCD")
  finishCountdown() {
    this.removeRankBoxTips();
    this.delegate.close();
  }
  playEnterAnimation() {
    cc.tween(this.node).delay(0.05).call(this.produceList.bind(this)).delay(0.08).call(this.playFlagAnimation.bind(this)).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("1"))).call(this.playList.bind(this)).delay(0.07).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("2"))).delay(0.07).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("3"))).delay(0.03).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("1"))).delay(0.01).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("3"))).delay(0.06).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("2"))).delay(0.36).call(this.playHighlight.bind(this)).call(this.playListScroll.bind(this)).start();
  }
  playAvatarAndName(t) {
    var e = t.getChildByName("head"),
      o = t.getChildByName("name");
    e.active = true;
    e.setScale(0.4, 0.4);
    o.active = true;
    o.opacity = 0;
    cc.tween(e).to(0.2, {
      scale: 1
    }).start();
    cc.tween(o).to(0.2, {
      opacity: 255
    }).start();
  }
  playSpecialCard(t) {
    var e = t.getChildByName("bg");
    e.opacity = 255;
    e.setScale(0.6, 0.6);
    cc.tween(e).to(0.2, {
      scale: 1
    }).start();
  }
  @mj.traitEvent("RankVw_getSelfRank")
  getSelfRank() {
    return RankModel.getInstance().getSelfRank();
  }
  playHighlight() {
    var t = this.getSelfRank(),
      e = this._rank123RootNode.getChildByName(String(t));
    if (e) {
      var o = e.getChildByName("lightNode");
      o.active = true;
      var n = o.getChildByName("light");
      cc.tween(n).to(0.1, {
        opacity: 255
      }).to(0.13, {
        opacity: 178.5
      }).to(0.1, {
        opacity: 255
      }).start();
    }
  }
  hideHightlight() {
    if (cc.isValid(this._rank123RootNode)) for (var t = 0; t < 3; t++) {
      var e = this._rank123RootNode.getChildByName(String(t + 1)).getChildByName("lightNode");
      e.active = false;
      e.getChildByName("light").opacity = 0;
    }
  }
  playList() {
    var t = 0;
    this._scViewCntNode.children.forEach(function (e) {
      cc.tween(e).delay(t).to(0.2, {
        x: -17
      }).to(0.02, {
        x: 0
      }, {
        easing: "smooth"
      }).start();
      t += 0.03;
    });
  }
  @mj.traitEvent("RankVw_getRankList")
  getRankList() {
    return this.delegate.model.getRankList(true) || [];
  }
  @mj.traitEvent("RankVw_listScroll")
  playListScroll() {
    var t = this,
      e = 0,
      o = this.getRankList();
    o = o.length > 3 ? o.slice(3) : [];
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      if (RankModel.getInstance().isMySelf(a.id)) {
        e = n;
        break;
      }
    }
    var i = 0.08 * e;
    this._rankListView._tableView.scrollToIndex(e, i);
    if (-1 !== this._scrollTimer) {
      clearTimeout(this._scrollTimer);
      this._scrollTimer = -1;
    }
    this._scrollTimer = setTimeout(function () {
      t._rankBlockNode.active = false;
    }, 1000 * i);
  }
  playFlagAnimation() {
    this._flagSkeleton.node.active = true;
    this._flagSkeleton.setAnimation(0, "in", false);
  }
  refreshList() {
    var t = this.getRankList();
    t = t.length > 3 ? t.slice(3) : [];
    this._rankListView.setDelegate(this.delegate);
    this._rankListView.refreshList(t);
  }
  moveListOutOfScreen() {
    var t = cc.winSize.width;
    this._scViewCntNode.children.forEach(function (e) {
      e.setPosition(t, e.position.y);
    });
  }
  @mj.traitEvent("RankVw_getTipsOffset")
  getBoxTipsOffset() {
    return cc.v2(0, 50);
  }
  @mj.traitEvent("RankVw_getTipsParent")
  getBoxTipsParent() {
    return cc.Canvas.instance.node;
  }
  addRankBoxTips(t, e, o = this.getBoxTipsOffset()) {
    var n = this;
    BoxTips.createUI().then(function (a) {
      if (cc.isValid(t)) {
        var i = n.getBoxTipsParent(),
          r = t.convertToWorldSpaceAR(cc.Vec2.ZERO),
          s = i.convertToNodeSpaceAR(r);
        a.parent = i;
        a.setPosition(s.x + o.x, s.y + o.y);
        a.getComponent(BoxTips).initBoxReward(e);
        a.getComponent(BoxTips).playIn();
        n._boxTipsNode = a;
      }
    }).catch(function (t) {
      console.error("[RankView] 游戏内创建宝箱提示动画失败:" + ((null == t ? void 0 : t.message) || "BoxTips加载失败"));
    });
  }
  removeRankBoxTips() {
    var t;
    cc.isValid(this._boxTipsNode) && (null === (t = this._boxTipsNode.getComponent(BoxTips)) || void 0 === t || t.playOut());
  }
  getMessageListeners() {
    var _t = {};
    _t.msg_addRankBoxTips = this.addRankBoxTips.bind(this);
    _t.msg_removeRankBoxTips = this.removeRankBoxTips.bind(this);
    _t.closeRankView = this.closeSelf.bind(this);
    _t[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    _t.msg_rankRefreshSelf = this.onRefreshSelf.bind(this);
    return _t;
  }
  onGameShow() {
    this.updateCountdown();
  }
  onGameHide() {}
  @mj.traitEvent("RankVw_onBtnGoClick")
  onBtnGoClick() {
    this.delegate.jump();
    var t = UserModel.getInstance().getCurrentGameData();
    DotGameBtnClick.dotRank(ERankClickType.ClickRankViewStart, t.getLevelId());
  }
  onBtnBackClick() {
    this.closeSelf();
    DotGameBtnClick.dotRank(ERankClickType.ClickRankViewBack);
    DotGamePageShow.dot(EPageShowType.LeaderBoardToMainPage);
  }
  closeSelf() {
    this.delegate.close();
  }
  onBtnTipsClick() {
    this.delegate.showTips();
    DotGameBtnClick.dotRank(ERankClickType.ClickRankViewTips);
  }
  initRank123() {
    this.hideHightlight();
    for (var t = RankModel.getInstance(), e = this.getRankList(), o = Math.min(e.length, 3), n = 0; n < o; n++) {
      var a = this._rank123RootNode.getChildByName(String(n + 1)),
        i = a.getChildByName("head"),
        r = i.children[0].getComponent(cc.Sprite),
        s = i.children[1].getComponent(cc.Sprite),
        c = this.delegate.model.isMySelf(e[n].id),
        d = t.getRankAvatarAndFrame(e[n], c),
        p = d.avatarId,
        f = d.frameId;
      this.updateAvatarAndFrame(r, s, p, f);
      var m = a.getChildByName("name").getComponent(cc.Label);
      m.string = t.getRankName(e[n], c);
      var y = a.getChildByName("bg");
      y.getChildByName("count").getComponent(cc.Label).string = e[n].score + "";
      this.updateImgCard(y.getChildByName("card"));
      var g = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
        v = g.path,
        C = g.bundleName,
        R = g.fromAtlas;
      BaseSprite.refreshWithNode(y.getChildByName("gameplay_special_mj_2"), v, R, false, C);
      var b = UserModel.getInstance().getUserName(),
        w = UserInfoManager.getInstance().isKoreanName(b),
        B = UserInfoManager.getInstance().isRussianName(b);
      if (c && (w || B)) {
        m.useSystemFont = true;
        m.font = null;
      } else {
        m.useSystemFont = false;
        m.font = this.curFont;
      }
    }
  }
  @mj.traitEvent("RankVw_updAvatarFrame")
  updateAvatarAndFrame(t, e, o, n) {
    UserInfoManager.getInstance().setupUserAvatar(this.delegate, t, e, {
      avatarId: o,
      frameId: n
    });
  }
  @mj.traitEvent("RankVw_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  @mj.traitEvent("RankVw_addBoxBtns")
  addBoxBtns() {
    for (var t = this, e = function e(e) {
        var o = C.data[e];
        RankBoxBtn.createUI(o.prefabPath).then(function (e) {
          if (cc.isValid(t._rank123RootNode)) {
            t._boxBtnNodeArray.push(e);
            e.parent = t._rank123RootNode.getChildByName(String(o.rankNum));
            e.setPosition(o.position);
            e.getComponent(RankBoxBtn).setRankNum(o.rankNum);
            t.playBoxAni(e, o.rankNum);
          }
        }).catch(function (t) {
          console.error("[RankView] 游戏内创建宝箱按钮失败:" + ((null == t ? void 0 : t.message) || "RankBoxBtn加载失败"));
        });
      }, o = 0; o < C.data.length; o++) e(o);
  }
  playBoxAni(t) {
    t.scale = 0;
    cc.tween(t).delay(0.1).to(0.2, {
      scale: 1
    }).start();
  }
  initRankListView() {
    this.adapt();
    this._rankListView = this._scrollView.getComponent(RankListView);
    cc.isValid(this._rankListView) || (this._rankListView = this._scrollView.addComponent(RankListView));
  }
  adapt() {
    var t = cc.sys.getSafeAreaRect(),
      e = (cc.Canvas.instance.designResolution.height, t.height, this._scrollView.node.getContentSize()),
      o = cc.find("bg2/leaderboard_bg_2", this._topAdaptNode),
      n = cc.find("journey_bg_dn", this._bottomAdaptNode),
      a = o.convertToWorldSpaceAR(cc.v2(0, -40)),
      i = n.convertToWorldSpaceAR(cc.v2(0, -20)),
      r = cc.v2((a.x + i.x) / 2, (a.y + i.y) / 2),
      s = this._contentNode.convertToNodeSpaceAR(r),
      l = Math.abs(a.y - i.y);
    this._scrollView.node.setPosition(s.x, s.y);
    this._scrollView.node.setContentSize(e.width, l);
    this._scrollView.node.getChildByName("view").setContentSize(e.width, l);
  }
  @mj.traitEvent("RankVw_destroy")
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    if (-1 !== this._scrollTimer) {
      clearTimeout(this._scrollTimer);
      this._scrollTimer = -1;
    }
    this.removeRankBoxTips();
  }
}
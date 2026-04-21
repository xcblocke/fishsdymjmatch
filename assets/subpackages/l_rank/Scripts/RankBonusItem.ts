import BaseCell from '../../../Scripts/base/ui/BaseCell';
import UserInfoManager from '../../../Scripts/gamePlay/base/user/UserInfoManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import RankModel from './RankModel';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { ERankAudioID } from './util/RankEnums';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.class
export default class RankBonusItem extends BaseCell {
  _isAddScoreScrolling = false;
  curFont = null;
  static prefabUrl = "prefabs/rank/RankBonusItem";
  getRank() {
    return this._rank;
  }
  getRankSelfLabel() {
    return this._rankSelfLabel;
  }
  onDestroy() {
    var e;
    super.onDestroy.call(this);
    (null === (e = this._contentNode) || void 0 === e ? void 0 : e.activeInHierarchy) && this._contentNode.stopAllActions();
  }
  uiOnLoad() {
    var t, e, o, n, a, i, r, s, l, c;
    this._contentNode = cc.find("p", this._cellUI);
    this._otherNode = cc.find("p/other", this._cellUI);
    this._rankOtherLabel = null === (t = cc.find("p/other/rank", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._nameOtherLabel = null === (e = cc.find("p/other/name", this._cellUI)) || void 0 === e ? void 0 : e.getComponent(cc.Label);
    this._scoreOtherLabel = null === (o = cc.find("p/other/score_node/count", this._cellUI)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
    this._selfNode = cc.find("p/self", this._cellUI);
    this._rankSelfLabel = null === (n = cc.find("p/self/rank", this._cellUI)) || void 0 === n ? void 0 : n.getComponent(cc.Label);
    this._nameSelfLabel = null === (a = cc.find("p/self/name", this._cellUI)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
    this._scoreSelfLabel = null === (i = cc.find("p/self/score_node/count", this._cellUI)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
    this._avatarSprite = null === (r = cc.find("p/head/avatar", this._cellUI)) || void 0 === r ? void 0 : r.getComponent(cc.Sprite);
    this._frameSprite = null === (s = cc.find("p/head/frame", this._cellUI)) || void 0 === s ? void 0 : s.getComponent(cc.Sprite);
    this._cardSprite = null === (l = cc.find("p/card_bg/card", this._cellUI)) || void 0 === l ? void 0 : l.getComponent(cc.Sprite);
    this._cardBgNode = cc.find("p/card_bg", this._cellUI);
    this._scoreAddValue = 0;
    this._spAddScore = null === (c = cc.find("p/sp_add_score", this._cellUI)) || void 0 === c ? void 0 : c.getComponent(sp.Skeleton);
    this.curFont = this._nameSelfLabel.font;
  }
  updateUI() {
    var t;
    if (this._data) {
      this._contentNode.scale = 1;
      this._scoreAddValue = 0;
      var e = RankModel.getInstance().isMySelf(this._data.id);
      this._contentNode.opacity = this._isAddScoreScrolling && e ? 0 : 255;
      this._selfNode.active = e;
      this._otherNode.active = !e;
      this._rank = this._data.rank;
      this.refreshRank(e, this._data.rank);
      this.refreshName(e, this._data.name);
      this.refreshScore(e, this._data.score);
      var o = RankModel.getInstance().getRankAvatarAndFrame(this._data, e),
        n = o.avatarId,
        a = o.frameId;
      this.updateAvatar(n);
      var i = UserInfoManager.getInstance().getFrameIconPath(a);
      BaseSprite.refreshWithNode(this._frameSprite.node, i);
      if (null === (t = RankModel.getInstance().getCurBoardData()) || void 0 === t ? void 0 : t.CollectThing) {
        this.updateImgCard(this._cardSprite.node);
        var r = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
          d = r.path,
          p = r.bundleName,
          u = r.fromAtlas;
        BaseSprite.refreshWithNode(this._cardBgNode, d, u, false, p);
        this._spAddScore && (this._spAddScore.node.active = false);
      }
    }
  }
  @mj.traitEvent("RankBonusItem_updAvatar")
  updateAvatar(t) {
    var e = UserInfoManager.getInstance().getAvatarIconPath(t);
    BaseSprite.refreshWithNode(this._avatarSprite.node, e, false, true, UserInfoManager.getInstance().getDefaultIconBundleName());
  }
  @mj.traitEvent("RankBonusItem_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  refreshRank(t, e) {
    if (t) {
      this._rankSelfLabel && (this._rankSelfLabel.string = "" + e);
    } else {
      this._rankOtherLabel && (this._rankOtherLabel.string = "" + e);
    }
  }
  updateRankDisplay() {
    var t;
    this._rank = this._data.rank;
    var e = RankModel.getInstance().isMySelf(null === (t = this._data) || void 0 === t ? void 0 : t.id);
    this._cellUI && this.refreshRank(e, this._rank);
  }
  refreshName(t, e) {
    if (t) {
      if (this._nameSelfLabel) {
        var o = UserModel.getInstance().getUserName();
        this._nameSelfLabel.string = o;
        var n = UserInfoManager.getInstance().isKoreanName(o),
          a = UserInfoManager.getInstance().isRussianName(o);
        if (n || a) {
          this._nameSelfLabel.useSystemFont = true;
          this._nameSelfLabel.font = null;
        } else {
          this._nameSelfLabel.useSystemFont = false;
          this._nameSelfLabel.font = this.curFont;
        }
      }
    } else this._nameOtherLabel && (this._nameOtherLabel.string = e);
  }
  refreshScore(t, e) {
    if (t) {
      this._scoreSelfLabel && (this._scoreSelfLabel.string = "" + e);
    } else {
      this._scoreOtherLabel && (this._scoreOtherLabel.string = "" + e);
    }
  }
  addScore(t) {
    if (this._scoreSelfLabel) {
      this._scoreAddValue += t;
      this.refreshScore(true, this._scoreAddValue + this._data.score);
    }
  }
  playUpLevelEffect(t, e) {
    if (t) {
      this.showUpRankInEffect(e);
    } else {
      this.showAddScoreEffect(e);
    }
  }
  playUpLevelLoopEffect() {
    var t = this;
    if (cc.isValid(this._spAddScore)) {
      this._spAddScore.node.active = true;
      playSpineAnim(this._spAddScore, -1, "init", function () {
        t._spAddScore.node.active = false;
      });
    }
    cc.isValid(this._contentNode) && (this._contentNode.scale = 1.05);
  }
  showAddScoreEffect(t) {
    var e = this;
    if (cc.isValid(this._spAddScore)) {
      this._spAddScore.node.active = true;
      playSpineAnim(this._spAddScore, 1, "out", function () {
        e._spAddScore.node.active = false;
        t && t(e);
      });
    } else t && t(this);
    if (cc.isValid(this._contentNode)) {
      this._contentNode.stopAllActions();
      this._contentNode.scale = 1;
      cc.tween(this._contentNode).to(0.16, {
        scale: 1.05
      }, {
        easing: "sineInOut"
      }).call(function () {
        mj.audioManager.playEffect(ERankAudioID.ItemEnd);
      }).to(0.16, {
        scale: 1
      }, {
        easing: "sineInOut"
      }).start();
    }
  }
  showUpRankInEffect(t) {
    var e = this;
    if (cc.isValid(this._spAddScore)) {
      this._spAddScore.node.active = true;
      playSpineAnim(this._spAddScore, 1, "in", function () {
        e._spAddScore.node.active = false;
        t && t(e);
      });
    } else t && t(this);
    if (cc.isValid(this._contentNode)) {
      this._contentNode.stopAllActions();
      this._contentNode.scale = 1;
      mj.audioManager.playEffect(ERankAudioID.ItemStart);
      cc.tween(this._contentNode).to(0.16, {
        scale: 1.05
      }, {
        easing: "sineInOut"
      }).call(function () {
        t && t(e);
      }).start();
    }
  }
  @mj.traitEvent("RankBonusItem_rankOutEff")
  showRankOutEffect(t = null) {
    var e = this;
    if (cc.isValid(this._spAddScore)) {
      this._spAddScore.node.active = true;
      playSpineAnim(this._spAddScore, 1, "out", function () {
        e._spAddScore.node.active = false;
        t && t();
      });
    }
    mj.audioManager.playEffect(ERankAudioID.ItemEnd);
    if (cc.isValid(this._contentNode)) {
      this._contentNode.stopAllActions();
      this._contentNode.scale = 1.05;
      cc.tween(this._contentNode).to(0.1, {
        scale: 1.07
      }, {
        easing: "circOut"
      }).to(0.16, {
        scale: 0.95
      }, {
        easing: "cubicIn"
      }).to(0.17, {
        scale: 1
      }, {
        easing: "sineInOut"
      }).call(function () {}).start();
    }
  }
  updateItemCell(t, e) {
    this._isAddScoreScrolling = e;
    this.updateCell(t);
  }
  getContentNode() {
    return this._contentNode;
  }
  updateContentOpacity() {
    if (cc.isValid(this._contentNode)) {
      this._contentNode.opacity = 255;
      this._contentNode.stopAllActions();
      this._contentNode.scale = 1;
    }
    this._isAddScoreScrolling = false;
  }
}
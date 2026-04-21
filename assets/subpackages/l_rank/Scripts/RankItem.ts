import BaseCell from '../../../Scripts/base/ui/BaseCell';
import RankModel from './RankModel';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UserInfoManager from '../../../Scripts/gamePlay/base/user/UserInfoManager';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.class
export default class RankItem extends BaseCell {
  _delegate = null;
  curFont = null;
  static prefabUrl = "prefabs/rank/RankItem";
  uiOnLoad() {
    var t;
    this._rankLabel = cc.find("p/rank", this._cellUI).getComponent(cc.Label);
    this._avatarSprite = cc.find("p/head/avatar", this._cellUI).getComponent(cc.Sprite);
    this._frameSprite = cc.find("p/head/frame", this._cellUI).getComponent(cc.Sprite);
    this._nameLabel = cc.find("p/name", this._cellUI).getComponent(cc.Label);
    this._scoreLabel = null === (t = cc.find("p/count", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._cardBgNode = cc.find("p/card_bg", this._cellUI);
    this._cardSpriteNode = cc.find("p/card_bg/card", this._cellUI);
    this._boxBtnNode = cc.find("p/BoxBtn", this._cellUI);
    this._unselectedBgNode = cc.find("p/bg/unselect", this._cellUI);
    this._selectedBgNode = cc.find("p/bg/select", this._cellUI);
    this._selectedScoreBgNode = cc.find("p/score_node/select", this._cellUI);
    this._unselectedScoreBgNode = cc.find("p/score_node/unselect", this._cellUI);
    this.registerEvents();
    this.curFont = this._nameLabel.font;
  }
  getMessageListeners() {
    var _t = {};
    _t.msg_rankRefreshSelf = this.onRefreshSelf.bind(this);
    return _t;
  }
  onRefreshSelf() {
    if (this._data && this.isMySelf()) {
      var t = RankModel.getInstance().getRankName(this._data, true);
      this._nameLabel.string = t;
      var e = UserInfoManager.getInstance().isKoreanName(t),
        o = UserInfoManager.getInstance().isRussianName(t);
      if (e || o) {
        this._nameLabel.useSystemFont = true;
        this._nameLabel.font = null;
      } else {
        this._nameLabel.useSystemFont = false;
        this._nameLabel.font = this.curFont;
      }
      var n = RankModel.getInstance().getRankAvatarAndFrame(this._data, true),
        a = n.avatarId,
        i = n.frameId;
      this.updateAvatarAndFrame(a, i);
    }
  }
  registerEvents() {
    this.OnButtonClick(this._boxBtnNode, this.onBtnTipsClick.bind(this));
  }
  @mj.traitEvent("RankItem_btnTips")
  onBtnTipsClick() {}
  getBoxBtnNode() {
    return this._boxBtnNode;
  }
  getConfigReward() {
    return RankModel.getInstance().getRewardIdByRank(this._data.rank);
  }
  setDelegate(t) {
    this._delegate = t;
  }
  isMySelf() {
    return RankModel.getInstance().isMySelf(this._data.id);
  }
  isZeroScore() {
    return 0 == this._data.score;
  }
  @mj.traitEvent("RankItem_updRank")
  updateRank() {
    this.setRankString(this._data.rank);
  }
  setRankString(t) {
    this._rankLabel.string = t + "";
  }
  @mj.traitEvent("RankItem_updUI")
  updateUI() {
    if (this._data) {
      var t = this.isMySelf();
      this.updateRank();
      this._nameLabel.string = RankModel.getInstance().getRankName(this._data, t);
      this._scoreLabel.string = this._data.score + "";
      var e = UserModel.getInstance().getUserName(),
        o = UserInfoManager.getInstance().isKoreanName(e),
        n = UserInfoManager.getInstance().isRussianName(e);
      if (t && (o || n)) {
        this._nameLabel.useSystemFont = true;
        this._nameLabel.font = null;
      } else {
        this._nameLabel.useSystemFont = false;
        this._nameLabel.font = this.curFont;
      }
      var a = RankModel.getInstance().getRankAvatarAndFrame(this._data, t),
        i = a.avatarId,
        r = a.frameId;
      this.updateAvatarAndFrame(i, r);
      var u = t ? "#f1cd90" : "#804217";
      this._rankLabel.node.color = new cc.Color().fromHEX(u);
      this._nameLabel.node.color = new cc.Color().fromHEX(u);
      this._scoreLabel.node.color = new cc.Color().fromHEX(u);
      this._unselectedBgNode.active = !t;
      this._selectedBgNode.active = t;
      this._selectedScoreBgNode.active = t;
      this._unselectedScoreBgNode.active = !t;
      this._boxBtnNode.active = this._data.rank <= RankModel.getInstance().getCanRewardCount();
      this.updateImgCard(this._cardSpriteNode);
      var h = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
        f = h.path,
        m = h.bundleName,
        _ = h.fromAtlas;
      BaseSprite.refreshWithNode(this._cardBgNode, f, _, false, m);
    }
  }
  @mj.traitEvent("RankItem_updAvatarFrame")
  updateAvatarAndFrame(t, e) {
    UserInfoManager.getInstance().setupUserAvatar(this._delegate, this._avatarSprite, this._frameSprite, {
      avatarId: t,
      frameId: e
    });
  }
  @mj.traitEvent("RankItem_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
}
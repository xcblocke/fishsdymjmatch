import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import CountdownComponent from './CountdownComponent';
import RankModel from '../RankModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import { DotGameBtnClick, ERankClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../../Scripts/Config';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import BaseSpine from '../../../../Scripts/gamePlay/base/ui/BaseSpine';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class HallRankBtn extends BaseUI {
  _labelTime = null;
  _labelRankNode = null;
  _cardSprNode = null;
  _aniSpineDown = null;
  _aniSpineUp = null;
  _animProxy = null;
  static prefabUrl = "prefabs/rank/HallRankBtn";
  @mj.traitEvent("RankBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    this._labelTime = this.node.getChildByName("Bg").getChildByName("Label");
    this._labelRankNode = this.node.getChildByName("Bg").getChildByName("Rank");
    this._cardSprNode = this.node.getChildByName("bg").getChildByName("Card");
    this._aniSpineDown = this.node.getChildByName("bg").getChildByName("down").getComponent(sp.Skeleton);
    this._aniSpineUp = this.node.getChildByName("bg").getChildByName("up").getComponent(sp.Skeleton);
    this.initComponents();
    this.init();
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "Rank",
      node: this.node
    });
  }
  onDisable() {
    super.onDisable && super.onDisable.call(this);
  }
  @mj.traitEvent("RankBtn_initComp")
  initComponents() {
    var t = this;
    this._animProxy = BaseSpine.refreshWithNode(this._aniSpineDown.node);
    this._animProxy.reset("");
    this._animProxy.markReady("");
    this._animProxy.attachNode("photo", function () {
      return t._cardSprNode;
    });
  }
  init() {
    this.updateAll();
  }
  updateRemainTime() {
    var t;
    if (cc.isValid(this._labelTime)) {
      var e = RankModel.getInstance().getLeftTime();
      if (e > 0) {
        null === (t = this._labelTime.getComponent(CountdownComponent)) || void 0 === t || t.setRemainTime(e, this.finishCountdown.bind(this));
      } else {
        this.closeOutCD();
      }
    }
  }
  @mj.traitEvent("RankBtn_updateAll")
  updateAll() {
    this.updateRemainTime();
    this.updateRank();
    this.updateImgCard(this._cardSprNode);
  }
  @mj.traitEvent("RankBtn_updImgCard")
  updateImgCard(t) {
    if (cc.isValid(t)) {
      var e = UserModel.getInstance().getRankCardResName(),
        o = CardUtil.getAtlasPathAndBundleName(e),
        n = o.path,
        a = o.bundleName,
        i = o.fromAtlas;
      BaseSprite.refreshWithNode(t, n, i, null, a);
    }
  }
  @mj.traitEvent("RankBtn_closeOutCD")
  closeOutCD() {
    this.node.destroy();
  }
  @mj.traitEvent("RankBtn_finishCD")
  finishCountdown() {
    this.node.destroy();
  }
  updateRank() {
    if (cc.isValid(this._labelRankNode)) if (RankModel.getInstance().isOnList()) {
      var t = RankModel.getInstance().getSelfRank();
      I18NStrings.setText(this._labelRankNode, t + "", "LeaderBoard_Entrance_Num", [t]);
    } else this._labelRankNode.getComponent(cc.Label).string = "";
  }
  @mj.traitEvent("RankBtn_click")
  onBtnClick() {
    DotGameBtnClick.dotRank(ERankClickType.ClickHallRank);
    this.dispatchEvent("RankModel_updTime");
    ControllerManager.getInstance().pushViewByController("RankController", {
      isReuse: true,
      isShowAction: false
    });
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    return _t;
  }
  onGameShow() {
    this.updateRemainTime();
  }
  onGameHide() {}
  onDestroy() {
    super.onDestroy.call(this);
  }
}
import UIView from '../../../../Scripts/framework/ui/UIView';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import RankModel from '../RankModel';
import CountdownComponent from '../component/CountdownComponent';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import { DotGameBtnClick, ERankClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../../Scripts/Config';
import { ERankAudioID } from './RankEnums';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class RankIntroduceView extends UIView {
  _btnClose = null;
  _btnCollect = null;
  _labelCollect = null;
  _labelTitle = null;
  _labelDesc = null;
  _labelTime = null;
  _cardBgNode = null;
  _spriteCard = null;
  _isBtnCollect = false;
  static prefabUrl = "prefabs/rank/RankIntroduceView";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    this._btnClose = cc.find("content/btn_close", this.node);
    this._btnCollect = cc.find("content/btn_collect", this.node);
    this._labelCollect = cc.find("content/lbl_Collect", this._btnCollect);
    this._labelTitle = cc.find("content/title", this.node);
    this._labelDesc = cc.find("content/cnt", this.node);
    this._labelTime = cc.find("content/time_node/time", this.node);
    this._cardBgNode = cc.find("content/mj_bg", this.node);
    this._spriteCard = cc.find("content/mj_bg/flower", this.node);
    this.registerButtons();
  }
  registerButtons() {
    this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
    this._btnCollect && this.OnButtonClick(this._btnCollect, this.onCollectClick.bind(this));
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
  @mj.traitEvent("RankIntroVw_show")
  show(t) {
    mj.audioManager.playEffect(ERankAudioID.BlankCom);
    this._isBtnCollect = t.isBtnCollect;
    var e = this._isBtnCollect ? "Collect" : "OK",
      o = this._isBtnCollect ? "LeaderBoard_Start_GoTo" : "LeaderBoard_HowToPlay_Btn_OK",
      n = RankModel.getInstance().getCurBoardData();
    if (n) {
      var a = I18NStrings.get(n.Name, "Gardening Master");
      I18NStrings.setText(this._labelTitle, "Gardening Master", n.Name);
      I18NStrings.setText(this._labelDesc, "{0} has begun!\nCollect Golden Tiles, race up the leaderboard, and win amazing rewards!", "LeaderBoard_Start_Des", [a]);
      I18NStrings.setText(this._labelCollect, e, o);
      this.updateImgCard(this._spriteCard);
    }
    var i = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
      r = i.path,
      c = i.bundleName,
      p = i.fromAtlas;
    BaseSprite.refreshWithNode(this._cardBgNode, r, p, false, c);
    this.updateCountdown();
  }
  @mj.traitEvent("RankIntroVw_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  getCDComp() {
    var t;
    return null === (t = this._labelTime) || void 0 === t ? void 0 : t.getComponent(CountdownComponent);
  }
  updateCountdown() {
    var t = this._labelTime.getComponent(CountdownComponent),
      e = RankModel.getInstance().getLeftTime();
    if (e > 0) {
      t.setRemainTime(e, this.finishCountdown.bind(this));
    } else {
      this.finishCountdown();
    }
  }
  finishCountdown() {
    this.delegate.close();
  }
  @mj.traitEvent("RankIntroVw_closeClk")
  onCloseClick() {
    this.delegate.close();
    DotGameBtnClick.dotRank(ERankClickType.ClickIntroduceClose);
  }
  onCollectClick() {
    if (this._isBtnCollect) {
      this.collect();
      DotGameBtnClick.dotRank(ERankClickType.ClickIntroduceCollect);
    }
    this.delegate.close();
  }
  @mj.traitEvent("RankIntroVw_collect")
  collect() {
    this.delegate.collect();
  }
  setContent() {}
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
  }
}
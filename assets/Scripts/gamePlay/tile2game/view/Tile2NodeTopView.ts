import { MjGameType } from '../../../core/simulator/constant/GameTypeEnums';
import Tile2ScoreItem from '../../../core/view/items/Tile2ScoreItem';
import ControllerManager from '../../../framework/manager/ControllerManager';
import BaseUI from '../../../framework/ui/BaseUI';
import JumpManager from '../../../base/jump/JumpManager';
import { DotGameBtnClick, EBoardClickType } from '../../../dot/DGameBtnClick';
import { DotGamePageShow, EPageShowType } from '../../../dot/DGamePageShow';
@mj.class
export default class Tile2NodeTopView extends BaseUI {
  _lblLevel = null;
  _lblMatchNum = null;
  _btnBack = null;
  _btnSettings = null;
  _scoreItem = null;
  static prefabUrl = "prefabs/game/Tile2nodeTop";
  get btnBack() {
    return this._btnBack;
  }
  get btnSettings() {
    return this._btnSettings;
  }
  get scoreItem() {
    return this._scoreItem;
  }
  @mj.traitEvent("T2TopVw_onLoad")
  onLoad() {
    var t, o;
    super.onLoad.call(this);
    this._lblLevel = null === (t = this.node.getChildByName("labelLevel")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._lblMatchNum = null === (o = this.node.getChildByName("labelCanMatchNum")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
    this._btnBack = this.node.getChildByName("btnBack");
    this._btnSettings = this.node.getChildByName("btnSettings");
    if (this._btnBack) {
      this.OnButtonClick(this._btnBack, this.onBtnBack.bind(this));
      this._btnBack.active = false;
    }
    this._btnSettings && this.OnButtonClick(this._btnSettings, this.onBtnSettings.bind(this));
    var n = this.node.getChildByName("nodeScore");
    n && (this._scoreItem = n.getComponent(Tile2ScoreItem) || n.addComponent(Tile2ScoreItem));
  }
  updateLevel(e) {
    this._lblLevel && (this._lblLevel.string = e.toString());
  }
  updateMatchNum(e) {
    this._lblMatchNum && (this._lblMatchNum.string = e.toString());
  }
  updateScore(e, t, o) {
    var n;
    null === (n = this._scoreItem) || void 0 === n || n.updateScore(e, t, o);
  }
  resetScore() {
    var e;
    null === (e = this._scoreItem) || void 0 === e || e.resetForRestart();
  }
  @mj.traitEvent("T2TopVw_onBtnBack")
  onBtnBack() {
    var e, t;
    if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
      mj.audioManager.stopAllEffect();
      var o = ControllerManager.getInstance().getTopSceneController();
      if (o && o.gameType === MjGameType.Travel) ControllerManager.getInstance().pushViewByController("TravelMapController", {
        isReplace: true
      });else if (o && o.gameType === MjGameType.DailyChallenge) ControllerManager.getInstance().pushViewByController("DailyController", {
        isReplace: true,
        isShowAction: false,
        isReuse: false
      });else {
        JumpManager.getInstance().jumpToHall();
        o && o.gameType === MjGameType.Normal && DotGamePageShow.dot(EPageShowType.LevelToMainPage);
      }
      DotGameBtnClick.dotGame(EBoardClickType.Escape);
    }
  }
  onBtnSettings() {
    var e, t;
    if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
      ControllerManager.getInstance().pushViewByController("UISettingsDialogController", {});
      DotGameBtnClick.dotGame(EBoardClickType.Setting);
    }
  }
}
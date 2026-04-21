import BaseUI from '../../../framework/ui/BaseUI';
import { DotGameBtnClick, EBoardClickType } from '../../../dot/DGameBtnClick';
import UserModel from '../../../gamePlay/user/UserModel';
import { EGameInputEnum, EShuffleFrom } from '../../../simulator/constant/GameInputEnum';
import { MjGameType } from '../../simulator/constant/GameTypeEnums';
import GameUtils from '../../simulator/util/GameUtils';
import { GameInteraction } from '../../../GameInteraction/GameInteraction';
const {
  ccclass
} = cc._decorator;
@ccclass
export default class GameUI extends cc.Component {
  btnHitTipsProp = null;
  btnShuffleProp = null;
  btnSettings = null;
  btnShuffle = null;
  btnHitTips = null;
  _lblDailyChallengeDate = null;
  @mj.traitEvent("GameUI_onLoad")
  onLoad() {
    var e;
    this._matchNumLabel = this.node.getChildByName("nodeTop").getChildByName("labelCanMatchNum").getComponent(cc.Label);
    this._levelLabel = this.node.getChildByName("nodeTop").getChildByName("labelLevel").getComponent(cc.Label);
    this._levelDesc = this.node.getChildByName("nodeTop").getChildByName("levelDesc").getComponent(cc.Label);
    this.btnHitTipsProp = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint").getChildByName("propCornerItem");
    this.btnShuffleProp = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle").getChildByName("propCornerItem");
    this.btnSettings = this.node.getChildByName("nodeTop").getChildByName("btnSettings");
    this.btnShuffle = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle");
    this.btnHitTips = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint");
    this.btnSettings.getComponent(BaseUI).OnButtonClick(this.btnSettings, this.onBtnSettings.bind(this));
    this.btnShuffle.getComponent(BaseUI).OnButtonClick(this.btnShuffle, this.onBtnShuffle.bind(this));
    this.addHintBtnClick(this.btnHitTips, this.onBtnHitTips.bind(this));
    this._levelLabel.node.active = false;
    this._levelDesc.node.active = false;
    this.btnHitTipsProp.getChildByName("nodeNum").active = false;
    this.btnHitTipsProp.getChildByName("nodeVideo").active = false;
    this.btnShuffleProp.getChildByName("nodeNum").active = false;
    this.btnShuffleProp.getChildByName("nodeVideo").active = false;
    this._lblDailyChallengeDate = null === (e = this.node.getChildByName("nodeTop").getChildByName("lblDate")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
    if (this._lblDailyChallengeDate) {
      this._lblDailyChallengeDate.node.active = false;
      this._lblDailyChallengeDate.string = "";
    }
  }
  start() {
    mj.EventManager.on("language-changed", this.onLanguageChanged, this);
  }
  onDestroy() {
    mj.EventManager.off("language-changed", this.onLanguageChanged, this);
  }
  @mj.traitEvent("GameUI_addHintBtn")
  addHintBtnClick(e, t, o = {}) {
    e && e.getComponent(BaseUI).OnButtonClick(e, Object.assign({
      func: t
    }, o));
  }
  onLanguageChanged() {
    var e = this;
    this.scheduleOnce(function () {
      e._adaptLvPos();
    }, 0);
  }
  updateMatchNum(e) {
    this._matchNumLabel.string = e.toString();
  }
  @mj.traitEvent("GameUI_updateLevel")
  updateLevel(e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (!this._levelLabel.node.active) {
        this._levelLabel.node.active = true;
        this._levelDesc.node.active = true;
      }
      this._levelLabel.string = e.toString();
      this.handleLevelLable(this._levelLabel, this._levelDesc);
      this._adaptLvPos();
    }
  }
  @mj.traitEvent("GameUI_adaptLv")
  _adaptLvPos() {
    if (this._levelDesc.node && this._levelDesc.node.active && cc.isValid(this._levelLabel.node)) {
      var e = this._levelDesc.node.width,
        t = this._levelDesc.node.x,
        o = this._levelDesc.node.y,
        n = this._levelLabel.node.y;
      Math.abs(o - n) < 15 && (this._levelLabel.node.x = t + e / 2 + 10);
    }
  }
  @mj.traitEvent("GameUI_handleLvLbl")
  handleLevelLable() {}
  @mj.traitEvent("GameUI_updateDCDate")
  updateDailyChallengeDate(e) {
    if (this._lblDailyChallengeDate) {
      this._lblDailyChallengeDate.node.active || (this._lblDailyChallengeDate.node.active = true);
      var t = GameUtils.formatDateStringMonthDay(e) || "";
      this._lblDailyChallengeDate.string = t;
    }
  }
  @mj.traitEvent("GameUI_updateHitTipsProp")
  updateHitTipsProp(e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var t = this.node.getChildByName("nodeBottom").active;
      t || (this.node.getChildByName("nodeBottom").active = true);
      var o = Math.max(0, e);
      this.btnHitTipsProp.active = true;
      this.btnHitTipsProp.getChildByName("nodeNum").active = true;
      this.btnHitTipsProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = o.toString();
      // Disable watch-ad entrance on hint prop; only show numeric count.
      this.btnHitTipsProp.getChildByName("nodeVideo").active = false;
      this.node.getChildByName("nodeBottom").active = t;
    }
  }
  @mj.traitEvent("GameUI_updateShuffleProp")
  updateShuffleProp(e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var t = this.node.getChildByName("nodeBottom").active;
      t || (this.node.getChildByName("nodeBottom").active = true);
      var o = Math.max(0, e);
      this.btnShuffleProp.active = true;
      this.btnShuffleProp.getChildByName("nodeNum").active = true;
      this.btnShuffleProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = o.toString();
      // Disable watch-ad entrance on shuffle prop; only show numeric count.
      this.btnShuffleProp.getChildByName("nodeVideo").active = false;
      this.node.getChildByName("nodeBottom").active = t;
    }
  }
  @mj.traitEvent("GameUI_onBtnHitTips")
  onBtnHitTips() {
    DotGameBtnClick.dotGame(EBoardClickType.Hint);
    var e = UserModel.getInstance().getCurrentGameData();
    if (!e || e.getHitTipsNums() < 1) {
      mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
      return;
    }
    GameInteraction.input({
      inputType: EGameInputEnum.HitTips
    });
  }
  @mj.traitEvent("GameUI_onBtnShuffle")
  onBtnShuffle() {
    DotGameBtnClick.dotGame(EBoardClickType.Shuffle);
    var e = UserModel.getInstance().getCurrentGameData();
    if (!e || e.getShuffleNums() < 1) {
      mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
      return;
    }
    GameInteraction.input({
      inputType: EGameInputEnum.Shuffle,
      from: EShuffleFrom.Normal
    });
  }
  @mj.traitEvent("GameUI_onBtnSettings")
  onBtnSettings() {
    DotGameBtnClick.dotGame(EBoardClickType.Setting);
  }
  getSettingsBtn() {
    return this.btnSettings;
  }
}
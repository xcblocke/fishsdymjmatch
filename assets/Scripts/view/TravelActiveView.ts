import GameUtils from '../core/simulator/util/GameUtils';
import I18NStrings from '../framework/data/I18NStrings';
import ControllerManager from '../framework/manager/ControllerManager';
import UIView from '../framework/ui/UIView';
import BaseSprite from '../gamePlay/base/ui/BaseSprite';
import { DotGameBtnClick, EHomePageClickType } from '../dot/DGameBtnClick';
import { TRAVEL_GAME_SESSION_END, TRAVEL_GAME_SESSION_START } from '../config/TravelConfig';
import TravelGameModel from '../gamePlay/travel/model/TravelGameModel';
@mj.class
export default class TravelActiveView extends UIView {
  @mj.node("Content/Top/CloseBtn")
  closeBtn: "Content/Top/CloseBtn" = null;
  @mj.component("Content/Top/Label", cc.Label)
  titleLabel: "Content/Top/Label" = null;
  @mj.component("Content/Desc", cc.Label)
  descLabel: "Content/Desc" = null;
  @mj.component("Content/Timer/Label", cc.Label)
  timerLabel: "Content/Timer/Label" = null;
  @mj.node("Content/PlayBtn")
  playBtn: "Content/PlayBtn" = null;
  @mj.component("Content/PlayBtn/Bg/Label", cc.Label)
  playBtnLabel: "Content/PlayBtn/Bg/Label" = null;
  @mj.component("Content/Icon", cc.Sprite)
  journeyIcon: "Content/Icon" = null;
  config = null;
  isNewSession = false;
  static prefabUrl = "prefabs/journey/JourneyActiveDialog";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
    this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
  }
  getMessageListeners() {
    var _e = {};
    _e[TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
    return _e;
  }
  onTravelGameSessionEnd() {
    var e;
    null === (e = this.delegate) || void 0 === e || e.close();
  }
  viewDidLoad(e) {
    this.config = e.config;
    this.isNewSession = e.isNewSession;
    var t = __read(this.getOpenImg(this.config.openImg), 2),
      o = t[0],
      n = t[1];
    I18NStrings.setText(this.titleLabel.node, "Adventure", this.config.name);
    I18NStrings.setText(this.descLabel.node, this.config.openDesc, this.config.openDesc);
    BaseSprite.refreshWithNode(this.journeyIcon.node, n, false, false, o);
    this.updateTime();
    DotGameBtnClick.dotHall(EHomePageClickType.TravelDialogDisplayed);
  }
  getOpenImg(e) {
    var t = e.split(":");
    return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journeyMap/" + e];
  }
  viewDidShow() {}
  updateTime() {
    var e = this,
      t = TravelGameModel.getInstance().getRemainTime();
    this.isNewSession && (t = this.config.duration);
    var o = __read(GameUtils.getRemainTimeParts(t), 4),
      n = o[0],
      i = o[1],
      r = (o[2], o[3], function (e) {
        return e.toString().padStart(2, "0");
      });
    I18NStrings.setText(this.timerLabel.node, r(n) + "d" + r(i) + "h", "Common_CountDown_Hour", [n, i]);
    this.isNewSession || this.scheduleOnce(function () {
      e.updateTime();
    }, 5);
  }
  @mj.traitEvent("TravelVw_closeBtnClk")
  onCloseBtnClick() {
    var e;
    DotGameBtnClick.dotHall(EHomePageClickType.TravelDialogClosed);
    null === (e = this.delegate) || void 0 === e || e.close();
  }
  @mj.traitEvent("TravelVw_playBtnClk")
  onPlayBtnClick() {
    var e;
    if (TravelGameModel.getInstance().isSessionActive() || this.isNewSession) {
      this.isNewSession && this.dispatchEvent(TRAVEL_GAME_SESSION_START);
      DotGameBtnClick.dotHall(EHomePageClickType.TravelGameStart);
      this.gotoTravelMap();
    } else null === (e = this.delegate) || void 0 === e || e.close();
  }
  @mj.traitEvent("TravelVw_gotoTravelMap")
  gotoTravelMap() {
    var e = this;
    ControllerManager.getInstance().pushViewByController("TravelMapController", {}, function () {
      var t;
      null === (t = e.delegate) || void 0 === t || t.close();
    });
  }
}
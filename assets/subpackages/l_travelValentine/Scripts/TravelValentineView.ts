import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import UIView from '../../../Scripts/framework/ui/UIView';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
import { TRAVEL_GAME_SESSION_END, TRAVEL_GAME_SESSION_START } from '../../../Scripts/config/TravelConfig';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.class
export default class TravelValentineView extends UIView {
  popNode = null;
  timerNode = null;
  watchNode = null;
  timerLabel = null;
  playBtn = null;
  titleLabel = null;
  popSpine = null;
  watchSpine = null;
  config = null;
  isNewSession = false;
  isInit = false;
  static prefabUrl = "prefabs/TravelValentine";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
    this.tryPlayPop();
  }
  initComponents() {
    if (!this.isInit) {
      this.popNode = cc.find("Pop", this.node);
      this.timerNode = cc.find("Timer", this.node);
      this.watchNode = cc.find("Timer/Watch", this.node);
      this.timerLabel = cc.find("Timer/TimerLabel", this.node);
      this.playBtn = cc.find("PlayBtn", this.node);
      this.titleLabel = cc.find("Title", this.node);
      this.titleLabel.setPosition(0, 0, 0);
      this.playBtn.setPosition(0, 0, 0);
      this.popSpine = this.popNode.addComponent(BaseSpine);
      this.watchSpine = this.watchNode.addComponent(BaseSpine);
      this.popSpine.markReady("");
      this.watchSpine.markReady("");
      this.hookNodes();
      this.isInit = true;
    }
  }
  tryPlayPop() {
    this.config && this.isInit && this.playAction();
  }
  playAction() {
    var e = this;
    this.playButtonInAction();
    this.popSpine.setAnimation("in", 1, function () {
      if (cc.isValid(e.popSpine)) {
        e.popSpine.setAnimation("init", -1);
        e.playButtonInitAction();
      }
    });
    this.watchSpine.setAnimation("clock_in", 1, function () {
      cc.isValid(e.watchSpine) && e.watchSpine.setAnimation("clock_init", -1);
    });
  }
  hookNodes() {
    var e = this;
    this.popSpine.attachNode("clock", function () {
      return e.timerNode;
    });
    this.popSpine.attachNode("Btn_Play_Green", function () {
      return e.playBtn;
    });
    this.popSpine.attachNode("title", function () {
      return e.titleLabel;
    });
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
  updateData(e) {
    this.config = e.config;
    this.isNewSession = e.isNewSession;
    this.updateTime();
    DotGameBtnClick.dotHall(EHomePageClickType.TravelDialogDisplayed);
    this.tryPlayPop();
  }
  updateTime() {
    var e = this,
      t = TravelGameModel.getInstance().getRemainTime();
    this.isNewSession && (t = this.config.duration);
    var r = __read(GameUtils.getRemainTimeParts(t), 4),
      n = r[0],
      o = r[1],
      i = r[2],
      c = (r[3], function (e) {
        return e.toString().padStart(2, "0");
      });
    I18NStrings.setText(this.timerLabel, c(n) + "d" + c(o) + "h" + c(i) + "m", "Common_CountDown_Minute", [n, o, i]);
    this.isNewSession || this.scheduleOnce(function () {
      e.updateTime();
    }, 5);
  }
  onPlayBtnClick() {
    var e;
    if (TravelGameModel.getInstance().isSessionActive() || this.isNewSession) {
      this.isNewSession && this.dispatchEvent(TRAVEL_GAME_SESSION_START);
      DotGameBtnClick.dotHall(EHomePageClickType.TravelGameStart);
      this.gotoTravelMap();
    } else null === (e = this.delegate) || void 0 === e || e.close();
  }
  @mj.traitEvent("TLValVw_gotoTravelMap")
  gotoTravelMap() {
    var e = this;
    ControllerManager.getInstance().pushViewByController("TravelMapController", {}, function () {
      var t;
      null === (t = e.delegate) || void 0 === t || t.close();
    });
  }
  playButtonInAction() {
    cc.Tween.stopAllByTarget(this.playBtn);
    this.playBtn.opacity = 0;
    this.playBtn.scale = 0.7;
    cc.tween(this.playBtn).delay(0.133).to(0.2, {
      opacity: 255,
      scale: 1.1
    }).to(0.333, {
      scale: 1
    }).to(0.5, {
      scale: 1.1
    }).to(0.494, {
      scale: 1
    }).delay(1.76).to(1.67, {
      scale: 1
    }).to(0.5, {
      scale: 1.1
    }).to(0.5, {
      scale: 1
    }).start();
  }
  playButtonInitAction() {
    cc.Tween.stopAllByTarget(this.playBtn);
    this.playBtn.scale = 1;
    var e = cc.tween(this.playBtn).sequence(cc.tween().to(0.5, {
      scale: 1.1
    }), cc.tween().to(1, {
      scale: 1
    }), cc.tween().delay(2));
    cc.tween(this.playBtn).repeatForever(e).start();
  }
}
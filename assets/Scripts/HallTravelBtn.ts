import BaseUI from './framework/ui/BaseUI';
import ControllerManager from './framework/manager/ControllerManager';
import I18NStrings from './framework/data/I18NStrings';
import TravelGameModel, { ETravelRedPointState } from './gamePlay/travel/model/TravelGameModel';
import GameUtils from './core/simulator/util/GameUtils';
import { TRAVEL_GAME_SESSION_END, TRAVEL_GAME_SESSION_START } from './config/TravelConfig';
import { DotGamePageShow, EPageShowType } from './dot/DGamePageShow';
import { DotGameBtnClick, EHomePageClickType } from './dot/DGameBtnClick';
import { ConfigType } from './gamePlay/base/data/ConfigType';
import { DataReader } from './framework/data/DataReader';
import { ERedDotType } from './core/simulator/constant/GameTypeEnums';
import { EVT_MSG_HALL_FORCE_UPDATE } from './base/event/EventDefine';
enum l {
  Lock = 0,
  NewSeason = 1,
  InSeason = 2,
  ComeSoon = 3,
  SeasonEnd = 4,
}
@mj.class
export default class HallTravelBtn extends BaseUI {
  @mj.node("Root/Lock")
  lockNode: "Root/Lock" = null;
  @mj.component("Root/Lock/Desc", cc.Label)
  lockDesc: "Root/Lock/Desc" = null;
  @mj.component("Root/Lock/Anim", sp.Skeleton)
  lockAnim: "Root/Lock/Anim" = null;
  @mj.node("Root/Timer")
  timerNode: "Root/Timer" = null;
  @mj.component("Root/Timer/Time", cc.Label)
  timerLabel: "Root/Timer/Time" = null;
  @mj.node("Root/NewSeason")
  newSeasonNode: "Root/NewSeason" = null;
  @mj.component("Root/NewSeason/Anim", sp.Skeleton)
  newSeasonAnim: "Root/NewSeason/Anim" = null;
  @mj.node("Root/NewSeason/Icon")
  newSeasonIcon: "Root/NewSeason/Icon" = null;
  @mj.node("Root/RedPoint")
  redDotNode: "Root/RedPoint" = null;
  @mj.node("Root/ComeSoon")
  comeSoonNode: "Root/ComeSoon" = null;
  @mj.node("Root")
  rootNode: "Root" = null;
  @mj.node("Root/Title")
  titleNode: "Root/Title" = null;
  state = l.Lock;
  isNewSession = false;
  journeyKey = "";
  unlockLevel = 0;
  isNeedUpdate = false;
  static prefabUrl = "prefabs/journey/HallBtn/HallTravelBtn";
  getMessageListeners() {
    var _e = {};
    _e[EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
    return _e;
  }
  @mj.traitEvent("TravelBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerClick();
    this.isNeedUpdate && this.updateState();
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "Travel",
      node: this.node
    });
  }
  onDisable() {
    super.onDisable && super.onDisable.call(this);
  }
  initComponents() {}
  registerClick() {
    this.OnButtonClick(this.node, {
      func: this.onBtnClickStart.bind(this),
      eventType: cc.Node.EventType.TOUCH_END
    });
  }
  resetUI() {
    this.comeSoonNode.active = false;
    this.lockNode.active = false;
    this.newSeasonNode.active = false;
    this.timerNode.active = false;
    this.redDotNode.active = false;
    this.titleNode.x = 0;
    this.titleNode.active = true;
    cc.Tween.stopAllByTarget(this.rootNode);
    this.unscheduleUpdateTimer();
  }
  @mj.traitEvent("TravelBtn_updateUI")
  updateUI(e, t, o) {
    this.isNeedUpdate = true;
    this.unlockLevel = t;
    this.journeyKey = e;
    this.isNewSession = o;
    cc.isValid(this.comeSoonNode) && this.updateState();
  }
  @mj.traitEvent("TravelBtn_updateState")
  updateState() {
    var e = TravelGameModel.getInstance();
    if (e.isUnlocked()) {
      if (this.isNewSession) {
        this.setState(l.NewSeason);
      } else {
        if (this.isNewSession || e.isSessionActive()) {
          if (e.isSessionActive()) {
            this.setState(l.InSeason);
          } else {
            this.setState(l.SeasonEnd);
          }
        } else {
          this.setState(l.ComeSoon);
        }
      }
    } else {
      this.setState(l.Lock);
    }
  }
  setState(e) {
    this.resetUI();
    this.state = e;
    switch (e) {
      case l.Lock:
        this.changeLock();
        break;
      case l.NewSeason:
        this.changeNewSeason();
        break;
      case l.ComeSoon:
        this.changeComeSoon();
        break;
      case l.InSeason:
        this.changeInSeason();
        break;
      case l.SeasonEnd:
        this.changeSeasonEnd();
    }
  }
  @mj.traitEvent("TravelBtn_changeLock")
  changeLock() {
    var e = this;
    this.lockNode.active = true;
    this.titleNode.x = 30;
    GameUtils.playSpine(this.lockAnim, "in", false, function () {
      e.lockAnim.setAnimation(0, "init", false);
    });
    I18NStrings.setText(this.lockDesc.node, "Unlock at Lv." + this.unlockLevel, "MahjongTiles_ProHint_1", [this.unlockLevel]);
  }
  changeNewSeason() {
    this.titleNode.x = 0;
    this.updateNewSeasonRedDot();
    this.updateNewSeasonTime();
    this.updateNewSeasonAnim();
  }
  @mj.traitEvent("TravelBtn_updNSeasonTime")
  updateNewSeasonTime() {
    this.timerNode.active = true;
    var e = DataReader.getByKey(ConfigType.Travel, this.journeyKey),
      t = __read(GameUtils.getRemainTimeParts(e.duration), 4),
      o = t[0],
      n = t[1],
      i = t[2],
      r = (t[3], function (e) {
        return e.toString().padStart(2, "0");
      });
    I18NStrings.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
  }
  updateNewSeasonRedDot() {
    var e = {
      show: true,
      type: ERedDotType.Journey
    };
    mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
    this.redDotNode.active = e.show;
  }
  updateNewSeasonAnim() {
    var e = {
      visible: false
    };
    mj.triggerInternalEvent("NewSeason_isVisible", this, [e]);
    if (e.visible) {
      this.titleNode.x = 30;
      this.newSeasonNode.active = true;
      this.playNewSeasonAnim();
    }
  }
  changeComeSoon() {
    this.comeSoonNode.active = true;
  }
  changeInSeason() {
    this.timerNode.active = true;
    this.titleNode.x = 0;
    this.updateTimer();
    this.updateInSeasonRedDot();
  }
  changeSeasonEnd() {
    this.node.destroy();
    this.dispatchEvent(TRAVEL_GAME_SESSION_END);
  }
  isShowRedDot() {
    var e = {
      show: true,
      type: ERedDotType.Journey
    };
    mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
    return e.show;
  }
  updateInSeasonRedDot() {
    TravelGameModel.getInstance().getRedPointState() === ETravelRedPointState.Show && (this.redDotNode.active = this.isShowRedDot());
  }
  playNewSeasonAnim() {
    var e = this,
      t = cc.tween(this.rootNode).call(function () {
        GameUtils.playSpine(e.newSeasonAnim, "init", false);
      }).to(0.5, {
        scale: 1.01
      }).to(0.5, {
        scale: 1
      }).to(0.5, {
        scale: 1.01
      }).to(0.5, {
        scale: 1
      }).to(0.5, {
        scale: 1.01
      }).to(0.5, {
        scale: 1
      });
    cc.tween(this.rootNode).repeatForever(t).start();
  }
  updateTimer() {
    var e = TravelGameModel.getInstance();
    if (e.isSessionActive()) {
      var t = e.getRemainTime();
      this.updateRemainTime(t);
      this.scheduleUpdateTimer();
    } else {
      this.timerNode.active = false;
      this.node.destroy();
      this.dispatchEvent(TRAVEL_GAME_SESSION_END);
      this.unscheduleUpdateTimer();
    }
  }
  @mj.traitEvent("TravelBtn_updRemainTime")
  updateRemainTime(e) {
    this.timerNode.active = true;
    var t = __read(GameUtils.getRemainTimeParts(e), 4),
      o = t[0],
      n = t[1],
      i = t[2],
      r = (t[3], function (e) {
        return e.toString().padStart(2, "0");
      });
    I18NStrings.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
  }
  unscheduleUpdateTimer() {
    cc.director.getScheduler().isScheduled(this.updateTimer, this) && this.unschedule(this.updateTimer);
  }
  scheduleUpdateTimer() {
    cc.director.getScheduler().isScheduled(this.updateTimer, this) || this.schedule(this.updateTimer, 1);
  }
  @mj.traitEvent("TravelBtn_onBtnClick")
  onBtnClickStart() {
    if (this.state !== l.Lock) {
      if (this.state !== l.ComeSoon) {
        this.state === l.NewSeason && this.dispatchEvent(TRAVEL_GAME_SESSION_START);
        if (TravelGameModel.getInstance().isSessionActive()) {
          ControllerManager.getInstance().pushViewByController("TravelMapController");
          DotGameBtnClick.dotHall(EHomePageClickType.Travel);
          DotGamePageShow.dot(EPageShowType.TravelPage);
        }
      }
    } else {
      var e = I18NStrings.stringFormat(I18NStrings.get("MahjongTiles_ProHint_1"), this.unlockLevel);
      ControllerManager.getInstance().pushViewByController("LockTipsController", {
        isReuse: false,
        tips: e,
        noBlock: true,
        isGlobal: false,
        bgStyle: null,
        isShowAction: false
      });
    }
  }
  @mj.traitEvent("TravelBtn_forceUpdate")
  onForceUpdate() {}
}
import { EJourneyMapState, TopThanLevelElement } from './TravelMapInterface';
import ElementBase from './ElementBase';
import ControllerManager from './framework/manager/ControllerManager';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import { TRAVEL_GAME_COLLECT_BADGE, ETravelRewardType } from './config/TravelConfig';
import { DataReader } from './framework/data/DataReader';
import { ConfigType } from './gamePlay/base/data/ConfigType';
import I18NStrings from './framework/data/I18NStrings';
import { DotGameBtnClick, ETravelMapClickType } from './dot/DGameBtnClick';
import JumpManager from './base/jump/JumpManager';
@mj.class
export default class ElementLevel extends ElementBase {
  uiOnLoad() {
    super.uiOnLoad.call(this);
  }
  getMessageListeners() {
    var _e = {};
    _e[TRAVEL_GAME_COLLECT_BADGE] = this.onTravelGameCollectBadge.bind(this);
    return _e;
  }
  onTravelGameCollectBadge(e) {
    if (this._data.level === e) {
      this._data.state = EJourneyMapState.Unlocked;
      this.badgeCollectEnd();
    }
  }
  badgeCollectStart() {}
  badgeCollectEnd() {
    this._data.state = EJourneyMapState.Unlocked;
  }
  addBlockTouch() {
    var e = cc.Canvas.instance.node,
      t = new cc.Node();
    t.addComponent(cc.BlockInputEvents);
    t.setContentSize(e.getContentSize());
    t.setPosition(cc.Vec3.ZERO);
    e.addChild(t);
    cc.tween(e).delay(1).call(function () {
      t.destroy();
    }).start();
  }
  updateUI() {
    if (cc.isValid(this.node.parent)) {
      super.updateUI.call(this);
      this.resetState();
      if (this._data.state === EJourneyMapState.Selected) {
        this.onLevelSelect();
      } else {
        if (this._data.state === EJourneyMapState.Locked) {
          this.onLevelLock();
        } else {
          if (this._data.state === EJourneyMapState.Unlocked) {
            this.onLevelUnlock();
          } else {
            if (this._data.state === EJourneyMapState.Collecting) {
              this.badgeCollectStart();
            } else {
              if (this._data.state === EJourneyMapState.UnlockedPass) {
                this.onLevelUnlockPass();
              } else {
                this._data.state === EJourneyMapState.SelectedUnlocked && this.onLevelSelectUnlocked();
              }
            }
          }
        }
      }
    }
  }
  onLevelSelectUnlocked() {
    this.onLevelSelect();
  }
  @mj.traitEvent("ElemLv_addLevelBtn")
  addLevelBtnClick(e, t, o = {}) {
    e && this.OnButtonClick(e, Object.assign({
      func: t
    }, o));
  }
  getLevelState() {
    var e;
    return null === (e = this._data) || void 0 === e ? void 0 : e.state;
  }
  getLevelType() {
    var e;
    return null === (e = this._data) || void 0 === e ? void 0 : e.type;
  }
  isBadgeLevel() {
    var e,
      t = null === (e = this._data) || void 0 === e ? void 0 : e.level;
    if (!t) return false;
    var o = TravelGameModel.getInstance(),
      n = o.getCurJourney();
    return o.getRewardInfo(n).some(function (e) {
      return e.lv === t && e.type === ETravelRewardType.EBadge;
    });
  }
  getDesignZOrder() {
    if (!cc.isValid(this.node.parent)) return 0;
    for (var e = this.node.parent.children, t = 0; t < e.length; t++) if (cc.isValid(e[t])) {
      var o = e[t].getComponent(ElementBase);
      if (o && o._data && TopThanLevelElement.includes(o._data.type)) return t;
    }
    return e.length;
  }
  goToTravelGame() {
    var e = this,
      t = TravelGameModel.getInstance();
    if (t.isSessionActive()) {
      if (this._data.state === EJourneyMapState.Selected || this._data.state === EJourneyMapState.SelectedUnlocked) {
        ControllerManager.getInstance().pushViewByController("TravelGameController", {}, function () {
          var t;
          null === (t = e.delegate) || void 0 === t || t.close();
        });
        var o = t.getCurJourney(),
          n = DataReader.getByKey(ConfigType.Travel, o);
        if (n) {
          var i = I18NStrings.getCN(n.name);
          DotGameBtnClick.dotTravelMap(ETravelMapClickType.Play, i, this._data.level);
        }
      }
    } else JumpManager.getInstance().jumpToHall();
  }
}
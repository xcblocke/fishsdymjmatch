import SettingRedDotModel from './SettingRedDotModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { ERedDotType, MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';

/** 主界面右上角设置（齿轮）红点；设为 true 可恢复显示 */
var SHOW_GAME_SETTINGS_RED_DOT = false;

@mj.trait
@mj.class("SettingRedDotTrait")
export default class SettingRedDotTrait extends Trait {
  _gameSettingRedDot = null;
  _settingBackRedDot = null;
  static traitKey = "SettingRedDot";
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2Event();
  }
  registerTile2Event() {
    this.registerEvent([{
      event: "T2TopVw_onLoad",
      type: 2
    }]);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.RedDot_addNotify] = this.addRedDot.bind(this);
    _t[EGameEvent.RedDot_clearNotify] = this.onClearRedDot.bind(this);
    _t[EGameEvent.RedDot_clearAllNotify] = this.clearSettingRedDot.bind(this);
    return _t;
  }
  addRedDot(t) {
    SettingRedDotModel.getInstance().addRedDot(t);
    this.updateRedDotVisibility();
  }
  onClearRedDot(t) {
    SettingRedDotModel.getInstance().removeRedDot(t);
    this.updateRedDotVisibility();
  }
  onHallCtl_viewDidShow(t, e) {
    e();
    this.updateRedDotVisibility();
  }
  onT2TopVw_onLoad(t, e) {
    e();
    var o = {
      type: ERedDotType.Setting,
      show: true
    };
    mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
    if (o.show) {
      var i = t.ins;
      cc.isValid(i) && cc.isValid(i.btnSettings) && this.createGameSettingRedDot(i.btnSettings);
    } else {
      this.clearSettingRedDot();
      this.eventEnabled = false;
    }
  }
  onGameUI_onLoad(t, e) {
    e();
    var o = {
      type: ERedDotType.Setting,
      show: true
    };
    mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
    if (o.show) {
      var i = t.ins;
      cc.isValid(i) && "function" == typeof i.getSettingsBtn && this.createGameSettingRedDot(i.getSettingsBtn());
    } else {
      this.clearSettingRedDot();
      this.eventEnabled = false;
    }
  }
  onUISetBtnBack_onLoad(t, e) {
    var o;
    e();
    this.createSettingBackRedDot(null === (o = t.ins) || void 0 === o ? void 0 : o.node);
  }
  createGameSettingRedDot(t) {
    if (!SHOW_GAME_SETTINGS_RED_DOT) return;
    if (cc.isValid(t)) {
      if (!cc.isValid(this._gameSettingRedDot)) {
        var e = this.createRedDotNode();
        if (!cc.isValid(e)) return;
        t.addChild(e);
        e.setPosition(this.getGameSettingRedDotPosition());
        this._gameSettingRedDot = e;
      }
      this.updateRedDotVisibility();
    }
  }
  getGameSettingRedDotPosition() {
    return UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal ? cc.v2(40, 40) : cc.v2(30, 30);
  }
  getSettingBackRedDotPosition() {
    return cc.v2(260, 65);
  }
  getRedDotImagePath() {
    return "texture/common/com_red";
  }
  createSettingBackRedDot(t) {
    if (cc.isValid(t)) {
      if (!cc.isValid(this._settingBackRedDot)) {
        var e = this.createRedDotNode();
        if (!cc.isValid(e)) return;
        var o = t.getChildByName("bg");
        cc.isValid(o) || (o = t);
        e.parent = o;
        e.setPosition(this.getSettingBackRedDotPosition());
        this._settingBackRedDot = e;
      }
      this.updateRedDotVisibility();
    }
  }
  createRedDotNode() {
    var t = BaseSprite.create(this.getRedDotImagePath());
    return cc.isValid(t) ? t.node : null;
  }
  updateRedDotVisibility() {
    var t = SettingRedDotModel.getInstance().getTotalRedDotCount() > 0;
    cc.isValid(this._gameSettingRedDot) && (this._gameSettingRedDot.active = t);
    cc.isValid(this._settingBackRedDot) && (this._settingBackRedDot.active = t);
  }
  clearSettingRedDot() {
    SettingRedDotModel.getInstance().clearAllRedDots();
    this.updateRedDotVisibility();
  }
}
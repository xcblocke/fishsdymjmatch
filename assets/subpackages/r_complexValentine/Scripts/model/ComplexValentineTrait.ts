import { EGameEvent } from '../../../../Scripts/simulator/constant/GameEvent';
import HallValentineBtn from '../components/HallValentineBtn';
import ValentineModel, { ValentineEvents, ValentineActState } from './ValentineModel';
import Trait from '../../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ComplexValentineTrait")
export default class ComplexValentineTrait extends Trait {
  _hallIconBtn = null;
  hallViewNode = null;
  static traitKey = "ComplexValentine";
  static BUNDLE_NAME = "r_complexValentine";
  get model() {
    return ValentineModel.getInstance();
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.config;
    n && ValentineModel.getInstance().setConfig(n);
    this.registerEvent([{
      event: "HallCtl_initRes"
    }]);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.IptSetLevel_AfterSetLevel] = this.onMsgIptSetLevelAfterSetLevel.bind(this);
    _t[ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
    _t[ValentineEvents.VALENTINE_GAME_SHOW] = this.onMsgGameShow.bind(this);
    _t[ValentineEvents.UPDATE_ACTIVITY_STATE] = this.onMsgUpdActState.bind(this);
    return _t;
  }
  onMsgUpdActState() {}
  onMsgGameShow() {
    if (!UserModel.getInstance().isInGameView()) {
      this.model.checkInitAct();
      this.createOrUpdateHallIcon(this.hallViewNode);
      this.popValentineViewLogic();
    }
  }
  @mj.traitEvent("ComplexVal_onMsgSetLevel")
  onMsgIptSetLevelAfterSetLevel() {
    if (this.model.shouldShowActivatePopup()) {
      this.showActivatePopup(true);
    } else {
      this.model.shouldShowEndPopup() && this.showEndPopup();
    }
  }
  onMsgCloseValentineActivateView() {
    ValentineActState.Ended == this.model.getActivityState() && this.model.shouldShowEndPopup() && this.showEndPopup();
  }
  isEffectActive() {
    return this.model.isEffectActive();
  }
  getEffectEnabled() {
    return this.model.getEffectEnabled();
  }
  enterHall(t) {
    var e, n;
    this.hallViewNode = null === (e = t.ins) || void 0 === e ? void 0 : e.node;
    this.model.checkInitAct();
    this.createOrUpdateHallIcon(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
  }
  createOrUpdateHallIcon(t) {
    var e = this;
    if (cc.isValid(t)) {
      var o = this.model.getActivityState();
      if (ValentineActState.NotStarted !== o && ValentineActState.Ended !== o) {
        if (cc.isValid(this._hallIconBtn)) {
          this._hallIconBtn.getComponent(HallValentineBtn).updateUI();
        } else {
          HallValentineBtn.createUI().then(function (n) {
            var o;
            if (cc.isValid(n) && cc.isValid(t)) {
              t.addChild(n);
              e._hallIconBtn = n;
              null === (o = n.getComponent(HallValentineBtn)) || void 0 === o || o.updateUI();
            }
          }).catch(function (t) {
            console.error("[" + ComplexValentineTrait.traitKey + "] 创建主界面icon失败: " + ((null == t ? void 0 : t.message) || "HallValentineBtn按钮加载失败"));
          });
        }
      } else if (cc.isValid(this._hallIconBtn)) {
        this._hallIconBtn.destroy();
        this._hallIconBtn = null;
      }
    }
  }
  popValentineViewLogic() {
    var t = true;
    if (this.model.shouldShowIntroPopup()) {
      this.showIntroducePopup();
    } else {
      if (this.model.shouldShowActivatePopup()) {
        this.showActivatePopup();
      } else {
        if (this.model.shouldShowEndPopup()) {
          this.showEndPopup();
        } else {
          t = false;
        }
      }
    }
    return t;
  }
  showIntroducePopup() {
    this.model.markIntroPopupShown();
    ControllerManager.getInstance().pushViewByController("ValentineIntroController", {
      isReuse: false,
      isShowAction: true
    });
  }
  onHallCtl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", [ComplexValentineTrait.BUNDLE_NAME + ":prefabs/HallValentineBtn"]);
  }
  onCardUtil_atlasPathBundle(t, e) {
    var o,
      i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
    if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i) e();else {
      if (!this.model.isEffectActive()) {
        e();
        return;
      }
      var a = "texture/" + i;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: {
          path: a,
          bundleName: ComplexValentineTrait.BUNDLE_NAME,
          fromAtlas: false
        }
      });
    }
  }
  onTileNodeObj_playAnim(t, e) {
    var o;
    if (this.isEffectActive()) try {
      if ("spine/rollcard/gameplay_flip" === (null === (o = t.args) || void 0 === o ? void 0 : o[0])) {
        t.args[0] = "spine/gameplay_flip";
        t.args[6] = ComplexValentineTrait.BUNDLE_NAME;
        e();
        return;
      }
      e();
    } catch (t) {
      console.error("[" + ComplexValentineTrait.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
      e();
    } else e();
  }
  onHallVw_updateUI(t, e) {
    this.enterHall(t);
    e();
  }
  onHallVw_onPopView(t, e) {
    e({
      isBreak: this.popValentineViewLogic()
    });
  }
  onWinVw_onLoad(t, e) {
    e();
    this.dealWithWinView();
  }
  onDCWinVw_onLoad(t, e) {
    e();
    this.dealWithWinView();
  }
  onTLWinVw_onLoad(t, e) {
    e();
    this.dealWithWinView();
  }
  dealWithWinView() {
    var t = this.model.getActivityState();
    ValentineActState.InProgress == t && this.model.addProgress(1);
  }
  showActivatePopup(t = false) {
    ValentineModel.getInstance().markActivatePopupShown();
    ControllerManager.getInstance().pushViewByController("ValentineActivateController", {
      isReuse: false,
      isShowAction: true,
      isGaming: t
    });
  }
  showEndPopup() {
    ValentineModel.getInstance().markEndPopupShown();
    ControllerManager.getInstance().pushViewByController("ValentineEndController", {
      isReuse: false,
      isShowAction: true
    });
    if (cc.isValid(this._hallIconBtn)) {
      this._hallIconBtn.destroy();
      this._hallIconBtn = null;
    }
  }
}
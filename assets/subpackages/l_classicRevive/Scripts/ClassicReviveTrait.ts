import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("ClassicReviveTrait")
export default class ClassicReviveTrait extends Trait {
  callBack = null;
  static traitKey = "ClassicRevive";
  static nextTimeOut = -1;
  get limitCount() {
    var e, t;
    return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitCount) && void 0 !== t ? t : 2;
  }
  get score() {
    var e, t;
    return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
  }
  get gameCount() {
    var e, t;
    return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameCount) && void 0 !== t ? t : 2;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  getMessageListeners() {
    var _e = {};
    _e[EGameEvent.ClassicRevive_UseRevive] = this.onClassicRevive_UseRevive.bind(this);
    return _e;
  }
  onClassicRevive_UseRevive(e) {
    if (this.callBack) {
      this.callBack(e);
      this.callBack = null;
    }
  }
  onClcRevChk_canRevive(e, t) {
    var o = e.ins;
    if (this.canRevive(o)) {
      t({
        returnType: TraitCallbackReturnType.return,
        returnVal: true,
        isBreak: true
      });
    } else {
      t();
    }
  }
  onClcRevBhv_showReviveVw(e, t) {
    var o = e.args[0];
    this.showReviveView(function (e) {
      o && o(e);
      t({
        returnType: TraitCallbackReturnType.jump
      });
    });
  }
  canRevive(e) {
    var t = e.context.getGameData();
    return !(t.getGameCount() <= this.gameCount) && !(t.getScore() < this.score) && !(t.getReviveCount() >= this.limitCount);
  }
  showReviveView(e) {
    this.callBack = e;
    ControllerManager.getInstance().pushViewByController("ClassicReviveController", {
      bgStyle: {
        blackOpacity: 0
      },
      isShowAction: false
    });
  }
  onAdMgr_videoFailed(e, t) {
    if (e.ins) {
      var o = e.ins._videoAdPosition;
      if ([EAdPosition.InGameMotivation_Revive_Classic].includes(o)) {
        t({
          isBreak: true
        });
        return;
      }
    }
    t();
  }
}
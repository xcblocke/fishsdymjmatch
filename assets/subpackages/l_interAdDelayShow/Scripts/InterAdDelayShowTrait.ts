import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("InterAdDelayShowTrait")
export default class InterAdDelayShowTrait extends Trait {
  _beforeInterAdDelayTime = 0;
  _restartFrom = null;
  _delayTimerId = null;
  _allowBackDuringDelay = false;
  _isOnlyReplay = false;
  _isOnlyTile2Replay = false;
  _hasClearInCurrentGame = false;
  static traitKey = "InterAdDelayShow";
  onLoad() {
    var e, a, n, r;
    super.onLoad.call(this);
    void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.beforeInterAdDelayTime) && (this._beforeInterAdDelayTime = 1000 * this._traitData.beforeInterAdDelayTime);
    void 0 !== (null === (a = this._traitData) || void 0 === a ? void 0 : a.allowBackDuringDelay) && (this._allowBackDuringDelay = this._traitData.allowBackDuringDelay);
    void 0 !== (null === (n = this._traitData) || void 0 === n ? void 0 : n.isOnlyReplay) && (this._isOnlyReplay = this._traitData.isOnlyReplay);
    void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.isOnlyTile2Replay) && (this._isOnlyTile2Replay = this._traitData.isOnlyTile2Replay);
  }
  onIptRestart_excute(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var a = t.args[0];
      this._restartFrom = (null == a ? void 0 : a.callFrom) || null;
      e();
    } else e();
  }
  onEntAniFiBhv_start(t, e) {
    var a,
      n = this;
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var r = t.ins,
        i = null === (a = null == r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameView,
        l = this._restartFrom;
      this._restartFrom = null;
      null === l && (this._hasClearInCurrentGame = false);
      if (null !== this._delayTimerId) {
        clearTimeout(this._delayTimerId);
        this._delayTimerId = null;
      }
      !this._allowBackDuringDelay && this._beforeInterAdDelayTime > 0 && this.disableBackBtnInteractable(i);
      this._delayTimerId = setTimeout(function () {
        n._delayTimerId = null;
        n._allowBackDuringDelay || n.enableBackBtnInteractable(i);
        if (n._isOnlyTile2Replay) {
          UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal && null !== l && ("setting" === l ? n.playInterAd("settings_replay", EAdPosition.FrontInsertScreen_ActiveRestart, function () {}, function () {}) : "fail" === l && n.playInterAd("fail_replay", EAdPosition.FrontInsertScreen_FailRestart, function () {}, function () {}));
        } else if (n._isOnlyReplay) {
          null !== l && n._hasClearInCurrentGame && ("setting" === l ? n.playInterAd("settings_replay", EAdPosition.FrontInsertScreen_ActiveRestart, function () {}, function () {}) : "fail" === l && n.playInterAd("fail_replay", EAdPosition.FrontInsertScreen_FailRestart, function () {}, function () {}));
        } else {
          if ("setting" === l) {
            n.playInterAd("settings_replay", EAdPosition.FrontInsertScreen_ActiveRestart, function () {}, function () {});
          } else {
            if ("fail" === l) {
              n.playInterAd("fail_replay", EAdPosition.FrontInsertScreen_FailRestart, function () {}, function () {});
            } else {
              n.playInterAd("new_game", EAdPosition.FrontInsertScreen_GameNew, function () {}, function () {});
            }
          }
        }
      }, this._beforeInterAdDelayTime);
      e();
    } else e();
  }
  onClearBhv_collision(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._hasClearInCurrentGame = true;
      e();
    } else e();
  }
  onMainGameBtnBack_onClick(t, e) {
    UserModel.getInstance().getCurrentGameType(), MjGameType.Classic, e();
  }
  disableBackBtnInteractable(t) {
    if (t && cc.isValid(t.topRootNode)) {
      var e = t.topRootNode.getChildByName("btnBack");
      if (e && cc.isValid(e)) {
        var a = e.getComponent(cc.Button);
        a && (a.interactable = false);
      }
    }
  }
  enableBackBtnInteractable(t) {
    if (t && cc.isValid(t.topRootNode)) {
      var e = t.topRootNode.getChildByName("btnBack");
      if (e && cc.isValid(e)) {
        var a = e.getComponent(cc.Button);
        a && (a.interactable = true);
      }
    }
  }
  playInterAd(t, e, a, n) {
    DotGameAdShowStage.dot(true, "clickAdLock");
    AdManager.getInstance().playInterAd(e, {
      onSuccess: function () {
        a && a();
      },
      onFailed: function () {
        n && n();
      }
    }, t, {
      adTimeType: "beforeInterAd"
    });
  }
}
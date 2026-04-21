import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
this && this.__read;
this && this.__spread;
@mj.trait
@mj.class("Tile2FailAdReviveTrait")
export default class Tile2FailAdReviveTrait extends Trait {
  _maxN = -1;
  static traitKey = "Tile2FailAdRevive";
  onLoad() {
    super.onLoad.call(this);
    var t = this._traitData || {};
    void 0 !== t.maxAdRevivePerRound && (this._maxN = t.maxAdRevivePerRound);
    if (void 0 === this.localData.usedAdReviveThisRound) {
      this.localData.usedAdReviveThisRound = 0;
      this.localData = this.localData;
    }
    this._log("onLoad maxAdRevivePerRound=" + this._maxN + " usedAdReviveThisRound=" + this.localData.usedAdReviveThisRound);
  }
  _isTile2Normal() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  _log() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  }
  onIptT2InitSlotBar_exec(e, t) {
    if (this._isTile2Normal()) {
      var i = e.ins,
        o = null == i ? void 0 : i.gameContext,
        a = !!(null == o ? void 0 : o.getIsNewGame()),
        l = !!(null == o ? void 0 : o.getIsRestart());
      if (a || l) {
        this.localData.usedAdReviveThisRound = 0;
        this.localData = this.localData;
        this._log("IptT2InitSlotBar_exec 清零展示次数: isNewGame=" + a + " isRestart=" + l);
        t();
      } else {
        this._log("IptT2InitSlotBar_exec 不清零展示次数: isNewGame=" + a + " isRestart=" + l + "（冷启恢复等）");
        t();
      }
    } else {
      this._log("IptT2InitSlotBar_exec 跳过: 非 Tile2Normal");
      t();
    }
  }
  onTile2FailBhv_pushView(e, t) {
    var i, o, a;
    if (this._isTile2Normal()) {
      if (e.ins) {
        var l = null === (i = e.args) || void 0 === i ? void 0 : i[0];
        if (null == l ? void 0 : l.data) {
          var r = null !== (o = l.data.reviveNum) && void 0 !== o ? o : 0;
          if (r > 0) {
            l.data.adReviveAllowed = true;
            this._log("Tile2FailBhv_pushView reviveNum=" + r + " → adReviveAllowed=true（有免费复活）");
            t();
          } else {
            var s,
              n = this.getMaxCount(),
              u = null !== (a = this.localData.usedAdReviveThisRound) && void 0 !== a ? a : 0;
            s = 0 !== n && (-1 === n || u < n);
            l.data.adReviveAllowed = s;
            this._log("Tile2FailBhv_pushView 无免费复活: maxN=" + n + " usedShown=" + u + " → adReviveAllowed=" + s);
            t();
          }
        } else {
          this._log("Tile2FailBhv_pushView 跳过: 无 effect.data");
          t();
        }
      } else {
        this._log("Tile2FailBhv_pushView 跳过: 无 behavior");
        t();
      }
    } else {
      this._log("Tile2FailBhv_pushView 跳过: 非 Tile2Normal");
      t();
    }
  }
  onTile2FailVw_showAdBtnVw(e, t) {
    var i;
    if (this._isTile2Normal()) {
      var o = null !== (i = this.localData.usedAdReviveThisRound) && void 0 !== i ? i : 0;
      this.localData.usedAdReviveThisRound = o + 1;
      this.localData = this.localData;
      this._log("showAdBtnVw 展示广告入口 +1: " + o + " → " + this.localData.usedAdReviveThisRound);
      t();
    } else {
      this._log("showAdBtnVw 跳过: 非 Tile2Normal");
      t();
    }
  }
  onTile2FailVw_adReviveSucc(e, t) {
    var i;
    if (this._isTile2Normal()) {
      var o = null !== (i = this.localData.usedAdReviveThisRound) && void 0 !== i ? i : 0;
      this.localData.usedAdReviveThisRound = o + 1;
      this.localData = this.localData;
      this._log("adReviveSucc 看完广告复活 +1: " + o + " → " + this.localData.usedAdReviveThisRound);
      t();
    } else {
      this._log("adReviveSucc 跳过: 非 Tile2Normal");
      t();
    }
  }
  @mj.traitEvent("T2FailAdRevi_getMaxCnt")
  getMaxCount() {
    return this._maxN;
  }
}
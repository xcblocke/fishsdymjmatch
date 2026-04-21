import { MjGameType, EItemId, EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { DotGameGetItem } from '../../../Scripts/gamePlay/dot/DGameGetItem';
import { EItemType } from '../../../Scripts/user/IUserData';
@mj.trait
@mj.class("ColdStartPropGiftTrait")
export default class ColdStartPropGiftTrait extends Trait {
  _isColdStart = true;
  static traitKey = "ColdStartPropGift";
  onLoad() {
    var e, r, o, i, a, n;
    super.onLoad.call(this);
    this._config = {
      propId: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.propId) && void 0 !== r ? r : EItemType.Hint,
      num: null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.num) && void 0 !== i ? i : 1,
      maxNum: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.maxNum) && void 0 !== n ? n : 10
    };
    this.localData || (this.localData = {
      num: 0
    });
  }
  onIptSetLv_setData(t, e) {
    if (this.isColdStart()) {
      this._isColdStart = false;
      if (this.isNormalMode()) {
        if (this.canGift()) {
          this.giveProp();
          e();
        } else e();
      } else e();
    } else e();
  }
  isColdStart() {
    return this._isColdStart;
  }
  isNormalMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
  canGift() {
    return this.localData.num < this._config.maxNum;
  }
  giveProp() {
    try {
      var t = UserModel.getInstance().getCurrentGameData(),
        e = this._config.propId,
        o = this._config.num,
        i = void 0,
        a = void 0,
        s = void 0;
      if (e === EItemType.Shuffle) {
        t.changeShuffleNums(o);
        a = t.getShuffleNums();
        i = EItemId.Shuffle;
        s = "洗牌道具";
      } else {
        if (e !== EItemType.Hint) return;
        t.changeHitTipsNums(o);
        a = t.getHitTipsNums();
        i = EItemId.Hint;
        s = "提示道具";
      }
      DotGameGetItem.dotGetItem(t, {
        itemId: i,
        number: o,
        afterNum: a,
        reasonId: EGetItemReasonId.SystemGift,
        reasonInfo: "冷启动进入主线赠送" + s
      });
      this.localData.num++;
    } catch (t) {
      console.error("[" + ColdStartPropGiftTrait.traitKey + "] 赠送道具异常: " + t.message);
    }
  }
}
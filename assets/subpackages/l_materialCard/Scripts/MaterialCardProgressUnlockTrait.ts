import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MaterialCardProgressUnlockTrait")
export default class MaterialCardProgressUnlockTrait extends MaterialCardBaseTrait {
  _startLevel = 30;
  _initialUnlock = 2;
  _unlockInterval = 10;
  static traitKey = "MaterialCardProgressUnlock";
  onLoad() {
    var e, r, a, i, o, l;
    super.onLoad.call(this);
    this._initData();
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 30;
    this._initialUnlock = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.initialUnlock) && void 0 !== i ? i : 2;
    this._unlockInterval = null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockInterval) && void 0 !== l ? l : 10;
  }
  _initData() {
    this.isLocalEmpty(this.localData.sequenceIndex) && (this.localData.sequenceIndex = 0);
  }
  setCurMaterialCard(t) {
    var e = UserModel.getInstance();
    e.normalData.setCardMaterialID(t);
    e.travelData.setCardMaterialID(t);
    e.dailyChallengeData.setCardMaterialID(t);
  }
  _getMaterialUnlockOrder() {
    return MaterialCardBaseTrait.MATERIAL_CARD_LIST.filter(function (t) {
      return 0 !== t.id;
    }).map(function (t) {
      return t.id;
    });
  }
  _getUnlockedCount(t) {
    if (t < this._startLevel) return 0;
    var e = Math.floor((t - this._startLevel) / this._unlockInterval),
      r = this._initialUnlock + e,
      a = this._getMaterialUnlockOrder().length;
    return Math.min(r, a);
  }
  _getUnlockedAvailableMaterials(t) {
    var e = this._getMaterialUnlockOrder(),
      r = this._getUnlockedCount(t);
    if (0 === r) return [];
    var a = e.slice(0, r),
      i = new Set(this.getAvailableMaterials());
    return a.filter(function (t) {
      return i.has(t);
    });
  }
  _switchSequential(t) {
    var e,
      r = this._getUnlockedAvailableMaterials(t);
    if (0 !== r.length) {
      var a = null !== (e = this.localData.sequenceIndex) && void 0 !== e ? e : 0,
        i = r[a % r.length];
      this.getCurMaterialCard();
      this.setCurMaterialCard(i);
      this.localData.sequenceIndex = a + 1;
    }
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (this.isClassicMode()) {
        e();
        return;
      }
      var a = this.getCurrentLevel();
      if (a < this._startLevel) {
        e();
        return;
      }
      this._getUnlockedCount(a);
      this._switchSequential(a);
      e();
    } catch (t) {
      console.error("[" + MaterialCardProgressUnlockTrait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
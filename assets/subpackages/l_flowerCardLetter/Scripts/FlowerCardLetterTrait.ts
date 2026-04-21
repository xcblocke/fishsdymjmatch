import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType, MjCardId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("FlowerCardLetterTrait")
export default class FlowerCardLetterTrait extends Trait {
  _targetLevelId = 2;
  _bundleName = "l_flowerCardLetter";
  _atlasPrefix = "atlas/flowerCardIcon";
  _spinePath = "spine/gameplay_special_elimination";
  _cachedActive = false;
  _currSkData = null;
  _isLoadingSpine = false;
  static traitKey = "FlowerCardLetter";
  static FLOWER_CARD_NAMES = new Set(["Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"]);
  onLoad() {
    super.onLoad.call(this);
    var t = this._traitData || {};
    "number" == typeof t.levelId && (this._targetLevelId = t.levelId);
  }
  refreshActiveCache() {
    var e, t, r, i;
    if ((null === (t = null === (e = UserModel.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameType) || void 0 === t ? void 0 : t.call(e)) !== MjGameType.Normal) {
      this._cachedActive = false;
      return false;
    }
    var a = null === (i = null === (r = UserModel.getInstance()) || void 0 === r ? void 0 : r.getCurrentGameData) || void 0 === i ? void 0 : i.call(r),
      n = (a && "function" == typeof a.getCurrentLevelId ? a.getCurrentLevelId() : 0) || (a && "function" == typeof a.getLevelId ? a.getLevelId() : 0);
    this._cachedActive = n === this._targetLevelId;
    return this._cachedActive;
  }
  onInitViewBhv_crtTls(e, t) {
    var r,
      i,
      a = this;
    if (this.refreshActiveCache()) {
      var n = null === (i = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr;
      if (n && "function" == typeof n.loadRes) {
        this._isLoadingSpine = true;
        this._currSkData = null;
        n.loadRes(this._spinePath, sp.SkeletonData, this._bundleName).then(function (e) {
          var t = Array.isArray(e) ? e[0] : e;
          a._currSkData = t || null;
        }).catch(function () {
          a._currSkData = null;
        }).finally(function () {
          a._isLoadingSpine = false;
        });
        t();
      } else t();
    } else {
      this._currSkData = null;
      this._isLoadingSpine = false;
      t();
    }
  }
  onCardUtil_atlasPathBundle(e, t) {
    var i;
    if (this.refreshActiveCache()) {
      var a = null === (i = e.args) || void 0 === i ? void 0 : i[0];
      if (a) {
        var n = a.replace(/\.png$/i, "");
        if (FlowerCardLetterTrait.FLOWER_CARD_NAMES.has(n)) {
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
              path: this._atlasPrefix + "/" + n,
              bundleName: this._bundleName,
              fromAtlas: true
            }
          });
        } else {
          t();
        }
      } else t();
    } else t();
  }
  onClearEffBhv_isSpCard(e, t) {
    var r, i;
    if (this.refreshActiveCache()) {
      var a = null === (r = e.args) || void 0 === r ? void 0 : r[0],
        n = null === (i = e.args) || void 0 === i ? void 0 : i[1],
        o = this.isFlowerCollision(e.ins, a, n);
      t({
        returnType: TraitCallbackReturnType.jump,
        returnVal: o
      });
    } else t();
  }
  onClearEffBhv_changeSpSkd(e, t) {
    var r;
    if (this.refreshActiveCache()) {
      var i = null === (r = e.args) || void 0 === r ? void 0 : r[0],
        a = this._currSkData;
      a && cc.isValid(a) && i && i.skeletonData !== a && (i.skeletonData = a);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else t();
  }
  isFlowerCollision(e, t, r) {
    var i,
      a = null == e ? void 0 : e.context,
      n = null === (i = null == a ? void 0 : a.getTileMapObject) || void 0 === i ? void 0 : i.call(a);
    if (!n) return false;
    var o = t ? n.getTileObject(t) : null,
      l = r ? n.getTileObject(r) : null;
    return this.isFlowerCardId(null == o ? void 0 : o.cardId) || this.isFlowerCardId(null == l ? void 0 : l.cardId);
  }
  isFlowerCardId(e) {
    return !!e && (e >= 28 && e <= 34 || e >= MjCardId.emFlowCardIdMei && e <= MjCardId.emSeasonCardIdDong);
  }
}
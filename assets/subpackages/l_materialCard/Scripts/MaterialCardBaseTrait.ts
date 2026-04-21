import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MaterialCardBaseTrait")
export default class MaterialCardBaseTrait extends Trait {
  static traitKey = "MaterialCardBase";
  static _remoteTasksAdded = false;
  static MATERIAL_CARD_LIST = [{
    id: 0,
    name: "默认材质",
    bundle: "",
    isLocal: true
  }, {
    id: 2,
    name: "材质2",
    bundle: "l_materialCard2",
    isLocal: true
  }, {
    id: 4,
    name: "材质4",
    bundle: "l_materialCard4",
    isLocal: true
  }, {
    id: 7,
    name: "材质7",
    bundle: "l_materialCard7",
    isLocal: true
  }, {
    id: 8,
    name: "材质8",
    bundle: "l_materialCard8",
    isLocal: true
  }, {
    id: 11,
    name: "材质11",
    bundle: "l_materialCard11",
    isLocal: true
  }, {
    id: 12,
    name: "材质12",
    bundle: "l_materialCard12",
    isLocal: true
  }, {
    id: 19,
    name: "材质19",
    bundle: "l_materialCard19",
    isLocal: true
  }, {
    id: 20,
    name: "材质20",
    bundle: "l_materialCard20",
    isLocal: true
  }, {
    id: 1,
    name: "材质1",
    bundle: "r_materialCard1",
    isLocal: false
  }, {
    id: 3,
    name: "材质3",
    bundle: "r_materialCard3",
    isLocal: false
  }, {
    id: 5,
    name: "材质5",
    bundle: "r_materialCard5",
    isLocal: false
  }, {
    id: 6,
    name: "材质6",
    bundle: "r_materialCard6",
    isLocal: false
  }, {
    id: 9,
    name: "材质9",
    bundle: "r_materialCard9",
    isLocal: false
  }, {
    id: 10,
    name: "材质10",
    bundle: "r_materialCard10",
    isLocal: false
  }, {
    id: 13,
    name: "材质13",
    bundle: "r_materialCard13",
    isLocal: false
  }, {
    id: 14,
    name: "材质14",
    bundle: "r_materialCard14",
    isLocal: false
  }, {
    id: 15,
    name: "材质15",
    bundle: "r_materialCard15",
    isLocal: false
  }, {
    id: 16,
    name: "材质16",
    bundle: "r_materialCard16",
    isLocal: false
  }, {
    id: 17,
    name: "材质17",
    bundle: "r_materialCard17",
    isLocal: false
  }, {
    id: 18,
    name: "材质18",
    bundle: "r_materialCard18",
    isLocal: false
  }];
  getCurMaterialCard() {
    var t;
    return null !== (t = UserModel.getInstance().getCurrentGameData().getCardMaterialID()) && void 0 !== t ? t : 0;
  }
  setCurMaterialCard(t) {
    UserModel.getInstance().getCurrentGameData().setCardMaterialID(t);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onLoad() {
    var e, a;
    super.onLoad.call(this);
    if (!MaterialCardBaseTrait._remoteTasksAdded) {
      MaterialCardBaseTrait._remoteTasksAdded = true;
      var i = MaterialCardBaseTrait.MATERIAL_CARD_LIST.filter(function (t) {
        return !t.isLocal;
      });
      try {
        for (var o = __values(i), n = o.next(); !n.done; n = o.next()) {
          var s = n.value;
          LowPriorityBundleLoader.getInstance().addTask(s.bundle, ELowPriorityBundlePriority.Default);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          n && !n.done && (a = o.return) && a.call(o);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    this.registerEvent([{
      event: "DGameEnd_adjust"
    }]);
  }
  getBundleNameById(t) {
    var e = MaterialCardBaseTrait.MATERIAL_CARD_LIST.find(function (e) {
      return e.id === t;
    });
    return e ? e.bundle : null;
  }
  getAvailableMaterials() {
    var t,
      e,
      a = [];
    try {
      for (var i = __values(MaterialCardBaseTrait.MATERIAL_CARD_LIST), o = i.next(); !o.done; o = i.next()) {
        var n = o.value;
        if (n.isLocal) {
          a.push(n.id);
        } else {
          LowPriorityBundleLoader.getInstance().isBundlePreLoaded(n.bundle) && a.push(n.id);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (e = i.return) && e.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  switchToNextMaterialCard() {
    var t = this.getAvailableMaterials();
    if (0 !== t.length) {
      var e = this.getCurMaterialCard();
      if (1 !== t.length) {
        var r = t.filter(function (t) {
          return t !== e;
        });
        0 === r.length && (r = t);
        var a = r[Math.floor(Math.random() * r.length)];
        this.setCurMaterialCard(a);
      } else {
        var i = t[0];
        this.setCurMaterialCard(i);
      }
    }
  }
  getCurrentGameType() {
    var t, e;
    return null !== (e = null === (t = UserModel.getInstance().getCurrentGameData()) || void 0 === t ? void 0 : t.gameType) && void 0 !== e ? e : MjGameType.Normal;
  }
  isNormalMode() {
    return this.getCurrentGameType() === MjGameType.Normal;
  }
  isTravelMode() {
    return this.getCurrentGameType() === MjGameType.Travel;
  }
  isClassicMode() {
    return this.getCurrentGameType() === MjGameType.Classic;
  }
  isDailyMode() {
    return this.getCurrentGameType() === MjGameType.DailyChallenge;
  }
  getCurrentLevel() {
    var t;
    return null !== (t = UserModel.getInstance().normalData.getLevelId()) && void 0 !== t ? t : 0;
  }
  onCardUtil_atlasPathBundle(t, e) {
    var r;
    try {
      var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
      if ("gameplay_img_mj_dn" === a || "gameplay_img_mj_up" === a || "gameplay_select_mj" === a) {
        var i = this.getCurMaterialCard();
        if (0 === i) {
          e();
          return;
        }
        var o = this.getBundleNameById(i);
        if (!o) {
          e();
          return;
        }
        var l = "texture/" + a;
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: l,
            bundleName: o,
            fromAtlas: false
          }
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + this.constructor.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTileNodeObj_playAnim(t, e) {
    var r;
    try {
      if ("spine/rollcard/gameplay_flip" === (null === (r = t.args) || void 0 === r ? void 0 : r[0])) {
        var a = this.getCurMaterialCard();
        if (0 === a) {
          e();
          return;
        }
        var i = this.getBundleNameById(a);
        if (!i) {
          e();
          return;
        }
        var o = "spine/gameplay_flip_" + a;
        t.args[0] = o;
        t.args[6] = i;
        e();
        return;
      }
      e();
    } catch (t) {
      console.error("[" + this.constructor.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onDGameEnd_adjust(t, e) {
    var r = t.args[0];
    r && (r.material_id = this.getCurMaterialCard());
    e();
  }
  refreshExistingCards(t) {
    var e,
      r = null === (e = null == t ? void 0 : t.getTileNodeManager) || void 0 === e ? void 0 : e.call(t);
    if (r) {
      r.getTileNodes().forEach(function (t) {
        var e = t.tileObject;
        if (e && e.isValid) try {
          t.updateImgCardBg && "function" == typeof t.updateImgCardBg && t.updateImgCardBg();
          t.updateImgCard && "function" == typeof t.updateImgCard && t.updateImgCard();
          t._imgSelectedCardBg && t.updateImgSelectedCardBg && "function" == typeof t.updateImgSelectedCardBg && t.updateImgSelectedCardBg();
        } catch (t) {}
      });
    }
  }
}
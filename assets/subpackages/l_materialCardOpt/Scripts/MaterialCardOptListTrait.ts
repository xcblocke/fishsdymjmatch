import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import MaterialCardOptBaseTrait from './MaterialCardOptBaseTrait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
var f = ["gameplay_img_mj_dn", "gameplay_img_mj_up", "gameplay_select_mj"];
@mj.trait
@mj.class("MaterialCardOptListTrait")
export default class MaterialCardOptListTrait extends MaterialCardOptBaseTrait {
  _materials = [];
  _mode = 2;
  _preloadedIds = [];
  static traitKey = "MaterialCardOptList";
  onLoad() {
    var e, r, a, i, o, l;
    super.onLoad.call(this);
    this._materials = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.materials) && void 0 !== i ? i : [];
    this._mode = null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.mode) && void 0 !== l ? l : 2;
    this._initLocalData();
    try {
      for (var s = __values(this._materials), u = s.next(); !u.done; u = s.next()) {
        var c = u.value,
          p = this.getBundleNameById(c);
        p && LowPriorityBundleLoader.getInstance().addTask(p, ELowPriorityBundlePriority.Default);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        u && !u.done && (r = s.return) && r.call(s);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  _initLocalData() {
    2 === this._mode && this.isLocalEmpty(this.localData.phase) && (this.localData.phase = 1);
  }
  onMainGameCtrl_initRes(t, e) {
    var r;
    this._preloadedIds = [];
    var a = this._pickConfiguredNotInList(this._preloadedIds);
    if (a.length > 0) {
      this.addPreloadRes(t.ins, a);
      (r = this._preloadedIds).push.apply(r, [...a]);
    }
    e();
  }
  getConfiguredAvailableMaterials() {
    var t = new Set(this.getAvailableMaterials());
    return this._materials.filter(function (e) {
      return t.has(e);
    });
  }
  switchToNextMaterialCard() {
    var t,
      e = this,
      r = this.getConfiguredAvailableMaterials(),
      a = r.filter(function (t) {
        return e._preloadedIds.includes(t);
      }),
      i = a.length > 0 ? a : r;
    if (0 === i.length) return -1;
    if (1 === i.length) {
      this._setAndRecord(i[0]);
      this._preloadNextTwo();
      return i[0];
    }
    switch (this._mode) {
      case 1:
        t = this._pickInOrder(i);
        break;
      case 2:
        t = this._pickInOrderThenRandom(i);
        break;
      case 3:
        t = this._pickRandomReturn(i);
        break;
      case 4:
      default:
        t = this._pickRandomOrder(i);
    }
    this._setAndRecord(t);
    this._preloadNextTwo();
    return t;
  }
  _setAndRecord(t) {
    this.setCurMaterialCard(t);
    this.localData.lastSwitchedMat = t;
  }
  _getLastMat() {
    var t;
    return null !== (t = this.localData.lastSwitchedMat) && void 0 !== t ? t : this.getCurMaterialCard();
  }
  _pickConfiguredNotInList(t, e = 2) {
    return this.getConfiguredAvailableMaterials().filter(function (e) {
      return !t.includes(e);
    }).slice(0, e);
  }
  _getGameCtrl() {
    var t = ControllerManager.getInstance();
    switch (this.getCurrentGameType()) {
      case MjGameType.Travel:
        return t.getControByName("TravelGameController");
      case MjGameType.DailyChallenge:
        return t.getControByName("DailyChallengeController");
      case MjGameType.Classic:
        return t.getControByName("ClassicController");
      case MjGameType.Tile2Normal:
        return t.getControByName("Tile2GameController");
      default:
        return t.getControByName("MainGameController");
    }
  }
  _preloadNextTwo() {
    var t,
      e,
      r = this._getGameCtrl();
    if (r && "function" == typeof r.loadRes) {
      var a = this._pickConfiguredNotInList(this._preloadedIds),
        i = function i(t) {
          var e,
            a,
            i = o.getBundleNameById(t);
          if (!i) return "continue";
          var l = function l(t) {
            r.loadRes("texture/" + t, cc.SpriteFrame, i).then(function () {}).catch(function () {});
          };
          try {
            for (var s = (e = void 0, __values(f)), d = s.next(); !d.done; d = s.next()) l(d.value);
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              d && !d.done && (a = s.return) && a.call(s);
            } finally {
              if (e) throw e.error;
            }
          }
          o._preloadedIds.push(t);
        },
        o = this;
      try {
        for (var l = __values(a), s = l.next(); !s.done; s = l.next()) i(s.value);
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (e = l.return) && e.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  _pickInOrder(t) {
    var e = (t.indexOf(this._getLastMat()) + 1) % t.length;
    return t[e];
  }
  _pickInOrderThenRandom(t) {
    var e;
    if (1 === (null !== (e = this.localData.phase) && void 0 !== e ? e : 1)) {
      var r = t.indexOf(this._getLastMat()),
        a = t[(r + 1) % t.length];
      if (r + 1 >= this._materials.length) {
        this.localData.phase = 2;
        this.localData.randomOrder = null;
        this.localData.randomOrderIndex = 0;
        return this._pickRandomOrder(t);
      }
      return a;
    }
    return this._pickRandomOrder(t);
  }
  _pickRandomReturn(t) {
    var e = this._getLastMat(),
      r = t.filter(function (t) {
        return t !== e;
      }),
      a = r.length > 0 ? r : t;
    return a[Math.floor(Math.random() * a.length)];
  }
  _pickRandomOrder(t) {
    var e,
      r,
      a = null !== (e = this.localData.randomOrder) && void 0 !== e ? e : [],
      i = null !== (r = this.localData.randomOrderIndex) && void 0 !== r ? r : 0,
      o = this._getLastMat();
    if (0 === a.length || i >= a.length) {
      a = this._shuffleAvoidFirst(t, o);
      i = 0;
    }
    if (!t.includes(a[i])) {
      a = this._shuffleAvoidFirst(t, o);
      i = 0;
    }
    var n = a[i];
    this.localData.randomOrder = a;
    this.localData.randomOrderIndex = i + 1;
    return n;
  }
  _shuffleAvoidFirst(t, e) {
    for (var r, a, i = [...t], o = i.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      r = __read([i[n], i[o]], 2), i[o] = r[0], i[n] = r[1];
    }
    if (void 0 !== e && i.length > 1 && i[0] === e) {
      var d = Math.floor(Math.random() * (i.length - 1)) + 1;
      a = __read([i[d], i[0]], 2), i[0] = a[0], i[d] = a[1];
    }
    return i;
  }
}
import ExtractNormalLevels, { ExtractDimension } from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import Tile2CapabilityExtractRegistry from '../../../Scripts/Tile2CapabilityExtractRegistry';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
var y = {
  cardNum: 4,
  winLose: 3,
  weight: 2
};
@mj.trait
@mj.class("Tile2NengliParams")
export default class Tile2NengliParams extends Trait {
  _rules = [];
  _cachedLevelId = 0;
  _m = 5;
  _initDu = 80;
  _patchFlags = [false, false, false, false];
  _fallbackDirWgt = [1, 11, 33, 55];
  static traitKey = "Tile2NengliParams";
  onLoad() {
    var e, r, i, a, n, o, l;
    super.onLoad.call(this);
    this._rules = this._traitData.rules || [];
    this._m = null !== (e = this._traitData.m) && void 0 !== e ? e : 5;
    this._initDu = null !== (r = this._traitData.initDu) && void 0 !== r ? r : 80;
    this._patchFlags = [null !== (i = this._traitData.patch1) && void 0 !== i && i, null !== (a = this._traitData.patch2) && void 0 !== a && a, null !== (n = this._traitData.patch3) && void 0 !== n && n, null !== (o = this._traitData.patch4) && void 0 !== o && o];
    this._fallbackDirWgt = null !== (l = this._traitData.fallbackDirWgt) && void 0 !== l ? l : [1, 11, 33, 55];
  }
  initEvent() {
    var t,
      e = null !== (t = this._traitData.priority) && void 0 !== t ? t : 1000,
      r = [{
        event: "ExtNormLv_getDimOrder",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getLvPriority",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getTileDim",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getDeathLv",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getAllDirWgt",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getM",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_getInitDu",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_isOpenPatch1",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_isOpenPatch2",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_isOpenPatch3",
        type: 0,
        priority: e
      }, {
        event: "ExtNormLv_isOpenPatch4",
        type: 0,
        priority: e
      }];
    this._traitData.events = r;
    this.registerEvent(r);
  }
  isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal && Tile2CapabilityExtractRegistry.isEnabled();
  }
  getCurrentLevelId() {
    try {
      var t = UserModel.getInstance().getGameDataByGameType(MjGameType.Tile2Normal);
      if (t && t.getLevelGenIndex) return Math.max(1, t.getLevelGenIndex());
    } catch (t) {}
    return this._cachedLevelId || 1;
  }
  findRule(t) {
    var e, r, i;
    try {
      for (var a = __values(this._rules), n = a.next(); !n.done; n = a.next()) {
        var l = n.value;
        switch (l.match) {
          case "Range":
            if (t >= l.from && t <= (null !== (i = l.to) && void 0 !== i ? i : l.from)) return l;
            break;
          case "Greater":
            if (t > l.from) return l;
            break;
          case "Less":
            if (t < l.from) return l;
            break;
          case "Equal":
            if (t === l.from) return l;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (r = a.return) && r.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return null;
  }
  weightedRandom(t, e) {
    var r,
      i,
      a = 0;
    try {
      for (var n = __values(e), l = n.next(); !l.done; l = n.next()) a += l.value;
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (i = n.return) && i.call(n);
      } finally {
        if (r) throw r.error;
      }
    }
    if (a <= 0) return t[0] || 1;
    for (var s = Math.random() * a, u = 0, c = 0; c < e.length; c++) if (s < (u += e[c])) return t[c];
    return t[t.length - 1];
  }
  dimToStr(t) {
    return t < 10 ? "0" + t : "" + t;
  }
  getAvailableDimValues(t) {
    var e, r;
    try {
      var i = ExtractNormalLevels.getInstance().getAllNamesData();
      if (!i || 0 === i.length) return [];
      var a = ExtractDimension.getDimensionOrder().indexOf(y[t]);
      if (a < 0) return [];
      var n = new Set();
      try {
        for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
          var c = s.value.split("_");
          if (a < c.length) {
            var p = parseInt(c[a], 10);
            !isNaN(p) && p > 0 && n.add(p);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          s && !s.done && (r = l.return) && r.call(l);
        } finally {
          if (e) throw e.error;
        }
      }
      return Array.from(n).sort(function (t, e) {
        return t - e;
      });
    } catch (t) {
      return [];
    }
  }
  resolveDim(t, e) {
    var r;
    if ("In" === t.op) return this.weightedRandom(t.vals, t.wts);
    var i,
      a = this.getAvailableDimValues(e);
    switch (t.op) {
      case "Greater":
        i = a.filter(function (e) {
          var r;
          return e > (null !== (r = t.val) && void 0 !== r ? r : 0);
        });
        break;
      case "Less":
        i = a.filter(function (e) {
          var r;
          return e < (null !== (r = t.val) && void 0 !== r ? r : Infinity);
        });
        break;
      case "Equal":
        i = a.filter(function (e) {
          var r;
          return e === (null !== (r = t.val) && void 0 !== r ? r : 1);
        });
        break;
      default:
        i = [];
    }
    return 0 === i.length ? null !== (r = t.val) && void 0 !== r ? r : 1 : i[Math.floor(Math.random() * i.length)];
  }
  dimLogStr(t) {
    return "In" === t.op ? "vals=[" + t.vals + "] wts=[" + t.wts + "]" : "val=" + t.val;
  }
  onExtNormLv_getDimOrder(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: [1, 4, 3, 2]
      });
    } else e();
  }
  onExtNormLv_getLvPriority(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: [3, 2, 1, 4]
      });
    } else e();
  }
  onExtNormLv_getTileDim(t, e) {
    var r;
    if (this.isTile2Mode()) {
      var i = (null === (r = t.args) || void 0 === r ? void 0 : r[0]) || this.getCurrentLevelId();
      this._cachedLevelId = i;
      var a = this.findRule(i);
      if (a && a.cardNum) {
        var n = a.cardNum,
          o = this.resolveDim(n, "cardNum"),
          l = this.dimToStr(o);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: l
        });
      } else e();
    } else e();
  }
  onExtNormLv_getDeathLv(t, e) {
    var r;
    if (this.isTile2Mode()) {
      var i = (null === (r = t.args) || void 0 === r ? void 0 : r[1]) || this._cachedLevelId || this.getCurrentLevelId(),
        a = this.findRule(i);
      if (a && a.winLose) {
        var n = a.winLose,
          o = this.resolveDim(n, "winLose"),
          l = this.dimToStr(o);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: l
        });
      } else e();
    } else e();
  }
  onExtNormLv_getAllDirWgt(t, e) {
    var r, i;
    if (this.isTile2Mode()) {
      var a = this._cachedLevelId || this.getCurrentLevelId(),
        n = this.findRule(a);
      if (n && n.weight) {
        var l,
          u = n.weight;
        if ("In" === u.op) {
          var c = Math.max.apply(Math, [...u.vals, ...[4]]);
          l = new Array(c).fill(0);
          for (var p = 0; p < u.vals.length; p++) {
            var f = u.vals[p] - 1;
            f >= 0 && f < l.length && (l[f] = u.wts[p] || 0);
          }
        } else {
          var h = this.getAvailableDimValues("weight"),
            y = void 0;
          switch (u.op) {
            case "Greater":
              y = h.filter(function (t) {
                var e;
                return t > (null !== (e = u.val) && void 0 !== e ? e : 0);
              });
              break;
            case "Less":
              y = h.filter(function (t) {
                var e;
                return t < (null !== (e = u.val) && void 0 !== e ? e : Infinity);
              });
              break;
            case "Equal":
              y = h.filter(function (t) {
                var e;
                return t === (null !== (e = u.val) && void 0 !== e ? e : 1);
              });
              break;
            default:
              y = [];
          }
          c = y.length > 0 ? Math.max.apply(Math, [...y, ...[4]]) : 4;
          l = new Array(c).fill(0);
          try {
            for (var d = __values(y), m = d.next(); !m.done; m = d.next()) {
              var _ = m.value;
              _ - 1 >= 0 && _ - 1 < l.length && (l[_ - 1] = 1);
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              m && !m.done && (i = d.return) && i.call(d);
            } finally {
              if (r) throw r.error;
            }
          }
          y.length;
        }
        var T = [l, l, l, l];
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: T
        });
      } else {
        var g = this._fallbackDirWgt,
          b = [g, g, g, g];
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: b
        });
      }
    } else e();
  }
  onExtNormLv_getM(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._m
      });
    } else {
      e();
    }
  }
  onExtNormLv_getInitDu(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._initDu
      });
    } else {
      e();
    }
  }
  onExtNormLv_isOpenPatch1(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._patchFlags[0]
      });
    } else {
      e();
    }
  }
  onExtNormLv_isOpenPatch2(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._patchFlags[1]
      });
    } else {
      e();
    }
  }
  onExtNormLv_isOpenPatch3(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._patchFlags[2]
      });
    } else {
      e();
    }
  }
  onExtNormLv_isOpenPatch4(t, e) {
    if (this.isTile2Mode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._patchFlags[3]
      });
    } else {
      e();
    }
  }
}
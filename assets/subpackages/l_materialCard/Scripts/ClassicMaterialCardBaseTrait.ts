import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var h = ["gameplay_img_mj_dn", "gameplay_img_mj_up", "gameplay_select_mj"];
@mj.trait
@mj.class("ClassicMaterialCardBaseTrait")
export default class ClassicMaterialCardBaseTrait extends MaterialCardBaseTrait {
  _preloadedMaterialIds = [];
  static traitKey = "ClassicMaterialCardBase";
  static MAX_PRELOAD_SETS = 20;
  static CLASSIC_CTRL_NAME = "ClassicController";
  switchToNextMaterialCard() {
    var e;
    if (0 !== this._preloadedMaterialIds.length) {
      var a = this.getCurMaterialCard(),
        i = this._preloadedMaterialIds.filter(function (t) {
          return t !== a;
        }),
        o = i.length > 0 ? i[Math.floor(Math.random() * i.length)] : this._preloadedMaterialIds[0];
      this.setCurMaterialCard(o);
      if (this._preloadedMaterialIds.length < ClassicMaterialCardBaseTrait.MAX_PRELOAD_SETS) {
        var l = this.pickTwoNotInPreloaded();
        if (l.length > 0) {
          (e = this._preloadedMaterialIds).push.apply(e, [...l]);
          this.loadRes(l);
        }
      }
    } else super.switchToNextMaterialCard.call(this);
  }
  onMainGameCtrl_initRes(t, e) {
    var r, a, i;
    if ((null !== (a = null === (r = t.ins) || void 0 === r ? void 0 : r.gameType) && void 0 !== a ? a : null === (i = t.ins) || void 0 === i ? void 0 : i._gameType) === MjGameType.Classic) {
      this._preloadedMaterialIds = [];
      this._preloadedMaterialIds = this.pickPreloadMaterialIds();
      this._preloadedMaterialIds.length > 0 && this.addPreloadRes(t.ins, this._preloadedMaterialIds);
      e();
    } else e();
  }
  pickPreloadMaterialIds() {
    var t,
      e = null !== (t = UserModel.getInstance().classicData.getCardMaterialID()) && void 0 !== t ? t : 0,
      r = this.pickTwoNotInPreloaded([]);
    0 === e || r.includes(e) || r.push(e);
    return [...[0], ...r];
  }
  pickTwoNotInPreloaded(t, e = 2) {
    var r = null != t ? t : this._preloadedMaterialIds,
      a = this.getAvailableMaterials().filter(function (t) {
        return 0 !== t && !r.includes(t);
      });
    if (0 === a.length) return [];
    for (var i = Math.min(e, a.length), o = [], l = 0; l < i; l++) {
      var n = Math.floor(Math.random() * a.length);
      o.push(a[n]);
      a.splice(n, 1);
    }
    return o;
  }
  addPreloadRes(t, e) {
    var r, a, i, o;
    if (t && "function" == typeof t.addPreloadRes) {
      var l = Array.isArray(e) ? e : [e];
      try {
        for (var n = __values(l), c = n.next(); !c.done; c = n.next()) {
          var d = c.value;
          if (0 !== d) {
            var u = this.getBundleNameById(d);
            if (u) try {
              for (var p = (i = void 0, __values(h)), f = p.next(); !f.done; f = p.next()) {
                var v = u + ":texture/" + f.value;
                t.addPreloadRes("SpriteFrame", v);
              }
            } catch (t) {
              i = {
                error: t
              };
            } finally {
              try {
                f && !f.done && (o = p.return) && o.call(p);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          c && !c.done && (a = n.return) && a.call(n);
        } finally {
          if (r) throw r.error;
        }
      }
    }
  }
  loadRes(t) {
    var e,
      a,
      i,
      o,
      l = ControllerManager.getInstance().getControByName(ClassicMaterialCardBaseTrait.CLASSIC_CTRL_NAME);
    if (l && "function" == typeof l.loadRes) {
      var n = Array.isArray(t) ? t : [t];
      try {
        for (var d = __values(n), u = d.next(); !u.done; u = d.next()) {
          var p = u.value;
          if (0 !== p) {
            var f = this.getBundleNameById(p);
            if (f) {
              var v = function v(t) {
                l.loadRes("texture/" + t, cc.SpriteFrame, f).then(function () {}).catch(function () {});
              };
              try {
                for (var y = (i = void 0, __values(h)), _ = y.next(); !_.done; _ = y.next()) v(_.value);
              } catch (t) {
                i = {
                  error: t
                };
              } finally {
                try {
                  _ && !_.done && (o = y.return) && o.call(y);
                } finally {
                  if (i) throw i.error;
                }
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          u && !u.done && (a = d.return) && a.call(d);
        } finally {
          if (e) throw e.error;
        }
      }
    }
  }
  onCardUtil_atlasPathBundle(e, r) {
    var a,
      i = null === (a = e.args) || void 0 === a ? void 0 : a[0];
    if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i || !this.isClassicMode() || 0 !== this.getCurMaterialCard()) {
      super.onCardUtil_atlasPathBundle.call(this, e, r);
    } else {
      r({
        isBreak: true
      });
    }
  }
  onTileNodeObj_playAnim(e, r) {
    var a;
    if ("spine/rollcard/gameplay_flip" === (null === (a = e.args) || void 0 === a ? void 0 : a[0]) && this.isClassicMode() && 0 === this.getCurMaterialCard()) {
      r({
        isBreak: true
      });
    } else {
      super.onTileNodeObj_playAnim.call(this, e, r);
    }
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ETravelRewardType } from '../../../Scripts/config/TravelConfig';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var i;
(i = {})[105] = 101;
i[205] = 201;
i[607] = 601;
var p = i;
@mj.trait
@mj.class("Tile2OutRewardsTrait")
export default class Tile2OutRewardsTrait extends Trait {
  static traitKey = "Tile2OutRewards";
  get taskRewards() {
    var e;
    return null !== (e = this.traitData.taskRewards) && void 0 !== e ? e : [];
  }
  get travelBoxes() {
    var e;
    return null !== (e = this.traitData.travelBoxes) && void 0 !== e ? e : [];
  }
  get rankRewards() {
    var e;
    return null !== (e = this.traitData.rankRewards) && void 0 !== e ? e : [];
  }
  isTile2Mode() {
    return UserModel.getInstance().getMainGameData().gameType === MjGameType.Tile2Normal;
  }
  onTLGameModel_getReward(e, t) {
    var r, n;
    if (this.isTile2Mode()) {
      var i = e.beforReturnVal;
      if (!i || i.length <= 0) t();else {
        var o = this.travelBoxes;
        if (!o || o.length <= 0) t();else {
          for (var a = o.filter(function (e) {
              return -1 === e[1];
            }), s = function s(e) {
              var t = i[e];
              if (t.type === ETravelRewardType.EGiftBox) {
                var r = o.find(function (e) {
                  return e[0] === t.lv;
                });
                r && -1 !== r[1] && (t.reward = r[1]);
              }
            }, u = 0; u < i.length; u++) s(u);
          var c = function c(e) {
            var t = i.findIndex(function (t) {
              return t.lv === e[0];
            });
            -1 !== t && i.splice(t, 1);
          };
          try {
            for (var p = __values(a), d = p.next(); !d.done; d = p.next()) c(d.value);
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              d && !d.done && (n = p.return) && n.call(p);
            } finally {
              if (r) throw r.error;
            }
          }
          t({
            returnVal: i
          });
        }
      }
    } else t();
  }
  onTLMapVw_updateMapEleCfg(e, t) {
    var r, n, i;
    if (this.isTile2Mode()) {
      var o = e.ins.stateConfig;
      if (!o || !o.elements || o.elements.length <= 0) t();else {
        var a = this.travelBoxes;
        if (!a || a.length <= 0) t();else {
          var s = a.filter(function (e) {
              return -1 === e[1];
            }),
            u = function u(e) {
              s.find(function (t) {
                return t[0] === e.level;
              }) && (e.type = null !== (i = p[e.type]) && void 0 !== i ? i : e.type);
            };
          try {
            for (var f = __values(o.elements), c = f.next(); !c.done; c = f.next()) u(c.value);
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              c && !c.done && (n = f.return) && n.call(f);
            } finally {
              if (r) throw r.error;
            }
          }
          t();
        }
      }
    } else t();
  }
  onTaskTrait_getStageRews(e, t) {
    if (this.isTile2Mode()) {
      if (!this.taskRewards || this.taskRewards.length <= 0) {
        t();
      } else {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: this.taskRewards
        });
      }
    } else {
      t();
    }
  }
  onRankRobotCfg_getRewards(e, t) {
    if (this.isTile2Mode()) {
      if (!this.rankRewards || this.rankRewards.length <= 0) {
        t();
      } else {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: this.rankRewards
        });
      }
    } else {
      t();
    }
  }
}
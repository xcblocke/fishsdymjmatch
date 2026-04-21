import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum, EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { ECollectFrom } from '../../../Scripts/constant/CollectInterfact';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import YogaCardBehavior from '../../../Scripts/base/YogaCardBehavior';
import { ResId, EAudioID, MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import GoalAchieveItem from '../../../Scripts/items/GoalAchieveItem';
export class FreeTileYogaClearBehavior extends GameBehaviorsBase {
  _animatingCount = 0;
  _hasTriggeredWin = false;
  start(e) {
    var t,
      r,
      i,
      o,
      n,
      l,
      f,
      u = this,
      p = e.data.tileIds;
    if (p && 0 !== p.length) {
      var d = this.context.getTileMapObject();
      if (d) {
        var y = [],
          v = [];
        try {
          for (var g = __values(p), T = g.next(); !T.done; T = g.next()) {
            var m = T.value,
              _ = d.getTileObject(m);
            if (_ && _.isValid && _.resId === ResId.emYogaCardId) {
              v.push({
                tileId: m,
                type: _.type,
                cardId: _.cardId
              });
              d.clearTile(m, ECollectFrom.FromYoga);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            T && !T.done && (r = g.return) && r.call(g);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (var x = __values(v), b = x.next(); !b.done; b = x.next()) {
            var C = b.value,
              S = null === (f = d.collectSystem) || void 0 === f ? void 0 : f.getCollectDetailByCardId(C.type, C.cardId);
            S && y.push(S);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            b && !b.done && (o = x.return) && o.call(x);
          } finally {
            if (i) throw i.error;
          }
        }
        if (v.length > 0) {
          this._animatingCount = v.length;
          try {
            for (var w = __values(v), M = w.next(); !M.done; M = w.next()) {
              C = M.value;
              this.playFlyAnimation(C.tileId, C.type, C.cardId, function () {
                u._animatingCount--;
                if (u._animatingCount <= 0) {
                  u.updateCollectTargetUI(y);
                  u.finish(EBehaviorEnum.Success);
                }
              });
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              M && !M.done && (l = w.return) && l.call(w);
            } finally {
              if (n) throw n.error;
            }
          }
        } else this.finish(EBehaviorEnum.Success);
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  playFlyAnimation(e, t, r, i) {
    var o = this.context.getTileNodeMap().get(e);
    if (o) {
      var a = t + "_" + r,
        s = this.context.getTileNodeWorldPosition(e),
        c = this.context.getCollectTargetPosition(a);
      if (!c) {
        var f = this.context.gameView.topRootNode.position;
        c = this.context.gameView.topRootNode.parent.convertToWorldSpaceAR(f);
      }
      o.hide();
      this.context.removeTileNodeByTileId(e);
      var p = __read(this.getAnimPath(), 2),
        d = p[0],
        y = p[1],
        v = BaseSpine.create(y, "in", 1, null, false, d);
      this.context.gameView.effectNode.addChild(v.node);
      var g = this.context.gameView.effectNode.convertToNodeSpaceAR(s),
        T = new cc.Vec3(g.x, g.y, 0),
        m = this.context.gameView.effectNode.convertToNodeSpaceAR(c),
        _ = new cc.Vec3(g.x, g.y - 200, 0);
      mj.audioManager.playEffect(EAudioID.CollectionShow);
      YogaCardBehavior.playTwoStageAnimation(v.node, T, _, m, 0.15, 0.44, function () {
        cc.isValid(v.node) && v.node.destroy();
        i();
      });
    } else i();
  }
  getAnimPath() {
    if (this.context.gameCtr.gameType === MjGameType.Travel) {
      var e = TravelGameModel.getInstance().getCurJourney(),
        t = TravelGameModel.getInstance().getConfig(e);
      if (t && t.yogaAnim) {
        var r = t.yogaAnim.split(":");
        return 2 === r.length ? [r[0], "spine/" + r[1]] : ["mainRes", "spine/yoga/" + t.yogaAnim];
      }
    }
    return ["mainRes", "spine/yoga/gameplay_obstacle"];
  }
  updateCollectTargetUI(e) {
    var t, r;
    if (0 !== e.length) {
      try {
        for (var i = __values(e), o = i.next(); !o.done; o = i.next()) {
          var n = o.value,
            l = n.type === ETileType.RollCard ? "" + n.type : n.type + "_" + n.cardId,
            s = this.context.getCollectTargetItem(l);
          if (s) {
            s.updateData(n);
            s.playCollectAnimation();
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.checkUnlockedYogaAndWin();
    } else this.checkUnlockedYogaAndWin();
  }
  checkUnlockedYogaAndWin() {
    var e = this.context.getTileMapObject();
    if (e) {
      var t = [];
      e.tileObjectMap().forEach(function (r, i) {
        r.isValid && r.resId === ResId.emYogaCardId && (e.isCardLock(r) || t.push(i));
      });
      if (t.length > 0) {
        this.clearYogaTiles(t);
      } else {
        this.checkAndTriggerWin();
      }
    } else this.checkAndTriggerWin();
  }
  clearYogaTiles(e) {
    var t,
      r,
      i,
      o,
      n,
      l,
      s,
      f = this,
      u = this.context.getTileMapObject();
    if (u) {
      var p = [],
        d = [];
      try {
        for (var y = __values(e), v = y.next(); !v.done; v = y.next()) {
          var g = v.value,
            T = u.getTileObject(g);
          if (T && T.isValid && T.resId === ResId.emYogaCardId) {
            d.push({
              tileId: g,
              type: T.type,
              cardId: T.cardId
            });
            u.clearTile(g, ECollectFrom.FromYoga);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          v && !v.done && (r = y.return) && r.call(y);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var m = __values(d), _ = m.next(); !_.done; _ = m.next()) {
          var x = _.value,
            b = null === (s = u.collectSystem) || void 0 === s ? void 0 : s.getCollectDetailByCardId(x.type, x.cardId);
          b && p.push(b);
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          _ && !_.done && (o = m.return) && o.call(m);
        } finally {
          if (i) throw i.error;
        }
      }
      if (d.length > 0) {
        this._animatingCount = d.length;
        try {
          for (var C = __values(d), S = C.next(); !S.done; S = C.next()) {
            x = S.value;
            this.playFlyAnimation(x.tileId, x.type, x.cardId, function () {
              f._animatingCount--;
              f._animatingCount <= 0 && f.updateCollectTargetUI(p);
            });
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            S && !S.done && (l = C.return) && l.call(C);
          } finally {
            if (n) throw n.error;
          }
        }
      } else this.checkAndTriggerWin();
    } else this.checkAndTriggerWin();
  }
  checkAndTriggerWin() {
    if (!this._hasTriggeredWin && this.context.gameCtr.gameType === MjGameType.Travel) {
      var e = TravelGameData.getInstance();
      if (!e || !e.isAutoMerging()) {
        var t = this.context.getTileMapObject(),
          r = null == t ? void 0 : t.collectSystem;
        if (r) {
          if (r.isAllCollected()) {
            this._hasTriggeredWin = true;
            var i = TravelGameData.getInstance();
            i && i.setAutoMerging(true);
            this.playGoalAchieveAndStartAutoMerge();
          }
        }
      }
    }
  }
  playGoalAchieveAndStartAutoMerge() {
    var e = this,
      t = this.context.gameView.effectNode;
    GoalAchieveItem.createUI().then(function (r) {
      if (r) {
        r.setParent(t);
        r.position = cc.v3(0, 0, 0);
        var i = r.getComponent(GoalAchieveItem);
        if (i) {
          i.playSound();
          i.playAnimation(function () {
            e.triggerStartAutoMerge();
          });
        } else {
          r.destroy();
          e.triggerStartAutoMerge();
        }
      } else e.triggerStartAutoMerge();
    }).catch(function () {
      e.triggerStartAutoMerge();
    });
  }
  triggerStartAutoMerge() {
    GameInteraction.input({
      inputType: EGameInputEnum.StartAutoMerge,
      type: "travelVictory"
    });
  }
}
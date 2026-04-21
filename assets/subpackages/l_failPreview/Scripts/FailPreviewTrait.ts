import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ShuffleEffect } from '../../../Scripts/ShuffleEffect';
import { EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EItemId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import DynamicCurve from '../../../Scripts/types/DynamicCurve';
import { DotGameUseItem } from '../../../Scripts/gamePlay/dot/DGameUseItem';

@mj.trait
@mj.class("FailPreviewTrait")
export default class FailPreviewTrait extends Trait {
  static traitKey = "FailPreview";
  static _preShuffleData = null;
  static getPreShuffleData() {
    return FailPreviewTrait._preShuffleData;
  }
  static clearPreShuffleData() {
    FailPreviewTrait._preShuffleData = null;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onClrDailyHlp_getPreShf(e, t) {
    var r = this.handleGetPreShuffleData(e, "ClearDailyChallengeHelper");
    if (r) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      t();
    }
  }
  onClrNormHlp_getPreShf(e, t) {
    var r = this.handleGetPreShuffleData(e, "ClearNormalHelper");
    if (r) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      t();
    }
  }
  onClrTravelHlp_getPreShf(e, t) {
    var r = this.handleGetPreShuffleData(e, "ClearTravelHelper");
    if (r) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      t();
    }
  }
  onIptNoMatch_getPreShf(e, t) {
    var r = this.handleGetPreShuffleData(e, "InputNoMatchFail");
    if (r) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      t();
    }
  }
  onFailBhv_start(e, t) {
    var a,
      n = e.ins,
      i = e.args[0];
    if (n && n.context) {
      FailPreviewTrait._preShuffleData && this.updateIsBackInfo(n.context);
      if (null === (a = null == i ? void 0 : i.data) || void 0 === a ? void 0 : a.preShuffleData) {
        if (!i || !i.data) {
          t();
          return;
        }
        var o = i.data.shuffleNum || 0,
          l = mj.getClassByName("FailTrait");
        if (l && l.getInstance() && true === l.getInstance().eventEnabled) {
          l.getInstance().showFailView(o);
          t({
            isBreak: true
          });
          return;
        }
      }
      t();
    } else t();
  }
  handleGetPreShuffleData(e) {
    var t = e.ins,
      r = null;
    if (t && "function" == typeof t) {
      r = t._gameContext;
    } else {
      t && t.gameContext && (r = t.gameContext);
    }
    return r ? this.computePreShuffleData(r) : null;
  }
  computePreShuffleData(e) {
    var t = this.preComputeShuffleResult(e, null);
    if (t) {
      FailPreviewTrait._preShuffleData = t;
      return t;
    }
    return null;
  }
  onIptShuffle_exec(e, t) {
    var r = e.args[0];
    if (r && r.preShuffleData) {
      var a = e.ins,
        n = a.gameContext;
      if (r.from !== EShuffleFrom.Free) {
        if (!n.getGameData().isShuffleEnough()) {
          mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
          return;
        }
        var i = n.getGameData().getShuffleNums();
        n.getGameData().changeShuffleNums(-1);
        n.getGameData().recordToolUse(EItemId.Shuffle);
        n.getGameData().toolChange(EItemId.Shuffle, -1);
        DynamicCurve.instance.useShuffle(n.gameType);
        var o = n.getGameData().getShuffleNums();
        DotGameUseItem.dot(n, {
          itemId: EItemId.Shuffle,
          afterNum: o,
          beforeNum: i,
          from: r.from
        });
      }
      n.touchData.clear();
      n.getTileMapObject().unselectAllTileIds();
      var l = n.getTileMapObject().getLevelData();
      this.applyPreComputedShuffle(n, r.preShuffleData);
      n.getTileMapObject().updateCanMatchTiles();
      n.gameModifier.modifyShuffle();
      var f = n.getGameData().getLevelData();
      n.trackerModifier.triggerShuffle(f, l, r.from);
      a.pushUpdateShufflePropEffect(n.getGameData().getShuffleNums());
      a.pushShuffleEffect();
      a.pushUpdateMatchNumEffect();
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
  onIptShuffle_getEffect(e, t) {
    var r = e.ins.input;
    if (r && r.preShuffleData) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: new ShuffleEffect({})
      });
    } else {
      t();
    }
  }
  preComputeShuffleResult(e) {
    var t,
      r,
      a,
      n,
      i,
      f,
      u = e.getTileMapObject();
    if (!u) return null;
    var c = {},
      s = [];
    try {
      for (var p = __values(u.tileObjectMap()), h = p.next(); !h.done; h = p.next()) {
        var d = __read(h.value, 2),
          y = d[0];
        if ((w = d[1]).isValid) {
          c[y] = w.resId;
          var v = w.getPosition();
          s.push({
            tileId: y,
            gridX: w.gridPosX,
            gridY: w.gridPosY,
            layer: w.layer,
            resId: w.resId,
            position: {
              x: v.x,
              y: v.y
            },
            isBack: false
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (r = p.return) && r.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    e.shuffleModifier.shuffle();
    var m = {},
      g = [];
    try {
      for (var S = __values(u.tileObjectMap()), T = S.next(); !T.done; T = S.next()) {
        var I = __read(T.value, 2);
        y = I[0];
        if ((w = I[1]).isValid) {
          m[y] = w.resId;
          var P = w.getPosition();
          g.push({
            tileId: y,
            gridX: w.gridPosX,
            gridY: w.gridPosY,
            layer: w.layer,
            resId: w.resId,
            position: {
              x: P.x,
              y: P.y
            },
            isBack: false
          });
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (n = S.return) && n.call(S);
      } finally {
        if (a) throw a.error;
      }
    }
    var D = function D(e, t) {
      if (void 0 !== c[e]) {
        t.changeResId(c[e]);
        var r = s.find(function (t) {
            return t.tileId === e;
          }),
          a = g.find(function (t) {
            return t.tileId === e;
          });
        r && a && (r.gridX !== a.gridX || r.gridY !== a.gridY || (r.layer, a.layer));
      }
    };
    try {
      for (var _ = __values(u.tileObjectMap()), b = _.next(); !b.done; b = _.next()) {
        var w,
          k = __read(b.value, 2);
        D(y = k[0], w = k[1]);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        b && !b.done && (f = _.return) && f.call(_);
      } finally {
        if (i) throw i.error;
      }
    }
    return {
      timestamp: Date.now(),
      beforeMapping: c,
      afterMapping: m,
      tilePositions: s,
      tilePositionsAfter: g
    };
  }
  applyPreComputedShuffle(e, t) {
    var r,
      a,
      n = e.getTileMapObject(),
      i = t.afterMapping;
    try {
      for (var f = __values(n.tileObjectMap()), u = f.next(); !u.done; u = f.next()) {
        var c = __read(u.value, 2),
          s = c[0],
          p = c[1];
        if (void 0 !== i[s]) {
          p.resId;
          p.changeResId(i[s]);
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (a = f.return) && a.call(f);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  updateIsBackInfo(e) {
    var t, a, n, i, l;
    if (FailPreviewTrait._preShuffleData) {
      var f = null === (l = e.getTileNodeMap) || void 0 === l ? void 0 : l.call(e);
      if (f) {
        try {
          for (var u = __values(FailPreviewTrait._preShuffleData.tilePositions), c = u.next(); !c.done; c = u.next()) {
            var s = c.value;
            (d = f.get(s.tileId)) && void 0 !== d.isBack && (s.isBack = d.isBack);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            c && !c.done && (a = u.return) && a.call(u);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (var p = __values(FailPreviewTrait._preShuffleData.tilePositionsAfter), h = p.next(); !h.done; h = p.next()) {
            var d;
            s = h.value;
            (d = f.get(s.tileId)) && void 0 !== d.isBack && (s.isBack = d.isBack);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            h && !h.done && (i = p.return) && i.call(p);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    }
  }
}
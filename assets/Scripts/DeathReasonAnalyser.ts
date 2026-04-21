import { SimpleBoard } from './SimpleBoard';
import { PathAnalyser } from './PathAnalyser';
import { DEFAULT_FRAME_CONFIG, createCancellationToken } from './PathAnalyserTypes';
import DeathAnalyzeModel from './DeathAnalyzeModel';
var d = {
  frameConfig: DEFAULT_FRAME_CONFIG,
  maxNodeCount: Infinity,
  highlightColors: [],
  checkingBadColor: -1
};
export class DeathReasonAnalyser {
  _deadNodes = [];
  _nodeCount = 0;
  _startTime = 0;
  _highlightColorMaxCounts = new Map();
  _visitedStates = new Set();
  _badMahjongGroups = [];
  _mode = null;
  _levelInfo = null;
  _config = Object.assign({}, d);
  _cancellationToken = createCancellationToken();
  get cancellationToken() {
    return this._cancellationToken;
  }
  cancel() {
    this._cancellationToken.cancel();
  }
  isAnalyzed(e, t) {
    return this._mode === e && this._levelInfo === t;
  }
  startAnalyze(e, t, o, n, i) {
    this._mode = e;
    this._levelInfo = t;
    Date.now();
    var r = DeathAnalyzeModel.getInstance().getDeath(e, t);
    if (r) {
      this._badMahjongGroups = r.badMahjongGroups;
      n(this._badMahjongGroups);
    } else this.analyze(o).then(function (o) {
      if (o.completed) {
        DeathAnalyzeModel.getInstance().saveDeath(e, t, o.badMahjongGroups);
        n(o.badMahjongGroups);
      } else i && i();
    }).catch(function () {
      i && i();
    });
  }
  async analyze(e) {
    var t, o, n, i, s, p, f, d, h, y, m, v, g, _, T;
    this._startTime = Date.now();
    this._deadNodes = [];
    this._nodeCount = 0;
    this._highlightColorMaxCounts.clear();
    this._visitedStates.clear();
    this._badMahjongGroups = [];
    try {
      for (t = __values(this._config.highlightColors), o = t.next(); !o.done; o = t.next()) {
        d = o.value;
        this._highlightColorMaxCounts.set(d, 0);
      }
    } catch (e) {
      v = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (g = t.return) && g.call(t);
      } finally {
        if (v) throw v.error;
      }
    }
    -1 !== this._config.checkingBadColor && this._highlightColorMaxCounts.set(this._config.checkingBadColor, 0);
    (n = new SimpleBoard()).initFromTiles(e);
    i = await new PathAnalyser(n, this, this._config.checkingBadColor, this._config.highlightColors, this._cancellationToken, this._config.frameConfig).analyze();
    try {
      for (s = __values(i.highlightColorMaxCounts), p = s.next(); !p.done; p = s.next()) {
        f = __read(p.value, 2), d = f[0], h = f[1];
        y = this._highlightColorMaxCounts.get(d) || 0;
        h > y && this._highlightColorMaxCounts.set(d, h);
      }
    } catch (e) {
      _ = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (T = s.return) && T.call(s);
      } finally {
        if (_) throw _.error;
      }
    }
    m = Date.now() - this._startTime;
    return {
      completed: i.completed,
      cancelled: i.cancelled,
      deadNodes: this._deadNodes,
      highlightColorMaxCounts: this._highlightColorMaxCounts,
      duration: m,
      totalNodeCount: this._nodeCount,
      badMahjongGroups: this._badMahjongGroups
    };
  }
  addNode(e, t) {
    var o, n;
    this._nodeCount++;
    if (this._nodeCount >= this._config.maxNodeCount) {
      this._cancellationToken.cancel();
      return false;
    }
    try {
      for (var i = __values(this._badMahjongGroups), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        if (this.hasBadGroupUsed(e, l, t)) return false;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    var c = e.getStateSignature();
    if (this._visitedStates.has(c)) return false;
    this._visitedStates.add(c);
    if (e.aliveTileCount > 0 && t > 0) {
      var u = {
        moveHistory: [...e.moveList],
        uselessMoveCount: t,
        remainingTileCount: e.aliveTileCount
      };
      this._deadNodes.push(u);
    }
    return true;
  }
  hasBadGroupUsed(e, t, o) {
    for (var n = new Set(), i = e.moveList, r = i.length - o, a = 0; a < r; a++) {
      var l = i[a],
        s = l.tile1.cardId;
      if (t.colors.has(s)) {
        var c = l.tile1.id,
          u = l.tile2.id,
          p = t.tileIds.has(c),
          f = t.tileIds.has(u);
        if (p && f) {
          n.add(c);
          n.add(u);
        } else if ((p || f) && p !== f) return false;
      }
    }
    return n.size === t.tiles.length;
  }
  recordBadMahjongGroup(e) {
    var t = e.map(function (e) {
      return e.id;
    }).sort().join(",");
    if (!this._badMahjongGroups.some(function (e) {
      return e.key === t;
    })) {
      var o = new Set(e.map(function (e) {
          return e.cardId;
        })),
        n = new Set(e.map(function (e) {
          return e.id;
        }));
      this._badMahjongGroups.push({
        key: t,
        colors: o,
        tileIds: n,
        tiles: e
      });
    }
  }
  getDeadNodes() {
    return this._deadNodes;
  }
  getNodeCount() {
    return this._nodeCount;
  }
  getBadMahjongGroups() {
    return this._badMahjongGroups || [];
  }
}
import GameConstant from './core/simulator/constant/GameConstant';
function s(e) {
  return {
    id: e.id,
    resId: e.resId,
    cardId: e.cardId,
    gridPosX: e.gridPosX,
    gridPosY: e.gridPosY,
    layer: e.layer,
    ownerGridIds: [...e.ownerGridIds],
    isValid: e.isValid
  };
}
export class SimpleBoard {
  _tiles = new Map();
  _layers = [];
  _moveList = [];
  _maxLayer = 0;
  get aliveTileCount() {
    var e,
      t,
      o = 0;
    try {
      for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) i.value.isValid && o++;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  get aliveTiles() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.isValid && o.push(r);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  get unlockTiles() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.isValid && !this.isTileLocked(r) && o.push(r);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  get moveList() {
    return this._moveList;
  }
  initFromTiles(e) {
    var t, o, n, i;
    this._tiles.clear();
    this._layers = [];
    this._moveList = [];
    this._maxLayer = 0;
    try {
      for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
        var c = l.value;
        if (c.isValid) {
          var u = s(c);
          this._tiles.set(c.id, u);
          for (; this._layers.length <= c.layer;) this._layers.push({
            layerIndex: this._layers.length,
            grids: new Map(),
            tileIds: new Set()
          });
          var p = this._layers[c.layer];
          p.tileIds.add(c.id);
          try {
            for (var f = (n = void 0, __values(c.ownerGridIds)), d = f.next(); !d.done; d = f.next()) {
              var h = d.value;
              p.grids.set(h, c.id);
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              d && !d.done && (i = f.return) && i.call(f);
            } finally {
              if (n) throw n.error;
            }
          }
          c.layer > this._maxLayer && (this._maxLayer = c.layer);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  clone() {
    var t,
      o,
      l,
      s,
      c = new SimpleBoard();
    try {
      for (var u = __values(this._tiles), p = u.next(); !p.done; p = u.next()) {
        var f = __read(p.value, 2),
          d = f[0],
          h = f[1];
        c._tiles.set(d, Object.assign(Object.assign({}, h), {
          ownerGridIds: [...h.ownerGridIds]
        }));
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (o = u.return) && o.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var y = __values(this._layers), m = y.next(); !m.done; m = y.next()) {
        var v = m.value;
        c._layers.push({
          layerIndex: v.layerIndex,
          grids: new Map(v.grids),
          tileIds: new Set(v.tileIds)
        });
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        m && !m.done && (s = y.return) && s.call(y);
      } finally {
        if (l) throw l.error;
      }
    }
    c._moveList = [...this._moveList];
    c._maxLayer = this._maxLayer;
    return c;
  }
  isTileLocked(e) {
    if (this.hasCover(e)) return true;
    var t = this.isHasLeft(e),
      o = this.isHasRight(e);
    return t && o;
  }
  hasCover(e) {
    for (var t, o, n = e.layer + 1; n < this._layers.length; n++) {
      var i = this._layers[n];
      try {
        for (var r = (t = void 0, __values(e.ownerGridIds)), l = r.next(); !l.done; l = r.next()) {
          var s = l.value;
          if (this.hasCard(i, s)) return true;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          l && !l.done && (o = r.return) && o.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }
    return false;
  }
  hasCard(e, t) {
    var o = e.grids.get(t);
    if (o) {
      var n = this._tiles.get(o);
      if (n && n.isValid) return true;
    }
    return false;
  }
  isHasLeft(e) {
    var t = this._layers[e.layer];
    return !!t && this.gridIndex2PosX(e.ownerGridIds[0]) > 0 && (this.hasCard(t, e.ownerGridIds[0] - 1) || this.hasCard(t, e.ownerGridIds[2] - 1));
  }
  isHasRight(e) {
    var t = this._layers[e.layer];
    return !!t && this.gridIndex2PosX(e.ownerGridIds[1]) < 2 * GameConstant.MaxTileCountX - 1 && (this.hasCard(t, e.ownerGridIds[1] + 1) || this.hasCard(t, e.ownerGridIds[3] + 1));
  }
  gridIndex2PosX(e) {
    return e % (2 * GameConstant.MaxTileCountX);
  }
  gridIndex2PosY(e) {
    return Math.floor(e / (2 * GameConstant.MaxTileCountX));
  }
  makeMove(e) {
    this._moveList.push(e);
    this.removeTile(e.tile1);
    this.removeTile(e.tile2);
  }
  makeMoveBySimple(e, t) {
    var o = {
      tile1: Object.assign(Object.assign({}, e), {
        ownerGridIds: [...e.ownerGridIds]
      }),
      tile2: Object.assign(Object.assign({}, t), {
        ownerGridIds: [...t.ownerGridIds]
      })
    };
    this._moveList.push(o);
    this.removeTileById(e.id);
    this.removeTileById(t.id);
  }
  removeSingleTile(e) {
    this.removeTileById(e.id);
  }
  removeTile(e) {
    this.removeTileById(e.id);
  }
  removeTileById(e) {
    var t,
      o,
      n = this._tiles.get(e);
    if (n && n.isValid) {
      n.isValid = false;
      var i = this._layers[n.layer];
      if (i) {
        i.tileIds.delete(e);
        try {
          for (var r = __values(n.ownerGridIds), l = r.next(); !l.done; l = r.next()) {
            var s = l.value;
            i.grids.get(s) === e && i.grids.delete(s);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            l && !l.done && (o = r.return) && o.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }
    }
  }
  getTile(e) {
    return this._tiles.get(e);
  }
  getStateSignature() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.isValid && o.push(r.id);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    o.sort();
    return o.join(",");
  }
}
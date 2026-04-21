export class Tile2SlotBarData {
  _canDianZanTileIds = null;
  _slotBarTileSteps = {};
  _slotBarTileClearSteps = {};
  _rollCardLockTileIds = {};
  get slotBarTileSteps() {
    return this._slotBarTileSteps;
  }
  set slotBarTileSteps(e) {
    this._slotBarTileSteps = e;
  }
  get canDianZanTileIds() {
    return this._canDianZanTileIds;
  }
  set canDianZanTileIds(e) {
    this._canDianZanTileIds = e || [];
  }
  addTileStep(e) {
    if (this._slotBarTileSteps[e]) {
      this._slotBarTileSteps[e]++;
    } else {
      this._slotBarTileSteps[e] = 1;
    }
  }
  resetTileStep(e) {
    this._slotBarTileSteps[e] && delete this._slotBarTileSteps[e];
  }
  getTileStep(e) {
    return this._slotBarTileSteps[e] || 0;
  }
  clearTileStep(e) {
    if (e && 0 !== e.length) for (var t = Object.keys(this._slotBarTileSteps), o = 0; o < t.length; o++) {
      var n = t[o];
      e.includes(n) || this.resetTileStep(n);
    }
  }
  addTileClearStep(e) {
    if (this._slotBarTileClearSteps[e]) {
      this._slotBarTileClearSteps[e]++;
    } else {
      this._slotBarTileClearSteps[e] = 1;
    }
  }
  getTileClearStep(e) {
    return this._slotBarTileClearSteps[e] || 0;
  }
  resetTileClearStep(e) {
    this._slotBarTileClearSteps[e] && delete this._slotBarTileClearSteps[e];
  }
  clearTileClearSteps(e) {
    var t, o;
    if (e && 0 !== e.length) {
      var i = Object.keys(this._slotBarTileClearSteps);
      try {
        for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          e.includes(l) || this.resetTileClearStep(l);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          a && !a.done && (o = r.return) && o.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  addRollCardLockTileId(e, t) {
    this._rollCardLockTileIds || (this._rollCardLockTileIds = {});
    this._rollCardLockTileIds[e] = t;
  }
  getRollCardLockTileIds() {
    return this._rollCardLockTileIds ? Object.keys(this._rollCardLockTileIds) : [];
  }
  removeRollCardLockTileId(e) {
    this._rollCardLockTileIds && this._rollCardLockTileIds[e] && delete this._rollCardLockTileIds[e];
  }
  clearCardLockData() {
    this._rollCardLockTileIds && (this._rollCardLockTileIds = null);
  }
  clearCanDianZanTileIds() {
    this._canDianZanTileIds && (this._canDianZanTileIds = null);
  }
}
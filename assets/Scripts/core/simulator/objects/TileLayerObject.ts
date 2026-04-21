import GameConstant from '../constant/GameConstant';
export default class TileLayerObject {
  _grids = [];
  _allCards = [];
  _layerIndex = null;
  get allCards() {
    return this._allCards;
  }
  get layerIndex() {
    return this._layerIndex;
  }
  constructor(e) {
    this._layerIndex = e;
    this._grids = new Array(GameConstant.MaxTileCountX * GameConstant.MaxTileCountY * 4).fill(null);
  }
  updateLayerIndex(e) {
    var t, o;
    this._layerIndex = e;
    try {
      for (var i = __values(this._allCards), r = i.next(); !r.done; r = i.next()) r.value.setLayer(e);
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  addCard(e) {
    for (var t = 0, o = this.allCards.length - 1, n = -1; t <= o;) {
      var i = Math.floor((t + o) / 2),
        r = this.compare(e, this.allCards[i]);
      if (0 === r) {
        n = i;
        break;
      }
      if (r < 0) {
        o = i - 1;
      } else {
        t = i + 1;
      }
    }
    n < 0 && (n = t);
    this._allCards.splice(n, 0, e);
    this.addToOwner(e);
  }
  hasValidCard() {
    for (var e = 0; e < this._allCards.length; e++) if (this._allCards[e].isValid) return true;
    return false;
  }
  removeCard(e) {
    var t = this._allCards.indexOf(e);
    if (!(t < 0)) {
      this._allCards.splice(t, 1);
      this.refreshGridState_Remove(e);
    }
  }
  compare(e, t) {
    var o = e.gridPosX + 2 * e.gridPosY,
      n = t.gridPosX + 2 * t.gridPosY;
    return e.layer !== t.layer ? e.layer - t.layer : o === n ? e.gridPosX - t.gridPosX : o - n;
  }
  addToOwner(e) {
    for (var t = 0; t < e.ownerGridIds.length; t++) {
      var o = e.ownerGridIds[t];
      o < 0 || o >= this._grids.length || (this._grids[o] = e);
    }
  }
  isHasCard(e) {
    var t = this.getGridCard(e);
    return null != t && t.isValid && !t.getIsInSlotBar();
  }
  getGridCard(e) {
    return e < 0 || e >= this._grids.length ? null : this._grids[e];
  }
  refreshGridState_Remove(e) {
    for (var t = 0; t < e.ownerGridIds.length; t++) this._grids[e.ownerGridIds[t]] = null;
  }
  refreshGridState_Add(e) {
    for (var t = 0; t < e.ownerGridIds.length; ++t) {
      var o = e.ownerGridIds[t];
      o < 0 || o >= this._grids.length || (this._grids[o] = e);
    }
  }
}
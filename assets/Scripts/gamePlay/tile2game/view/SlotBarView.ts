import { ETile2SlotType } from '../../../core/simulator/constant/GameTypeEnums';
import SlotBarEffectManager from '../../../core/view/items/SlotBarEffectManager';
import BaseUI from '../../../framework/ui/BaseUI';
@mj.class
export default class SlotBarView extends BaseUI {
  _nodeLayer = null;
  _slotBarCount = 4;
  _slotBarNodeList = [];
  _slotBarEffectManager = null;
  _slotType = ETile2SlotType.Slot3;
  get slotBarEffectManager() {
    return this._slotBarEffectManager;
  }
  onLoad() {
    super.onLoad.call(this);
    this._nodeLayer = cc.find("nodeLayer/content", this.node);
  }
  getSlotType() {
    return this._slotType;
  }
  init(e) {
    this._slotType = e;
    if (e === ETile2SlotType.Slot4) {
      var t = cc.find("nodeBgEffect", this.node),
        o = cc.find("nodeTop", this.node);
      t && o && (this._slotBarEffectManager = new SlotBarEffectManager(t, o));
    }
  }
  resetSlotBar() {
    var e;
    this._slotBarNodeList = [];
    null === (e = this._slotBarEffectManager) || void 0 === e || e.reset();
  }
  getNodeLayer() {
    return this._nodeLayer;
  }
  getPosition(e, t) {
    if (this._slotType === ETile2SlotType.Slot4) {
      var o = e.tileObject.getWidthInSlotBar(),
        n = this._slotBarCount,
        i = t * o,
        r = Math.abs(o * n * 0.5);
      return new cc.Vec3(i - r + o / 2, 0, 0);
    }
    o = 113.5, n = this._slotBarCount - 1;
    return new cc.Vec3(t * o - o * (n - 1), 0, 0);
  }
  getWorldPosition(e, t) {
    var o = this.getPosition(e, t);
    return this.getNodeLayer().convertToWorldSpaceAR(o);
  }
  addTileNode(e, t, o = false) {
    var n, i;
    var r = false;
    try {
      for (var l = __values(this._slotBarNodeList), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        if (c.tileNode.tileObject.id == e.tileObject.id) {
          c.index = t;
          r = true;
          break;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (i = l.return) && i.call(l);
      } finally {
        if (n) throw n.error;
      }
    }
    r || this._slotBarNodeList.push({
      index: t,
      tileNode: e
    });
    var u = this.getPosition(e, t);
    if (o) {
      e.updateZIndexInSlotBar(t);
    } else {
      e.addToSlotBar(this._nodeLayer, t, u, e.tileObject.getScaleInSlotBar(), this._slotType);
    }
  }
  moveTileNode(e, t, o, n = false) {
    this.addTileNode(e, o, n);
  }
  removeSlotBar(e) {
    var t,
      o,
      n = [];
    try {
      for (var i = __values(this._slotBarNodeList), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        e.includes(l.tileNode.tileObject.id) || n.push(l);
      }
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
    this._slotBarNodeList = n;
  }
  hasTileNode(e) {
    var t, o;
    try {
      for (var n = __values(this._slotBarNodeList), i = n.next(); !i.done; i = n.next()) if (i.value.tileNode.tileObject.id == e) return true;
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    return false;
  }
}
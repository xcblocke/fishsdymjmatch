import BaseSpine from '../../../gamePlay/base/ui/BaseSpine';
export default class SlotBarEffectManager {
  _currentLevel = 0;
  _spineUpper = null;
  _spineLower = null;
  _nodeBgEffect = null;
  _nodeTop = null;
  _upperNode = null;
  _lowerNode = null;
  get currentLevel() {
    return this._currentLevel;
  }
  constructor(e, t) {
    this._nodeBgEffect = e;
    this._nodeTop = t;
    this.createSpineNodes();
  }
  createSpineNodes() {
    this._upperNode = this.createNode("slotUpper", this._nodeTop, 0);
    this._lowerNode = this.createNode("slotLower", this._nodeBgEffect, 0);
    this._spineUpper = BaseSpine.refreshWithNode(this._upperNode, "spine/tile2Combo/gameplay_combo_groove_a");
    this._spineLower = BaseSpine.refreshWithNode(this._lowerNode, "spine/tile2Combo/gameplay_combo_groove_b");
    this.hideAll();
  }
  createNode(e, t, o) {
    var n = new cc.Node(e);
    n.parent = t;
    n.zIndex = o;
    n.setPosition(cc.v3(0, 0, 0));
    return n;
  }
  hideAll() {
    this._upperNode && (this._upperNode.active = false);
    this._lowerNode && (this._lowerNode.active = false);
  }
  showAll() {
    this._upperNode && (this._upperNode.active = true);
    this._lowerNode && (this._lowerNode.active = true);
  }
  advanceToLevel(e) {
    var t = this;
    if (!(e <= 0 || e > 5 || e <= this._currentLevel)) {
      this._currentLevel = e;
      this.showAll();
      this._spineUpper.setAnimation("in_" + e, 1, function () {
        cc.isValid(t._upperNode) && (t._upperNode.active = false);
      });
      this._spineLower.setAnimation("idle_" + e, -1);
    }
  }
  initToLevel(e) {
    if (!(e <= 0 || e > 5)) {
      this._currentLevel = e;
      this._lowerNode && (this._lowerNode.active = true);
      this._upperNode && (this._upperNode.active = false);
      this._spineLower.setAnimation("idle_" + e, -1);
    }
  }
  reset() {
    this._currentLevel = 0;
    this.hideAll();
    var e = function e(e) {
      if (e) {
        var t = e.getSkeleton();
        t && t.clearTracks();
      }
    };
    e(this._spineUpper);
    e(this._spineLower);
  }
}
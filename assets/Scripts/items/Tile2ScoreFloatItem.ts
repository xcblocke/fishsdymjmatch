import BaseUI from '../framework/ui/BaseUI';
import { makeCubicBezier } from '../base/TweenEasing';
var s = makeCubicBezier(0.25, 1.5, 0.58, 1.15);
var c = makeCubicBezier(0.3, 0.05, 0.78, 0.4);
var u = makeCubicBezier(0.46, 0.18, 0.76, 0.6);
@mj.class
export default class Tile2ScoreFloatItem extends BaseUI {
  _lbl = null;
  static getPrefabNormal() {
    return "prefabs/effects/Tile2ClearScoreNormal";
  }
  static getPrefabCombo() {
    return "prefabs/effects/Tile2ClearScoreCombo";
  }
  static createNormal() {
    return this.createUI(this.getPrefabNormal()).then(function (e) {
      return e.getComponent(Tile2ScoreFloatItem);
    });
  }
  static createCombo() {
    return this.createUI(this.getPrefabCombo()).then(function (e) {
      return e.getComponent(Tile2ScoreFloatItem);
    });
  }
  onLoad() {
    var t;
    super.onLoad.call(this);
    this._lbl = null === (t = this.node.getChildByName("labelScore")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
  }
  setScore(e) {
    this._lbl && (this._lbl.string = this.formatScore(e));
  }
  formatScore(e) {
    return "+" + e;
  }
  playFlyToHolderAnimation(e, t, o, n) {
    var i,
      r = this,
      a = 1 === (i = t) ? 0.067 : 2 === i ? 0.167 : 3 === i ? 0.267 : 4 === i ? 0.4 : 0.5,
      l = 1 === t,
      p = l ? 0.6 : 1,
      f = l ? 0.36 : 0.6;
    this.node.scale = 0;
    this.node.opacity = 255;
    cc.tween(this.node).to(0.2, {
      scale: p
    }, {
      easing: s
    }).delay(0.167).parallel(cc.tween(this.node).to(a, {
      position: e
    }, {
      easing: c
    }), cc.tween(this.node).to(a, {
      scale: f
    }, {
      easing: u
    })).call(function () {
      null == o || o();
      null == n || n();
      r.node.destroy();
    }).start();
  }
}
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
export enum EBoxBarItemState {
  Node = 0,
  Normal = 1,
  HighLight = 2,
  Completed = 3,
}
export enum EBoxBarPos {
  First = 0,
  Middle = 1,
  Last = 2,
}
@mj.class
export default class BoxBarItem extends BaseUI {
  nodeIndex = -1;
  _barBg = null;
  _bar = null;
  _highLight = null;
  _barNode = null;
  pathIndex = EBoxBarPos.Middle;
  static prefabUrl = "prefabs/boxReward/BoxBarItem";
  get barBg() {
    if (this._barBg) return this._barBg;
    this._barBg = cc.find("n" + this.pathIndex + "/bg", this.node);
    return this._barBg;
  }
  get bar() {
    if (this._bar) return this._bar;
    this._bar = cc.find("n" + this.pathIndex + "/bar", this.node);
    return this._bar;
  }
  get highLight() {
    if (this._highLight) return this._highLight;
    this._highLight = cc.find("n" + this.pathIndex + "/light", this.node);
    return this._highLight;
  }
  get barNode() {
    if (this._barNode) return this._barNode;
    this._barNode = cc.find("n" + this.pathIndex, this.node);
    return this._barNode;
  }
  onLoad() {
    super.onLoad.call(this);
    this.setState(EBoxBarItemState.Normal);
  }
  setPathIndex(t) {
    this.pathIndex = t;
  }
  setState(t) {
    if (cc.isValid(this.barNode) && cc.isValid(this.bar) && cc.isValid(this.highLight) && cc.isValid(this.barBg)) {
      cc.Tween.stopAllByTarget(this.bar);
      cc.Tween.stopAllByTarget(this.highLight);
      switch (t) {
        case EBoxBarItemState.Normal:
          this.barNode.active = true;
          this.barBg.active = true;
          this.bar.active = false;
          this.highLight.active = false;
          break;
        case EBoxBarItemState.HighLight:
          this.playHighLight();
          break;
        case EBoxBarItemState.Completed:
          this.barNode.active = true;
          this.bar.active = true;
          this.highLight.active = false;
      }
    }
  }
  playHighLight() {
    var t = this;
    if (cc.isValid(this.bar) && cc.isValid(this.highLight)) {
      this.barNode.active = true;
      this.bar.active = true;
      this.highLight.active = true;
      this.bar.setScale(0.2, 1);
      this.highLight.setScale(0.2, 1);
      this.highLight.opacity = 0;
      var e = cc.tween().to(0.17, {
          scaleX: 1.05
        }, {
          easing: cc.easing.quadOut
        }).to(0.13, {
          scaleX: 1
        }, {
          easing: cc.easing.quadIn
        }),
        i = cc.tween().to(0.13, {
          opacity: 255
        }, {
          easing: cc.easing.quadOut
        }).to(0.57, {
          opacity: 0
        }, {
          easing: cc.easing.sineOut
        }).call(function () {
          t.setState(EBoxBarItemState.Completed);
        });
      e.clone(this.bar).start();
      cc.tween(this.highLight).parallel(e.clone(), i.clone()).start();
    }
  }
}
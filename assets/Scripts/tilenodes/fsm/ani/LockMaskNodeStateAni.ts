import { NodeStateAniBase } from '../../../base/NodeStateAniBase';
export class LockMaskNodeStateAni extends NodeStateAniBase {
  _duration = 0.3;
  _delay = 0.7;
  _imgMask = null;
  _imgName = "imgMaskFadeOut";
  _baseTileNode = null;
  constructor(t, o, n = 0.7) {
    super(t, "lockMask");
    this._baseTileNode = o;
    this._delay = "number" == typeof n ? n : 0.7;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._imgMask = this.createLockBg(this._baseTileNode);
      if (this._imgMask && cc.isValid(this._imgMask)) {
        if (this._currentTween) {
          this._currentTween.stop();
          this.removeImg();
        }
        this._imgMask.active = true;
        this._imgMask.opacity = 255;
        cc.Tween.stopAllByTarget(this._imgMask);
        if (this._delay < 0) {
          this.onEnterEnd(t);
        } else {
          this._currentTween = cc.tween(this._imgMask).delay(this._delay).to(this._duration, {
            opacity: 0
          }).call(function () {
            o.removeImg();
            o.onEnterEnd(t);
          }).start();
        }
      } else this.onEnterEnd(t);
    } else this.onEnterEnd(t);
  }
  createLockBg(e) {
    var t = null;
    if (cc.isValid(e.tileNode)) {
      var o = e.tileNode.getChildByName(this._imgName);
      o && (t = o);
    }
    t || (t = cc.instantiate(e.imgLockBg));
    t.setParent(e.tileNode);
    t.zIndex = e.imgLockBg.zIndex;
    var n = e.imgLockBg.parent.convertToWorldSpaceAR(e.imgLockBg.getPosition()),
      i = t.parent.convertToNodeSpaceAR(n);
    t.setPosition(i);
    t.name = this._imgName;
    return t;
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.removeImg();
    this.onExitEnd(t);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    if (cc.isValid(this._node)) {
      var o = this._imgMask;
      if (o && cc.isValid(o)) {
        o.active = true;
        o.opacity = 255;
      }
    }
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.removeImg();
  }
  applyImmediate() {
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.removeImg();
  }
  reset() {
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.removeImg();
    if (this._onEnteredCallBack) {
      this._onEnteredCallBack();
      this._onEnteredCallBack = void 0;
    }
  }
  removeImg() {
    if (this._imgMask && cc.isValid(this._imgMask)) {
      cc.Tween.stopAllByTarget(this._imgMask);
      this._imgMask.destroy();
      this._imgMask = null;
    }
  }
  forceHide() {
    if (this._imgMask && cc.isValid(this._imgMask)) {
      cc.Tween.stopAllByTarget(this._imgMask);
      this._imgMask.opacity = 0;
      this._imgMask.active = false;
    }
  }
  forceShow() {
    if (this._imgMask && cc.isValid(this._imgMask)) {
      cc.Tween.stopAllByTarget(this._imgMask);
      this._imgMask.active = true;
      this._imgMask.opacity = 255;
    }
  }
}
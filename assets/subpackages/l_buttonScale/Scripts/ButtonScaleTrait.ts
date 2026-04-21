import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ButtonScaleTrait")
export default class ButtonScaleTrait extends Trait {
  static traitKey = "ButtonScale";
  onLoad() {
    super.onLoad.call(this);
    var o = cc.Button.prototype._onTouchMove,
      e = cc.Button.prototype._onMouseMoveIn,
      n = cc.Button.prototype._onMouseMoveOut;
    cc.Button.prototype._onTouchMove = function (t) {
      this.transition !== cc.Button.Transition.SCALE && o.call(this, t);
    };
    cc.Button.prototype._onMouseMoveIn = function (t) {
      this.transition !== cc.Button.Transition.SCALE && e.call(this, t);
    };
    cc.Button.prototype._onMouseMoveOut = function (t) {
      this.transition !== cc.Button.Transition.SCALE && n.call(this, t);
    };
  }
}
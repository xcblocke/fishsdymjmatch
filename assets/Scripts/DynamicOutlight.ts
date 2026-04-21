import DynamicEffect from './DynamicEffect';
import Outlight from './Outlight';
const {
  ccclass,
  executeInEditMode,
  property
} = cc._decorator;
@ccclass
@executeInEditMode
export default class DynamicOutlight extends DynamicEffect {
  srcNode = null;
  start() {
    super.start.call(this);
    var t = this.node.getComponent(Outlight);
    t || (t = this.node.addComponent(Outlight));
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
  }
}
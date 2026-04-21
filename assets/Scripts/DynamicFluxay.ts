import DynamicEffect from './DynamicEffect';
import FluxayEffect from './FluxayEffect';
const {
  ccclass,
  executeInEditMode,
  property
} = cc._decorator;
@ccclass
@executeInEditMode
export default class DynamicFluxay extends DynamicEffect {
  srcNode = null;
  start() {
    super.start.call(this);
    var t = this.node.getComponent(FluxayEffect);
    t || (t = this.node.addComponent(FluxayEffect));
  }
  onDestroy() {}
}
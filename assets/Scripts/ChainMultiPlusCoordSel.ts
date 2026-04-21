import { ChainMultiCoordSel } from './ChainMultiCoordSel';
export class ChainMultiPlusCoordSel extends ChainMultiCoordSel {
  calculatePriority(t, o, n) {
    return super.calculatePriority.call(this, t, o, n);
  }
}
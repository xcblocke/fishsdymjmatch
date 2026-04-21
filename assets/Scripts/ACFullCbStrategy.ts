import FullComboItem from './items/FullComboItem';
import { AllClearStrategyRegistry } from './AllClearStrategyRegistry';
import VibrateManager, { EVibrateStrength } from './gamePlay/base/vibrate/VibrateManager';
export class ACFullCbStrategy {
  getName() {
    return "ACFullCbStrategy";
  }
  play(e, t) {
    FullComboItem.createUI().then(function (e) {
      if (e && cc.isValid(e)) {
        e.setParent(t.effectNode);
        e.position = cc.v3(0, 0, 0);
        VibrateManager.executeVibrate(EVibrateStrength.Strong);
        var o = e.getComponent(FullComboItem);
        if (o) o.startPlayAni(e, function () {}, function () {
          t.onComplete();
        });else {
          e.destroy();
          t.onComplete();
        }
      } else t.onComplete();
    });
  }
}
AllClearStrategyRegistry.register(1, new ACFullCbStrategy());
import BaseEffect from '../../../Scripts/BaseEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
export class ClickCoverLockTipEffect extends BaseEffect {
  _name = BehaviorsMapping.ClickCoverLockTip;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(e) {
    super(e);
    this._data = e;
  }
}
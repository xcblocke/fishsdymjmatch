import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FlowerColdStartChangeTrait")
export default class FlowerColdStartChangeTrait extends Trait {
  _config = {};
  _cdMilliseconds = 0;
  _shouldChange = false;
  static traitKey = "FlowerColdStartChange";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
    "number" == typeof this._config.cdHours && this._config.cdHours > 0 && (this._cdMilliseconds = 3600000 * this._config.cdHours);
    this.localData.lastChangeTime || (this.localData.lastChangeTime = Date.now());
    this.checkCDTime();
  }
  checkCDTime() {
    var e = Date.now(),
      t = this.localData.lastChangeTime;
    if (e - t >= this._cdMilliseconds) {
      this._shouldChange = true;
      this._cdMilliseconds;
    } else {
      this._shouldChange = false;
      ((this._cdMilliseconds - (e - t)) / 3600000).toFixed(1);
    }
    this.localData.lastChangeTime = e;
  }
  onFlowerCS_shouldKeep(e, t) {
    if (this._shouldChange) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      t();
    }
  }
}
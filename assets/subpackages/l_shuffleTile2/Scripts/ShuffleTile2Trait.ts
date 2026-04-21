import { HolderPriorityShuffler } from '../../../Scripts/HolderPriorityShuffler';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ShuffleTile2Trait")
export default class ShuffleTile2Trait extends Trait {
  _options = {
    holderPickMode: "all",
    includeBack: false
  };
  static traitKey = "ShuffleTile2";
  get _cfg() {
    var t;
    return null !== (t = this._traitData) && void 0 !== t ? t : {};
  }
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._options = {
      holderPickMode: null !== (e = this._cfg.holderPickMode) && void 0 !== e ? e : "all",
      includeBack: null !== (r = this._cfg.includeBack) && void 0 !== r && r
    };
  }
  onTile2ShuffleMod_compute(t, e) {
    var r = t.ins;
    new HolderPriorityShuffler(r._context).apply(this._options);
    e();
  }
}
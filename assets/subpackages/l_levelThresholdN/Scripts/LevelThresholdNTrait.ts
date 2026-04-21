import ExtractTrait from '../../../Scripts/ExtractTrait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("LevelThresholdNTrait")
export default class LevelThresholdNTrait extends ExtractTrait {
  _threshold = 74;
  _coefficient = 0.9;
  static traitKey = "LevelThresholdN";
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    this._threshold = null !== (t = this._traitData.threshold) && void 0 !== t ? t : 74;
    this._coefficient = null !== (r = this._traitData.coefficient) && void 0 !== r ? r : 0.9;
  }
  onExtNormLv_getAdNengRU(e, t) {
    if (this.checkGameMode()) {
      if (null != e.args[0]) {
        var r = UserModel.getInstance(),
          o = r.getCurrentGameType(),
          i = r.getGameDataByGameType(o);
        if ((i ? i.getCurrentLevelId() : 0) <= this._threshold) t();else {
          var n = this._coefficient,
            a = e.args.length >= 2 ? e.args[1] : null;
          if (a && Array.isArray(a)) {
            a.push(n);
            t();
          } else {
            e.args[1] = [n];
            t();
          }
        }
      } else t();
    } else t();
  }
}
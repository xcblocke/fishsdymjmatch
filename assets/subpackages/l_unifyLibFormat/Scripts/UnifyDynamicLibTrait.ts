import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UnifyBaseTrait from './UnifyBaseTrait';
import UnifyUtils from './UnifyUtils';
@mj.trait
@mj.class("UnifyDynamicLibTrait")
export default class UnifyDynamicLibTrait extends UnifyBaseTrait {
  static traitKey = "UnifyDynamicLib";
  getPath() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
  }
  onDCMgr_getLvPath(t, e) {
    var r = t.args[0];
    if (this.isSupportMode(r)) {
      var n = this.getPath();
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n.map(function (t) {
          return [t[0], t[1]];
        })
      });
    } else e();
  }
  onDCMgr_parseLvData(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0],
        n = UnifyUtils.parseLevelData(r);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  onDCMgr_setCurLvData(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0];
      if (r) {
        var n = ExtractTool.getCurrentGameType(),
          i = UserModel.getInstance().getGameDataByGameType(n).getLevelId();
        this.cacheCurLvData(n, i, r);
      }
      e();
    } else e();
  }
}
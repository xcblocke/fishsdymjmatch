import Trait from '../../../Scripts/framework/trait/Trait';
import ExtractStatic from '../../../Scripts/core/extractQuestion/ExtractStatic';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ExtractNormalLevels from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import DynamicCurve from '../../../Scripts/types/DynamicCurve';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("PureRandomExtractTrait")
export default class PureRandomExtractTrait extends Trait {
  static traitKey = "PureRandomExtract";
  onLoad() {
    super.onLoad.call(this);
  }
  onExtNormLv_getContent(t, r) {
    new Date().getTime();
    var e = ExtractNormalLevels.getInstance().getRandomContent();
    if (e) {
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else {
      r();
    }
  }
  onExtractTool_upCapability(t, r) {
    r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: null
    });
  }
  onExtractStatic_getContent(t, r) {
    var e = ExtractStatic.getInstance().getRandomContent();
    if (e) {
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else {
      r();
    }
  }
  onDCMgr_getCont(t, r) {
    var e = UserModel.getInstance().getCurrentGameType(),
      n = new Promise(function (t, r) {
        DynamicCurve.instance.getRandomContent(e).then(function (e) {
          if (e) {
            t(e);
          } else {
            r(new Error("动态纯随机抽题失败"));
          }
        }).catch(function (t) {
          console.error("[关卡抽取 随机抽题] 动态纯随机抽题异常: " + t.message);
          r(t);
        });
      });
    r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: n
    });
  }
}
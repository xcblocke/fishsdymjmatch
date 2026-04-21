import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UnifyBaseTrait from './UnifyBaseTrait';
import UnifyUtils from './UnifyUtils';
@mj.trait
@mj.class("UnifyStaticLibTrait")
export default class UnifyStaticLibTrait extends UnifyBaseTrait {
  levelData = [];
  initSuccess = false;
  libEnabled = false;
  static traitKey = "UnifyStaticLib";
  getPath() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
  }
  isLoaded() {
    return this.levelData && this.levelData.length > 0;
  }
  onLoginM_enterGame(t, e) {
    this.initData();
    e();
  }
  onExtractTool_initOther(t, e) {
    this.initData();
    e();
  }
  initData() {
    var t = this;
    this.initSuccess || this.loadLevelData().then(function (e) {
      t.initSuccess = e;
    });
  }
  loadLevelData() {
    var t = this,
      e = this.getPath();
    return new Promise(function (r) {
      UnifyUtils.loadLibraries(e.map(function (t) {
        return {
          path: t[0],
          bundle: t[1],
          timeout: t[2]
        };
      })).then(function (e) {
        var n = e.allData,
          i = e.failCount;
        if (n) {
          var a = UnifyUtils.parseLevelData(n);
          if (a.length > t.levelData.length) {
            t.setLevelCaches("static", a);
            t.levelData = a.map(function (t) {
              return t.content;
            });
          }
        }
        r(0 === i);
      }).catch(function () {
        r(false);
      });
    });
  }
  onExtractTool_canUseStatic(t, e) {
    if (this.checkGameMode()) {
      if (this.isLoaded()) {
        this.libEnabled || (this.libEnabled = true);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      } else e();
    } else e();
  }
  onExtractStatic_getLvData(t, e) {
    if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.levelData
      });
    } else {
      e();
    }
  }
  onExtractStatic_getMaxLvs(t, e) {
    if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.levelData.length
      });
    } else {
      e();
    }
  }
  onExtractStatic_setCurLvDt(t, e) {
    if (this.checkGameMode()) {
      if (this.isLoaded()) {
        if (this.libEnabled) {
          var r = t.args[0];
          if (null != r) {
            var n = this.getLevelByArrayIndex("static", r);
            if (n) {
              var i = ExtractTool.getCurrentGameType(),
                a = UserModel.getInstance().getGameDataByGameType(i).getLevelId();
              this.cacheCurLvData(i, a, n);
            }
          }
          e();
        } else e();
      } else e();
    } else e();
  }
}
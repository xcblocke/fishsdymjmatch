import ExtractTrait from '../../../Scripts/ExtractTrait';
import ExtractNormalLevels, { ExtractDimension } from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { resManager } from '../../../Scripts/framework/manager/ResManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("DeadEndReExtractTrait")
export default class DeadEndReExtractTrait extends ExtractTrait {
  static traitKey = "DeadEndReExtract";
  static _isDeathReplay = false;
  static _modifiedLevelName = "";
  onLoad() {
    super.onLoad.call(this);
  }
  modifyLevelName(e) {
    var t = e.split("_");
    if (t.length >= 4) {
      var r = parseInt(t[2]);
      r = Math.max(r - 1, 1);
      t[2] = r.toString().padStart(2, "0");
      t[3] = "04";
    }
    return t.join("_");
  }
  onIptRestart_excute(e, t) {
    var a = e.args[0];
    if (this.checkGameMode()) {
      if (0 === a.dieResult && "fail" === a.callFrom) {
        DeadEndReExtractTrait._isDeathReplay = true;
      } else {
        DeadEndReExtractTrait._isDeathReplay = false;
      }
      t();
    } else t();
  }
  onMainGameCtrl_nextLv(e, t) {
    var a = e.args[0];
    if (this.checkGameMode()) {
      if (a && DeadEndReExtractTrait._isDeathReplay) {
        DeadEndReExtractTrait._isDeathReplay = false;
        var n = UserModel.getInstance().getCurrentGameType(),
          i = UserModel.getInstance().getGameDataByGameType(n);
        if (i) {
          var o = i.getLevelName();
          if (o) {
            DeadEndReExtractTrait._modifiedLevelName = this.modifyLevelName(o);
            i.saveLevelData("");
            e.args[0] = false;
            t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
  onExtNormLv_getContent(e, t) {
    if (this.checkGameMode()) {
      var a = DeadEndReExtractTrait._modifiedLevelName;
      if (a) {
        DeadEndReExtractTrait._modifiedLevelName = "";
        var n = e.args[0],
          i = ExtractNormalLevels.getInstance(),
          o = this.extractWithModifiedName(i, a, n);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: o
        });
      } else t();
    } else t();
  }
  extractWithModifiedName(e, t, r) {
    new Date().getTime();
    var a = e.getAllNamesData();
    if (!a || 0 === a.length) return Promise.reject(new Error("表名数据为空"));
    var n = ExtractDimension.getLevelName(a, t),
      i = ExtractDimension.getData(),
      s = (null == i ? void 0 : i.diffcult) || 50,
      l = e.getByteContentByType(n, s);
    if (!l) return Promise.reject(new Error("获取关卡内容失败"));
    var u = l.fileName.split("_")[0] + "_" + l.fileName.split("_")[1],
      p = l.contentByteData,
      d = e.get16BitValue(p.split(",")[0].trim()),
      m = e.getBoardConfig(),
      v = m.get(u),
      y = function y(t) {
        var r = "";
        if (t) for (var a = 0; a < t.length; a++) if (Number(t[a].Index) === Number(d)) {
          r = (t[a].Content + "|" + p).toString();
          break;
        }
        r || (r = e.getDouDiData());
        new Date().getTime();
        return [r, l.contentDiff, l.index, l.fileName, l.fileName.split("_")[0]];
      };
    if (v) return Promise.resolve(y(v));
    var _ = __read(e.getJsonPath(u, r.gameType, r.journeyType), 2),
      g = _[0],
      h = _[1];
    return resManager.loadRes(g + u, cc.JsonAsset, h).then(function (e) {
      var t = e;
      if (t) {
        v = t.json;
        m.set(u, v);
        t.decRef();
      }
      return y(v);
    }).catch(function () {
      return y(null);
    });
  }
}
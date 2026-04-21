import { ExtractDimension } from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UnifyBaseTrait from './UnifyBaseTrait';
import UnifyUtils from './UnifyUtils';
@mj.trait
@mj.class("UnifyAbilityLibTrait")
export default class UnifyAbilityLibTrait extends UnifyBaseTrait {
  static traitKey = "UnifyAbilityLib";
  getPath() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/ability001", "l_unifyLibFormat", -1], ["config/ability001", "r_unifyLibFormat", 100]];
  }
  onExtNormLv_initData(t, e) {
    if (this.checkGameMode()) {
      var r = this.initData(t.ins);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
  initData(t) {
    var e = this,
      r = this.getPath();
    r.length;
    return new Promise(function (n) {
      UnifyUtils.loadLibraries(r.map(function (t) {
        return {
          path: t[0],
          bundle: t[1],
          timeout: t[2]
        };
      })).then(function (r) {
        var i = r.allData,
          a = r.failCount;
        if (i) {
          var o = t.getCacheKey();
          t.setAllNamesData(o, i.dimensions);
          var l = UnifyUtils.parseLevelData(i);
          e.setLevelCaches(o, l);
          t.setOriginConfigData(o, i.config);
          var c = t.processConfigData(i.config);
          t.setConfigData(o, c);
        }
        n(0 === a);
      }).catch(function () {
        n(false);
      });
    });
  }
  onExtNormLv_getAllIdxInTbl(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0],
        n = this.getAllIndexesInTable(t.ins, r);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  getAllIndexesInTable(t, e) {
    if (!t.getAllNamesData().includes(e)) return [];
    var r = this.getLevelCaches(t.getCacheKey());
    return null === r ? [] : r.filter(function (t) {
      return t.dimension === e;
    }).map(function (t) {
      return t.index;
    });
  }
  onExtNormLv_getContent(t, e) {
    if (this.checkGameMode()) {
      var r = this.getContent(t.ins, t.args[0]);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
  getContent(t, e) {
    try {
      var r = t.extractDimension(e),
        n = ExtractDimension.getData(),
        i = this.getContentByDifficulty(t, r, n.diffcult);
      if (!i) return Promise.resolve([t.getDouDiData(), 55, "兜底索引", "兜底表名", "07"]);
      this.cacheCurLvData(e.gameType, e.levelID, i);
      return Promise.resolve([i.content, i.difficulty, i.index.toString(), r, r.split("_")[0]]);
    } catch (e) {
      console.error("[UnifyAbilityLib] 能力值抽题异常: " + (null == e ? void 0 : e.message));
      return Promise.resolve([t.getDouDiData(), 55, "兜底索引", "兜底表名", "07"]);
    }
  }
  getContentByDifficulty(t, e, r) {
    var n,
      i,
      o = ExtractDimension.getData(),
      c = t.getAllNamesData(),
      u = o.historyIndex || [],
      f = this.getLevelCaches(t.getCacheKey());
    if (null === f) return null;
    if (!c.includes(e)) return null;
    var p = Number.MAX_VALUE,
      y = null;
    try {
      for (var h = __values(f), d = h.next(); !d.done; d = h.next()) {
        var v = d.value;
        if (v.dimension === e && Math.abs(v.difficulty - r) < p && !u.includes(v.index)) {
          p = Math.abs(v.difficulty - r);
          y = Object.assign({}, v);
        }
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        d && !d.done && (i = h.return) && i.call(h);
      } finally {
        if (n) throw n.error;
      }
    }
    if (!y) return null;
    u.push(y.index);
    u.length > 100 && u.splice(0, 1);
    o.historyIndex = u;
    ExtractDimension.saveData(o);
    return y;
  }
  onExtNormLv_getContByTblIdx(t, e) {
    if (this.checkGameMode()) {
      var r = __read(t.args, 2),
        n = r[0],
        i = r[1],
        a = this.getContentByTableAndIndex(t.ins, n, i);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else e();
  }
  getContentByTableAndIndex(t, e, r) {
    var n = this.getLevelCaches(t.getCacheKey());
    if (null === n) return Promise.resolve(null);
    var i = n.find(function (t) {
      return t.dimension === e && t.index === r;
    });
    if (!i) return Promise.resolve(null);
    var a = e.split("_")[0] || "random",
      o = ExtractTool.getCurrentGameType(),
      l = UserModel.getInstance().getGameDataByGameType(o).getLevelId();
    this.cacheCurLvData(o, l, i);
    return Promise.resolve([i.content, i.difficulty, i.index.toString(), e, a]);
  }
}
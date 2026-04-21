import ExtractTrait from '../../../Scripts/ExtractTrait';
export default class UnifyBaseTrait extends ExtractTrait {
  levelCaches = new Map();
  static traitKey = "UnifyBase";
  setLevelCaches(t, e) {
    this.levelCaches.set(t, e);
  }
  getLevelCaches(t) {
    return this.levelCaches.get(t) || null;
  }
  cacheCurLvData(t, e, r) {
    var n = "" + t;
    this.localData[n] = Object.assign(Object.assign({}, r), {
      levelId: e
    });
  }
  getCurLvData(t, e) {
    var r = "" + t,
      n = this.localData[r];
    return null == n || "" === n ? null : (null == n ? void 0 : n.levelId) !== e ? null : n;
  }
  getLevelByLibIndex(t, e) {
    var r = this.getLevelCaches(t);
    return null === r ? null : r.find(function (t) {
      return t.index === e;
    }) || null;
  }
  getLevelByArrayIndex(t, e) {
    var r = this.getLevelCaches(t);
    return null === r ? null : e < 0 || e >= r.length ? null : r[e];
  }
  onExtractTool_getSolvers(t, e) {
    if (this.checkGameMode()) {
      var r = __read(t.args, 2),
        n = r[0],
        i = r[1],
        a = this.getCurLvData(n, i);
      if (null !== a) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: null == a ? void 0 : a.solver
        });
      } else {
        e();
      }
    } else e();
  }
}
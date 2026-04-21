import Trait from '../../../Scripts/framework/trait/Trait';
var l = function l(r) {
  return null != r && ("string" != typeof r || 0 != r.length);
};
@mj.trait
@mj.class("RankPeriodExtStrategy")
export default class RankPeriodExtStrategyTrait extends Trait {
  allPeriodArray = [];
  static traitKey = "RankPeriodExtStrategy";
  static BUNDLE_NAME = "r_rankPeriodExtStrategy";
  constructor() {
    super();
    this.localData.curLoopPeriodArray = l(this.localData.curLoopPeriodArray) ? this.localData.curLoopPeriodArray : [];
  }
  initAllPeriodArray(r) {
    var t = this;
    this.allPeriodArray.length > 0 || r.forEach(function (r) {
      t.allPeriodArray.push(r.Period);
    });
  }
  onRankModel_getIdxByExc(r, t) {
    var e = r.ins.boardConfig;
    this.initAllPeriodArray(e);
    var o = r.args[0],
      a = this.getIdxByExclude(o);
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: a
    });
  }
  getIdxByExclude(r) {
    0 == this.localData.curLoopPeriodArray.length && (this.localData.curLoopPeriodArray = this.allPeriodArray.slice());
    for (var t = -1, e = 0; e < 100; e++) {
      var o = Math.floor(Math.random() * this.localData.curLoopPeriodArray.length),
        a = this.localData.curLoopPeriodArray[o];
      if (!r.includes(a)) {
        this.localData.curLoopPeriodArray.splice(o, 1);
        this.localData.curLoopPeriodArray = this.localData.curLoopPeriodArray;
        t = a;
        break;
      }
    }
    return t < 0 || !this.allPeriodArray.includes(t) ? 0 : this.allPeriodArray.indexOf(t);
  }
  onCardUtil_atlasPathBundle(r, t) {
    var o = r.args[0],
      a = mj.getClassByName("RankModel");
    if (a) {
      var i = a.getInstance().getCurBoardData();
      if (i && i.CollectThing == o) {
        if (i.Period <= 5) t();else {
          var n = "res/" + o;
          t({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: {
              path: n,
              bundleName: RankPeriodExtStrategyTrait.BUNDLE_NAME,
              fromAtlas: false
            }
          });
        }
      } else t();
    } else t();
  }
  onRankModel_getSameActCD(r, t) {
    t({
      returnVal: this.getSameActCD(),
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onRankModel_getLoopLen(r, t) {
    t({
      returnVal: this.getLoopLen(),
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  getSameActCD() {
    var r, t;
    return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.sameActTimesCD) && void 0 !== t ? t : 4;
  }
  getLoopLen() {
    var r, t;
    return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.loopLen) && void 0 !== t ? t : 10;
  }
}
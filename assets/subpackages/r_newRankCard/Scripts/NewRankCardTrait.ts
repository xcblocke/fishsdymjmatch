import Trait from '../../../Scripts/framework/trait/Trait';
enum n {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
  SIXTH = 6,
}
var s = function s(e) {
  return null != e && ("string" != typeof e || 0 != e.length);
};
@mj.trait
@mj.class("NewRankCardTrait")
export default class NewRankCardTrait extends Trait {
  _solutionType = n.SECOND;
  static traitKey = "NewRankCard";
  static BUNDLE_NAME = "r_newRankCard";
  get solutionType() {
    return null == this._traitData.solutionType ? n.SECOND : this._traitData.solutionType;
  }
  get replaceCardTimes() {
    return null == this._traitData.replaceCardTimes ? 2 : this._traitData.replaceCardTimes;
  }
  constructor() {
    super();
    this.localData.periodTimesArray = s(this.localData.periodTimesArray) ? this.localData.periodTimesArray : [0, 0, 0, 0, 0];
  }
  onRankModel_addCount(e, t) {
    t();
    var r = mj.getClassByName("RankModel");
    if (r) {
      var a = r.getInstance().getCurBoardData();
      if (a && !(a.Period > 5)) {
        var o = a.Period - 1;
        this.localData.periodTimesArray[o]++;
        this.localData.periodTimesArray = this.localData.periodTimesArray;
      }
    }
  }
  onCardUtil_atlasPathBundle(e, t) {
    var a = e.args[0],
      o = mj.getClassByName("RankModel");
    if (o) {
      var i = o.getInstance().getCurBoardData();
      if (i && i.CollectThing == a) {
        if (i.Period > 5) t();else {
          var l = true,
            s = i.Period,
            u = this.localData.periodTimesArray[s - 1];
          n.FIRST != this.solutionType && u < this.replaceCardTimes && (l = false);
          if (l) {
            n.FIRST, this.solutionType;
            t({
              returnType: TraitCallbackReturnType.return,
              isBreak: true,
              returnVal: {
                path: "res/" + a,
                bundleName: NewRankCardTrait.BUNDLE_NAME,
                fromAtlas: false
              }
            });
          } else t();
        }
      } else t();
    } else t();
  }
}
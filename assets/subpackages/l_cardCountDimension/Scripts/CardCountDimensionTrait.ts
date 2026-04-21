import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("CardCountDimensionTrait")
export default class CardCountDimensionTrait extends ExtractTrait {
  static traitKey = "CardCountDimension";
  onLoad() {
    var i, e, r, o, n, a, l, s, c, u, h, d, f, p, v, _, D, m, y, g;
    super.onLoad.call(this);
    this._config = {
      initValue: null !== (e = null === (i = this._traitData) || void 0 === i ? void 0 : i.initValue) && void 0 !== e ? e : 3,
      lowerThreshold: null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.lowerThreshold) && void 0 !== o ? o : 0.8,
      upperThreshold: null !== (a = null === (n = this._traitData) || void 0 === n ? void 0 : n.upperThreshold) && void 0 !== a ? a : 1.2,
      increaseStep: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.increaseStep) && void 0 !== s ? s : 1,
      decreaseStep: null !== (u = null === (c = this._traitData) || void 0 === c ? void 0 : c.decreaseStep) && void 0 !== u ? u : -1,
      normalStep: null !== (d = null === (h = this._traitData) || void 0 === h ? void 0 : h.normalStep) && void 0 !== d ? d : 0,
      consecutiveCount: null !== (p = null === (f = this._traitData) || void 0 === f ? void 0 : f.consecutiveCount) && void 0 !== p ? p : 2,
      startLevelIndex: null !== (_ = null === (v = this._traitData) || void 0 === v ? void 0 : v.startLevelIndex) && void 0 !== _ ? _ : 2,
      minValue: null !== (m = null === (D = this._traitData) || void 0 === D ? void 0 : D.minValue) && void 0 !== m ? m : 1,
      maxValue: null !== (g = null === (y = this._traitData) || void 0 === y ? void 0 : y.maxValue) && void 0 !== g ? g : 10
    };
    this.initDimensionData();
  }
  initDimensionData() {
    this.isLocalEmpty(this.localData.currDimensionVal) && (this.localData.currDimensionVal = this._config.initValue);
    this.isLocalEmpty(this.localData.thresholdDirectionList) && (this.localData.thresholdDirectionList = []);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  isThresholdDirectionListAllSame(t) {
    var i = this.localData.thresholdDirectionList;
    if (!i || i.length < t) return false;
    if (1 === t) return true;
    for (var e = i.length - t, r = i[e], o = e + 1; o < i.length; o++) if (i[o] !== r) return false;
    return true;
  }
  onExtNormLv_afCapUpd(t, i) {
    var e;
    if (this.checkGameMode()) {
      var r = null === (e = t.args) || void 0 === e ? void 0 : e[0];
      if (r) {
        r.expectTime, r.actualTime;
        var o = r.levelID,
          n = r.rt;
        if (o <= this._config.startLevelIndex) {
          this.localData.currDimensionVal = this._config.initValue;
          i();
        } else {
          var a, l;
          if (n < this._config.lowerThreshold) {
            a = 0;
            l = this._config.increaseStep;
          } else if (n > this._config.upperThreshold) {
            a = 1;
            l = this._config.decreaseStep;
          } else {
            a = 2;
            l = this._config.normalStep;
          }
          var s = this.localData.thresholdDirectionList || [];
          s.push(a);
          s.length > this._config.consecutiveCount && s.shift();
          this.localData.thresholdDirectionList = s;
          if (this.isThresholdDirectionListAllSame(this._config.consecutiveCount)) {
            var c = this.localData.currDimensionVal + l;
            c = Math.max(this._config.minValue, Math.min(c, this._config.maxValue));
            this.localData.currDimensionVal = c;
          }
          i();
        }
      } else i();
    } else i();
  }
  onExtNormLv_getTileDim(t, i) {
    var e;
    if (this.checkGameMode()) {
      var r = null !== (e = this.localData.currDimensionVal) && void 0 !== e ? e : this._config.initValue,
        o = r < 10 ? "0" + r : "" + r;
      i({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else i();
  }
  onExtNormLv_getLvPriority(t, i) {
    if (this.checkGameMode()) {
      i({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: [3, 2, 1, 4]
      });
    } else i();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankChaseParamsTrait")
export default class RankChaseParamsTrait extends Trait {
  static traitKey = "RankChaseParams";
  get gradCoef() {
    return null != this._traitData.gradCoef ? this._traitData.gradCoef : 0.05;
  }
  get addPointsTop() {
    return null != this._traitData.addPointsTop ? this._traitData.addPointsTop : {
      2: 1,
      4: 3,
      6: 3,
      8: 2,
      12: 1
    };
  }
  get chasingBotsMaxPoint() {
    return null != this._traitData.chasingBotsMaxPoint ? this._traitData.chasingBotsMaxPoint : 12;
  }
  onRkChasing2_baseCfg(t, e) {
    e();
    null != t.beforReturnVal && (t.beforReturnVal.gradCoef = this.gradCoef);
  }
  onRkChasing2_pointsCfg(t, e) {
    e();
    null != t.beforReturnVal && (t.beforReturnVal.addPointsTop = this.addPointsTop);
  }
  onRkChasing2_chasingCfg(t, e) {
    e();
    null != t.beforReturnVal && (t.beforReturnVal.chasingBotsMaxPoint = this.chasingBotsMaxPoint);
  }
}
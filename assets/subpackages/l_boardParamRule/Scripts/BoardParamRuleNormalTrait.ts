import BoardParamRuleEngine from '../../../Scripts/BoardParamRuleEngine';
import Trait from '../../../Scripts/framework/trait/Trait';
import BoardParamRuleTrait from './BoardParamRuleTrait';
@mj.trait
@mj.class("BoardParamRuleNormalTrait")
export default class BoardParamRuleNormalTrait extends Trait {
  static traitKey = "BoardParamRuleNormal";
  onLoginM_enterGame(t, e) {
    var r = BoardParamRuleEngine.getInstance(),
      a = BoardParamRuleTrait.extractGroupIds(this._traitData);
    r.addPlayerGroupIds(a);
    e();
  }
  initEvent() {
    var t = [{
      event: "LoginM_enterGame",
      type: 0
    }];
    this._traitData.events = t;
    this.registerEvent(t);
  }
}
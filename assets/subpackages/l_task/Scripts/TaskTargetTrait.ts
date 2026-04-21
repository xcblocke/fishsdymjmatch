import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TaskTargetTrait")
export default class TaskTargetTrait extends Trait {
  _config = {};
  static traitKey = "TaskTarget";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  onTaskModel_randomTask(t, e) {
    var a = t.beforReturnVal;
    if (a && 0 !== a.size && this.adjustTaskInfoMap(a)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: a
      });
    } else {
      e();
    }
  }
  adjustTaskInfoMap(t) {
    var e = this;
    if (!this._config.targetValue) return false;
    var a = 0;
    t.forEach(function (t, o) {
      var i = o.toString(),
        r = e._config.targetValue[i];
      if (!r) return false;
      if (!Array.isArray(r) || 3 !== r.length) return false;
      [...t.taskMax];
      t.taskMax = [...r];
      t.taskMin = [0, r[0], r[1]];
      a++;
    });
    return a > 0;
  }
}
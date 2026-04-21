import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TaskClearListTrait")
export default class TaskClearListTrait extends Trait {
  static traitKey = "TaskClearList";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskUtils_random(t, e) {
    var a, o;
    t.args[0] = null !== (o = null === (a = this._traitData) || void 0 === a ? void 0 : a.list) && void 0 !== o ? o : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BatchWriteTrait")
export default class BatchWriteTrait extends Trait {
  static traitKey = "BatchWrite";
  onLoad() {
    super.onLoad.call(this);
    cc.sys.localStorage.batchWrite = true;
  }
}
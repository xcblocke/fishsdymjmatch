import Model from '../../../Scripts/framework/data/Model';
@mj.class("GuideModel")
export default class GuideModel extends Model {
  constructor() {
    super();
    this.localData.inGuide = false;
    this.localData.guideStep = 0;
  }
}
import Model from './framework/data/Model';
@mj.class("MainGameModel")
export default class MainGameModel extends Model {
  constructor() {
    super();
    this.localData.version = "1.0.0";
  }
}
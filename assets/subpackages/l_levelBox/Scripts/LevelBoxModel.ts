import Model from '../../../Scripts/framework/data/Model';
import { ELevelBoxCondType } from './LevelBoxTypes';
@mj.class("LevelBoxModel")
export default class LevelBoxModel extends Model {
  constructor() {
    super();
    this.isLocalEmpty(this.localData.curType) && (this.localData.curType = ELevelBoxCondType.None);
    this.isLocalEmpty(this.localData.progress) && (this.localData.progress = 0);
    this.isLocalEmpty(this.localData.rewardCount) && (this.localData.rewardCount = 0);
    this.isLocalEmpty(this.localData.curBoxLimits) && (this.localData.curBoxLimits = []);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  @mj.traitEvent("LevelBoxMdl_setNewBox")
  setNewBox(t) {
    this.localData.curType = t;
    this.localData.progress = 0;
    this.localData.rewardCount++;
  }
  setProgress(t) {
    this.localData.progress = t;
  }
  addProgress() {
    this.localData.progress++;
  }
  getCurBox() {
    return this.localData.curType;
  }
  getProgress() {
    return this.localData.progress;
  }
  getRewardCount() {
    return this.localData.rewardCount;
  }
  getCurBoxLimits(t) {
    t && t.length > 0 && this.localData.curBoxLimits.length !== t.length && (this.localData.curBoxLimits = t);
    return this.localData.curBoxLimits;
  }
  setCurBoxLimits(t) {
    this.localData.curBoxLimits = t;
  }
}
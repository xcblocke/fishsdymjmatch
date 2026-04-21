export class TargetCollectedUtils {
  static getTargetCollectedResMap() {
    var e = new Map();
    e.set("Journey01", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
    e.set("Journey02", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
    return e;
  }
  @mj.traitEvent("TagColUtils_getRes")
  static getTargetCollectedRes(e) {
    var t = this.getTargetCollectedResMap();
    return t.has(e) ? t.get(e) : null;
  }
}
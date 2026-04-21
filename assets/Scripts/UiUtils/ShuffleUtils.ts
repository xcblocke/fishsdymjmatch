import BaseSpine from '../gamePlay/base/ui/BaseSpine';
export default class ShuffleUtils {
  @mj.traitEvent("ShuffUts_getPreTime")
  static getPrePlayTime() {
    return 0;
  }
  @mj.traitEvent("ShuffUts_playRAnim")
  static playRefreshAnimation(e, t, o) {
    if (e && e.gameView && e.gameView.nodeTopEffectRoot) {
      t || (t = "spine/shuffle/gameplay_refresh");
      var n = BaseSpine.create(t, "in", 1, null, true, o);
      n.node.parent = e.gameView.nodeTopEffectRoot;
      n.node.position = cc.v3(0, 0, 0);
    }
  }
  @mj.traitEvent("ShuffUts_startPlay")
  static onShuffleStayStartPlay() {}
}
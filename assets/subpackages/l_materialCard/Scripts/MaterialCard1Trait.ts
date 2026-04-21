import MaterialCardBaseTrait from './MaterialCardBaseTrait';
@mj.trait
@mj.class("MaterialCard1Trait")
export default class MaterialCard1Trait extends MaterialCardBaseTrait {
  static traitKey = "MaterialCard1";
  onLoad() {
    super.onLoad.call(this);
  }
  _getModeData(t) {
    var e;
    if (!this.localData[t]) {
      this.localData[t] = {
        hadInterAdLastRound: false
      };
      this.localData[t] = this.localData[t];
    }
    return null !== (e = this.localData[t]) && void 0 !== e ? e : {
      hadInterAdLastRound: false
    };
  }
  onAdMgr_interAdClose(t, e) {
    try {
      var a = this.getCurrentGameType();
      this._getModeData(a).hadInterAdLastRound = true;
      this.localData[a] = this.localData[a];
    } catch (t) {
      console.error("[" + MaterialCard1Trait.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onGsListener_onNewGame(t, e) {
    try {
      var a = this.getCurrentGameType();
      if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
        e();
        return;
      }
      var i = this._getModeData(a);
      if (i.hadInterAdLastRound) {
        this.switchToNextMaterialCard();
        i.hadInterAdLastRound = false;
        this.localData[a] = this.localData[a];
      }
    } catch (t) {
      console.error("[" + MaterialCard1Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
}
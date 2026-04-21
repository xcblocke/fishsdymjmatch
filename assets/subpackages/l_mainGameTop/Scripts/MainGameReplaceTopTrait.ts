import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MainGameReplaceTopTrait")
export default class MainGameReplaceTopTrait extends Trait {
  _skinKey = "MainGameReplaceTop_1";
  static traitKey = "MainGameReplaceTop";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGmVw_getUrl(e, t) {
    t();
  }
  onMainGmVw_initLayers(e, t) {
    var o = e.ins;
    if (o.gameType !== MjGameType.Classic) {
      this.applyTopSkinConfig(o);
      t();
    } else t();
  }
  @mj.traitEvent("MainGRTop_applyTSCfg")
  applyTopSkinConfig(e) {
    var t;
    if (e && e.topRootNode) {
      var o = DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", (null === (t = this._traitData.config) || void 0 === t ? void 0 : t.skinKey) || this._skinKey),
        r = e.topRootNode;
      o && 0 !== o.length && NodeSkinTool.parseConfigList(r, o, e.gameType, "nodeTop");
    }
  }
}
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ChangeMatchNumsPosTrait")
export default class ChangeMatchNumsPosTrait extends Trait {
  _skinKey = "ChangeMatchNumsPos";
  _isInitialized = false;
  static traitKey = "ChangeMatchNumsPos";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGRTop_applyTSCfg(t, e) {
    var o;
    this._isInitialized = true;
    var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
    this.applySkinConfig(i);
    e();
  }
  @mj.traitEvent("ChgMtchNmsPos_applyCfg")
  applySkinConfig(t) {
    var e, o, i, a, r;
    if (t && t.topRootNode) {
      var s = (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.skinKey) || this._skinKey,
        c = DataReader.getTypeList(ConfigType.mainGameTopSkin, "SkinKey", s);
      if (c && 0 !== c.length) {
        var d = t.topRootNode;
        NodeSkinTool.parseConfigList(d, c, t.gameType, "nodeTop");
        var v = UserModel.getInstance().getGameDataByGameType(MjGameType.Normal),
          y = null !== (r = null !== (i = null === (o = null == v ? void 0 : v.getCurrentLevelId) || void 0 === o ? void 0 : o.call(v)) && void 0 !== i ? i : null === (a = null == v ? void 0 : v.getLevelId) || void 0 === a ? void 0 : a.call(v)) && void 0 !== r ? r : null;
        if (!("number" == typeof y && y <= 1)) {
          var m = mj.getClassByName("MainGameTxtShowTrait"),
            g = null == m ? void 0 : m.getInstance();
          if (true === (null == g ? void 0 : g.eventEnabled)) {
            var h = d.getChildByName("labelCanMatchNum");
            if (h) {
              h.active = false;
              h.opacity = 0;
            }
          }
        }
      }
    }
  }
  onScoreItem_updScore(t, e) {
    var o, i;
    if (this._isInitialized) {
      var a = t.ins;
      if ((null === (o = t.args) || void 0 === o ? void 0 : o[2]) && a) {
        var r = null === (i = a.node) || void 0 === i ? void 0 : i.getChildByName("spin_combo");
        if (r && !r.active) {
          var n = r.getComponent(sp.Skeleton);
          n && GameUtils.playSpine(n, "init", true);
        }
      }
      e();
    } else e();
  }
}
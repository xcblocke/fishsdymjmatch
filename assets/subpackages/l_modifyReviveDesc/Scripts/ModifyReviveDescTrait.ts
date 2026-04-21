import I18NComponent from '../../../Scripts/component/I18NComponent';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ModifyReviveDescTrait")
export default class ModifyReviveDescTrait extends Trait {
  static traitKey = "ModifyReviveDesc";
  get descKey() {
    return null != this._traitData.descKey ? this._traitData.descKey : "TileMatch_Revive_Details_2";
  }
  get useBtnKey() {
    return null != this._traitData.useBtnKey ? this._traitData.useBtnKey : "TileMatch_Revive_Button_Yes_2";
  }
  onFailVw_onLoad(e, t) {
    var r = e.ins;
    r.node.getChildByName("content_node").getChildByName("desc").getComponent(I18NComponent).setTranslateId(this.descKey, "Use Shuffle to Revive!");
    r.node.getChildByName("content_node").getChildByName("btn_use").getChildByName("use").getComponent(I18NComponent).setTranslateId(this.useBtnKey, "Use");
    t();
  }
}
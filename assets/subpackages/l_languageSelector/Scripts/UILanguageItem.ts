import BaseCell from '../../../Scripts/base/ui/BaseCell';
import LanguageSelectorTrait from './LanguageSelectorTrait';
import { formatLanguageCodeToString } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export class UILanguageItem extends BaseCell {
  _selectNode = null;
  _normalNode = null;
  _labTextSelect = null;
  _labTextNormal = null;
  _onClick = null;
  _isSelected = false;
  static prefabUrl = "prefabs/ui/language/UILanguageItem";
  uiOnLoad() {
    var t, e;
    if (cc.isValid(this._cellUI)) {
      this._selectNode = this._cellUI.getChildByName("btn_selected");
      cc.isValid(this._selectNode) && (this._labTextSelect = null === (t = this._selectNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("btn_text"));
      this._normalNode = this._cellUI.getChildByName("btn_normal");
      cc.isValid(this._normalNode) && (this._labTextNormal = null === (e = this._normalNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("btn_text"));
      this.OnButtonClick(this._selectNode, this.onItemClick.bind(this));
      this.OnButtonClick(this._normalNode, this.onItemClick.bind(this));
    }
  }
  updateUI() {
    if (this._data) {
      this._data.nameKey && cc.isValid(this._labTextSelect) && (t = this._labTextSelect.getComponent(cc.Label)) && (t.string = this._data.name);
      if (this._data.nameKey && cc.isValid(this._labTextNormal)) {
        var t;
        (t = this._labTextNormal.getComponent(cc.Label)) && (t.string = this._data.name);
      }
      var e = LanguageSelectorTrait.getInstance();
      if (e) {
        var o = e.getCurrentLanguage(),
          n = this.checkIsSelected(o, this._data.code);
        this.setSelected(n);
      }
    }
  }
  @mj.traitEvent("LangSelUI_checkIsSel")
  checkIsSelected(t) {
    return formatLanguageCodeToString(this._data.code) === formatLanguageCodeToString(t);
  }
  setOnClick(t) {
    this._onClick = t;
  }
  onItemClick() {
    this._onClick && this._data && this._onClick(this._data.code);
  }
  setSelected(t) {
    if (cc.isValid(this._selectNode)) {
      this._isSelected = t;
      this._selectNode.active = this._isSelected;
    }
    cc.isValid(this._normalNode) && (this._normalNode.active = !this._isSelected);
  }
}
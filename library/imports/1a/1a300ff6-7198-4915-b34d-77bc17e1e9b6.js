"use strict";
cc._RF.push(module, '1a300/2cZhJFbNNd7wX4em2', 'UILanguageItem');
// subpackages/l_languageSelector/Scripts/UILanguageItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageItem = void 0;
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var LanguageSelectorTrait_1 = require("./LanguageSelectorTrait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var UILanguageItem = /** @class */ (function (_super) {
    __extends(UILanguageItem, _super);
    function UILanguageItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectNode = null;
        _this._normalNode = null;
        _this._labTextSelect = null;
        _this._labTextNormal = null;
        _this._onClick = null;
        _this._isSelected = false;
        return _this;
    }
    UILanguageItem.prototype.uiOnLoad = function () {
        var t, e;
        if (cc.isValid(this._cellUI)) {
            this._selectNode = this._cellUI.getChildByName("btn_selected");
            cc.isValid(this._selectNode) && (this._labTextSelect = null === (t = this._selectNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("btn_text"));
            this._normalNode = this._cellUI.getChildByName("btn_normal");
            cc.isValid(this._normalNode) && (this._labTextNormal = null === (e = this._normalNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("btn_text"));
            this.OnButtonClick(this._selectNode, this.onItemClick.bind(this));
            this.OnButtonClick(this._normalNode, this.onItemClick.bind(this));
        }
    };
    UILanguageItem.prototype.updateUI = function () {
        if (this._data) {
            this._data.nameKey && cc.isValid(this._labTextSelect) && (t = this._labTextSelect.getComponent(cc.Label)) && (t.string = this._data.name);
            if (this._data.nameKey && cc.isValid(this._labTextNormal)) {
                var t;
                (t = this._labTextNormal.getComponent(cc.Label)) && (t.string = this._data.name);
            }
            var e = LanguageSelectorTrait_1.default.getInstance();
            if (e) {
                var o = e.getCurrentLanguage(), n = this.checkIsSelected(o, this._data.code);
                this.setSelected(n);
            }
        }
    };
    UILanguageItem.prototype.checkIsSelected = function (t) {
        return CommonUtils_1.formatLanguageCodeToString(this._data.code) === CommonUtils_1.formatLanguageCodeToString(t);
    };
    UILanguageItem.prototype.setOnClick = function (t) {
        this._onClick = t;
    };
    UILanguageItem.prototype.onItemClick = function () {
        this._onClick && this._data && this._onClick(this._data.code);
    };
    UILanguageItem.prototype.setSelected = function (t) {
        if (cc.isValid(this._selectNode)) {
            this._isSelected = t;
            this._selectNode.active = this._isSelected;
        }
        cc.isValid(this._normalNode) && (this._normalNode.active = !this._isSelected);
    };
    UILanguageItem.prefabUrl = "prefabs/ui/language/UILanguageItem";
    __decorate([
        mj.traitEvent("LangSelUI_checkIsSel")
    ], UILanguageItem.prototype, "checkIsSelected", null);
    UILanguageItem = __decorate([
        mj.class
    ], UILanguageItem);
    return UILanguageItem;
}(BaseCell_1.default));
exports.UILanguageItem = UILanguageItem;

cc._RF.pop();
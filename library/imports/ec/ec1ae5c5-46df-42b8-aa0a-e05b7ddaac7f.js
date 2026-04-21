"use strict";
cc._RF.push(module, 'ec1aeXFRt9CuKoK4Ft92qx/', 'UILanguageSwitch');
// subpackages/l_languageSelector/Scripts/UILanguageSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageSwitch = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var LanguageSelectorTrait_1 = require("./LanguageSelectorTrait");
var UILanguageSwitch = /** @class */ (function (_super) {
    __extends(UILanguageSwitch, _super);
    function UILanguageSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buttonNode = null;
        return _this;
    }
    UILanguageSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    UILanguageSwitch.prototype.initUI = function () {
        cc.isValid(this.node) && (this._buttonNode = this.node.getChildByName("btn_rect"));
    };
    UILanguageSwitch.prototype.initEvents = function () {
        if (this._buttonNode) {
            this.OnButtonClick(this._buttonNode, this.onButtonClick.bind(this));
            this.isLargeHitArea() && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
        }
    };
    UILanguageSwitch.prototype.onButtonClick = function () {
        var t = LanguageSelectorTrait_1.default.getInstance();
        t && t.showLanguageSelector();
    };
    UILanguageSwitch.prototype.isLargeHitArea = function () {
        return false;
    };
    UILanguageSwitch.prefabUrl = "prefabs/ui/settingsDialog/UILanguageSwitch";
    __decorate([
        mj.traitEvent("UILangSwitch_isLarge")
    ], UILanguageSwitch.prototype, "isLargeHitArea", null);
    UILanguageSwitch = __decorate([
        mj.class
    ], UILanguageSwitch);
    return UILanguageSwitch;
}(BaseUI_1.default));
exports.UILanguageSwitch = UILanguageSwitch;

cc._RF.pop();
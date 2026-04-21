"use strict";
cc._RF.push(module, '4d58aBp4lZGGK5pL06+lYB6', 'UIContactUsButton');
// subpackages/l_contact_us/Scripts/UIContactUsButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ContactUsButtonTrait_1 = require("./ContactUsButtonTrait");
var UIContactUsButton = /** @class */ (function (_super) {
    __extends(UIContactUsButton, _super);
    function UIContactUsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIContactUsButton.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.getChildByName("btn_rect"), this.onContactUsBtnClick.bind(this));
        this.isLargeHitArea() && this.OnButtonClick(this.node, this.onContactUsBtnClick.bind(this));
    };
    UIContactUsButton.prototype.onContactUsBtnClick = function () {
        ContactUsButtonTrait_1.default.getInstance().onContactUsBtnClick();
    };
    UIContactUsButton.prototype.isLargeHitArea = function () {
        return false;
    };
    UIContactUsButton.prefabUrl = "prefabs/ui/settingsDialog/UIContactUsButton";
    __decorate([
        mj.traitEvent("UIContactUs_isLarge")
    ], UIContactUsButton.prototype, "isLargeHitArea", null);
    UIContactUsButton = __decorate([
        mj.class
    ], UIContactUsButton);
    return UIContactUsButton;
}(BaseUI_1.default));
exports.default = UIContactUsButton;

cc._RF.pop();
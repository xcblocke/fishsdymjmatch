"use strict";
cc._RF.push(module, 'a505aNPkIxOUJTfXtz1qAwn', 'HallSettingBtn');
// subpackages/l_hallSetting/Scripts/HallSettingBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallSettingBtn = /** @class */ (function (_super) {
    __extends(HallSettingBtn, _super);
    function HallSettingBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallSettingBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallSettingBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Setting);
    };
    HallSettingBtn.prefabUrl = "prefabs/setting/HallSettingBtn";
    __decorate([
        mj.traitEvent("HallSetBtn_onLoad")
    ], HallSettingBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("HallSetBtn_onClick")
    ], HallSettingBtn.prototype, "onBtnClick", null);
    HallSettingBtn = __decorate([
        mj.class
    ], HallSettingBtn);
    return HallSettingBtn;
}(BaseUI_1.default));
exports.default = HallSettingBtn;

cc._RF.pop();
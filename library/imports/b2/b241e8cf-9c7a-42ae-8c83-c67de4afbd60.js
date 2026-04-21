"use strict";
cc._RF.push(module, 'b241ejPnHpCroyDxn3kr71g', 'UISettingBtnBack');
// subpackages/l_settingsDialog/Scripts/UISettingBtnBack.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UISettingBtnBack = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UISettingBtnBack = /** @class */ (function (_super) {
    __extends(UISettingBtnBack, _super);
    function UISettingBtnBack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UISettingBtnBack.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initEvents();
    };
    UISettingBtnBack.prototype.initEvents = function () {
        cc.isValid(this.node) && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
    };
    UISettingBtnBack.prototype.onButtonClick = function () {
        ControllerManager_1.default.getInstance().closeViewByName("UISettingsDialogController");
        var t = ControllerManager_1.default.getInstance().getTopSceneController();
        JumpManager_1.default.getInstance().jumpToHall();
        t && t.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
    };
    UISettingBtnBack.prefabUrl = "prefabs/ui/settingsDialog/UISettingBtnBack";
    __decorate([
        mj.traitEvent("UISetBtnBack_onLoad")
    ], UISettingBtnBack.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("UISetBtnBack_onBtnClk")
    ], UISettingBtnBack.prototype, "onButtonClick", null);
    UISettingBtnBack = __decorate([
        mj.class
    ], UISettingBtnBack);
    return UISettingBtnBack;
}(BaseUI_1.default));
exports.UISettingBtnBack = UISettingBtnBack;

cc._RF.pop();
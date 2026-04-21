"use strict";
cc._RF.push(module, 'e91b8G4FiVInaqTJaBpQPQD', 'UIBackHallBtn');
// subpackages/l_hall/Scripts/UIBackHallBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var UIBackHallBtn = /** @class */ (function (_super) {
    __extends(UIBackHallBtn, _super);
    function UIBackHallBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBackHallBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBackHallBtnClick.bind(this));
    };
    UIBackHallBtn.prototype.onBackHallBtnClick = function () {
        ControllerManager_1.default.getInstance().closeViewByName("UISettingsDialogController");
        JumpManager_1.default.getInstance().jumpToHall();
    };
    UIBackHallBtn.prefabUrl = "prefabs/hall/UIBackHallBtn";
    UIBackHallBtn = __decorate([
        mj.class
    ], UIBackHallBtn);
    return UIBackHallBtn;
}(BaseUI_1.default));
exports.default = UIBackHallBtn;

cc._RF.pop();
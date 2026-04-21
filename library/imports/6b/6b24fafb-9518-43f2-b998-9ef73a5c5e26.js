"use strict";
cc._RF.push(module, '6b24fr7lRhD8rmYnvc6XF4m', 'HallBadgeBtn');
// subpackages/l_badge/Scripts/HallBadgeBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallBadgeBtn = /** @class */ (function (_super) {
    __extends(HallBadgeBtn, _super);
    function HallBadgeBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallBadgeBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallBadgeBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.ExhibitionHall);
        ControllerManager_1.default.getInstance().pushViewByController("DailyCollController", {
            isShowAction: false,
            enterType: 3
        });
    };
    HallBadgeBtn.prefabUrl = "prefabs/badge/HallBadgeBtn";
    __decorate([
        mj.traitEvent("HallBadgeBtn_onLoad")
    ], HallBadgeBtn.prototype, "onLoad", null);
    HallBadgeBtn = __decorate([
        mj.class
    ], HallBadgeBtn);
    return HallBadgeBtn;
}(BaseUI_1.default));
exports.default = HallBadgeBtn;

cc._RF.pop();
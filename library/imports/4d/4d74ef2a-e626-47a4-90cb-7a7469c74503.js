"use strict";
cc._RF.push(module, '4d74e8q5iZHpJDLenRpx0UD', 'HallClassicBtn');
// subpackages/l_classic/Scripts/HallClassicBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var HallClassicBtn = /** @class */ (function (_super) {
    __extends(HallClassicBtn, _super);
    function HallClassicBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelId = 0;
        _this._bgBtnNode = null;
        return _this;
    }
    Object.defineProperty(HallClassicBtn.prototype, "BgBtnNode", {
        get: function () {
            return this._bgBtnNode;
        },
        enumerable: false,
        configurable: true
    });
    HallClassicBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallClassicBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallClassicBtn.prototype.updateUI = function () { };
    HallClassicBtn.prototype.onForceUpdate = function () { };
    HallClassicBtn.prototype.onBtnClick = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ClassicController");
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Classic, this.levelId);
    };
    HallClassicBtn.prefabUrl = "prefabs/hall/HallClassicBtn";
    HallClassicBtn.bundleName = "mainRes";
    __decorate([
        mj.component("BgBtn/Label", cc.Label)
    ], HallClassicBtn.prototype, "levelLabel", void 0);
    __decorate([
        mj.node("BgBtn")
    ], HallClassicBtn.prototype, "_bgBtnNode", void 0);
    __decorate([
        mj.traitEvent("ClassicBtn_updateUI")
    ], HallClassicBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("ClassicBtn_forceUpdate")
    ], HallClassicBtn.prototype, "onForceUpdate", null);
    HallClassicBtn = __decorate([
        mj.class
    ], HallClassicBtn);
    return HallClassicBtn;
}(BaseUI_1.default));
exports.default = HallClassicBtn;

cc._RF.pop();
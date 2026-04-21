"use strict";
cc._RF.push(module, '702efsR7xBK+I3kdOxaBowW', 'UIAutoClearSwitch');
// subpackages/l_autoClearSwitch/Scripts/UIAutoClearSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var AutoClearSwitchTrait_1 = require("./AutoClearSwitchTrait");
var UIAutoClearSwitch = /** @class */ (function (_super) {
    __extends(UIAutoClearSwitch, _super);
    function UIAutoClearSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNode = null;
        _this._offNode = null;
        return _this;
    }
    UIAutoClearSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._onNode = this.node.getChildByName("on");
        this._offNode = this.node.getChildByName("off");
        var e = this.node.getChildByName("btn_rect"), o = cc.isValid(e) ? e : this.node;
        this.OnButtonClick(o, this.onSwitchClick.bind(this));
        this.updateDisplay();
    };
    UIAutoClearSwitch.prototype.onSwitchClick = function () {
        var t = AutoClearSwitchTrait_1.default.getInstance();
        if (t) {
            t.toggleSwitch();
            this.updateDisplay();
        }
    };
    UIAutoClearSwitch.prototype.updateDisplay = function () {
        var t = AutoClearSwitchTrait_1.default.getInstance();
        if (t) {
            var e = t.isAutoClearEnabled();
            cc.isValid(this._onNode) && (this._onNode.active = e);
            cc.isValid(this._offNode) && (this._offNode.active = !e);
        }
    };
    UIAutoClearSwitch.prefabUrl = "prefabs/ui/settingsDialog/UIAutoClearSwitch";
    UIAutoClearSwitch = __decorate([
        mj.class
    ], UIAutoClearSwitch);
    return UIAutoClearSwitch;
}(BaseUI_1.default));
exports.default = UIAutoClearSwitch;

cc._RF.pop();
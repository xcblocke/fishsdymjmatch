"use strict";
cc._RF.push(module, '66ffbOGmrRHpLRkQsVFB7TJ', 'UIAutoShuffleSwitch');
// subpackages/r_dieAutoShuffle/Scripts/UIAutoShuffleSwitch.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DieAutoShuffleTrait_1 = require("./DieAutoShuffleTrait");
var UIAutoShuffleSwitch = /** @class */ (function (_super) {
    __extends(UIAutoShuffleSwitch, _super);
    function UIAutoShuffleSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNode = null;
        _this._offNode = null;
        return _this;
    }
    UIAutoShuffleSwitch.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._onNode = this.node.getChildByName("on");
        this._offNode = this.node.getChildByName("off");
        var e = this.node.getChildByName("btn_rect"), i = cc.isValid(e) ? e : this.node;
        this.OnButtonClick(i, this.onSwitchClick.bind(this));
        this.updateDisplay();
    };
    UIAutoShuffleSwitch.prototype.onSwitchClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        if (t) {
            t.toggleSwitch();
            this.updateDisplay();
        }
    };
    UIAutoShuffleSwitch.prototype.updateDisplay = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        if (t) {
            var e = t.isAutoShuffleEnabled();
            cc.isValid(this._onNode) && (this._onNode.active = e);
            cc.isValid(this._offNode) && (this._offNode.active = !e);
        }
    };
    UIAutoShuffleSwitch.prefabUrl = "prefabs/ui/settingsDialog/UIAutoShuffleSwitch";
    UIAutoShuffleSwitch = __decorate([
        mj.class
    ], UIAutoShuffleSwitch);
    return UIAutoShuffleSwitch;
}(BaseUI_1.default));
exports.default = UIAutoShuffleSwitch;

cc._RF.pop();
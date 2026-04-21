"use strict";
cc._RF.push(module, 'd3591m+o5ZHKrhvfCBPKQui', 'LangDlgCloseSettingsTrait');
// subpackages/l_langDlgCloseSettings/Scripts/LangDlgCloseSettingsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LangDlgCloseSettingsTrait = /** @class */ (function (_super) {
    __extends(LangDlgCloseSettingsTrait, _super);
    function LangDlgCloseSettingsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._previousSettingsController = null;
        return _this;
    }
    LangDlgCloseSettingsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LangDlgCloseSettingsTrait.prototype.onLangSelTrt_showLangSel = function (t, e) {
        this._previousSettingsController = null;
        var r = ControllerManager_1.default.getInstance(), o = r.getControByName("UISettingsDialogController");
        if (o) {
            this._previousSettingsController = "UISettingsDialogController";
            r.closeView(o);
            e();
        }
        else {
            var n = r.getControByName("UISettingsHomeController");
            if (n) {
                this._previousSettingsController = "UISettingsHomeController";
                r.closeView(n);
            }
            e();
        }
    };
    LangDlgCloseSettingsTrait.prototype.onUILangSelCtrl_UIDestroy = function (t, e) {
        if (this._previousSettingsController) {
            this.pushController(this._previousSettingsController, {});
            this._previousSettingsController = null;
        }
        e();
    };
    LangDlgCloseSettingsTrait.traitKey = "LangDlgCloseSettings";
    LangDlgCloseSettingsTrait = __decorate([
        mj.trait,
        mj.class("LangDlgCloseSettingsTrait")
    ], LangDlgCloseSettingsTrait);
    return LangDlgCloseSettingsTrait;
}(Trait_1.default));
exports.default = LangDlgCloseSettingsTrait;

cc._RF.pop();
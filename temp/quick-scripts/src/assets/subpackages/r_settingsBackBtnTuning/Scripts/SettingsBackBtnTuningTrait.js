"use strict";
cc._RF.push(module, '24818Ptj0ZITbQOdiq1g43S', 'SettingsBackBtnTuningTrait');
// subpackages/r_settingsBackBtnTuning/Scripts/SettingsBackBtnTuningTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var SettingsBackBtnTuningTrait = /** @class */ (function (_super) {
    __extends(SettingsBackBtnTuningTrait, _super);
    function SettingsBackBtnTuningTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsBackBtnTuningTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsBackBtnTuningTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        var r = t.ins;
        (null == r ? void 0 : r.addPreloadRes) && r.addPreloadRes("SpriteFrame", ["r_settingsBackBtnTuning:texture/com_btn_red"]);
        e();
    };
    SettingsBackBtnTuningTrait.prototype.onUISetBtnBack_onLoad = function (t, e) {
        var r = t.ins;
        if ((null == r ? void 0 : r.node) && cc.isValid(r.node)) {
            var n = r.node.getChildByName("bg");
            if (cc.isValid(n)) {
                BaseSprite_1.default.refreshWithNode(n, "texture/com_btn_red", false, true, "r_settingsBackBtnTuning");
                var i = n.getChildByName("btn_text");
                if (cc.isValid(i)) {
                    i.color = new cc.Color().fromHEX("#fce8e8");
                    I18NStrings_1.default.setText(i, "Exit", "Mahjong_InGameSettings_Exit");
                }
            }
            e();
        }
        else
            e();
    };
    SettingsBackBtnTuningTrait.traitKey = "SettingsBackBtnTuning";
    SettingsBackBtnTuningTrait = __decorate([
        mj.trait,
        mj.class("SettingsBackBtnTuning")
    ], SettingsBackBtnTuningTrait);
    return SettingsBackBtnTuningTrait;
}(Trait_1.default));
exports.default = SettingsBackBtnTuningTrait;

cc._RF.pop();
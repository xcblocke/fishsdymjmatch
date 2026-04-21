"use strict";
cc._RF.push(module, '604d0wuUlZGpoekU6ceIBFj', 'SettingsBackButtonTrait');
// subpackages/l_settingsDialog/Scripts/SettingsBackButtonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UISettingBtnBack_1 = require("./UISettingBtnBack");
var SettingsBackButtonTrait = /** @class */ (function (_super) {
    __extends(SettingsBackButtonTrait, _super);
    function SettingsBackButtonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsBackButtonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsBackButtonTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        var i = t.ins;
        i && "function" == typeof i.addPreloadRes && i.addPreloadRes("Prefab", UISettingBtnBack_1.UISettingBtnBack.getUrl());
        e();
    };
    SettingsBackButtonTrait.prototype.onUISetDlg_chkAddBack = function (t, e) {
        var i = t.beforReturnVal;
        if (i && cc.isValid(i.dialogContent) && cc.isValid(i.replayBtn)) {
            var o = i.dialogContent, n = i.replayBtn;
            this.addBackButton(o, n);
            e();
        }
        else
            e();
    };
    SettingsBackButtonTrait.prototype.addBackButton = function (t) {
        UISettingBtnBack_1.UISettingBtnBack.createUI().then(function (e) {
            if (cc.isValid(t) && cc.isValid(e)) {
                var i = t.getChildByName("bottom_layout");
                if (cc.isValid(i)) {
                    e.parent = i;
                    e.setSiblingIndex(1);
                    var o = e.height, n = i.getComponent(cc.Layout);
                    n && (o = e.height + n.spacingY);
                    t.height += o;
                }
            }
        });
    };
    SettingsBackButtonTrait.traitKey = "SettingsBackButton";
    SettingsBackButtonTrait = __decorate([
        mj.trait,
        mj.class("SettingsBackButtonTrait")
    ], SettingsBackButtonTrait);
    return SettingsBackButtonTrait;
}(Trait_1.default));
exports.default = SettingsBackButtonTrait;

cc._RF.pop();
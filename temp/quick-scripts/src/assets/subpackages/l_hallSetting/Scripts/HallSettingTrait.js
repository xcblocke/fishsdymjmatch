"use strict";
cc._RF.push(module, '1a086SmqatFuoGu7j7NyGnh', 'HallSettingTrait');
// subpackages/l_hallSetting/Scripts/HallSettingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallSettingBtn_1 = require("./HallSettingBtn");
var HallSettingTrait = /** @class */ (function (_super) {
    __extends(HallSettingTrait, _super);
    function HallSettingTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallSettingTrait_1 = HallSettingTrait;
    HallSettingTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallSettingTrait.prototype.onHallVw_initBtns = function (t, e) {
        var n;
        this.createHallButton(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
        e();
    };
    HallSettingTrait.prototype.onHallVw_updateUI = function (t, e) {
        e();
    };
    HallSettingTrait.prototype.createHallButton = function (t) {
        cc.isValid(t) && HallSettingBtn_1.default.createUI().then(function (e) {
            cc.isValid(e) && cc.isValid(t) && t.addChild(e);
        }).catch(function (t) {
            console.error("[" + HallSettingTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallSettingBtn按钮加载失败"));
        });
    };
    var HallSettingTrait_1;
    HallSettingTrait.traitKey = "HallSetting";
    HallSettingTrait = HallSettingTrait_1 = __decorate([
        mj.trait,
        mj.class("HallSettingTrait")
    ], HallSettingTrait);
    return HallSettingTrait;
}(Trait_1.default));
exports.default = HallSettingTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a7ae0ODncZBwJ9qqxtN+AFr', 'ModifyReviveDescTrait');
// subpackages/l_modifyReviveDesc/Scripts/ModifyReviveDescTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ModifyReviveDescTrait = /** @class */ (function (_super) {
    __extends(ModifyReviveDescTrait, _super);
    function ModifyReviveDescTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ModifyReviveDescTrait.prototype, "descKey", {
        get: function () {
            return null != this._traitData.descKey ? this._traitData.descKey : "TileMatch_Revive_Details_2";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyReviveDescTrait.prototype, "useBtnKey", {
        get: function () {
            return null != this._traitData.useBtnKey ? this._traitData.useBtnKey : "TileMatch_Revive_Button_Yes_2";
        },
        enumerable: false,
        configurable: true
    });
    ModifyReviveDescTrait.prototype.onFailVw_onLoad = function (e, t) {
        var r = e.ins;
        r.node.getChildByName("content_node").getChildByName("desc").getComponent(I18NComponent_1.default).setTranslateId(this.descKey, "Use Shuffle to Revive!");
        r.node.getChildByName("content_node").getChildByName("btn_use").getChildByName("use").getComponent(I18NComponent_1.default).setTranslateId(this.useBtnKey, "Use");
        t();
    };
    ModifyReviveDescTrait.traitKey = "ModifyReviveDesc";
    ModifyReviveDescTrait = __decorate([
        mj.trait,
        mj.class("ModifyReviveDescTrait")
    ], ModifyReviveDescTrait);
    return ModifyReviveDescTrait;
}(Trait_1.default));
exports.default = ModifyReviveDescTrait;

cc._RF.pop();
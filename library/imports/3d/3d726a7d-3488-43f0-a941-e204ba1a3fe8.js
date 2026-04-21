"use strict";
cc._RF.push(module, '3d726p9NIhD8KlB4gS6Gj/o', 'SelectScaleTrait');
// subpackages/l_selectScale/Scripts/SelectScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SelectScaleTrait = /** @class */ (function (_super) {
    __extends(SelectScaleTrait, _super);
    function SelectScaleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectScale = 1.2;
        return _this;
    }
    SelectScaleTrait.prototype.getSelectScale = function () {
        return this._selectScale;
    };
    SelectScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectScale = this._traitData.selectScale || 1.2;
    };
    SelectScaleTrait.prototype.onTileNodeObj_getScale = function (t, e) {
        t.ins;
        t.args[0] = this._selectScale;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._selectScale
        });
    };
    SelectScaleTrait.traitKey = "SelectScaleTrait";
    SelectScaleTrait = __decorate([
        mj.trait,
        mj.class("SelectScaleTrait")
    ], SelectScaleTrait);
    return SelectScaleTrait;
}(Trait_1.default));
exports.default = SelectScaleTrait;

cc._RF.pop();
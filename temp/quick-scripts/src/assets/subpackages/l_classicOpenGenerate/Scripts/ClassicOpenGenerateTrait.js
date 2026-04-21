"use strict";
cc._RF.push(module, '663d2RDORVDtqu4QA+ktELn', 'ClassicOpenGenerateTrait');
// subpackages/l_classicOpenGenerate/Scripts/ClassicOpenGenerateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ClassicOpenGenerateTrait = /** @class */ (function (_super) {
    __extends(ClassicOpenGenerateTrait, _super);
    function ClassicOpenGenerateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicOpenGenerateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicOpenGenerateTrait.prototype.onClcCtl_isOpenGenState = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    ClassicOpenGenerateTrait.traitKey = "ClassicOpenGenerate";
    ClassicOpenGenerateTrait = __decorate([
        mj.trait,
        mj.class("ClassicOpenGenerateTrait")
    ], ClassicOpenGenerateTrait);
    return ClassicOpenGenerateTrait;
}(Trait_1.default));
exports.default = ClassicOpenGenerateTrait;

cc._RF.pop();
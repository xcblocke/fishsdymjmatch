"use strict";
cc._RF.push(module, 'fc49d/nCvBCW71fnxlGlTP4', 'LevelValueTrait');
// subpackages/l_levelValue/Scripts/LevelValueTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LevelValueTrait = /** @class */ (function (_super) {
    __extends(LevelValueTrait, _super);
    function LevelValueTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LevelValueTrait.prototype, "strategy", {
        get: function () {
            return this.traitData.strategy;
        },
        enumerable: false,
        configurable: true
    });
    LevelValueTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LevelValueTrait.prototype.onDCMgr_setLvSgy = function (e, t) {
        if (this.strategy) {
            e.args[0] = this.strategy;
            t({
                isBreak: true
            });
        }
        else
            t();
    };
    LevelValueTrait.traitKey = "LevelValue";
    LevelValueTrait = __decorate([
        mj.trait,
        mj.class("LevelValueTrait")
    ], LevelValueTrait);
    return LevelValueTrait;
}(Trait_1.default));
exports.default = LevelValueTrait;

cc._RF.pop();
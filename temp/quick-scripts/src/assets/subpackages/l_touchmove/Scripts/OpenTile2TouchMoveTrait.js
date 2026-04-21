"use strict";
cc._RF.push(module, '7e0e41jMsJJkqJk7pph6yAj', 'OpenTile2TouchMoveTrait');
// subpackages/l_touchmove/Scripts/OpenTile2TouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var OpenTile2TouchMoveTrait = /** @class */ (function (_super) {
    __extends(OpenTile2TouchMoveTrait, _super);
    function OpenTile2TouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenTile2TouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OpenTile2TouchMoveTrait.prototype.onCltm_IsIgnoreTile2 = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    OpenTile2TouchMoveTrait.traitKey = "OpenTile2TouchMove";
    OpenTile2TouchMoveTrait = __decorate([
        mj.trait,
        mj.class("OpenTile2TouchMoveTrait")
    ], OpenTile2TouchMoveTrait);
    return OpenTile2TouchMoveTrait;
}(Trait_1.default));
exports.default = OpenTile2TouchMoveTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'bd494/SYpFBOrJHLZIvFWky', 'MainGameTypeTile2Trait');
// subpackages/l_mainGameTypeTile2/Scripts/MainGameTypeTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameTypeTile2Trait = /** @class */ (function (_super) {
    __extends(MainGameTypeTile2Trait, _super);
    function MainGameTypeTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameTypeTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameTypeTile2Trait.prototype.onUserModel_getMainGameType = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: GameTypeEnums_1.MjGameType.Tile2Normal
        });
    };
    MainGameTypeTile2Trait.traitKey = "MainGameTypeTile2";
    MainGameTypeTile2Trait = __decorate([
        mj.trait,
        mj.class("MainGameTypeTile2Trait")
    ], MainGameTypeTile2Trait);
    return MainGameTypeTile2Trait;
}(Trait_1.default));
exports.default = MainGameTypeTile2Trait;

cc._RF.pop();
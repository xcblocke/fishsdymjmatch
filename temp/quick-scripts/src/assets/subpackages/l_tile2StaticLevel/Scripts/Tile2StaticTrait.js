"use strict";
cc._RF.push(module, '5a714htet5FrYMCkOXOgQO5', 'Tile2StaticTrait');
// subpackages/l_tile2StaticLevel/Scripts/Tile2StaticTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaticTrait = /** @class */ (function (_super) {
    __extends(Tile2StaticTrait, _super);
    function Tile2StaticTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaticTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._priority = null !== (r = this._traitData.priority) && void 0 !== r ? r : 20;
        var e = this._traitData.libName || "tile2_static1";
        this._dataPath = "tile2LevelData/static/" + e;
        this._bundleName = this._traitData.bundleName || "mainRes";
    };
    Tile2StaticTrait.prototype.onT2StaStr_priority = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this._priority
        });
    };
    Tile2StaticTrait.prototype.onT2StaStr_dataPath = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [this._dataPath, this._bundleName]
        });
    };
    Tile2StaticTrait.traitKey = "Tile2Static";
    Tile2StaticTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaticTrait")
    ], Tile2StaticTrait);
    return Tile2StaticTrait;
}(Trait_1.default));
exports.default = Tile2StaticTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'c675bIid9pB9oAXYQUExsde', 'Tile2MagnetReviveTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetReviveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetReviveTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetReviveTrait, _super);
    function Tile2MagnetReviveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetReviveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetReviveTrait.prototype.getMatchPair = function () {
        return this.traitData.matchPair || 2;
    };
    Tile2MagnetReviveTrait.prototype.onT2Revive_magnetRevive = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    Tile2MagnetReviveTrait.prototype.onT2Revive_magnetCnt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.getMatchPair()
        });
    };
    Tile2MagnetReviveTrait.traitKey = "Tile2MagnetRevive";
    Tile2MagnetReviveTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetReviveTrait")
    ], Tile2MagnetReviveTrait);
    return Tile2MagnetReviveTrait;
}(Trait_1.default));
exports.default = Tile2MagnetReviveTrait;

cc._RF.pop();
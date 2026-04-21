"use strict";
cc._RF.push(module, 'af5d1yxQslHDYJRI3YREPu4', 'Tile2ReplayReExtractTrait');
// subpackages/l_tile2ReplayReExtract/Scripts/Tile2ReplayReExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2ReplayReExtractTrait = /** @class */ (function (_super) {
    __extends(Tile2ReplayReExtractTrait, _super);
    function Tile2ReplayReExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ReplayReExtractTrait_1 = Tile2ReplayReExtractTrait;
    Tile2ReplayReExtractTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2ReplayReExtractTrait.prototype.onIptRestart_excute = function (t, e) {
        var i = t.args[0];
        if (this.checkGameMode()) {
            var o = !!i && 0 === i.dieResult && "fail" === i.callFrom;
            Tile2ReplayReExtractTrait_1._isFailReplay = o;
            e();
        }
        else
            e();
    };
    Tile2ReplayReExtractTrait.prototype.onT2GameCtrl_reExtOnRst = function (t, e) {
        if (this.checkGameMode() && Tile2ReplayReExtractTrait_1._isFailReplay) {
            Tile2ReplayReExtractTrait_1._isFailReplay = false;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else
            e();
    };
    var Tile2ReplayReExtractTrait_1;
    Tile2ReplayReExtractTrait.traitKey = "Tile2ReplayReExtract";
    Tile2ReplayReExtractTrait._isFailReplay = false;
    Tile2ReplayReExtractTrait = Tile2ReplayReExtractTrait_1 = __decorate([
        mj.trait,
        mj.class("Tile2ReplayReExtractTrait")
    ], Tile2ReplayReExtractTrait);
    return Tile2ReplayReExtractTrait;
}(ExtractTrait_1.default));
exports.default = Tile2ReplayReExtractTrait;

cc._RF.pop();
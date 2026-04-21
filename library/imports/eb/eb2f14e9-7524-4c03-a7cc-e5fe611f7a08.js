"use strict";
cc._RF.push(module, 'eb2f1TpdSRMA6fM5f5hH3oI', 'RollCardNotShowNormalTrait');
// subpackages/l_rollNotShowNormal/Scripts/RollCardNotShowNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RollCardNotShowNormalTrait = /** @class */ (function (_super) {
    __extends(RollCardNotShowNormalTrait, _super);
    function RollCardNotShowNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardNotShowNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardNotShowNormalTrait.prototype.onMainGameCtrl_getTile = function (t, r) {
        var e, o = t.ins;
        if ((null !== (e = null == o ? void 0 : o.gameType) && void 0 !== e ? e : GameTypeEnums_1.MjGameType.None) === GameTypeEnums_1.MjGameType.Normal) {
            var n = "string" == typeof t.beforReturnVal ? t.beforReturnVal : "";
            if (n) {
                var i = this.removeOneType(n, TileTypeEnum_1.ETileType.RollCard);
                if (i !== n) {
                    r({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: i
                    });
                }
                else {
                    r();
                }
            }
            else
                r();
        }
        else
            r();
    };
    RollCardNotShowNormalTrait.prototype.removeOneType = function (t, r) {
        if (!t || t.indexOf(r) < 0)
            return t;
        var e = t.split(","), o = e.indexOf(r);
        if (o < 0)
            return t;
        e.splice(o, 1);
        return e.join(",");
    };
    RollCardNotShowNormalTrait.traitKey = "RollCardNotShowNormal";
    RollCardNotShowNormalTrait = __decorate([
        mj.trait,
        mj.class("RollCardNotShowNormalTrait")
    ], RollCardNotShowNormalTrait);
    return RollCardNotShowNormalTrait;
}(Trait_1.default));
exports.default = RollCardNotShowNormalTrait;

cc._RF.pop();
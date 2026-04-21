"use strict";
cc._RF.push(module, '519e92/yuRCjam3RLjvb0a9', 'ChangeOpenTipsTrait');
// subpackages/l_changeOpenTips/Scripts/ChangeOpenTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeOpenTipsTrait = /** @class */ (function (_super) {
    __extends(ChangeOpenTipsTrait, _super);
    function ChangeOpenTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeOpenTipsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeOpenTipsTrait.prototype.onHallRankBLockTt_getLv = function (t, r) {
        var e = t.args[0];
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: e + 1
        });
    };
    ChangeOpenTipsTrait.prototype.onHallRankBLockTt_getOTips = function (t, r) {
        var e = t.args[0], n = I18NStrings_1.default.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeOpenTipsTrait.prototype.onTaskTt_getLv = function (t, r) {
        var e = t.args[0];
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: e + 1
        });
    };
    ChangeOpenTipsTrait.prototype.onTaskTt_getOTips = function (t, r) {
        var e = t.args[0], n = I18NStrings_1.default.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeOpenTipsTrait.traitKey = "ChangeOpenTips";
    ChangeOpenTipsTrait = __decorate([
        mj.trait,
        mj.class("ChangeOpenTipsTrait")
    ], ChangeOpenTipsTrait);
    return ChangeOpenTipsTrait;
}(Trait_1.default));
exports.default = ChangeOpenTipsTrait;

cc._RF.pop();
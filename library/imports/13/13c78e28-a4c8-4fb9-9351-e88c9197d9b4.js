"use strict";
cc._RF.push(module, '13c784opMhPuZNR6IyRl9m0', 'DeathAnalyserTrait');
// subpackages/l_deathAnalyze/Scripts/DeathAnalyserTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserTrait = /** @class */ (function (_super) {
    __extends(DeathAnalyserTrait, _super);
    function DeathAnalyserTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathAnalyserTrait.prototype.onIptSetLv_exec = function (t, e) {
        var r;
        e();
        this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext);
    };
    DeathAnalyserTrait.prototype.onGameMod_modifyShuffle = function (t, e) {
        var r;
        e();
        this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.context);
    };
    DeathAnalyserTrait.prototype.onDGameEnd_adjust = function (t, e) {
        e();
        DeathAnalyserMgr_1.default.instance.cancelAnalyze();
    };
    DeathAnalyserTrait.prototype.startDeathAnalyser = function (t) {
        t && DeathAnalyserMgr_1.default.instance.startDeathAnalyser(t);
    };
    DeathAnalyserTrait.traitKey = "DeathAnalyser";
    DeathAnalyserTrait = __decorate([
        mj.trait,
        mj.class("DeathAnalyserTrait")
    ], DeathAnalyserTrait);
    return DeathAnalyserTrait;
}(Trait_1.default));
exports.default = DeathAnalyserTrait;

cc._RF.pop();
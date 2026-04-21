"use strict";
cc._RF.push(module, '31ab9/TSdpE24CsWV2tc3mu', 'DazeTimeTrait');
// subpackages/l_dazeTime/Scripts/DazeTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DazeTimeTrait = /** @class */ (function (_super) {
    __extends(DazeTimeTrait, _super);
    function DazeTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DazeTimeTrait.prototype, "dazeTime", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.dazeTime) && void 0 !== t ? t : 180;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DazeTimeTrait.prototype, "supportMode", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.mode) && void 0 !== t ? t : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Classic];
        },
        enumerable: false,
        configurable: true
    });
    DazeTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DazeTimeTrait.prototype.onIptGameTime_exec = function (e, t) {
        var r = e.ins, a = r.gameContext;
        if (this.supportMode.includes(a.gameType)) {
            var i = a.getGameData().getLastOpTime();
            if ((Date.now() - i) / 1000 > this.dazeTime) {
                var o = a.getGameData().getLastOpRealTime() + this.dazeTime - r.gameController.gameTimeData.time;
                o > 0 && (r.gameController.gameTimeData.time = o);
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    DazeTimeTrait.traitKey = "DazeTime";
    DazeTimeTrait = __decorate([
        mj.trait,
        mj.class("DazeTimeTrait")
    ], DazeTimeTrait);
    return DazeTimeTrait;
}(Trait_1.default));
exports.default = DazeTimeTrait;

cc._RF.pop();
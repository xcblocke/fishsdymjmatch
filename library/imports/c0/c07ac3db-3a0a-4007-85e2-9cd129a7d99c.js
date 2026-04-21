"use strict";
cc._RF.push(module, 'c07acPbOgpAB4XinNEpp9mc', 'GameStartVibrateTrait');
// subpackages/l_gameStartVibrate/Scripts/GameStartVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var GameStartVibrateTrait = /** @class */ (function (_super) {
    __extends(GameStartVibrateTrait, _super);
    function GameStartVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameStartVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameStartVibrateTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.GameStart;
        VibrateManager_1.default.executeVibrate(r);
    };
    GameStartVibrateTrait.traitKey = "GameStartVibrate";
    GameStartVibrateTrait = __decorate([
        mj.trait,
        mj.class("GameStartVibrateTrait")
    ], GameStartVibrateTrait);
    return GameStartVibrateTrait;
}(Trait_1.default));
exports.default = GameStartVibrateTrait;

cc._RF.pop();
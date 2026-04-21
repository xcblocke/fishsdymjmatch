"use strict";
cc._RF.push(module, '0bc5fldn4lOspoyobdv/8nT', 'ClearScoreTrait');
// subpackages/l_clearScore/Scripts/ClearScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var n;
(function (n) {
    n[n["Fixed"] = 0] = "Fixed";
    n[n["LevelMultiply"] = 1] = "LevelMultiply";
})(n || (n = {}));
var ClearScoreTrait = /** @class */ (function (_super) {
    __extends(ClearScoreTrait, _super);
    function ClearScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            mode: 1 === e ? n.LevelMultiply : n.Fixed,
            value: void 0 !== this._traitData.value ? this._traitData.value : 30
        };
    };
    ClearScoreTrait.prototype.onScoreMod_baseScr = function (t, e) {
        var r;
        if (this._config.mode === n.LevelMultiply) {
            var o = t.ins.context.getGameData().getLevelId();
            r = this._config.value * o;
        }
        else
            r = this._config.value;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ClearScoreTrait.traitKey = "ClearScore";
    ClearScoreTrait = __decorate([
        mj.trait,
        mj.class("ClearScoreTrait")
    ], ClearScoreTrait);
    return ClearScoreTrait;
}(Trait_1.default));
exports.default = ClearScoreTrait;

cc._RF.pop();
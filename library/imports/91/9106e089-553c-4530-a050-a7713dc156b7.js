"use strict";
cc._RF.push(module, '9106eCJVTxFMKBQp3E9wVa3', 'ComboScoreTrait');
// subpackages/l_comboScore/Scripts/ComboScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var n;
(function (n) {
    n[n["Fixed"] = 0] = "Fixed";
    n[n["LevelMultiply"] = 1] = "LevelMultiply";
})(n || (n = {}));
var ComboScoreTrait = /** @class */ (function (_super) {
    __extends(ComboScoreTrait, _super);
    function ComboScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            mode: 1 === r ? n.LevelMultiply : n.Fixed,
            value: void 0 !== this._traitData.value ? this._traitData.value : 10,
            upperLimit: void 0 !== this._traitData.upperLimit ? this._traitData.upperLimit : Number.MAX_SAFE_INTEGER
        };
    };
    ComboScoreTrait.prototype.onScoreMod_baseComboScr = function (t, r) {
        var e;
        if (this._config.mode === n.LevelMultiply) {
            var o = t.ins.context.getGameData().getLevelId();
            e = this._config.value * o;
        }
        else
            e = this._config.value;
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: e
        });
    };
    ComboScoreTrait.prototype.onScoreMod_maxComboScr = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.upperLimit > 0 ? this._config.upperLimit : -1
        });
    };
    ComboScoreTrait.traitKey = "ComboScore";
    ComboScoreTrait = __decorate([
        mj.trait,
        mj.class("ComboScoreTrait")
    ], ComboScoreTrait);
    return ComboScoreTrait;
}(Trait_1.default));
exports.default = ComboScoreTrait;

cc._RF.pop();
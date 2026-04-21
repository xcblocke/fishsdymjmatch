"use strict";
cc._RF.push(module, 'a8305TyRv5LW6XcsF4HIztV', 'ScoreFloatScaleTrait');
// subpackages/l_scoreFloatScale/Scripts/ScoreFloatScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ScoreFloatScaleTrait = /** @class */ (function (_super) {
    __extends(ScoreFloatScaleTrait, _super);
    function ScoreFloatScaleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = null;
        return _this;
    }
    ScoreFloatScaleTrait.prototype.onLoad = function () {
        var r, e, o, i;
        _super.prototype.onLoad.call(this);
        this._config = {
            inScale: null !== (e = null === (r = this._traitData.config) || void 0 === r ? void 0 : r.inScale) && void 0 !== e ? e : 1.3,
            outScale: null !== (i = null === (o = this._traitData.config) || void 0 === o ? void 0 : o.outScale) && void 0 !== i ? i : 1.2
        };
    };
    ScoreFloatScaleTrait.prototype.onScrFloatBhv_getScale = function (t, r) {
        var e = {
            inScale: this._config.inScale,
            outScale: this._config.outScale
        };
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: e
        });
    };
    ScoreFloatScaleTrait.traitKey = "ScoreFloatScale";
    ScoreFloatScaleTrait = __decorate([
        mj.trait,
        mj.class("ScoreFloatScaleTrait")
    ], ScoreFloatScaleTrait);
    return ScoreFloatScaleTrait;
}(Trait_1.default));
exports.default = ScoreFloatScaleTrait;

cc._RF.pop();
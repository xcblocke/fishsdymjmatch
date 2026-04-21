"use strict";
cc._RF.push(module, '3ab2aBvjYFORoV0qSE4dN4f', 'AgeSurveyPopControlTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyPopControlTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyPopControlTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyPopControlTrait, _super);
    function AgeSurveyPopControlTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showConfig = [];
        return _this;
    }
    AgeSurveyPopControlTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._showConfig = (null === (e = this._traitData) || void 0 === e ? void 0 : e.showConfig) || [true, false];
    };
    AgeSurveyPopControlTrait.prototype.onAgeSrvMgr_canShowSurvey = function (t, e) {
        var r, o, i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
        if (this._showConfig && 0 !== this._showConfig.length) {
            var n = Math.min(i, this._showConfig.length - 1), a = this._showConfig[n];
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            e();
    };
    AgeSurveyPopControlTrait.traitKey = "AgeSurveyPopControl";
    AgeSurveyPopControlTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyPopControlTrait")
    ], AgeSurveyPopControlTrait);
    return AgeSurveyPopControlTrait;
}(Trait_1.default));
exports.default = AgeSurveyPopControlTrait;

cc._RF.pop();
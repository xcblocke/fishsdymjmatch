"use strict";
cc._RF.push(module, '1a64dB98r9O4aH64USWqaZ5', 'AgeSurveyAutoCloseTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyAutoCloseTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyAutoCloseTrait, _super);
    function AgeSurveyAutoCloseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._autoCloseTime = 5;
        return _this;
    }
    AgeSurveyAutoCloseTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._autoCloseTime = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : 5;
    };
    AgeSurveyAutoCloseTrait.prototype.onAgeSrvMgr_autoCloseTime = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this._autoCloseTime
        });
    };
    AgeSurveyAutoCloseTrait.traitKey = "AgeSurveyAutoClose";
    AgeSurveyAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyAutoCloseTrait")
    ], AgeSurveyAutoCloseTrait);
    return AgeSurveyAutoCloseTrait;
}(Trait_1.default));
exports.default = AgeSurveyAutoCloseTrait;

cc._RF.pop();
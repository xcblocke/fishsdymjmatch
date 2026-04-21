"use strict";
cc._RF.push(module, '84e3b65ehVNbpaWyxaXfWqP', 'SkipStepDotTrait');
// subpackages/l_skipStepDot/Scripts/SkipStepDotTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SkipStepDotTrait = /** @class */ (function (_super) {
    __extends(SkipStepDotTrait, _super);
    function SkipStepDotTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isSkipDot = false;
        return _this;
    }
    SkipStepDotTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "DotGmClk_dot"
            }]);
        this._config = {
            percent: void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.percent) ? this._traitData.percent : 0
        };
        var e = this.localData.isSkipDot;
        if (null == e || "" === e) {
            var i = 100 * Math.random();
            this.localData.isSkipDot = i >= this._config.percent;
        }
        this._isSkipDot = this.localData.isSkipDot;
    };
    SkipStepDotTrait.prototype.onGameTracker_recordStep = function (t, r) {
        if (this._isSkipDot) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    SkipStepDotTrait.prototype.onDotGmClk_dot = function (t, r) {
        if (this._isSkipDot) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    SkipStepDotTrait.traitKey = "SkipStepDot";
    SkipStepDotTrait = __decorate([
        mj.trait,
        mj.class("SkipStepDotTrait")
    ], SkipStepDotTrait);
    return SkipStepDotTrait;
}(Trait_1.default));
exports.default = SkipStepDotTrait;

cc._RF.pop();
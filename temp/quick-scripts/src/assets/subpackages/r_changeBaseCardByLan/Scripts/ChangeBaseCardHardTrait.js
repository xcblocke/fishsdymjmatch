"use strict";
cc._RF.push(module, '9d87eH5p2pIw6YeWannQLgt', 'ChangeBaseCardHardTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBaseCardHardTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseCardHardTrait, _super);
    function ChangeBaseCardHardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._randomOnHard = false;
        return _this;
    }
    ChangeBaseCardHardTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._randomOnHard = (null === (e = this._traitData) || void 0 === e ? void 0 : e.randomOnHard) || false;
    };
    ChangeBaseCardHardTrait.prototype.onChCardByLanTt_isHardRd = function (t, e) {
        if (this._randomOnHard) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    ChangeBaseCardHardTrait.traitKey = "ChangeBaseCardHard";
    ChangeBaseCardHardTrait = __decorate([
        mj.trait,
        mj.class("ChangeBaseCardHardTrait")
    ], ChangeBaseCardHardTrait);
    return ChangeBaseCardHardTrait;
}(Trait_1.default));
exports.default = ChangeBaseCardHardTrait;

cc._RF.pop();
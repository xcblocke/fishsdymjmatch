"use strict";
cc._RF.push(module, '56b37uLDyVBJIZpPYI8hmA7', 'ChangeWhiteBgmTrait');
// subpackages/r_changeWhiteBgm/Scripts/ChangeWhiteBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ChangeWhiteBgmTrait = /** @class */ (function (_super) {
    __extends(ChangeWhiteBgmTrait, _super);
    function ChangeWhiteBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._audioId = 0;
        return _this;
    }
    ChangeWhiteBgmTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._audioId = this.traitData.audioId || 88;
    };
    ChangeWhiteBgmTrait.prototype.onAudioMgr_playBGM = function (t, e) {
        if (t.args && 0 !== t.args.length) {
            if (t.args[0] === GameTypeEnums_1.EAudioID.Bgm) {
                t.args[0] = this._audioId;
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ChangeWhiteBgmTrait.traitKey = "ChangeWhiteBgm";
    ChangeWhiteBgmTrait = __decorate([
        mj.trait,
        mj.class("ChangeWhiteBgmTrait")
    ], ChangeWhiteBgmTrait);
    return ChangeWhiteBgmTrait;
}(Trait_1.default));
exports.default = ChangeWhiteBgmTrait;

cc._RF.pop();
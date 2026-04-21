"use strict";
cc._RF.push(module, '89b34RNLoNPno8mn//W/d/t', 'ChangeBgmTrait');
// subpackages/l_changeBgm/Scripts/ChangeBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EChangeBgmType = exports.EChangeBgmId = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var EChangeBgmId;
(function (EChangeBgmId) {
    EChangeBgmId[EChangeBgmId["WhiteNoise"] = 55] = "WhiteNoise";
    EChangeBgmId[EChangeBgmId["OldBlock"] = 56] = "OldBlock";
})(EChangeBgmId = exports.EChangeBgmId || (exports.EChangeBgmId = {}));
var EChangeBgmType;
(function (EChangeBgmType) {
    EChangeBgmType[EChangeBgmType["WhiteNoise"] = 1] = "WhiteNoise";
    EChangeBgmType[EChangeBgmType["OldBlock"] = 2] = "OldBlock";
})(EChangeBgmType = exports.EChangeBgmType || (exports.EChangeBgmType = {}));
var ChangeBgmTrait = /** @class */ (function (_super) {
    __extends(ChangeBgmTrait, _super);
    function ChangeBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 0;
        return _this;
    }
    ChangeBgmTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._type = this.traitData.type;
    };
    ChangeBgmTrait.prototype.onAudioMgr_playBGM = function (t, e) {
        if (t.args && 0 !== t.args.length) {
            var r = t.args[0];
            if (r === GameTypeEnums_1.EAudioID.Bgm) {
                if (this._type === EChangeBgmType.WhiteNoise) {
                    r = EChangeBgmId.WhiteNoise;
                }
                else {
                    this._type === EChangeBgmType.OldBlock && (r = EChangeBgmId.OldBlock);
                }
                t.args[0] = r;
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ChangeBgmTrait.traitKey = "ChangeBgm";
    ChangeBgmTrait = __decorate([
        mj.trait,
        mj.class("ChangeBgmTrait")
    ], ChangeBgmTrait);
    return ChangeBgmTrait;
}(Trait_1.default));
exports.default = ChangeBgmTrait;

cc._RF.pop();
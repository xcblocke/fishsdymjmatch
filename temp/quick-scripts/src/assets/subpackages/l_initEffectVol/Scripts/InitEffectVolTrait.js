"use strict";
cc._RF.push(module, 'b98fftpBWpLdIY6GnYBsoJb', 'InitEffectVolTrait');
// subpackages/l_initEffectVol/Scripts/InitEffectVolTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var InitEffectVolTrait = /** @class */ (function (_super) {
    __extends(InitEffectVolTrait, _super);
    function InitEffectVolTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._volume = 1;
        return _this;
    }
    InitEffectVolTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._volume = null !== (e = this.traitData.volume) && void 0 !== e ? e : 1;
    };
    InitEffectVolTrait.prototype.onLoginM_showLoad = function (t, e) {
        e();
        cc.audioEngine.setEffectsVolume(this._volume);
    };
    InitEffectVolTrait.traitKey = "InitEffectVol";
    InitEffectVolTrait = __decorate([
        mj.trait,
        mj.class("InitEffectVolTrait")
    ], InitEffectVolTrait);
    return InitEffectVolTrait;
}(Trait_1.default));
exports.default = InitEffectVolTrait;

cc._RF.pop();
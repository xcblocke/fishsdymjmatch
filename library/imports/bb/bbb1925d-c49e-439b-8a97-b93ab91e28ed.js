"use strict";
cc._RF.push(module, 'bbb19JdxJ5Dm4qXuTq5Hijt', 'ColdStartBgmTrait');
// subpackages/r_coldStartBgm/Scripts/ColdStartBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdStartBgmTrait = /** @class */ (function (_super) {
    __extends(ColdStartBgmTrait, _super);
    function ColdStartBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        return _this;
    }
    Object.defineProperty(ColdStartBgmTrait.prototype, "fadeInDuration", {
        get: function () {
            return null != this._traitData.fadeInDuration ? this._traitData.fadeInDuration : 1;
        },
        enumerable: false,
        configurable: true
    });
    ColdStartBgmTrait.prototype.onAudioMgr_playBGM = function (t, r) {
        r();
        if (this._isColdStart) {
            this._isColdStart = false;
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.EnterHall);
            mj.audioManager.fadeBGMIn(this.fadeInDuration);
        }
    };
    ColdStartBgmTrait.traitKey = "ColdStartBgm";
    ColdStartBgmTrait = __decorate([
        mj.trait,
        mj.class("ColdStartBgmTrait")
    ], ColdStartBgmTrait);
    return ColdStartBgmTrait;
}(Trait_1.default));
exports.default = ColdStartBgmTrait;

cc._RF.pop();
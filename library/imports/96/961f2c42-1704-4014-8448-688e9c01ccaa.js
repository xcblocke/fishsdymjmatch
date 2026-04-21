"use strict";
cc._RF.push(module, '961f2xCFwRAFIRIaI6cAcyq', 'ArtFontLanguagesTrait');
// subpackages/l_artFontLanguages/Scripts/ArtFontLanguagesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ArtFontLanguagesTrait = /** @class */ (function (_super) {
    __extends(ArtFontLanguagesTrait, _super);
    function ArtFontLanguagesTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInitialized = false;
        return _this;
    }
    ArtFontLanguagesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ArtFontLanguagesTrait.prototype.onLoginM_showLoad = function (t, e) {
        if (!this._isInitialized) {
            I18NComponent_1.default.setEnableSystemFontFallback(false);
            this._isInitialized = true;
        }
        e();
    };
    ArtFontLanguagesTrait.traitKey = "ArtFontLanguages";
    ArtFontLanguagesTrait = __decorate([
        mj.trait,
        mj.class("ArtFontLanguagesTrait")
    ], ArtFontLanguagesTrait);
    return ArtFontLanguagesTrait;
}(Trait_1.default));
exports.default = ArtFontLanguagesTrait;

cc._RF.pop();
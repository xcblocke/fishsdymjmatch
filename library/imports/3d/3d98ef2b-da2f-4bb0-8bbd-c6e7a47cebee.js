"use strict";
cc._RF.push(module, '3d98e8r2i9LsIu9xuekfOvu', 'ThemeEnableLevelTrait');
// subpackages/l_themeEnableLevel/Scripts/ThemeEnableLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ThemeEnableLevelTrait = /** @class */ (function (_super) {
    __extends(ThemeEnableLevelTrait, _super);
    function ThemeEnableLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLevel = 30;
        return _this;
    }
    ThemeEnableLevelTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        var r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel;
        "number" == typeof r && !Number.isNaN(r) && r > 0 && (this._minLevel = r);
    };
    ThemeEnableLevelTrait.prototype.onFlowerCS_getMinLvEnable = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._minLevel,
            isBreak: true
        });
    };
    ThemeEnableLevelTrait.prototype.onBaseCardSkin_getStartLv = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._minLevel,
            isBreak: true
        });
    };
    ThemeEnableLevelTrait.traitKey = "ThemeEnableLevel";
    ThemeEnableLevelTrait = __decorate([
        mj.trait,
        mj.class("ThemeEnableLevelTrait")
    ], ThemeEnableLevelTrait);
    return ThemeEnableLevelTrait;
}(Trait_1.default));
exports.default = ThemeEnableLevelTrait;

cc._RF.pop();
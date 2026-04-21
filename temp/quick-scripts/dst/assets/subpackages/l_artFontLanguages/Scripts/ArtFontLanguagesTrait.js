
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_artFontLanguages/Scripts/ArtFontLanguagesTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FydEZvbnRMYW5ndWFnZXMvU2NyaXB0cy9BcnRGb250TGFuZ3VhZ2VzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFxRTtBQUNyRSxnRUFBMkQ7QUFHM0Q7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFhQztRQVpDLG9CQUFjLEdBQUcsS0FBSyxDQUFDOztJQVl6QixDQUFDO0lBVkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4Qix1QkFBYSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBVk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUZsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBYXpDO0lBQUQsNEJBQUM7Q0FiRCxBQWFDLENBYmtELGVBQUssR0FhdkQ7a0JBYm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0kxOE5Db21wb25lbnQnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQXJ0Rm9udExhbmd1YWdlc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRGb250TGFuZ3VhZ2VzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQXJ0Rm9udExhbmd1YWdlc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Mb2dpbk1fc2hvd0xvYWQodCwgZSkge1xuICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgSTE4TkNvbXBvbmVudC5zZXRFbmFibGVTeXN0ZW1Gb250RmFsbGJhY2soZmFsc2UpO1xuICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==
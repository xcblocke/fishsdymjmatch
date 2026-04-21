
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixtiletypemodifier/Scripts/FixTileTypeModifierTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd44dlfGo1JLLwF4U0E/pkx', 'FixTileTypeModifierTrait');
// subpackages/l_fixtiletypemodifier/Scripts/FixTileTypeModifierTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixTileTypeModifierTrait = /** @class */ (function (_super) {
    __extends(FixTileTypeModifierTrait, _super);
    function FixTileTypeModifierTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixTileTypeModifierTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixTileTypeModifierTrait.prototype.onTileTyModiy_isUserFix = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    FixTileTypeModifierTrait.traitKey = "FixTileTypeModifier";
    FixTileTypeModifierTrait = __decorate([
        mj.trait,
        mj.class("FixTileTypeModifierTrait")
    ], FixTileTypeModifierTrait);
    return FixTileTypeModifierTrait;
}(Trait_1.default));
exports.default = FixTileTypeModifierTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeHRpbGV0eXBlbW9kaWZpZXIvU2NyaXB0cy9GaXhUaWxlVHlwZU1vZGlmaWVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFzRCw0Q0FBSztJQUEzRDs7SUFZQSxDQUFDO0lBVkMseUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBWTVDO0lBQUQsK0JBQUM7Q0FaRCxBQVlDLENBWnFELGVBQUssR0FZMUQ7a0JBWm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZpeFRpbGVUeXBlTW9kaWZpZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4VGlsZVR5cGVNb2RpZmllclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZpeFRpbGVUeXBlTW9kaWZpZXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGlsZVR5TW9kaXlfaXNVc2VyRml4KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IHRydWVcbiAgICB9KTtcbiAgfVxufSJdfQ==
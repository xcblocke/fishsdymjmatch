
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalBaseCardSkin/Scripts/NormalBaseCardSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3adf32M6hJLFoam2DoKRTFw', 'NormalBaseCardSkinTrait');
// subpackages/l_normalBaseCardSkin/Scripts/NormalBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NormalBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(NormalBaseCardSkinTrait, _super);
    function NormalBaseCardSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBaseCardSkinTrait.prototype.onBaseCardSkin_isNormalOn = function (r, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    NormalBaseCardSkinTrait.traitKey = "NormalBaseCardSkin";
    NormalBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("NormalBaseCardSkinTrait")
    ], NormalBaseCardSkinTrait);
    return NormalBaseCardSkinTrait;
}(Trait_1.default));
exports.default = NormalBaseCardSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbEJhc2VDYXJkU2tpbi9TY3JpcHRzL05vcm1hbEJhc2VDYXJkU2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEOztJQVNBLENBQUM7SUFQQywyREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBUE0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBUzNDO0lBQUQsOEJBQUM7Q0FURCxBQVNDLENBVG9ELGVBQUssR0FTekQ7a0JBVG9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk5vcm1hbEJhc2VDYXJkU2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxCYXNlQ2FyZFNraW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOb3JtYWxCYXNlQ2FyZFNraW5cIjtcbiAgb25CYXNlQ2FyZFNraW5faXNOb3JtYWxPbihyLCB0KSB7XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=
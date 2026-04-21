
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_enterTravelSound/Scripts/EnterTravelSoundTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd3f6Hduo9ACYK9REdKky/O', 'EnterTravelSoundTrait');
// subpackages/r_enterTravelSound/Scripts/EnterTravelSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var EnterTravelSoundTrait = /** @class */ (function (_super) {
    __extends(EnterTravelSoundTrait, _super);
    function EnterTravelSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterTravelSoundTrait.prototype.onTLMapCtl_initRes = function (t, r) {
        r();
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.EnterTravel);
    };
    EnterTravelSoundTrait.traitKey = "EnterTravelSound";
    EnterTravelSoundTrait = __decorate([
        mj.trait,
        mj.class("EnterTravelSoundTrait")
    ], EnterTravelSoundTrait);
    return EnterTravelSoundTrait;
}(Trait_1.default));
exports.default = EnterTravelSoundTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2VudGVyVHJhdmVsU291bmQvU2NyaXB0cy9FbnRlclRyYXZlbFNvdW5kVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBa0Y7QUFHbEY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBTUEsQ0FBQztJQUpDLGtEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQztRQUNKLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUpNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQU16QztJQUFELDRCQUFDO0NBTkQsQUFNQyxDQU5rRCxlQUFLLEdBTXZEO2tCQU5vQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJFbnRlclRyYXZlbFNvdW5kVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGVyVHJhdmVsU291bmRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJFbnRlclRyYXZlbFNvdW5kXCI7XG4gIG9uVExNYXBDdGxfaW5pdFJlcyh0LCByKSB7XG4gICAgcigpO1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkVudGVyVHJhdmVsKTtcbiAgfVxufSJdfQ==
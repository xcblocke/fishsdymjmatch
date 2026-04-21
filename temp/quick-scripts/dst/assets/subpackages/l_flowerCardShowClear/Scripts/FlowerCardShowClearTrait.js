
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardShowClear/Scripts/FlowerCardShowClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd65dc4Sl/FJvrxK7Anyoxgm', 'FlowerCardShowClearTrait');
// subpackages/l_flowerCardShowClear/Scripts/FlowerCardShowClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerCardShowClearTrait = /** @class */ (function (_super) {
    __extends(FlowerCardShowClearTrait, _super);
    function FlowerCardShowClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowerCardShowClearTrait.prototype.onFlowerCS_isOpenCEff = function (r, t) {
        if (1 !== this._traitData.isOpen) {
            t();
        }
        else {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    FlowerCardShowClearTrait.traitKey = "FlowerCardShowClear";
    FlowerCardShowClearTrait = __decorate([
        mj.trait,
        mj.class("FlowerCardShowClearTrait")
    ], FlowerCardShowClearTrait);
    return FlowerCardShowClearTrait;
}(Trait_1.default));
exports.default = FlowerCardShowClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTaG93Q2xlYXIvU2NyaXB0cy9GbG93ZXJDYXJkU2hvd0NsZWFyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBc0QsNENBQUs7SUFBM0Q7O0lBYUEsQ0FBQztJQVhDLHdEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQVhNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FhNUM7SUFBRCwrQkFBQztDQWJELEFBYUMsQ0FicUQsZUFBSyxHQWExRDtrQkFib0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmxvd2VyQ2FyZFNob3dDbGVhclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93ZXJDYXJkU2hvd0NsZWFyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxvd2VyQ2FyZFNob3dDbGVhclwiO1xuICBvbkZsb3dlckNTX2lzT3BlbkNFZmYociwgdCkge1xuICAgIGlmICgxICE9PSB0aGlzLl90cmFpdERhdGEuaXNPcGVuKSB7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19
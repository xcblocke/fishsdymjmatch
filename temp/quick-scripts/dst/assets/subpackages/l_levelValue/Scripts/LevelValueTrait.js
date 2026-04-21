
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelValue/Scripts/LevelValueTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc49d/nCvBCW71fnxlGlTP4', 'LevelValueTrait');
// subpackages/l_levelValue/Scripts/LevelValueTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LevelValueTrait = /** @class */ (function (_super) {
    __extends(LevelValueTrait, _super);
    function LevelValueTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LevelValueTrait.prototype, "strategy", {
        get: function () {
            return this.traitData.strategy;
        },
        enumerable: false,
        configurable: true
    });
    LevelValueTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LevelValueTrait.prototype.onDCMgr_setLvSgy = function (e, t) {
        if (this.strategy) {
            e.args[0] = this.strategy;
            t({
                isBreak: true
            });
        }
        else
            t();
    };
    LevelValueTrait.traitKey = "LevelValue";
    LevelValueTrait = __decorate([
        mj.trait,
        mj.class("LevelValueTrait")
    ], LevelValueTrait);
    return LevelValueTrait;
}(Trait_1.default));
exports.default = LevelValueTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsVmFsdWUvU2NyaXB0cy9MZXZlbFZhbHVlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDs7SUFnQkEsQ0FBQztJQWRDLHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0QsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzFCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWRNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBZ0JuQztJQUFELHNCQUFDO0NBaEJELEFBZ0JDLENBaEI0QyxlQUFLLEdBZ0JqRDtrQkFoQm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMZXZlbFZhbHVlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsVmFsdWVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMZXZlbFZhbHVlXCI7XG4gIGdldCBzdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3RyYXRlZ3k7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRENNZ3Jfc2V0THZTZ3koZSwgdCkge1xuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICBlLmFyZ3NbMF0gPSB0aGlzLnN0cmF0ZWd5O1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameStartVibrate/Scripts/GameStartVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c07acPbOgpAB4XinNEpp9mc', 'GameStartVibrateTrait');
// subpackages/l_gameStartVibrate/Scripts/GameStartVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var GameStartVibrateTrait = /** @class */ (function (_super) {
    __extends(GameStartVibrateTrait, _super);
    function GameStartVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameStartVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameStartVibrateTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.GameStart;
        VibrateManager_1.default.executeVibrate(r);
    };
    GameStartVibrateTrait.traitKey = "GameStartVibrate";
    GameStartVibrateTrait = __decorate([
        mj.trait,
        mj.class("GameStartVibrateTrait")
    ], GameStartVibrateTrait);
    return GameStartVibrateTrait;
}(Trait_1.default));
exports.default = GameStartVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVTdGFydFZpYnJhdGUvU2NyaXB0cy9HYW1lU3RhcnRWaWJyYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBeUc7QUFHekc7SUFBbUQseUNBQUs7SUFBeEQ7O0lBVUEsQ0FBQztJQVJDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxpQ0FBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDNUQsd0JBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQVV6QztJQUFELDRCQUFDO0NBVkQsQUFVQyxDQVZrRCxlQUFLLEdBVXZEO2tCQVZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkdhbWVTdGFydFZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXJ0VmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkdhbWVTdGFydFZpYnJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRW50ZXJBbmlCaHZfc3RhcnRQbGF5KHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIHIgPSB0aGlzLl90cmFpdERhdGEubGV2ZWwgfHwgRVZpYnJhdGVTdHJlbmd0aC5HYW1lU3RhcnQ7XG4gICAgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUocik7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/LightningVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed82eHgu4xDhKHd05rWbuQP', 'LightningVibrateTrait');
// subpackages/l_vibrate/Scripts/LightningVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var LightningVibrateTrait = /** @class */ (function (_super) {
    __extends(LightningVibrateTrait, _super);
    function LightningVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightningVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LightningVibrateTrait.prototype.onBombBhv_finish = function (t, e) {
        e();
        var i = this._traitData.level || VibrateManager_1.EVibrateStrength.Strong;
        VibrateManager_1.default.executeVibrate(i);
    };
    LightningVibrateTrait.traitKey = "LightningVibrate";
    LightningVibrateTrait = __decorate([
        mj.trait,
        mj.class("LightningVibrateTrait")
    ], LightningVibrateTrait);
    return LightningVibrateTrait;
}(Trait_1.default));
exports.default = LightningVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9MaWdodG5pbmdWaWJyYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBeUc7QUFHekc7SUFBbUQseUNBQUs7SUFBeEQ7O0lBVUEsQ0FBQztJQVJDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxpQ0FBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDekQsd0JBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQVV6QztJQUFELDRCQUFDO0NBVkQsQUFVQyxDQVZrRCxlQUFLLEdBVXZEO2tCQVZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxpZ2h0bmluZ1ZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRuaW5nVmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxpZ2h0bmluZ1ZpYnJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQm9tYkJodl9maW5pc2godCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgaSA9IHRoaXMuX3RyYWl0RGF0YS5sZXZlbCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZztcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShpKTtcbiAgfVxufSJdfQ==
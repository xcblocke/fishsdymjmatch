
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleVibrate/Scripts/ShuffleVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a42a9YPwqlLtK+4At+zfIMD', 'ShuffleVibrateTrait');
// subpackages/l_shuffleVibrate/Scripts/ShuffleVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var ShuffleVibrateTrait = /** @class */ (function (_super) {
    __extends(ShuffleVibrateTrait, _super);
    function ShuffleVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ShuffleVibrateTrait.prototype.onIptShuffle_pushEffect = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.Shuffle;
        VibrateManager_1.default.executeVibrate(r);
    };
    ShuffleVibrateTrait.traitKey = "ShuffleVibrate";
    ShuffleVibrateTrait = __decorate([
        mj.trait,
        mj.class("ShuffleVibrateTrait")
    ], ShuffleVibrateTrait);
    return ShuffleVibrateTrait;
}(Trait_1.default));
exports.default = ShuffleVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVWaWJyYXRlL1NjcmlwdHMvU2h1ZmZsZVZpYnJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUF5RztBQUd6RztJQUFpRCx1Q0FBSztJQUF0RDs7SUFVQSxDQUFDO0lBUkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLGlDQUFnQixDQUFDLE9BQU8sQ0FBQztRQUMxRCx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBUk0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBVXZDO0lBQUQsMEJBQUM7Q0FWRCxBQVVDLENBVmdELGVBQUssR0FVckQ7a0JBVm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2h1ZmZsZVZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1ZmZsZVZpYnJhdGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTaHVmZmxlVmlicmF0ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25JcHRTaHVmZmxlX3B1c2hFZmZlY3QodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgciA9IHRoaXMuX3RyYWl0RGF0YS5sZXZlbCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlNodWZmbGU7XG4gICAgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUocik7XG4gIH1cbn0iXX0=
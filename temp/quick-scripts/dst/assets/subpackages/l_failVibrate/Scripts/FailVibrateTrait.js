
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failVibrate/Scripts/FailVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d39hUmXFCNoP+VdvfgJnY', 'FailVibrateTrait');
// subpackages/l_failVibrate/Scripts/FailVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var FailVibrateTrait = /** @class */ (function (_super) {
    __extends(FailVibrateTrait, _super);
    function FailVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailVibrateTrait.prototype.onFailVw_show = function (t, e) {
        e();
        var r = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak;
        VibrateManager_1.default.executeVibrate(r);
    };
    FailVibrateTrait.traitKey = "FailVibrate";
    FailVibrateTrait = __decorate([
        mj.trait,
        mj.class("FailVibrateTrait")
    ], FailVibrateTrait);
    return FailVibrateTrait;
}(Trait_1.default));
exports.default = FailVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxWaWJyYXRlL1NjcmlwdHMvRmFpbFZpYnJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUF5RztBQUd6RztJQUE4QyxvQ0FBSztJQUFuRDs7SUFVQSxDQUFDO0lBUkMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLGlDQUFnQixDQUFDLFVBQVUsQ0FBQztRQUM3RCx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBUk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBVXBDO0lBQUQsdUJBQUM7Q0FWRCxBQVVDLENBVjZDLGVBQUssR0FVbEQ7a0JBVm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmFpbFZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbFZpYnJhdGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGYWlsVmlicmF0ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25GYWlsVndfc2hvdyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciByID0gdGhpcy5fdHJhaXREYXRhLmxldmVsIHx8IEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhaztcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShyKTtcbiAgfVxufSJdfQ==
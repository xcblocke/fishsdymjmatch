
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyLockVibrate/Scripts/DailyLockVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28ae5NeXuJEm7MaU9oCSA4d', 'DailyLockVibrateTrait');
// subpackages/l_dailyLockVibrate/Scripts/DailyLockVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var DailyLockVibrateTrait = /** @class */ (function (_super) {
    __extends(DailyLockVibrateTrait, _super);
    function DailyLockVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyLockVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyLockVibrateTrait.prototype.onTaskView_addLockBtn = function (t, r) {
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak
        });
        r();
    };
    DailyLockVibrateTrait.traitKey = "DailyLockVibrate";
    DailyLockVibrateTrait = __decorate([
        mj.trait,
        mj.class("DailyLockVibrateTrait")
    ], DailyLockVibrateTrait);
    return DailyLockVibrateTrait;
}(Trait_1.default));
exports.default = DailyLockVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5TG9ja1ZpYnJhdGUvU2NyaXB0cy9EYWlseUxvY2tWaWJyYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBeUY7QUFHekY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBV0EsQ0FBQztJQVRDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0RCxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksaUNBQWdCLENBQUMsVUFBVTtTQUNuRSxDQUFDLENBQUM7UUFDSCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFUTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FXekM7SUFBRCw0QkFBQztDQVhELEFBV0MsQ0FYa0QsZUFBSyxHQVd2RDtrQkFYb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVWaWJyYXRlU3RyZW5ndGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5TG9ja1ZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlMb2NrVmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRhaWx5TG9ja1ZpYnJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGFza1ZpZXdfYWRkTG9ja0J0bih0LCByKSB7XG4gICAgdC5hcmdzWzJdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0LmFyZ3NbMl0pLCB7XG4gICAgICB2aWJyYXRlTGV2ZWw6IHRoaXMuX3RyYWl0RGF0YS5sZXZlbCB8fCBFVmlicmF0ZVN0cmVuZ3RoLkRvdWJsZVdlYWtcbiAgICB9KTtcbiAgICByKCk7XG4gIH1cbn0iXX0=
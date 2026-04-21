
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_weekdayPeriodN/Scripts/WeekdayPeriodNTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d731ceup5DgI4wwO6dWU7m', 'WeekdayPeriodNTrait');
// subpackages/l_weekdayPeriodN/Scripts/WeekdayPeriodNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var WeekdayPeriodNTrait = /** @class */ (function (_super) {
    __extends(WeekdayPeriodNTrait, _super);
    function WeekdayPeriodNTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = [];
        return _this;
    }
    WeekdayPeriodNTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData.configVal;
    };
    WeekdayPeriodNTrait.prototype.onExtNormLv_getAdNengRU = function (t, e) {
        if (this.checkGameMode()) {
            if (null != t.args[0]) {
                var r = DateManager_1.default.getInstance().getCurrentDayOfWeek(), o = this._config[r], i = t.args.length >= 2 ? t.args[1] : null;
                if (i && Array.isArray(i)) {
                    i.push(o);
                    e();
                }
                else {
                    t.args[1] = [o];
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    WeekdayPeriodNTrait.traitKey = "WeekdayPeriodN";
    WeekdayPeriodNTrait = __decorate([
        mj.trait,
        mj.class("WeekdayPeriodNTrait")
    ], WeekdayPeriodNTrait);
    return WeekdayPeriodNTrait;
}(ExtractTrait_1.default));
exports.default = WeekdayPeriodNTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dlZWtkYXlQZXJpb2ROL1NjcmlwdHMvV2Vla2RheVBlcmlvZE5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQTJFO0FBQzNFLDhEQUF5RDtBQUd6RDtJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXVCQztRQXRCQyxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQXNCZixDQUFDO0lBcEJDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEVBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7cUJBQU07b0JBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixDQUFDLEVBQUUsQ0FBQztpQkFDTDthQUNGOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXBCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRmhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F1QnZDO0lBQUQsMEJBQUM7Q0F2QkQsQUF1QkMsQ0F2QmdELHNCQUFZLEdBdUI1RDtrQkF2Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvRGF0ZU1hbmFnZXInO1xuaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldlZWtkYXlQZXJpb2ROVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtkYXlQZXJpb2ROVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBfY29uZmlnID0gW107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2Vla2RheVBlcmlvZE5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWdWYWw7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0QWROZW5nUlUodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKG51bGwgIT0gdC5hcmdzWzBdKSB7XG4gICAgICAgIHZhciByID0gRGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50RGF5T2ZXZWVrKCksXG4gICAgICAgICAgbyA9IHRoaXMuX2NvbmZpZ1tyXSxcbiAgICAgICAgICBpID0gdC5hcmdzLmxlbmd0aCA+PSAyID8gdC5hcmdzWzFdIDogbnVsbDtcbiAgICAgICAgaWYgKGkgJiYgQXJyYXkuaXNBcnJheShpKSkge1xuICAgICAgICAgIGkucHVzaChvKTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC5hcmdzWzFdID0gW29dO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19
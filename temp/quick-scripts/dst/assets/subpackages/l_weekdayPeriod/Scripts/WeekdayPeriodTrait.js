
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_weekdayPeriod/Scripts/WeekdayPeriodTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '808542HOkNLeLxlm2AsRWkn', 'WeekdayPeriodTrait');
// subpackages/l_weekdayPeriod/Scripts/WeekdayPeriodTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var WeekdayPeriodTrait = /** @class */ (function (_super) {
    __extends(WeekdayPeriodTrait, _super);
    function WeekdayPeriodTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = [];
        return _this;
    }
    WeekdayPeriodTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData.configVal;
    };
    WeekdayPeriodTrait.prototype.onExtNormLv_getAdjRU = function (t, e) {
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
    WeekdayPeriodTrait.traitKey = "WeekdayPeriod";
    WeekdayPeriodTrait = __decorate([
        mj.trait,
        mj.class("WeekdayPeriodTrait")
    ], WeekdayPeriodTrait);
    return WeekdayPeriodTrait;
}(ExtractTrait_1.default));
exports.default = WeekdayPeriodTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dlZWtkYXlQZXJpb2QvU2NyaXB0cy9XZWVrZGF5UGVyaW9kVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUEyRTtBQUMzRSw4REFBeUQ7QUFHekQ7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUF1QkM7UUF0QkMsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUFzQmYsQ0FBQztJQXBCQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxpREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxFQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLENBQUMsRUFBRSxDQUFDO2lCQUNMO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7YUFDRjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFwQk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFGZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBdUJ0QztJQUFELHlCQUFDO0NBdkJELEFBdUJDLENBdkIrQyxzQkFBWSxHQXVCM0Q7a0JBdkJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0RhdGVNYW5hZ2VyJztcbmltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXZWVrZGF5UGVyaW9kVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtkYXlQZXJpb2RUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9jb25maWcgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXZWVrZGF5UGVyaW9kXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl90cmFpdERhdGEuY29uZmlnVmFsO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEFkalJVKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmIChudWxsICE9IHQuYXJnc1swXSkge1xuICAgICAgICB2YXIgciA9IERhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudERheU9mV2VlaygpLFxuICAgICAgICAgIG8gPSB0aGlzLl9jb25maWdbcl0sXG4gICAgICAgICAgaSA9IHQuYXJncy5sZW5ndGggPj0gMiA/IHQuYXJnc1sxXSA6IG51bGw7XG4gICAgICAgIGlmIChpICYmIEFycmF5LmlzQXJyYXkoaSkpIHtcbiAgICAgICAgICBpLnB1c2gobyk7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQuYXJnc1sxXSA9IFtvXTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
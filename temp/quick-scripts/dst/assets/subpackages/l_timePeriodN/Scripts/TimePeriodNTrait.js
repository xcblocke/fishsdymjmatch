
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_timePeriodN/Scripts/TimePeriodNTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5bf9+dwQhCTZg4EDcyg0pf', 'TimePeriodNTrait');
// subpackages/l_timePeriodN/Scripts/TimePeriodNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TimePeriodNTrait = /** @class */ (function (_super) {
    __extends(TimePeriodNTrait, _super);
    function TimePeriodNTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePeriodNTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.valueArr || [0.8, 1];
        this._config = {
            valueArr: e
        };
    };
    TimePeriodNTrait.prototype.onExtNormLv_getAdNengRU = function (t, e) {
        if (this.checkGameMode()) {
            if (null != t.args[0]) {
                var r;
                r = DateManager_1.default.getInstance().getCurrentTimePeriod() === DateManager_1.ETimePeriod.Day ? this._config.valueArr[0] : this._config.valueArr[1];
                var o = t.args.length >= 2 ? t.args[1] : null;
                if (o && Array.isArray(o)) {
                    o.push(r);
                    e();
                }
                else {
                    t.args[1] = [r];
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    TimePeriodNTrait.traitKey = "TimePeriodN";
    TimePeriodNTrait = __decorate([
        mj.trait,
        mj.class("TimePeriodNTrait")
    ], TimePeriodNTrait);
    return TimePeriodNTrait;
}(ExtractTrait_1.default));
exports.default = TimePeriodNTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbWVQZXJpb2ROL1NjcmlwdHMvVGltZVBlcmlvZE5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQTRGO0FBQzVGLDhEQUF5RDtBQUd6RDtJQUE4QyxvQ0FBWTtJQUExRDs7SUF5QkEsQ0FBQztJQXZCQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUNELGtEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsQ0FBQztnQkFDTixDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLENBQUMsRUFBRSxDQUFDO2lCQUNMO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7YUFDRjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF2Qk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBeUJwQztJQUFELHVCQUFDO0NBekJELEFBeUJDLENBekI2QyxzQkFBWSxHQXlCekQ7a0JBekJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZU1hbmFnZXIsIHsgRVRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvRGF0ZU1hbmFnZXInO1xuaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbWVQZXJpb2ROVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQZXJpb2ROVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbWVQZXJpb2ROXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IHRoaXMuX3RyYWl0RGF0YS52YWx1ZUFyciB8fCBbMC44LCAxXTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICB2YWx1ZUFycjogZVxuICAgIH07XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0QWROZW5nUlUodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKG51bGwgIT0gdC5hcmdzWzBdKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICByID0gRGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50VGltZVBlcmlvZCgpID09PSBFVGltZVBlcmlvZC5EYXkgPyB0aGlzLl9jb25maWcudmFsdWVBcnJbMF0gOiB0aGlzLl9jb25maWcudmFsdWVBcnJbMV07XG4gICAgICAgIHZhciBvID0gdC5hcmdzLmxlbmd0aCA+PSAyID8gdC5hcmdzWzFdIDogbnVsbDtcbiAgICAgICAgaWYgKG8gJiYgQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgICAgIG8ucHVzaChyKTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC5hcmdzWzFdID0gW3JdO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19
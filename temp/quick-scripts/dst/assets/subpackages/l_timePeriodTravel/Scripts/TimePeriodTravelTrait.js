
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_timePeriodTravel/Scripts/TimePeriodTravelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96b2ellnPtAK6R6G1CoE8hp', 'TimePeriodTravelTrait');
// subpackages/l_timePeriodTravel/Scripts/TimePeriodTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TimePeriodTravelTrait = /** @class */ (function (_super) {
    __extends(TimePeriodTravelTrait, _super);
    function TimePeriodTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePeriodTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.valueArr || [0.8, 1];
        this._config = {
            valueArr: e
        };
    };
    TimePeriodTravelTrait.prototype.onExtNormLv_getAdjRU = function (t, e) {
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
    TimePeriodTravelTrait.traitKey = "TimePeriodTravel";
    TimePeriodTravelTrait = __decorate([
        mj.trait,
        mj.class("TimePeriodTravelTrait")
    ], TimePeriodTravelTrait);
    return TimePeriodTravelTrait;
}(ExtractTrait_1.default));
exports.default = TimePeriodTravelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbWVQZXJpb2RUcmF2ZWwvU2NyaXB0cy9UaW1lUGVyaW9kVHJhdmVsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUE0RjtBQUM1Riw4REFBeUQ7QUFHekQ7SUFBbUQseUNBQVk7SUFBL0Q7O0lBeUJBLENBQUM7SUF2QkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFDRCxvREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxHQUFHLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsS0FBSyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDOUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVixDQUFDLEVBQUUsQ0FBQztpQkFDTDtxQkFBTTtvQkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLENBQUMsRUFBRSxDQUFDO2lCQUNMO2FBQ0Y7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBdkJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXlCekM7SUFBRCw0QkFBQztDQXpCRCxBQXlCQyxDQXpCa0Qsc0JBQVksR0F5QjlEO2tCQXpCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVNYW5hZ2VyLCB7IEVUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0RhdGVNYW5hZ2VyJztcbmltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaW1lUGVyaW9kVHJhdmVsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQZXJpb2RUcmF2ZWxUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGltZVBlcmlvZFRyYXZlbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGUgPSB0aGlzLl90cmFpdERhdGEudmFsdWVBcnIgfHwgWzAuOCwgMV07XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgdmFsdWVBcnI6IGVcbiAgICB9O1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEFkalJVKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmIChudWxsICE9IHQuYXJnc1swXSkge1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgciA9IERhdGVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudFRpbWVQZXJpb2QoKSA9PT0gRVRpbWVQZXJpb2QuRGF5ID8gdGhpcy5fY29uZmlnLnZhbHVlQXJyWzBdIDogdGhpcy5fY29uZmlnLnZhbHVlQXJyWzFdO1xuICAgICAgICB2YXIgbyA9IHQuYXJncy5sZW5ndGggPj0gMiA/IHQuYXJnc1sxXSA6IG51bGw7XG4gICAgICAgIGlmIChvICYmIEFycmF5LmlzQXJyYXkobykpIHtcbiAgICAgICAgICBvLnB1c2gocik7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQuYXJnc1sxXSA9IFtyXTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/dynamicCurve/LevelModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f941eAfng5G4JgbNWEBQEmm', 'LevelModel');
// Scripts/core/dynamicCurve/LevelModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelModel = void 0;
var Model_1 = require("../../framework/data/Model");
var Common_1 = require("../../types/Common");
var LevelModel = /** @class */ (function (_super) {
    __extends(LevelModel, _super);
    function LevelModel() {
        var _this = _super.call(this) || this;
        _this.initDefaultData();
        return _this;
    }
    LevelModel.prototype.initDefaultData = function () {
        this.isLocalEmpty(this.localData.customKeys) && (this.localData.customKeys = []);
    };
    LevelModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    LevelModel.prototype.cacheData = function (e, t) {
        this.localData[e] = t;
        var o = this.localData.customKeys;
        if (!o.includes(e)) {
            o.push(e);
            this.localData.customKeys = o;
        }
    };
    LevelModel.prototype.getCachedData = function (e, t) {
        return this.localData[e] ? this.localData[e] : t;
    };
    LevelModel.prototype.clearLevelValues = function () {
        var e, t, o = this.localData.customKeys, n = [];
        try {
            for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                if (l.startsWith(Common_1.PrefixLevelValue)) {
                    this.localData[l] = [];
                }
                else {
                    n.push(l);
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.localData.customKeys = n;
        this.logInfo("清除关卡值数据: " + JSON.stringify(this.localData.customKeys));
    };
    LevelModel.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LEVEL_MODEL; }
    };
    LevelModel = __decorate([
        mj.class("LevelModel")
    ], LevelModel);
    return LevelModel;
}(Model_1.default));
exports.LevelModel = LevelModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZHluYW1pY0N1cnZlL0xldmVsTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsNkNBQWdFO0FBRWhFO0lBQWdDLDhCQUFLO0lBQ25DO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztJQUN6QixDQUFDO0lBQ0Qsb0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDRCxpQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw4QkFBUyxHQUFULFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUNELGtDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QscUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFDN0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMseUJBQWdCLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ1g7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCw0QkFBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQXdCO1FBQXhCLGtCQUFBLEVBQUEsSUFBSSxpQkFBUSxDQUFDLFdBQVc7SUFBRyxDQUFDO0lBbEQ1QixVQUFVO1FBRHRCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO09BQ1YsVUFBVSxDQW1EdEI7SUFBRCxpQkFBQztDQW5ERCxBQW1EQyxDQW5EK0IsZUFBSyxHQW1EcEM7QUFuRFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IHsgUHJlZml4TGV2ZWxWYWx1ZSwgRURDQ29sb3IgfSBmcm9tICcuLi8uLi90eXBlcy9Db21tb24nO1xuQG1qLmNsYXNzKFwiTGV2ZWxNb2RlbFwiKVxuZXhwb3J0IGNsYXNzIExldmVsTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbml0RGVmYXVsdERhdGEoKTtcbiAgfVxuICBpbml0RGVmYXVsdERhdGEoKSB7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VzdG9tS2V5cykgJiYgKHRoaXMubG9jYWxEYXRhLmN1c3RvbUtleXMgPSBbXSk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IFwiXCIgPT09IGU7XG4gIH1cbiAgY2FjaGVEYXRhKGUsIHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YVtlXSA9IHQ7XG4gICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YS5jdXN0b21LZXlzO1xuICAgIGlmICghby5pbmNsdWRlcyhlKSkge1xuICAgICAgby5wdXNoKGUpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuY3VzdG9tS2V5cyA9IG87XG4gICAgfVxuICB9XG4gIGdldENhY2hlZERhdGEoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YVtlXSA/IHRoaXMubG9jYWxEYXRhW2VdIDogdDtcbiAgfVxuICBjbGVhckxldmVsVmFsdWVzKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLmxvY2FsRGF0YS5jdXN0b21LZXlzLFxuICAgICAgbiA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobyksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZTtcbiAgICAgICAgaWYgKGwuc3RhcnRzV2l0aChQcmVmaXhMZXZlbFZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhW2xdID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbi5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAodCA9IGkucmV0dXJuKSAmJiB0LmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEuY3VzdG9tS2V5cyA9IG47XG4gICAgdGhpcy5sb2dJbmZvKFwi5riF6Zmk5YWz5Y2h5YC85pWw5o2uOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMubG9jYWxEYXRhLmN1c3RvbUtleXMpKTtcbiAgfVxuICBsb2dJbmZvKGUsIHQgPSBFRENDb2xvci5MRVZFTF9NT0RFTCkge31cbn0iXX0=
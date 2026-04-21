
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/data/FlowerStarConfigUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1bb01ax6zFFTrB5gZy4C+zq', 'FlowerStarConfigUtil');
// Scripts/gamePlay/base/data/FlowerStarConfigUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerStarConfigUtil = void 0;
var DataReader_1 = require("../../../framework/data/DataReader");
var ConfigType_1 = require("./ConfigType");
var FlowerStarConfigUtil = /** @class */ (function () {
    function FlowerStarConfigUtil() {
    }
    FlowerStarConfigUtil.getStarList = function () {
        if (this._cachedStarList)
            return this._cachedStarList;
        var e = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.flower_star_config);
        this._cachedStarList = e.map(function (e) {
            return {
                id: e.id,
                name: e.name,
                bundle: e.bundle,
                isLocal: e.isLocal
            };
        });
        return this._cachedStarList;
    };
    FlowerStarConfigUtil.getFullList = function () {
        if (this._cachedFullList)
            return this._cachedFullList;
        this._cachedFullList = __spreadArrays([{
                id: 0,
                name: "木质",
                bundle: "mainRes",
                isLocal: true
            }], this.getStarList());
        return this._cachedFullList;
    };
    FlowerStarConfigUtil.getById = function (e) {
        return this.getFullList().find(function (t) {
            return t.id === e;
        }) || null;
    };
    FlowerStarConfigUtil.clearCache = function () {
        this._cachedStarList = null;
        this._cachedFullList = null;
    };
    FlowerStarConfigUtil._cachedStarList = null;
    FlowerStarConfigUtil._cachedFullList = null;
    return FlowerStarConfigUtil;
}());
exports.FlowerStarConfigUtil = FlowerStarConfigUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9GbG93ZXJTdGFyQ29uZmlnVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFnRTtBQUNoRSwyQ0FBMEM7QUFDMUM7SUFBQTtJQW1DQSxDQUFDO0lBaENRLGdDQUFXLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN0QyxPQUFPO2dCQUNMLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDUixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7Z0JBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDbkIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDTSxnQ0FBVyxHQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWU7WUFBRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsa0JBQU8sQ0FBQztnQkFDMUIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxFQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ00sNEJBQU8sR0FBZCxVQUFlLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLCtCQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQWpDTSxvQ0FBZSxHQUFHLElBQUksQ0FBQztJQUN2QixvQ0FBZSxHQUFHLElBQUksQ0FBQztJQWlDaEMsMkJBQUM7Q0FuQ0QsQUFtQ0MsSUFBQTtBQW5DWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi9Db25maWdUeXBlJztcbmV4cG9ydCBjbGFzcyBGbG93ZXJTdGFyQ29uZmlnVXRpbCB7XG4gIHN0YXRpYyBfY2FjaGVkU3Rhckxpc3QgPSBudWxsO1xuICBzdGF0aWMgX2NhY2hlZEZ1bGxMaXN0ID0gbnVsbDtcbiAgc3RhdGljIGdldFN0YXJMaXN0KCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRTdGFyTGlzdCkgcmV0dXJuIHRoaXMuX2NhY2hlZFN0YXJMaXN0O1xuICAgIHZhciBlID0gRGF0YVJlYWRlci5nZXRMaXN0KENvbmZpZ1R5cGUuZmxvd2VyX3N0YXJfY29uZmlnKTtcbiAgICB0aGlzLl9jYWNoZWRTdGFyTGlzdCA9IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZS5pZCxcbiAgICAgICAgbmFtZTogZS5uYW1lLFxuICAgICAgICBidW5kbGU6IGUuYnVuZGxlLFxuICAgICAgICBpc0xvY2FsOiBlLmlzTG9jYWxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFN0YXJMaXN0O1xuICB9XG4gIHN0YXRpYyBnZXRGdWxsTGlzdCgpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkRnVsbExpc3QpIHJldHVybiB0aGlzLl9jYWNoZWRGdWxsTGlzdDtcbiAgICB0aGlzLl9jYWNoZWRGdWxsTGlzdCA9IFsuLi5be1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiBcIuacqOi0qFwiLFxuICAgICAgYnVuZGxlOiBcIm1haW5SZXNcIixcbiAgICAgIGlzTG9jYWw6IHRydWVcbiAgICB9XSwgLi4udGhpcy5nZXRTdGFyTGlzdCgpXTtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkRnVsbExpc3Q7XG4gIH1cbiAgc3RhdGljIGdldEJ5SWQoZSkge1xuICAgIHJldHVybiB0aGlzLmdldEZ1bGxMaXN0KCkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaWQgPT09IGU7XG4gICAgfSkgfHwgbnVsbDtcbiAgfVxuICBzdGF0aWMgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLl9jYWNoZWRTdGFyTGlzdCA9IG51bGw7XG4gICAgdGhpcy5fY2FjaGVkRnVsbExpc3QgPSBudWxsO1xuICB9XG59Il19
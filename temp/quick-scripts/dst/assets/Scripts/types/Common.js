
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/types/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa3229jzSdH76OsY4jX5UdG', 'Common');
// Scripts/types/Common.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomDataKey = exports.getPercentileKey = exports.EDCColor = exports.PrefixLevelLibrary = exports.PrefixLevelValue = exports.PrefixCapability = exports.LevelValueKey = void 0;
exports.LevelValueKey = "LevelValue";
exports.PrefixCapability = "#Capability#";
exports.PrefixLevelValue = "#LevelValue#";
exports.PrefixLevelLibrary = "#LevelLibrary#";
exports.EDCColor = {
    NORMAL: "color:#2E8B57",
    LAYER_CAPABILITY: "color:#8314BC",
    LAYER_LEVEL_VALUE: "color:#FF00FF",
    LAYER_MAPPING: "color:#C3BF0F",
    LAYER_DDA: "color:#0000FF",
    EXTRACT_MODEL: "color:#0099CC",
    LEVEL_MODEL: "color:#009933",
    ERROR: "color:#FF0000"
};
var getPercentileKey = function (e) {
    return "p#" + e;
};
exports.getPercentileKey = getPercentileKey;
var getCustomDataKey = function (e, t) {
    return e + "_" + t.join("_");
};
exports.getCustomDataKey = getCustomDataKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3R5cGVzL0NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsYUFBYSxHQUFHLFlBQVksQ0FBQztBQUM3QixRQUFBLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztBQUNsQyxRQUFBLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztBQUNsQyxRQUFBLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLGdCQUFnQixFQUFFLGVBQWU7SUFDakMsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxhQUFhLEVBQUUsZUFBZTtJQUM5QixTQUFTLEVBQUUsZUFBZTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixLQUFLLEVBQUUsZUFBZTtDQUN2QixDQUFDO0FBQ0ssSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7SUFDdkMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUZTLFFBQUEsZ0JBQWdCLG9CQUV6QjtBQUNLLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFGUyxRQUFBLGdCQUFnQixvQkFFekIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIExldmVsVmFsdWVLZXkgPSBcIkxldmVsVmFsdWVcIjtcbmV4cG9ydCB2YXIgUHJlZml4Q2FwYWJpbGl0eSA9IFwiI0NhcGFiaWxpdHkjXCI7XG5leHBvcnQgdmFyIFByZWZpeExldmVsVmFsdWUgPSBcIiNMZXZlbFZhbHVlI1wiO1xuZXhwb3J0IHZhciBQcmVmaXhMZXZlbExpYnJhcnkgPSBcIiNMZXZlbExpYnJhcnkjXCI7XG5leHBvcnQgdmFyIEVEQ0NvbG9yID0ge1xuICBOT1JNQUw6IFwiY29sb3I6IzJFOEI1N1wiLFxuICBMQVlFUl9DQVBBQklMSVRZOiBcImNvbG9yOiM4MzE0QkNcIixcbiAgTEFZRVJfTEVWRUxfVkFMVUU6IFwiY29sb3I6I0ZGMDBGRlwiLFxuICBMQVlFUl9NQVBQSU5HOiBcImNvbG9yOiNDM0JGMEZcIixcbiAgTEFZRVJfRERBOiBcImNvbG9yOiMwMDAwRkZcIixcbiAgRVhUUkFDVF9NT0RFTDogXCJjb2xvcjojMDA5OUNDXCIsXG4gIExFVkVMX01PREVMOiBcImNvbG9yOiMwMDk5MzNcIixcbiAgRVJST1I6IFwiY29sb3I6I0ZGMDAwMFwiXG59O1xuZXhwb3J0IHZhciBnZXRQZXJjZW50aWxlS2V5ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIFwicCNcIiArIGU7XG59O1xuZXhwb3J0IHZhciBnZXRDdXN0b21EYXRhS2V5ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgcmV0dXJuIGUgKyBcIl9cIiArIHQuam9pbihcIl9cIik7XG59OyJdfQ==
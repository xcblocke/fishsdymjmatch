
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/IRuleTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf6ab/FjzJPAKuARETh3tJU', 'IRuleTypes');
// Scripts/IRuleTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentType = exports.EConditionType = exports.ETile2ExtractType = void 0;
exports.ETile2ExtractType = {
    Fixed: "Tile2Fixed",
    FixedRandom: "Tile2FixedRandom",
    Hard: "Tile2Hard",
    StaticLvType: "Tile2StaticLvType",
    Dynamic: "Tile2Dynamic",
    Static: "Tile2Static"
};
var EConditionType;
(function (EConditionType) {
    EConditionType[EConditionType["LevelRange"] = 1] = "LevelRange";
    EConditionType[EConditionType["LevelCycle"] = 2] = "LevelCycle";
    EConditionType[EConditionType["TotalGames"] = 3] = "TotalGames";
    EConditionType[EConditionType["ActiveDays"] = 4] = "ActiveDays";
    EConditionType[EConditionType["StageType"] = 5] = "StageType";
    EConditionType[EConditionType["PlayerGroup"] = 6] = "PlayerGroup";
})(EConditionType = exports.EConditionType || (exports.EConditionType = {}));
var getParentType = function (e) {
    return "Fixed" === e ? exports.ETile2ExtractType.Fixed : "Hard" === e ? exports.ETile2ExtractType.Hard : e.startsWith("FixedRandom") ? exports.ETile2ExtractType.FixedRandom : e.startsWith("StaticLvType") ? exports.ETile2ExtractType.StaticLvType : e.startsWith("Dynamic") ? exports.ETile2ExtractType.Dynamic : e.startsWith("Static") ? exports.ETile2ExtractType.Static : null;
};
exports.getParentType = getParentType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lSdWxlVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVyxRQUFBLGlCQUFpQixHQUFHO0lBQzdCLEtBQUssRUFBRSxZQUFZO0lBQ25CLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsSUFBSSxFQUFFLFdBQVc7SUFDakIsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxPQUFPLEVBQUUsY0FBYztJQUN2QixNQUFNLEVBQUUsYUFBYTtDQUN0QixDQUFDO0FBQ0YsSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3hCLCtEQUFjLENBQUE7SUFDZCwrREFBYyxDQUFBO0lBQ2QsK0RBQWMsQ0FBQTtJQUNkLCtEQUFjLENBQUE7SUFDZCw2REFBYSxDQUFBO0lBQ2IsaUVBQWUsQ0FBQTtBQUNqQixDQUFDLEVBUFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFPekI7QUFDTSxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDcEMsT0FBTyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDeFUsQ0FBQyxDQUFDO0FBRlMsUUFBQSxhQUFhLGlCQUV0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRVRpbGUyRXh0cmFjdFR5cGUgPSB7XG4gIEZpeGVkOiBcIlRpbGUyRml4ZWRcIixcbiAgRml4ZWRSYW5kb206IFwiVGlsZTJGaXhlZFJhbmRvbVwiLFxuICBIYXJkOiBcIlRpbGUySGFyZFwiLFxuICBTdGF0aWNMdlR5cGU6IFwiVGlsZTJTdGF0aWNMdlR5cGVcIixcbiAgRHluYW1pYzogXCJUaWxlMkR5bmFtaWNcIixcbiAgU3RhdGljOiBcIlRpbGUyU3RhdGljXCJcbn07XG5leHBvcnQgZW51bSBFQ29uZGl0aW9uVHlwZSB7XG4gIExldmVsUmFuZ2UgPSAxLFxuICBMZXZlbEN5Y2xlID0gMixcbiAgVG90YWxHYW1lcyA9IDMsXG4gIEFjdGl2ZURheXMgPSA0LFxuICBTdGFnZVR5cGUgPSA1LFxuICBQbGF5ZXJHcm91cCA9IDYsXG59XG5leHBvcnQgdmFyIGdldFBhcmVudFR5cGUgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gXCJGaXhlZFwiID09PSBlID8gRVRpbGUyRXh0cmFjdFR5cGUuRml4ZWQgOiBcIkhhcmRcIiA9PT0gZSA/IEVUaWxlMkV4dHJhY3RUeXBlLkhhcmQgOiBlLnN0YXJ0c1dpdGgoXCJGaXhlZFJhbmRvbVwiKSA/IEVUaWxlMkV4dHJhY3RUeXBlLkZpeGVkUmFuZG9tIDogZS5zdGFydHNXaXRoKFwiU3RhdGljTHZUeXBlXCIpID8gRVRpbGUyRXh0cmFjdFR5cGUuU3RhdGljTHZUeXBlIDogZS5zdGFydHNXaXRoKFwiRHluYW1pY1wiKSA/IEVUaWxlMkV4dHJhY3RUeXBlLkR5bmFtaWMgOiBlLnN0YXJ0c1dpdGgoXCJTdGF0aWNcIikgPyBFVGlsZTJFeHRyYWN0VHlwZS5TdGF0aWMgOiBudWxsO1xufTsiXX0=
"use strict";
cc._RF.push(module, 'f614ej46bxOBLRJlZ0abF8f', 'TaskUtils');
// subpackages/l_task/Scripts/TaskUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUtils = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskUtils = /** @class */ (function () {
    function TaskUtils() {
    }
    TaskUtils.shuffleArray = function (t) {
        for (var e, a = t.length - 1; a > 0; a--) {
            var o = Math.floor(Math.random() * (a + 1));
            e = __read([t[o], t[a]], 2), t[a] = e[0], t[o] = e[1];
        }
    };
    TaskUtils.isSameDay = function (t, e) {
        if (0 === t)
            return false;
        var a = new Date(t), o = new Date(e);
        return a.getFullYear() === o.getFullYear() && a.getMonth() === o.getMonth() && a.getDate() === o.getDate();
    };
    TaskUtils.gameTypeToNumber = function (t) {
        switch (t) {
            case GameTypeEnums_1.MjGameType.Normal:
                return 1;
            case GameTypeEnums_1.MjGameType.Travel:
                return 2;
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return 3;
            case GameTypeEnums_1.MjGameType.Classic:
                return 4;
            case GameTypeEnums_1.MjGameType.Tile2Normal:
                return 5;
            default:
                return 1;
        }
    };
    TaskUtils.getRandomVal = function (t) {
        return t[Math.floor(Math.random() * t.length)];
    };
    TaskUtils.randomSelectTargetValue = function (t) {
        if (t.TaskValue1) {
            var e = t.TaskValue1;
            if (Array.isArray(e) && 0 !== e.length) {
                return this.getRandomVal(e);
            }
        }
    };
    TaskUtils.isLocalEmpty = function (t) {
        return null == t || "" === t || "object" == typeof t && 0 === Object.keys(t).length;
    };
    TaskUtils.checkDataIntegrity = function (t) {
        for (var e = 1; e <= 3; e++)
            if (!t.dictStageState[e])
                return true;
        return !Number.isInteger(t.taskStage) || t.taskStage < 1 || t.taskStage > 3 || !Array.isArray(t.listTaskType) || 3 !== t.listTaskType.length || !!t.listTaskType.some(function (t) {
            return null == t || !Number.isInteger(t) || t <= 0;
        });
    };
    __decorate([
        mj.traitEvent("TaskUtils_random")
    ], TaskUtils, "getRandomVal", null);
    return TaskUtils;
}());
exports.TaskUtils = TaskUtils;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEY7SUFBQTtJQWtEQSxDQUFDO0lBakRRLHNCQUFZLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUNNLG1CQUFTLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0csQ0FBQztJQUNNLDBCQUFnQixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSywwQkFBVSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSywwQkFBVSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSywwQkFBVSxDQUFDLGNBQWM7Z0JBQzVCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSywwQkFBVSxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsS0FBSywwQkFBVSxDQUFDLFdBQVc7Z0JBQ3pCLE9BQU8sQ0FBQyxDQUFDO1lBQ1g7Z0JBQ0UsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNILENBQUM7SUFFTSxzQkFBWSxHQUFuQixVQUFvQixDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTSxpQ0FBdUIsR0FBOUIsVUFBK0IsQ0FBQztRQUM5QixJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQztJQUNNLHNCQUFZLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN0RixDQUFDO0lBQ00sNEJBQWtCLEdBQXpCLFVBQTBCLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDL0ssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQW5CRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7dUNBR2pDO0lBa0JILGdCQUFDO0NBbERELEFBa0RDLElBQUE7QUFsRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmV4cG9ydCBjbGFzcyBUYXNrVXRpbHMge1xuICBzdGF0aWMgc2h1ZmZsZUFycmF5KHQpIHtcbiAgICBmb3IgKHZhciBlLCBhID0gdC5sZW5ndGggLSAxOyBhID4gMDsgYS0tKSB7XG4gICAgICB2YXIgbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhICsgMSkpO1xuICAgICAgZSA9IF9fcmVhZChbdFtvXSwgdFthXV0sIDIpLCB0W2FdID0gZVswXSwgdFtvXSA9IGVbMV07XG4gICAgfVxuICB9XG4gIHN0YXRpYyBpc1NhbWVEYXkodCwgZSkge1xuICAgIGlmICgwID09PSB0KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGEgPSBuZXcgRGF0ZSh0KSxcbiAgICAgIG8gPSBuZXcgRGF0ZShlKTtcbiAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBvLmdldEZ1bGxZZWFyKCkgJiYgYS5nZXRNb250aCgpID09PSBvLmdldE1vbnRoKCkgJiYgYS5nZXREYXRlKCkgPT09IG8uZ2V0RGF0ZSgpO1xuICB9XG4gIHN0YXRpYyBnYW1lVHlwZVRvTnVtYmVyKHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5Ob3JtYWw6XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRyYXZlbDpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLkNsYXNzaWM6XG4gICAgICAgIHJldHVybiA0O1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tVdGlsc19yYW5kb21cIilcbiAgc3RhdGljIGdldFJhbmRvbVZhbCh0KSB7XG4gICAgcmV0dXJuIHRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdC5sZW5ndGgpXTtcbiAgfVxuICBzdGF0aWMgcmFuZG9tU2VsZWN0VGFyZ2V0VmFsdWUodCkge1xuICAgIGlmICh0LlRhc2tWYWx1ZTEpIHtcbiAgICAgIHZhciBlID0gdC5UYXNrVmFsdWUxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkgJiYgMCAhPT0gZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tVmFsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQgfHwgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiAwID09PSBPYmplY3Qua2V5cyh0KS5sZW5ndGg7XG4gIH1cbiAgc3RhdGljIGNoZWNrRGF0YUludGVncml0eSh0KSB7XG4gICAgZm9yICh2YXIgZSA9IDE7IGUgPD0gMzsgZSsrKSBpZiAoIXQuZGljdFN0YWdlU3RhdGVbZV0pIHJldHVybiB0cnVlO1xuICAgIHJldHVybiAhTnVtYmVyLmlzSW50ZWdlcih0LnRhc2tTdGFnZSkgfHwgdC50YXNrU3RhZ2UgPCAxIHx8IHQudGFza1N0YWdlID4gMyB8fCAhQXJyYXkuaXNBcnJheSh0Lmxpc3RUYXNrVHlwZSkgfHwgMyAhPT0gdC5saXN0VGFza1R5cGUubGVuZ3RoIHx8ICEhdC5saXN0VGFza1R5cGUuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG51bGwgPT0gdCB8fCAhTnVtYmVyLmlzSW50ZWdlcih0KSB8fCB0IDw9IDA7XG4gICAgfSk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACCaiDaiStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b6baugyUVKAINMDC8icjz8', 'ACCaiDaiStrategy');
// Scripts/ACCaiDaiStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCaiDaiStrategy = void 0;
require("./Global");
require("./framework/trait/TraitManager");
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcCaiDaiAnimPlayer_1 = require("./AcCaiDaiAnimPlayer");
var ACCaiDaiStrategy = /** @class */ (function () {
    function ACCaiDaiStrategy() {
    }
    ACCaiDaiStrategy.prototype.getName = function () {
        return "ACCaiDaiStrategy";
    };
    ACCaiDaiStrategy.prototype.play = function (e, t) {
        var o = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== o.length) {
            var i = new AcCaiDaiAnimPlayer_1.AcCaiDaiAnimPlayer(t);
            i.setupPositions(o, 0);
            i.play(o);
        }
        else
            t.onComplete();
    };
    return ACCaiDaiStrategy;
}());
exports.ACCaiDaiStrategy = ACCaiDaiStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(4, new ACCaiDaiStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDQ2FpRGFpU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBa0I7QUFDbEIsMENBQXdDO0FBQ3hDLHlEQUEyRDtBQUMzRCx1RUFBb0U7QUFDcEUsMkRBQXdEO0FBR3hEO0lBQUE7SUFhQSxDQUFDO0lBWkcsa0NBQU8sR0FBUDtRQUNJLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFDLEVBQUUsQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLDBDQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksdUNBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiOztZQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDRDQUFnQjtBQWU3QixtREFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9HbG9iYWxcIjtcbmltcG9ydCBcIi4vZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlclwiO1xuaW1wb3J0IHtidWlsZEFsbENsZWFyTm9kZUluZm9zfSBmcm9tIFwiLi9JQWxsQ2xlYXJTdHJhdGVneVwiO1xuaW1wb3J0IHtBbGxDbGVhclN0cmF0ZWd5UmVnaXN0cnl9IGZyb20gXCIuL0FsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeVwiO1xuaW1wb3J0IHtBY0NhaURhaUFuaW1QbGF5ZXJ9IGZyb20gXCIuL0FjQ2FpRGFpQW5pbVBsYXllclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBQ0NhaURhaVN0cmF0ZWd5IHtcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gXCJBQ0NhaURhaVN0cmF0ZWd5XCI7XG4gICAgfVxuXG4gICAgcGxheShlLCB0KSB7XG4gICAgICAgIHZhciBvID0gYnVpbGRBbGxDbGVhck5vZGVJbmZvcyhlLCB0KTtcbiAgICAgICAgaWYgKDAgIT09IG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5ldyBBY0NhaURhaUFuaW1QbGF5ZXIodCk7XG4gICAgICAgICAgICBpLnNldHVwUG9zaXRpb25zKG8sIDApO1xuICAgICAgICAgICAgaS5wbGF5KG8pO1xuICAgICAgICB9IGVsc2UgdC5vbkNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG5BbGxDbGVhclN0cmF0ZWd5UmVnaXN0cnkucmVnaXN0ZXIoNCwgbmV3IEFDQ2FpRGFpU3RyYXRlZ3koKSk7Il19
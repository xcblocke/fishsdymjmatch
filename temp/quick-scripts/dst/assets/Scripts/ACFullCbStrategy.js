
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ACFullCbStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '064fbEl22RJuZykJQXE2El/', 'ACFullCbStrategy');
// Scripts/ACFullCbStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACFullCbStrategy = void 0;
var FullComboItem_1 = require("./items/FullComboItem");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var VibrateManager_1 = require("./gamePlay/base/vibrate/VibrateManager");
var ACFullCbStrategy = /** @class */ (function () {
    function ACFullCbStrategy() {
    }
    ACFullCbStrategy.prototype.getName = function () {
        return "ACFullCbStrategy";
    };
    ACFullCbStrategy.prototype.play = function (e, t) {
        FullComboItem_1.default.createUI().then(function (e) {
            if (e && cc.isValid(e)) {
                e.setParent(t.effectNode);
                e.position = cc.v3(0, 0, 0);
                VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
                var o = e.getComponent(FullComboItem_1.default);
                if (o)
                    o.startPlayAni(e, function () { }, function () {
                        t.onComplete();
                    });
                else {
                    e.destroy();
                    t.onComplete();
                }
            }
            else
                t.onComplete();
        });
    };
    return ACFullCbStrategy;
}());
exports.ACFullCbStrategy = ACFullCbStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(1, new ACFullCbStrategy());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FDRnVsbENiU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsdUVBQXNFO0FBQ3RFLHlFQUEwRjtBQUMxRjtJQUFBO0lBb0JBLENBQUM7SUFuQkMsa0NBQU8sR0FBUDtRQUNFLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUNELCtCQUFJLEdBQUosVUFBSyxDQUFDLEVBQUUsQ0FBQztRQUNQLHVCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLHdCQUFjLENBQUMsY0FBYyxDQUFDLGlDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDO29CQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGNBQWEsQ0FBQyxFQUFFO3dCQUN2QyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDO3FCQUFLO29CQUNOLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDWixDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0Y7O2dCQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksNENBQWdCO0FBcUI3QixtREFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZ1bGxDb21ib0l0ZW0gZnJvbSAnLi9pdGVtcy9GdWxsQ29tYm9JdGVtJztcbmltcG9ydCB7IEFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeSB9IGZyb20gJy4vQWxsQ2xlYXJTdHJhdGVneVJlZ2lzdHJ5JztcbmltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoIH0gZnJvbSAnLi9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuZXhwb3J0IGNsYXNzIEFDRnVsbENiU3RyYXRlZ3kge1xuICBnZXROYW1lKCkge1xuICAgIHJldHVybiBcIkFDRnVsbENiU3RyYXRlZ3lcIjtcbiAgfVxuICBwbGF5KGUsIHQpIHtcbiAgICBGdWxsQ29tYm9JdGVtLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgICBlLnNldFBhcmVudCh0LmVmZmVjdE5vZGUpO1xuICAgICAgICBlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nKTtcbiAgICAgICAgdmFyIG8gPSBlLmdldENvbXBvbmVudChGdWxsQ29tYm9JdGVtKTtcbiAgICAgICAgaWYgKG8pIG8uc3RhcnRQbGF5QW5pKGUsIGZ1bmN0aW9uICgpIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0pO2Vsc2Uge1xuICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgIHQub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdC5vbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cbkFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeS5yZWdpc3RlcigxLCBuZXcgQUNGdWxsQ2JTdHJhdGVneSgpKTsiXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameInteraction/GameInteraction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f38b0NMr2hDuYMU+EXrDkpW', 'GameInteraction');
// Scripts/GameInteraction/GameInteraction.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInteraction = void 0;
var SimulatorEvent_1 = require("../core/simulator/events/SimulatorEvent");
var GameInteraction = /** @class */ (function () {
    function GameInteraction() {
    }
    GameInteraction.input = function (e) {
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_INPUT, e);
    };
    return GameInteraction;
}());
exports.GameInteraction = GameInteraction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBc0Y7QUFDdEY7SUFBQTtJQUlBLENBQUM7SUFIUSxxQkFBSyxHQUFaLFVBQWEsQ0FBQztRQUNaLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDRDQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxzQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfTVNHX0tFWV9TSU1VTEFUT1JfSU5QVVQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9ldmVudHMvU2ltdWxhdG9yRXZlbnQnO1xuZXhwb3J0IGNsYXNzIEdhbWVJbnRlcmFjdGlvbiB7XG4gIHN0YXRpYyBpbnB1dChlKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfU0lNVUxBVE9SX0lOUFVULCBlKTtcbiAgfVxufSJdfQ==
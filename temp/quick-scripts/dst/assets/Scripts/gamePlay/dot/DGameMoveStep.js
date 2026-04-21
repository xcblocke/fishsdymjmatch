
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameMoveStep.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd38e6CSllxPiZ7IkU1QR0af', 'DGameMoveStep');
// Scripts/gamePlay/dot/DGameMoveStep.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameMoveStep = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotUtil_1 = require("./DotUtil");
var DotGameMoveStep = /** @class */ (function () {
    function DotGameMoveStep() {
    }
    DotGameMoveStep.dot = function (e, t) {
        if (!e.isVideo) {
            var o = Object.assign({
                dt: Number(new Date().format("YYYYmmdd")),
                game_id: e.getGameData().getGameId(),
                game_type: DotUtil_1.DotUtil.getGameId(e.getGameData().gameType)
            }, t);
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameMoveStep, o);
        }
    };
    return DotGameMoveStep;
}());
exports.DotGameMoveStep = DotGameMoveStep;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZU1vdmVTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUN6RSxxQ0FBb0M7QUFDcEM7SUFBQTtJQVdBLENBQUM7SUFWUSxtQkFBRyxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFO2dCQUNwQyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnREYXRhJztcbmltcG9ydCBFdmVudFRyYWNraW5nTWFuYWdlciBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmltcG9ydCB7IERvdFV0aWwgfSBmcm9tICcuL0RvdFV0aWwnO1xuZXhwb3J0IGNsYXNzIERvdEdhbWVNb3ZlU3RlcCB7XG4gIHN0YXRpYyBkb3QoZSwgdCkge1xuICAgIGlmICghZS5pc1ZpZGVvKSB7XG4gICAgICB2YXIgbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBkdDogTnVtYmVyKG5ldyBEYXRlKCkuZm9ybWF0KFwiWVlZWW1tZGRcIikpLFxuICAgICAgICBnYW1lX2lkOiBlLmdldEdhbWVEYXRhKCkuZ2V0R2FtZUlkKCksXG4gICAgICAgIGdhbWVfdHlwZTogRG90VXRpbC5nZXRHYW1lSWQoZS5nZXRHYW1lRGF0YSgpLmdhbWVUeXBlKVxuICAgICAgfSwgdCk7XG4gICAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuR2FtZU1vdmVTdGVwLCBvKTtcbiAgICB9XG4gIH1cbn0iXX0=
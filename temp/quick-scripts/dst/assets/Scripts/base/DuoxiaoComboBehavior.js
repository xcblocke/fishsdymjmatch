
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/DuoxiaoComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01c4b2c5btE34ocE57Ydw2M', 'DuoxiaoComboBehavior');
// Scripts/base/DuoxiaoComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DuoxiaoComboBehavior = /** @class */ (function (_super) {
    __extends(DuoxiaoComboBehavior, _super);
    function DuoxiaoComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoComboBehavior.prototype.start = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.DuoxiaoAutoMerge,
            duoxiaoCount: e.data.duoxiaoCount
        });
        this.finish();
    };
    return DuoxiaoComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DuoxiaoComboBehavior = DuoxiaoComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRHVveGlhb0NvbWJvQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDckUsc0VBQXFFO0FBQ3JFLHlEQUF3RDtBQUN4RDtJQUEwQyx3Q0FBaUI7SUFBM0Q7O0lBUUEsQ0FBQztJQVBDLG9DQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsaUNBQWUsQ0FBQyxLQUFLLENBQUM7WUFDcEIsU0FBUyxFQUFFLDhCQUFjLENBQUMsZ0JBQWdCO1lBQzFDLFlBQVksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCwyQkFBQztBQUFELENBUkEsQUFRQyxDQVJ5QyxxQ0FBaUIsR0FRMUQ7QUFSWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBEdW94aWFvQ29tYm9CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkR1b3hpYW9BdXRvTWVyZ2UsXG4gICAgICBkdW94aWFvQ291bnQ6IGUuZGF0YS5kdW94aWFvQ291bnRcbiAgICB9KTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG59Il19
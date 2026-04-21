
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddLevelFinishBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d7ee7GtutJVK2wJKPmpa3m', 'AddLevelFinishBehavior');
// Scripts/AddLevelFinishBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelFinishBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelFinishBehavior = /** @class */ (function (_super) {
    __extends(AddLevelFinishBehavior, _super);
    function AddLevelFinishBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelFinishBehavior.prototype.start = function (e) {
        if (e.data.isOpenGenerateState) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.DropClassic
            });
        }
        else {
            this.context.getTileNodeManager().destoryEmptyLayerNodes();
        }
        this.finish();
    };
    return AddLevelFinishBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelFinishBehavior = AddLevelFinishBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZExldmVsRmluaXNoQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBb0U7QUFDcEUscUVBQW9FO0FBQ3BFLDhEQUE2RDtBQUM3RDtJQUE0QywwQ0FBaUI7SUFBN0Q7O0lBV0EsQ0FBQztJQVZDLHNDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzlCLGlDQUFlLENBQUMsS0FBSyxDQUFDO2dCQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxXQUFXO2FBQ3RDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYMkMscUNBQWlCLEdBVzVEO0FBWFksd0RBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQWRkTGV2ZWxGaW5pc2hCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIGlmIChlLmRhdGEuaXNPcGVuR2VuZXJhdGVTdGF0ZSkge1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ecm9wQ2xhc3NpY1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKS5kZXN0b3J5RW1wdHlMYXllck5vZGVzKCk7XG4gICAgfVxuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cbn0iXX0=
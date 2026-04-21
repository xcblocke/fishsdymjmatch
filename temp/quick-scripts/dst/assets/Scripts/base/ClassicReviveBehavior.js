
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ClassicReviveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54213Vf8LpI7LdGOixrkGi1', 'ClassicReviveBehavior');
// Scripts/base/ClassicReviveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicReviveBehavior = /** @class */ (function (_super) {
    __extends(ClassicReviveBehavior, _super);
    function ClassicReviveBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    ClassicReviveBehavior.prototype.start = function () {
        var e = this;
        this.showReviveView(function (t) {
            if (t) {
                e.doRevive();
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.ClassicFail
                });
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ClassicReviveBehavior.prototype.showReviveView = function (e) {
        e && e(false);
    };
    ClassicReviveBehavior.prototype.doRevive = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.ClassicRevive
        });
    };
    __decorate([
        mj.traitEvent("ClcRevBhv_showReviveVw")
    ], ClassicReviveBehavior.prototype, "showReviveView", null);
    return ClassicReviveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClassicReviveBehavior = ClassicReviveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2xhc3NpY1Jldml2ZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWtHO0FBQ2xHLHNFQUFxRTtBQUNyRSx5REFBd0Q7QUFDeEQ7SUFBMkMseUNBQWlCO0lBQTVEO1FBQUEscUVBMkJDO1FBMUJDLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBMEJmLENBQUM7SUF6QkMscUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDYixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsaUNBQWUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BCLFNBQVMsRUFBRSw4QkFBYyxDQUFDLFdBQVc7aUJBQ3RDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCx3Q0FBUSxHQUFSO1FBQ0UsaUNBQWUsQ0FBQyxLQUFLLENBQUM7WUFDcEIsU0FBUyxFQUFFLDhCQUFjLENBQUMsT0FBTztZQUNqQyxJQUFJLEVBQUUsNEJBQVksQ0FBQyxhQUFhO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFSRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7K0RBR3ZDO0lBT0gsNEJBQUM7Q0EzQkQsQUEyQkMsQ0EzQjBDLHFDQUFpQixHQTJCM0Q7QUEzQlksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSwgRUdhbWVJbnB1dEVudW0sIEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBDbGFzc2ljUmV2aXZlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMDtcbiAgc3RhcnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuc2hvd1Jldml2ZVZpZXcoZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIGUuZG9SZXZpdmUoKTtcbiAgICAgICAgZS5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5DbGFzc2ljRmFpbFxuICAgICAgICB9KTtcbiAgICAgICAgZS5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xjUmV2Qmh2X3Nob3dSZXZpdmVWd1wiKVxuICBzaG93UmV2aXZlVmlldyhlKSB7XG4gICAgZSAmJiBlKGZhbHNlKTtcbiAgfVxuICBkb1Jldml2ZSgpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TaHVmZmxlLFxuICAgICAgZnJvbTogRVNodWZmbGVGcm9tLkNsYXNzaWNSZXZpdmVcbiAgICB9KTtcbiAgfVxufSJdfQ==
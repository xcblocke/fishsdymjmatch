
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelTips/Scripts/HardLevelTipsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38d3cbcZzpDup78pKdxYcXt', 'HardLevelTipsBehavior');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HardLevelTipsBehavior = void 0;
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HardLevelTipsBehavior = /** @class */ (function (_super) {
    __extends(HardLevelTipsBehavior, _super);
    function HardLevelTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsBehavior.prototype.start = function (e) {
        var t = this;
        this.context.gameView.setSwallowEventNodeActive(true);
        BaseSpine_1.default.create("spine/hardLevelTips/gameplay_hardTips", e.data.aniName, 1, function () {
            t.context.gameView.setSwallowEventNodeActive(false);
            t.finish();
        }, true, "mainRes").node.parent = this.context.gameView.nodeTopEffectRoot;
    };
    __decorate([
        mj.traitEvent("HLTipsBhv_onStart")
    ], HardLevelTipsBehavior.prototype, "start", null);
    return HardLevelTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.HardLevelTipsBehavior = HardLevelTipsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbFRpcHMvU2NyaXB0cy9IYXJkTGV2ZWxUaXBzQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNEU7QUFDNUUseUVBQW9FO0FBQ3BFO0lBQTJDLHlDQUFpQjtJQUE1RDs7SUFVQSxDQUFDO0lBUkMscUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxtQkFBUyxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDM0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO0lBQzVFLENBQUM7SUFQRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7c0RBUWxDO0lBQ0gsNEJBQUM7Q0FWRCxBQVVDLENBVjBDLHFDQUFpQixHQVUzRDtBQVZZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgY2xhc3MgSGFyZExldmVsVGlwc0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIkhMVGlwc0Jodl9vblN0YXJ0XCIpXG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL2hhcmRMZXZlbFRpcHMvZ2FtZXBsYXlfaGFyZFRpcHNcIiwgZS5kYXRhLmFuaU5hbWUsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICAgIHQuZmluaXNoKCk7XG4gICAgfSwgdHJ1ZSwgXCJtYWluUmVzXCIpLm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICB9XG59Il19
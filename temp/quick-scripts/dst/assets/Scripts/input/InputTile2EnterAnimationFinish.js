
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2EnterAnimationFinish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '706acoQgGVDNbjKy96Mp0rK', 'InputTile2EnterAnimationFinish');
// Scripts/input/InputTile2EnterAnimationFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var EnterAnimationFinishEffect_1 = require("../EnterAnimationFinishEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2EnterAnimationFinish = /** @class */ (function (_super) {
    __extends(InputTile2EnterAnimationFinish, _super);
    function InputTile2EnterAnimationFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2EnterAnimationFinish.prototype.excute = function () {
        this.pushEnterAnimationFinishEffect();
    };
    InputTile2EnterAnimationFinish.prototype.pushEnterAnimationFinishEffect = function () {
        var e = new EnterAnimationFinishEffect_1.EnterAnimationFinishEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    __decorate([
        mj.traitEvent("IptT2EtAnFi_excute")
    ], InputTile2EnterAnimationFinish.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2EtAnFi_pushEff")
    ], InputTile2EnterAnimationFinish.prototype, "pushEnterAnimationFinishEffect", null);
    return InputTile2EnterAnimationFinish;
}(InputBase_1.InputBase));
exports.default = InputTile2EnterAnimationFinish;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJFbnRlckFuaW1hdGlvbkZpbmlzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELDRFQUEyRTtBQUMzRSxvREFBbUQ7QUFDbkQ7SUFBNEQsa0RBQVM7SUFBckU7O0lBVUEsQ0FBQztJQVJDLCtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUVBQThCLEdBQTlCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSx1REFBMEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFQRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7Z0VBR25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3dGQUlwQztJQUNILHFDQUFDO0NBVkQsQUFVQyxDQVYyRCxxQkFBUyxHQVVwRTtrQkFWb0IsOEJBQThCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0IH0gZnJvbSAnLi4vRW50ZXJBbmltYXRpb25GaW5pc2hFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUyRW50ZXJBbmltYXRpb25GaW5pc2ggZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIklwdFQyRXRBbkZpX2V4Y3V0ZVwiKVxuICBleGN1dGUoKSB7XG4gICAgdGhpcy5wdXNoRW50ZXJBbmltYXRpb25GaW5pc2hFZmZlY3QoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyRXRBbkZpX3B1c2hFZmZcIilcbiAgcHVzaEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEVudGVyQW5pbWF0aW9uRmluaXNoRWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuU2VyaWFsKTtcbiAgfVxufSJdfQ==
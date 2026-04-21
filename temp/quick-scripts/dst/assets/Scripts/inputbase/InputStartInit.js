
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputStartInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee73b4LsJlLHa3bLcGX7vM3', 'InputStartInit');
// Scripts/inputbase/InputStartInit.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var StartInitEffect_1 = require("../StartInitEffect");
var InputBase_1 = require("./InputBase");
var InputStartInit = /** @class */ (function (_super) {
    __extends(InputStartInit, _super);
    function InputStartInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputStartInit.prototype.excute = function () {
        this.pushStartInitEffect();
    };
    InputStartInit.prototype.pushStartInitEffect = function () {
        var e = new StartInitEffect_1.StartInitEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    return InputStartInit;
}(InputBase_1.InputBase));
exports.default = InputStartInit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dFN0YXJ0SW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELHNEQUFxRDtBQUNyRCx5Q0FBd0M7QUFDeEM7SUFBNEMsa0NBQVM7SUFBckQ7O0lBUUEsQ0FBQztJQVBDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsNENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjJDLHFCQUFTLEdBUXBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IFN0YXJ0SW5pdEVmZmVjdCB9IGZyb20gJy4uL1N0YXJ0SW5pdEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFN0YXJ0SW5pdCBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZSgpIHtcbiAgICB0aGlzLnB1c2hTdGFydEluaXRFZmZlY3QoKTtcbiAgfVxuICBwdXNoU3RhcnRJbml0RWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IFN0YXJ0SW5pdEVmZmVjdCh7fSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlNlcmlhbCk7XG4gIH1cbn0iXX0=
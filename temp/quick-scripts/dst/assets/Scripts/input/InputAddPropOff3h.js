
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputAddPropOff3h.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97b06R1HFdB4Jpzh9AhbYjf', 'InputAddPropOff3h');
// Scripts/input/InputAddPropOff3h.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var AddPropOff3hEffect_1 = require("../AddPropOff3hEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputAddPropOff3h = /** @class */ (function (_super) {
    __extends(InputAddPropOff3h, _super);
    function InputAddPropOff3h() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAddPropOff3h.prototype.excute = function (e) {
        this.pushEffect(new AddPropOff3hEffect_1.AddPropOff3hEffect({
            action: e.type
        }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputAddPropOff3h;
}(InputBase_1.InputBase));
exports.default = InputAddPropOff3h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0QWRkUHJvcE9mZjNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsNERBQTJEO0FBQzNELG9EQUFtRDtBQUNuRDtJQUErQyxxQ0FBUztJQUF4RDs7SUFNQSxDQUFDO0lBTEMsa0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksdUNBQWtCLENBQUM7WUFDckMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJO1NBQ2YsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTjhDLHFCQUFTLEdBTXZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEFkZFByb3BPZmYzaEVmZmVjdCB9IGZyb20gJy4uL0FkZFByb3BPZmYzaEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0QWRkUHJvcE9mZjNoIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB0aGlzLnB1c2hFZmZlY3QobmV3IEFkZFByb3BPZmYzaEVmZmVjdCh7XG4gICAgICBhY3Rpb246IGUudHlwZVxuICAgIH0pLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=
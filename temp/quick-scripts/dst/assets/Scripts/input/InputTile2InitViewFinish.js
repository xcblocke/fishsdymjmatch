
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2InitViewFinish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2df45KVm3pBc6xPe4SjecK6', 'InputTile2InitViewFinish');
// Scripts/input/InputTile2InitViewFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitViewFinish = /** @class */ (function (_super) {
    __extends(InputTile2InitViewFinish, _super);
    function InputTile2InitViewFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitViewFinish.prototype.excute = function () {
        mj.EventManager.emit(Config_1.HIDELOADING, this);
    };
    return InputTile2InitViewFinish;
}(InputBase_1.InputBase));
exports.default = InputTile2InitViewFinish;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJJbml0Vmlld0ZpbmlzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQXdDO0FBQ3hDLG9EQUFtRDtBQUNuRDtJQUFzRCw0Q0FBUztJQUEvRDs7SUFJQSxDQUFDO0lBSEMseUNBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSnFELHFCQUFTLEdBSTlEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSElERUxPQURJTkcgfSBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUySW5pdFZpZXdGaW5pc2ggZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoSElERUxPQURJTkcsIHRoaXMpO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineDragCardEffect/Scripts/DragCardEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '298cbu/7s1A+ZtoeTFgxI5e', 'DragCardEffect');
// subpackages/r_valentineDragCardEffect/Scripts/DragCardEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DragCardEffect = /** @class */ (function (_super) {
    __extends(DragCardEffect, _super);
    function DragCardEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragCardEffect.prefabUrl = "prefabs/DragCardEffect1";
    DragCardEffect.bundleName = "r_valentineDragCardEffect";
    DragCardEffect = __decorate([
        mj.class
    ], DragCardEffect);
    return DragCardEffect;
}(BaseUI_1.default));
exports.default = DragCardEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0L1NjcmlwdHMvRHJhZ0NhcmRFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRDtJQUE0QyxrQ0FBTTtJQUFsRDs7SUFHQSxDQUFDO0lBRlEsd0JBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyx5QkFBVSxHQUFHLDJCQUEyQixDQUFDO0lBRjdCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBR2xDO0lBQUQscUJBQUM7Q0FIRCxBQUdDLENBSDJDLGdCQUFNLEdBR2pEO2tCQUhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnQ2FyZEVmZmVjdCBleHRlbmRzIEJhc2VVSSB7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvRHJhZ0NhcmRFZmZlY3QxXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX3ZhbGVudGluZURyYWdDYXJkRWZmZWN0XCI7XG59Il19
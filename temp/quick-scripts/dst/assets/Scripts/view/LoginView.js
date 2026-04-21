
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/LoginView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cdcaKb6WdM9LB9D/y1CfOq', 'LoginView');
// Scripts/view/LoginView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginView.prefabUrl = "prefabs/login/Login";
    LoginView = __decorate([
        mj.class
    ], LoginView);
    return LoginView;
}(UIView_1.default));
exports.default = LoginView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvTG9naW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUM7SUFBdUMsNkJBQU07SUFBN0M7O0lBRUEsQ0FBQztJQURRLG1CQUFTLEdBQUcscUJBQXFCLENBQUM7SUFEdEIsU0FBUztRQUQ3QixFQUFFLENBQUMsS0FBSztPQUNZLFNBQVMsQ0FFN0I7SUFBRCxnQkFBQztDQUZELEFBRUMsQ0FGc0MsZ0JBQU0sR0FFNUM7a0JBRm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2xvZ2luL0xvZ2luXCI7XG59Il19
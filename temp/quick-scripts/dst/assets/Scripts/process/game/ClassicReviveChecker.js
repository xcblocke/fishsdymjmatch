
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/game/ClassicReviveChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2036K68H9B15PIiHu1lcMO', 'ClassicReviveChecker');
// Scripts/process/game/ClassicReviveChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClassicReviveChecker = /** @class */ (function (_super) {
    __extends(ClassicReviveChecker, _super);
    function ClassicReviveChecker(t) {
        return _super.call(this, t) || this;
    }
    ClassicReviveChecker.prototype.canRevive = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("ClcRevChk_canRevive")
    ], ClassicReviveChecker.prototype, "canRevive", null);
    return ClassicReviveChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClassicReviveChecker = ClassicReviveChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljUmV2aXZlQ2hlY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RDtJQUEwQyx3Q0FBYztJQUN0RCw4QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFGRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7eURBR3BDO0lBQ0gsMkJBQUM7Q0FSRCxBQVFDLENBUnlDLCtCQUFjLEdBUXZEO0FBUlksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgQ2xhc3NpY1Jldml2ZUNoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsY1JldkNoa19jYW5SZXZpdmVcIilcbiAgY2FuUmV2aXZlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==
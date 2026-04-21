"use strict";
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
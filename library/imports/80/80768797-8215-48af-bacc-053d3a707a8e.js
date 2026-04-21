"use strict";
cc._RF.push(module, '80768eXghVIr7rMBT06cHqO', 'ComboChecker');
// Scripts/process/combo/ComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ComboChecker = /** @class */ (function (_super) {
    __extends(ComboChecker, _super);
    function ComboChecker(t) {
        return _super.call(this, t) || this;
    }
    ComboChecker.prototype.getShowLimit = function () {
        return 3;
    };
    ComboChecker.prototype.canShowCombo = function () {
        var e = this.context.getGameData();
        return !!UserModel_1.default.getInstance().isGuideFinished() && e.getComboNum() >= this.getShowLimit();
    };
    ComboChecker.prototype.getBreakLimit = function () {
        return 1;
    };
    ComboChecker.prototype.canBreakCombo = function () {
        return this.context.getGameData().getLockClickCount() >= this.getBreakLimit();
    };
    __decorate([
        mj.traitEvent("ComboChk_canShowCombo")
    ], ComboChecker.prototype, "canShowCombo", null);
    __decorate([
        mj.traitEvent("ComboChk_canBreakCb")
    ], ComboChecker.prototype, "canBreakCombo", null);
    return ComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ComboChecker = ComboChecker;

cc._RF.pop();
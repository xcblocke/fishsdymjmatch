"use strict";
cc._RF.push(module, 'fc9ea3+Yb1FAq6B53QEk0l1', 'ClearChecker');
// Scripts/process/clear/ClearChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClearChecker = /** @class */ (function (_super) {
    __extends(ClearChecker, _super);
    function ClearChecker(t) {
        return _super.call(this, t) || this;
    }
    ClearChecker.prototype.checkCanClear2 = function () {
        return this._context.getTileMapObject().canClear();
    };
    ClearChecker.prototype.checkCanClear = function (e) {
        return this._context.getTileMapObject().canClear(e);
    };
    return ClearChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClearChecker = ClearChecker;

cc._RF.pop();
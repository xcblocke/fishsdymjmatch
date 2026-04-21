"use strict";
cc._RF.push(module, 'd2d3fHcTDhG6J3/NUhVjlAf', 'DuoxiaoModifier');
// Scripts/process/tileTypes/DuoxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var DuoxiaoModifier = /** @class */ (function (_super) {
    __extends(DuoxiaoModifier, _super);
    function DuoxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoModifier.prototype.modifyDuoxiaoClearCount = function (e) {
        var t = this._context.getDuoxiaoClearCount() + e;
        this._context.setDuoxiaoClearCount(t);
    };
    DuoxiaoModifier.prototype.resetDuoxiaoClearCount = function () {
        this._context.setDuoxiaoClearCount(0);
    };
    DuoxiaoModifier.prototype.decreaseDuoxiaoClearCount = function () {
        this._context.setDuoxiaoClearCount(this._context.getDuoxiaoClearCount() - 1);
    };
    return DuoxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DuoxiaoModifier;

cc._RF.pop();
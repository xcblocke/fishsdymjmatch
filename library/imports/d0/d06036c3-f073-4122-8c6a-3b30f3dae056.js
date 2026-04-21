"use strict";
cc._RF.push(module, 'd0603bD8HNBIoxqOzDz2uBW', 'ChainMultiPlusCoordSel');
// Scripts/ChainMultiPlusCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainMultiPlusCoordSel = void 0;
var ChainMultiCoordSel_1 = require("./ChainMultiCoordSel");
var ChainMultiPlusCoordSel = /** @class */ (function (_super) {
    __extends(ChainMultiPlusCoordSel, _super);
    function ChainMultiPlusCoordSel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChainMultiPlusCoordSel.prototype.calculatePriority = function (t, o, n) {
        return _super.prototype.calculatePriority.call(this, t, o, n);
    };
    return ChainMultiPlusCoordSel;
}(ChainMultiCoordSel_1.ChainMultiCoordSel));
exports.ChainMultiPlusCoordSel = ChainMultiPlusCoordSel;

cc._RF.pop();
"use strict";
cc._RF.push(module, '8993fHiJXpEsbGEW/4ASW33', 'DifficultyDecisionCoordSel');
// Scripts/DifficultyDecisionCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DifficultyDecisionCoordSel = void 0;
var ChainMultiCoordSel_1 = require("./ChainMultiCoordSel");
var DifficultyDecisionCoordSel = /** @class */ (function (_super) {
    __extends(DifficultyDecisionCoordSel, _super);
    function DifficultyDecisionCoordSel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DifficultyDecisionCoordSel.prototype.calculatePriority = function (t, o, n) {
        return _super.prototype.calculatePriority.call(this, t, o, n);
    };
    return DifficultyDecisionCoordSel;
}(ChainMultiCoordSel_1.ChainMultiCoordSel));
exports.DifficultyDecisionCoordSel = DifficultyDecisionCoordSel;

cc._RF.pop();
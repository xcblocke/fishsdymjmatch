"use strict";
cc._RF.push(module, '69536qiZ09GvZCi9v0e1zEy', 'RandomCoordSel');
// Scripts/RandomCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCoordSel = void 0;
var RandomCoordSel = /** @class */ (function () {
    function RandomCoordSel() {
    }
    RandomCoordSel.prototype.calculatePriority = function () {
        return {
            priority: 1,
            subScore: Math.random()
        };
    };
    return RandomCoordSel;
}());
exports.RandomCoordSel = RandomCoordSel;

cc._RF.pop();
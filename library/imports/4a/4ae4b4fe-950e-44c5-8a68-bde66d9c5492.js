"use strict";
cc._RF.push(module, '4ae4bT+lQ5ExYpoveZtnFSS', 'SameZCoordSel');
// Scripts/SameZCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SameZCoordSel = void 0;
var SameZCoordSel = /** @class */ (function () {
    function SameZCoordSel() {
    }
    SameZCoordSel.prototype.calculatePriority = function (e, t) {
        return e.layer === t.layer ? {
            priority: 2,
            subScore: Math.random()
        } : {
            priority: 1,
            subScore: Math.random()
        };
    };
    return SameZCoordSel;
}());
exports.SameZCoordSel = SameZCoordSel;

cc._RF.pop();
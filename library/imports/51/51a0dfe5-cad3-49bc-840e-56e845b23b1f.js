"use strict";
cc._RF.push(module, '51a0d/lytNJvIQOVuhFsjsf', 'RandomCharSel');
// Scripts/RandomCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomCharSel = void 0;
var RandomCharSel = /** @class */ (function () {
    function RandomCharSel() {
    }
    RandomCharSel.prototype.selectCharacterPair = function (e, t, o) {
        return Math.floor(Math.random() * o.length);
    };
    return RandomCharSel;
}());
exports.RandomCharSel = RandomCharSel;

cc._RF.pop();
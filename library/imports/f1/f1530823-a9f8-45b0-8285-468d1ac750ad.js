"use strict";
cc._RF.push(module, 'f1530gjqfhFsIKFRo0ax1Ct', 'ICharSelection');
// Scripts/ICharSelection.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.weightedRandomSelect = void 0;
var weightedRandomSelect = function (e) {
    for (var t = e.reduce(function (e, t) {
        return e + t;
    }, 0), o = Math.random() * t, n = 0; n < e.length; n++)
        if ((o -= e[n]) <= 0)
            return n;
    return e.length - 1;
};
exports.weightedRandomSelect = weightedRandomSelect;

cc._RF.pop();
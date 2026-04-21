"use strict";
cc._RF.push(module, 'f574eAhyQZJb4iMJhid8uAI', 'ScreenUtils');
// Scripts/gamePlay/analyze/ScreenUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ScreenUtils = /** @class */ (function () {
    function ScreenUtils() {
    }
    ScreenUtils.getPhysicalWidthInInches = function () {
        return this.getPhysicalSize().width;
    };
    ScreenUtils.getPhysicalHeightInInches = function () {
        return this.getPhysicalSize().height;
    };
    ScreenUtils.getPhysicalDiagonalInInches = function () {
        return this.getPhysicalSize().diagonal;
    };
    ScreenUtils.getPhysicalSize = function () {
        var e = cc.view.getFrameSize(), t = e.width, o = e.height, n = this.getDPI(), i = t / n, r = o / n, a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
        return {
            width: parseFloat(i.toFixed(2)),
            height: parseFloat(r.toFixed(2)),
            diagonal: parseFloat(a.toFixed(2)),
            dpi: n
        };
    };
    ScreenUtils.getDPI = function () {
        return 96;
    };
    return ScreenUtils;
}());
exports.default = ScreenUtils;

cc._RF.pop();
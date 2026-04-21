
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RandomCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JhbmRvbUNoYXJTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhDLDJDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSYW5kb21DaGFyU2VsIHtcbiAgc2VsZWN0Q2hhcmFjdGVyUGFpcihlLCB0LCBvKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG8ubGVuZ3RoKTtcbiAgfVxufSJdfQ==
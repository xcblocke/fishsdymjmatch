
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ICharSelection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lDaGFyU2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBSSxvQkFBb0IsR0FBRyxVQUFVLENBQUM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7SUFDekYsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFMUyxRQUFBLG9CQUFvQix3QkFLN0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHdlaWdodGVkUmFuZG9tU2VsZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgZm9yICh2YXIgdCA9IGUucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSArIHQ7XG4gICAgfSwgMCksIG8gPSBNYXRoLnJhbmRvbSgpICogdCwgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSBpZiAoKG8gLT0gZVtuXSkgPD0gMCkgcmV0dXJuIG47XG4gIHJldHVybiBlLmxlbmd0aCAtIDE7XG59OyJdfQ==
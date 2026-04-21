
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SameZCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NhbWVaQ29vcmRTZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBVUEsQ0FBQztJQVRDLHlDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQztZQUNGLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2FtZVpDb29yZFNlbCB7XG4gIGNhbGN1bGF0ZVByaW9yaXR5KGUsIHQpIHtcbiAgICByZXR1cm4gZS5sYXllciA9PT0gdC5sYXllciA/IHtcbiAgICAgIHByaW9yaXR5OiAyLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9IDoge1xuICAgICAgcHJpb3JpdHk6IDEsXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH07XG4gIH1cbn0iXX0=
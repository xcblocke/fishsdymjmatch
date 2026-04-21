
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PredDepthCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0f59cmqCRF8KgSR53Re9P1', 'PredDepthCoordSel');
// Scripts/PredDepthCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PredDepthCoordSel = void 0;
var PredDepthCoordSel = /** @class */ (function () {
    function PredDepthCoordSel() {
    }
    PredDepthCoordSel.prototype.calculatePriority = function (e, t, o) {
        var n = o.tileToCoord(e), i = o.tileToCoord(t), r = o.getTopologyLevel(n), a = o.getTopologyLevel(i), l = 1;
        r === a && (l *= 10);
        r + a <= 2 && (l *= 3);
        return {
            priority: l,
            subScore: Math.random()
        };
    };
    return PredDepthCoordSel;
}());
exports.PredDepthCoordSel = PredDepthCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1ByZWREZXB0aENvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQWNBLENBQUM7SUFiQyw2Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJlZERlcHRoQ29vcmRTZWwge1xuICBjYWxjdWxhdGVQcmlvcml0eShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBvLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgaSA9IG8udGlsZVRvQ29vcmQodCksXG4gICAgICByID0gby5nZXRUb3BvbG9neUxldmVsKG4pLFxuICAgICAgYSA9IG8uZ2V0VG9wb2xvZ3lMZXZlbChpKSxcbiAgICAgIGwgPSAxO1xuICAgIHIgPT09IGEgJiYgKGwgKj0gMTApO1xuICAgIHIgKyBhIDw9IDIgJiYgKGwgKj0gMyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW9yaXR5OiBsLFxuICAgICAgc3ViU2NvcmU6IE1hdGgucmFuZG9tKClcbiAgICB9O1xuICB9XG59Il19
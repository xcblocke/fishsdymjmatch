
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RandomCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JhbmRvbUNvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQU9BLENBQUM7SUFOQywwQ0FBaUIsR0FBakI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSYW5kb21Db29yZFNlbCB7XG4gIGNhbGN1bGF0ZVByaW9yaXR5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmlvcml0eTogMSxcbiAgICAgIHN1YlNjb3JlOiBNYXRoLnJhbmRvbSgpXG4gICAgfTtcbiAgfVxufSJdfQ==
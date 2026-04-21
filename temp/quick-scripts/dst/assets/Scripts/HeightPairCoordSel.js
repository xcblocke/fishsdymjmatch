
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HeightPairCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fceejY2UdCsYX/gZof07Dw', 'HeightPairCoordSel');
// Scripts/HeightPairCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightPairCoordSel = void 0;
var HeightPairCoordSel = /** @class */ (function () {
    function HeightPairCoordSel() {
    }
    HeightPairCoordSel.prototype.calculatePriority = function (e, t) {
        return {
            priority: 50 * (e.layer + t.layer),
            subScore: Math.random()
        };
    };
    return HeightPairCoordSel;
}());
exports.HeightPairCoordSel = HeightPairCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hlaWdodFBhaXJDb29yZFNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBTkMsOENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLE9BQU87WUFDTCxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIZWlnaHRQYWlyQ29vcmRTZWwge1xuICBjYWxjdWxhdGVQcmlvcml0eShlLCB0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW9yaXR5OiA1MCAqIChlLmxheWVyICsgdC5sYXllciksXG4gICAgICBzdWJTY29yZTogTWF0aC5yYW5kb20oKVxuICAgIH07XG4gIH1cbn0iXX0=
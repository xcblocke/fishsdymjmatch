
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UiUtils/ShuffleUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce45a4NqJNN4JmU6arTKM5f', 'ShuffleUtils');
// Scripts/UiUtils/ShuffleUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var ShuffleUtils = /** @class */ (function () {
    function ShuffleUtils() {
    }
    ShuffleUtils.getPrePlayTime = function () {
        return 0;
    };
    ShuffleUtils.playRefreshAnimation = function (e, t, o) {
        if (e && e.gameView && e.gameView.nodeTopEffectRoot) {
            t || (t = "spine/shuffle/gameplay_refresh");
            var n = BaseSpine_1.default.create(t, "in", 1, null, true, o);
            n.node.parent = e.gameView.nodeTopEffectRoot;
            n.node.position = cc.v3(0, 0, 0);
        }
    };
    ShuffleUtils.onShuffleStayStartPlay = function () { };
    __decorate([
        mj.traitEvent("ShuffUts_getPreTime")
    ], ShuffleUtils, "getPrePlayTime", null);
    __decorate([
        mj.traitEvent("ShuffUts_playRAnim")
    ], ShuffleUtils, "playRefreshAnimation", null);
    __decorate([
        mj.traitEvent("ShuffUts_startPlay")
    ], ShuffleUtils, "onShuffleStayStartPlay", null);
    return ShuffleUtils;
}());
exports.default = ShuffleUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VpVXRpbHMvU2h1ZmZsZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQ7SUFBQTtJQWdCQSxDQUFDO0lBZFEsMkJBQWMsR0FBckI7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxpQ0FBb0IsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNuRCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVNLG1DQUFzQixHQUE3QixjQUFpQyxDQUFDO0lBYmxDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs0Q0FHcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7a0RBUW5DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO29EQUNGO0lBQ3BDLG1CQUFDO0NBaEJELEFBZ0JDLElBQUE7a0JBaEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVmZmxlVXRpbHMge1xuICBAbWoudHJhaXRFdmVudChcIlNodWZmVXRzX2dldFByZVRpbWVcIilcbiAgc3RhdGljIGdldFByZVBsYXlUaW1lKCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2h1ZmZVdHNfcGxheVJBbmltXCIpXG4gIHN0YXRpYyBwbGF5UmVmcmVzaEFuaW1hdGlvbihlLCB0LCBvKSB7XG4gICAgaWYgKGUgJiYgZS5nYW1lVmlldyAmJiBlLmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290KSB7XG4gICAgICB0IHx8ICh0ID0gXCJzcGluZS9zaHVmZmxlL2dhbWVwbGF5X3JlZnJlc2hcIik7XG4gICAgICB2YXIgbiA9IEJhc2VTcGluZS5jcmVhdGUodCwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBvKTtcbiAgICAgIG4ubm9kZS5wYXJlbnQgPSBlLmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICAgICAgbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2h1ZmZVdHNfc3RhcnRQbGF5XCIpXG4gIHN0YXRpYyBvblNodWZmbGVTdGF5U3RhcnRQbGF5KCkge31cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tileTypes/DuoxiaoModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2d3fHcTDhG6J3/NUhVjlAf', 'DuoxiaoModifier');
// Scripts/process/tileTypes/DuoxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var DuoxiaoModifier = /** @class */ (function (_super) {
    __extends(DuoxiaoModifier, _super);
    function DuoxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoModifier.prototype.modifyDuoxiaoClearCount = function (e) {
        var t = this._context.getDuoxiaoClearCount() + e;
        this._context.setDuoxiaoClearCount(t);
    };
    DuoxiaoModifier.prototype.resetDuoxiaoClearCount = function () {
        this._context.setDuoxiaoClearCount(0);
    };
    DuoxiaoModifier.prototype.decreaseDuoxiaoClearCount = function () {
        this._context.setDuoxiaoClearCount(this._context.getDuoxiaoClearCount() - 1);
    };
    return DuoxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DuoxiaoModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZVR5cGVzL0R1b3hpYW9Nb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQTZDLG1DQUFjO0lBQTNEOztJQVdBLENBQUM7SUFWQyxpREFBdUIsR0FBdkIsVUFBd0IsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGdEQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELG1EQUF5QixHQUF6QjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDSCxzQkFBQztBQUFELENBWEEsQUFXQyxDQVg0QywrQkFBYyxHQVcxRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVveGlhb01vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBtb2RpZnlEdW94aWFvQ2xlYXJDb3VudChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9jb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KCkgKyBlO1xuICAgIHRoaXMuX2NvbnRleHQuc2V0RHVveGlhb0NsZWFyQ291bnQodCk7XG4gIH1cbiAgcmVzZXREdW94aWFvQ2xlYXJDb3VudCgpIHtcbiAgICB0aGlzLl9jb250ZXh0LnNldER1b3hpYW9DbGVhckNvdW50KDApO1xuICB9XG4gIGRlY3JlYXNlRHVveGlhb0NsZWFyQ291bnQoKSB7XG4gICAgdGhpcy5fY29udGV4dC5zZXREdW94aWFvQ2xlYXJDb3VudCh0aGlzLl9jb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KCkgLSAxKTtcbiAgfVxufSJdfQ==
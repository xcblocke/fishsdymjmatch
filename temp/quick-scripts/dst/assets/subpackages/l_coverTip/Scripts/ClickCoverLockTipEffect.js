
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coverTip/Scripts/ClickCoverLockTipEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e331eGfN4tFkqAPNGQXSZtf', 'ClickCoverLockTipEffect');
// subpackages/l_coverTip/Scripts/ClickCoverLockTipEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickCoverLockTipEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var ClickCoverLockTipEffect = /** @class */ (function (_super) {
    __extends(ClickCoverLockTipEffect, _super);
    function ClickCoverLockTipEffect(e) {
        var _this = _super.call(this, e) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClickCoverLockTip;
        _this._data = null;
        _this._data = e;
        return _this;
    }
    Object.defineProperty(ClickCoverLockTipEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClickCoverLockTipEffect;
}(BaseEffect_1.default));
exports.ClickCoverLockTipEffect = ClickCoverLockTipEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvdmVyVGlwL1NjcmlwdHMvQ2xpY2tDb3ZlckxvY2tUaXBFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsOEVBQTZFO0FBQzdFO0lBQTZDLDJDQUFVO0lBTXJELGlDQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLGlCQUFpQixDQUFDO1FBQzNDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLHlDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCw4QkFBQztBQUFELENBVkEsQUFVQyxDQVY0QyxvQkFBVSxHQVV0RDtBQVZZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmFzZUVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuZXhwb3J0IGNsYXNzIENsaWNrQ292ZXJMb2NrVGlwRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5DbGlja0NvdmVyTG9ja1RpcDtcbiAgX2RhdGEgPSBudWxsO1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgc3VwZXIoZSk7XG4gICAgdGhpcy5fZGF0YSA9IGU7XG4gIH1cbn0iXX0=
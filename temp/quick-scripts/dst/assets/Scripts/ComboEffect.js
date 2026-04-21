
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ComboEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b2f1b0FUtIf4ntkegwrMKg', 'ComboEffect');
// Scripts/ComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ComboEffect = /** @class */ (function (_super) {
    __extends(ComboEffect, _super);
    function ComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ComboEffect;
}(BaseEffect_1.default));
exports.ComboEffect = ComboEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbWJvRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlELDJDQUFzQztBQUN0QztJQUFpQywrQkFBVTtJQU16QyxxQkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDckMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksNkJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILGtCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmdDLG9CQUFVLEdBVTFDO0FBVlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBDb21ib0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVXBkYXRlQ29tYm87XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
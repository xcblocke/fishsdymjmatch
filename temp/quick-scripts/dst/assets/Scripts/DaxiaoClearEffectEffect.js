
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DaxiaoClearEffectEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'deaddTOEphOGa+C3BT7cgPU', 'DaxiaoClearEffectEffect');
// Scripts/DaxiaoClearEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DaxiaoClearEffectEffect = /** @class */ (function (_super) {
    __extends(DaxiaoClearEffectEffect, _super);
    function DaxiaoClearEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DaxiaoClearEffectEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DaxiaoClearEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DaxiaoClearEffectEffect;
}(BaseEffect_1.default));
exports.DaxiaoClearEffectEffect = DaxiaoClearEffectEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RheGlhb0NsZWFyRWZmZWN0RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlELDJDQUFzQztBQUN0QztJQUE2QywyQ0FBVTtJQU1yRCxpQ0FBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztRQUNqRCxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSx5Q0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsOEJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWNEMsb0JBQVUsR0FVdEQ7QUFWWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3Q7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
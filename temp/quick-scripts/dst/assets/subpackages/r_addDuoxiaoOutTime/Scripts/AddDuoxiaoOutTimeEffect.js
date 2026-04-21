
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f21aUIT3JEIboHJxxlmGgw', 'AddDuoxiaoOutTimeEffect');
// subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDuoxiaoOutTimeEffect = exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR = "addDuoxiaoOutTime";
var AddDuoxiaoOutTimeEffect = /** @class */ (function (_super) {
    __extends(AddDuoxiaoOutTimeEffect, _super);
    function AddDuoxiaoOutTimeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddDuoxiaoOutTimeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddDuoxiaoOutTimeEffect;
}(BaseEffect_1.default));
exports.AddDuoxiaoOutTimeEffect = AddDuoxiaoOutTimeEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FkZER1b3hpYW9PdXRUaW1lL1NjcmlwdHMvQWRkRHVveGlhb091dFRpbWVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDMUMsUUFBQSw2QkFBNkIsR0FBRyxtQkFBbUIsQ0FBQztBQUMvRDtJQUE2QywyQ0FBVTtJQU1yRCxpQ0FBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxxQ0FBNkIsQ0FBQztRQUN0QyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSx5Q0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsOEJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWNEMsb0JBQVUsR0FVdEQ7QUFWWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IHZhciBBRERfRFVPWElBT19PVVRfVElNRV9CRUhBVklPUiA9IFwiYWRkRHVveGlhb091dFRpbWVcIjtcbmV4cG9ydCBjbGFzcyBBZGREdW94aWFvT3V0VGltZUVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEFERF9EVU9YSUFPX09VVF9USU1FX0JFSEFWSU9SO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_normalNewRecord/Scripts/NormalNewRecordEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7cc6fRt1b9IX4xQxieXN2ut', 'NormalNewRecordEffect');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalNewRecordEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var NormalNewRecordEffect = /** @class */ (function (_super) {
    __extends(NormalNewRecordEffect, _super);
    function NormalNewRecordEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.NormalNewRecord;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(NormalNewRecordEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return NormalNewRecordEffect;
}(BaseEffect_1.default));
exports.NormalNewRecordEffect = NormalNewRecordEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX25vcm1hbE5ld1JlY29yZC9TY3JpcHRzL05vcm1hbE5ld1JlY29yZEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE2RTtBQUM3RSwwREFBcUQ7QUFDckQ7SUFBMkMseUNBQVU7SUFNbkQsK0JBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3pDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLHVDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCw0QkFBQztBQUFELENBVkEsQUFVQyxDQVYwQyxvQkFBVSxHQVVwRDtBQVZZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIE5vcm1hbE5ld1JlY29yZEVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuTm9ybWFsTmV3UmVjb3JkO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==
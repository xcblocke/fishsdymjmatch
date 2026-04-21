
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DuoxiaoComboEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11d79AQucRN9JiBrxcmxdNc', 'DuoxiaoComboEffect');
// Scripts/DuoxiaoComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DuoxiaoComboEffect = /** @class */ (function (_super) {
    __extends(DuoxiaoComboEffect, _super);
    function DuoxiaoComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DuoxiaoCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DuoxiaoComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DuoxiaoComboEffect;
}(BaseEffect_1.default));
exports.DuoxiaoComboEffect = DuoxiaoComboEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R1b3hpYW9Db21ib0VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBd0Msc0NBQVU7SUFNaEQsNEJBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3RDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLG9DQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCx5QkFBQztBQUFELENBVkEsQUFVQyxDQVZ1QyxvQkFBVSxHQVVqRDtBQVZZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIER1b3hpYW9Db21ib0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuRHVveGlhb0NvbWJvO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==
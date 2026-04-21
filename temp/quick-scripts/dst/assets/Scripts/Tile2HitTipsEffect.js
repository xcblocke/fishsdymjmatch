
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2HitTipsEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c0f60K2a5L1q7k3DvZcbZv', 'Tile2HitTipsEffect');
// Scripts/Tile2HitTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2HitTipsEffect = /** @class */ (function (_super) {
    __extends(Tile2HitTipsEffect, _super);
    function Tile2HitTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2HitTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2HitTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2HitTipsEffect;
}(BaseEffect_1.default));
exports.Tile2HitTipsEffect = Tile2HitTipsEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUySGl0VGlwc0VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBd0Msc0NBQVU7SUFNaEQsNEJBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3RDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLG9DQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCx5QkFBQztBQUFELENBVkEsQUFVQyxDQVZ1QyxvQkFBVSxHQVVqRDtBQVZZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGUySGl0VGlwc0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVGlsZTJIaXRUaXBzO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==
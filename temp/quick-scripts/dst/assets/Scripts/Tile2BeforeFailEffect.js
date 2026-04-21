
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2BeforeFailEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8757btpm2JMbLJeCQOZKJC9', 'Tile2BeforeFailEffect');
// Scripts/Tile2BeforeFailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeFailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2BeforeFailEffect = /** @class */ (function (_super) {
    __extends(Tile2BeforeFailEffect, _super);
    function Tile2BeforeFailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2BeforeFail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2BeforeFailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2BeforeFailEffect;
}(BaseEffect_1.default));
exports.Tile2BeforeFailEffect = Tile2BeforeFailEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyQmVmb3JlRmFpbEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCwyQ0FBc0M7QUFDdEM7SUFBMkMseUNBQVU7SUFNbkQsK0JBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBRVQ7UUFSRCxXQUFLLEdBQUcsbUNBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3pDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLHVDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCw0QkFBQztBQUFELENBVkEsQUFVQyxDQVYwQyxvQkFBVSxHQVVwRDtBQVZZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGUyQmVmb3JlRmFpbEVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVGlsZTJCZWZvcmVGYWlsO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==
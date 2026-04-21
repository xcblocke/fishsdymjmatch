
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UnSelectEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58386PvpJBAM7NOBh13blJV', 'UnSelectEffect');
// Scripts/UnSelectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnSelectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UnSelectEffect = /** @class */ (function (_super) {
    __extends(UnSelectEffect, _super);
    function UnSelectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UnSelect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UnSelectEffect.prototype, "tileId", {
        get: function () {
            return this._data.tileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnSelectEffect.prototype, "withAnimation", {
        get: function () {
            return this._data.withAnimation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnSelectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UnSelectEffect;
}(BaseEffect_1.default));
exports.UnSelectEffect = UnSelectEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VuU2VsZWN0RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlELDJDQUFzQztBQUN0QztJQUFvQyxrQ0FBVTtJQVk1Qyx3QkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQWRELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDbEMsV0FBSyxHQUFHLElBQUksQ0FBQztRQVlYLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBWkQsc0JBQUksa0NBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5Q0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxnQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gscUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCbUMsb0JBQVUsR0FnQjdDO0FBaEJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4vbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4vQmFzZUVmZmVjdCc7XG5leHBvcnQgY2xhc3MgVW5TZWxlY3RFZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLlVuU2VsZWN0O1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCB0aWxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEudGlsZUlkO1xuICB9XG4gIGdldCB3aXRoQW5pbWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLndpdGhBbmltYXRpb247XG4gIH1cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
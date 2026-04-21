
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearEffectEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9be02PKVFRDlqW6bP1UwBqa', 'ClearEffectEffect');
// Scripts/ClearEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClearEffectEffect = /** @class */ (function (_super) {
    __extends(ClearEffectEffect, _super);
    function ClearEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClearEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClearEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClearEffectEffect;
}(BaseEffect_1.default));
exports.ClearEffectEffect = ClearEffectEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyRWZmZWN0RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlELDJDQUFzQztBQUN0QztJQUF1QyxxQ0FBVTtJQU0vQywyQkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDckMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksbUNBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILHdCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVnNDLG9CQUFVLEdBVWhEO0FBVlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4vbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4vQmFzZUVmZmVjdCc7XG5leHBvcnQgY2xhc3MgQ2xlYXJFZmZlY3RFZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLkNsZWFyRWZmZWN0O1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelTips/Scripts/HardLevelTipsEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07b79wFo0tN0L9d+nqJc/Rp', 'HardLevelTipsEffect');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HardLevelTipsEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var HardLevelTipsEffect = /** @class */ (function (_super) {
    __extends(HardLevelTipsEffect, _super);
    function HardLevelTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.HardLevelTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(HardLevelTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return HardLevelTipsEffect;
}(BaseEffect_1.default));
exports.HardLevelTipsEffect = HardLevelTipsEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbFRpcHMvU2NyaXB0cy9IYXJkTGV2ZWxUaXBzRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELDhFQUE2RTtBQUM3RTtJQUF5Qyx1Q0FBVTtJQU1qRCw2QkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDdkMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUkscUNBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILDBCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVndDLG9CQUFVLEdBVWxEO0FBVlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlRWZmZWN0JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5leHBvcnQgY2xhc3MgSGFyZExldmVsVGlwc0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuSGFyZExldmVsVGlwcztcbiAgX2RhdGEgPSBudWxsO1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gICAgdGhpcy5fZGF0YSA9IHQ7XG4gIH1cbn0iXX0=
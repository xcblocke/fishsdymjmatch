
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2Guide/Scripts/Tile2GuideEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de27f62+k5IwbrZ/90lTeFn', 'Tile2GuideEffect');
// subpackages/l_tile2Guide/Scripts/Tile2GuideEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2GuideEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var Tile2GuideEffect = /** @class */ (function (_super) {
    __extends(Tile2GuideEffect, _super);
    function Tile2GuideEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Guide;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2GuideEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2GuideEffect;
}(BaseEffect_1.default));
exports.Tile2GuideEffect = Tile2GuideEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyR3VpZGUvU2NyaXB0cy9UaWxlMkd1aWRlRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQTZFO0FBQzdFLDBEQUFxRDtBQUNyRDtJQUFzQyxvQ0FBVTtJQU05QywwQkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDcEMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksa0NBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILHVCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVnFDLG9CQUFVLEdBVS9DO0FBVlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmFzZUVmZmVjdCc7XG5leHBvcnQgY2xhc3MgVGlsZTJHdWlkZUVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVGlsZTJHdWlkZTtcbiAgX2RhdGEgPSBudWxsO1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gICAgdGhpcy5fZGF0YSA9IHQ7XG4gIH1cbn0iXX0=
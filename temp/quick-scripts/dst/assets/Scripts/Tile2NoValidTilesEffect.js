
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2NoValidTilesEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc990tzSYxAlLSDKS7RqHdi', 'Tile2NoValidTilesEffect');
// Scripts/Tile2NoValidTilesEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoValidTilesEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2NoValidTilesEffect = /** @class */ (function (_super) {
    __extends(Tile2NoValidTilesEffect, _super);
    function Tile2NoValidTilesEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2NoValidTiles;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2NoValidTilesEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2NoValidTilesEffect;
}(BaseEffect_1.default));
exports.Tile2NoValidTilesEffect = Tile2NoValidTilesEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyTm9WYWxpZFRpbGVzRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlELDJDQUFzQztBQUN0QztJQUE2QywyQ0FBVTtJQU1yRCxpQ0FBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSx5Q0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsOEJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWNEMsb0JBQVUsR0FVdEQ7QUFWWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBUaWxlMk5vVmFsaWRUaWxlc0VmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVGlsZTJOb1ZhbGlkVGlsZXM7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
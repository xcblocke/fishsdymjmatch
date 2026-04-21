
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2SlotCardNumChangeEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b58uJbt5EYJe/ZZZtjCF7', 'Tile2SlotCardNumChangeEffect');
// Scripts/Tile2SlotCardNumChangeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotCardNumChangeEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2SlotCardNumChangeEffect = /** @class */ (function (_super) {
    __extends(Tile2SlotCardNumChangeEffect, _super);
    function Tile2SlotCardNumChangeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2SlotCardNumChange;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2SlotCardNumChangeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2SlotCardNumChangeEffect;
}(BaseEffect_1.default));
exports.Tile2SlotCardNumChangeEffect = Tile2SlotCardNumChangeEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsK0RBQThEO0FBQzlEO0lBQWtELGdEQUFVO0lBTTFELHNDQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQ2hELFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLDhDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCxtQ0FBQztBQUFELENBVkEsQUFVQyxDQVZpRCxvQkFBVSxHQVUzRDtBQVZZLG9FQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4vQmFzZUVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuZXhwb3J0IGNsYXNzIFRpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLlRpbGUyU2xvdENhcmROdW1DaGFuZ2U7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2UpdateHitTipsItemEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9d96nEYZFJZqsYwfBCt9bT', 'Tile2UpdateHitTipsItemEffect');
// Scripts/Tile2UpdateHitTipsItemEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateHitTipsItemEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2UpdateHitTipsItemEffect = /** @class */ (function (_super) {
    __extends(Tile2UpdateHitTipsItemEffect, _super);
    function Tile2UpdateHitTipsItemEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateHitTipsItem;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2UpdateHitTipsItemEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2UpdateHitTipsItemEffect;
}(BaseEffect_1.default));
exports.Tile2UpdateHitTipsItemEffect = Tile2UpdateHitTipsItemEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyVXBkYXRlSGl0VGlwc0l0ZW1FZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBOEQ7QUFDOUQsMkNBQXNDO0FBQ3RDO0lBQWtELGdEQUFVO0lBTTFELHNDQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQ2hELFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLDhDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCxtQ0FBQztBQUFELENBVkEsQUFVQyxDQVZpRCxvQkFBVSxHQVUzRDtBQVZZLG9FQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGUyVXBkYXRlSGl0VGlwc0l0ZW1FZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLlRpbGUyVXBkYXRlSGl0VGlwc0l0ZW07XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
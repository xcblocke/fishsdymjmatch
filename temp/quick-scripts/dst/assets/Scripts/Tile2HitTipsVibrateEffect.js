
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2HitTipsVibrateEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57808WOq0tBQrVBmvDmsgwT', 'Tile2HitTipsVibrateEffect');
// Scripts/Tile2HitTipsVibrateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsVibrateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2HitTipsVibrateEffect = /** @class */ (function (_super) {
    __extends(Tile2HitTipsVibrateEffect, _super);
    function Tile2HitTipsVibrateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2HitTipsVibrate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2HitTipsVibrateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2HitTipsVibrateEffect;
}(BaseEffect_1.default));
exports.Tile2HitTipsVibrateEffect = Tile2HitTipsVibrateEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUySGl0VGlwc1ZpYnJhdGVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBOEQ7QUFDOUQsMkNBQXNDO0FBQ3RDO0lBQStDLDZDQUFVO0lBTXZELG1DQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQzdDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLDJDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCxnQ0FBQztBQUFELENBVkEsQUFVQyxDQVY4QyxvQkFBVSxHQVV4RDtBQVZZLDhEQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGUySGl0VGlwc1ZpYnJhdGVFZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLlRpbGUySGl0VGlwc1ZpYnJhdGU7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
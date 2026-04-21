
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2ShuffleVibrateEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a84a2lFRrVIboEJ3lH+Rv/y', 'Tile2ShuffleVibrateEffect');
// Scripts/Tile2ShuffleVibrateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleVibrateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ShuffleVibrateEffect = /** @class */ (function (_super) {
    __extends(Tile2ShuffleVibrateEffect, _super);
    function Tile2ShuffleVibrateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ShuffleVibrate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ShuffleVibrateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ShuffleVibrateEffect;
}(BaseEffect_1.default));
exports.Tile2ShuffleVibrateEffect = Tile2ShuffleVibrateEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyU2h1ZmZsZVZpYnJhdGVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBOEQ7QUFDOUQsMkNBQXNDO0FBQ3RDO0lBQStDLDZDQUFVO0lBTXZELG1DQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQzdDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFNWCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsQ0FBQztJQU5ELHNCQUFJLDJDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFLSCxnQ0FBQztBQUFELENBVkEsQUFVQyxDQVY4QyxvQkFBVSxHQVV4RDtBQVZZLDhEQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQmFzZUVmZmVjdCBmcm9tICcuL0Jhc2VFZmZlY3QnO1xuZXhwb3J0IGNsYXNzIFRpbGUyU2h1ZmZsZVZpYnJhdGVFZmZlY3QgZXh0ZW5kcyBCYXNlRWZmZWN0IHtcbiAgX25hbWUgPSBCZWhhdmlvcnNNYXBwaW5nLlRpbGUyU2h1ZmZsZVZpYnJhdGU7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
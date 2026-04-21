
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBest/Scripts/BreakBestScoreEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9705awKaa1H0bSaa9jcEz8j', 'BreakBestScoreEffect');
// subpackages/l_classicBest/Scripts/BreakBestScoreEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakBestScoreEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BreakBestScoreEffect = /** @class */ (function (_super) {
    __extends(BreakBestScoreEffect, _super);
    function BreakBestScoreEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BreakBestScore;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BreakBestScoreEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BreakBestScoreEffect;
}(BaseEffect_1.default));
exports.BreakBestScoreEffect = BreakBestScoreEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCZXN0L1NjcmlwdHMvQnJlYWtCZXN0U2NvcmVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBNkU7QUFDN0UsMERBQXFEO0FBQ3JEO0lBQTBDLHdDQUFVO0lBTWxELDhCQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN4QyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSxzQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsMkJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWeUMsb0JBQVUsR0FVbkQ7QUFWWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBCcmVha0Jlc3RTY29yZUVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuQnJlYWtCZXN0U2NvcmU7XG4gIF9kYXRhID0gbnVsbDtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX2RhdGEgPSB0O1xuICB9XG59Il19
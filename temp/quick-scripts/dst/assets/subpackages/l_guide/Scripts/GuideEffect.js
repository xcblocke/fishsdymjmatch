
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/GuideEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7eddekr16lICask8xLBmWqM', 'GuideEffect');
// subpackages/l_guide/Scripts/GuideEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var GuideEffect = /** @class */ (function (_super) {
    __extends(GuideEffect, _super);
    function GuideEffect(e) {
        var _this = _super.call(this, e) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Guide;
        _this._data = null;
        _this._data = e;
        return _this;
    }
    Object.defineProperty(GuideEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return GuideEffect;
}(BaseEffect_1.default));
exports.GuideEffect = GuideEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvR3VpZGVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsOEVBQTZFO0FBQzdFO0lBQWlDLCtCQUFVO0lBTXpDLHFCQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLEtBQUssQ0FBQztRQUMvQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSw2QkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsa0JBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWZ0Msb0JBQVUsR0FVMUM7QUFWWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlRWZmZWN0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmFzZUVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuZXhwb3J0IGNsYXNzIEd1aWRlRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5HdWlkZTtcbiAgX2RhdGEgPSBudWxsO1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgc3VwZXIoZSk7XG4gICAgdGhpcy5fZGF0YSA9IGU7XG4gIH1cbn0iXX0=
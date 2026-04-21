
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SkipAutoMergeEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f91cdZX2ZMF6tUqNOaCt+u', 'SkipAutoMergeEffect');
// Scripts/SkipAutoMergeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAutoMergeEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var SkipAutoMergeEffect = /** @class */ (function (_super) {
    __extends(SkipAutoMergeEffect, _super);
    function SkipAutoMergeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.SkipAutoMerge;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(SkipAutoMergeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return SkipAutoMergeEffect;
}(BaseEffect_1.default));
exports.SkipAutoMergeEffect = SkipAutoMergeEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NraXBBdXRvTWVyZ2VFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBOEQ7QUFDOUQsMkNBQXNDO0FBQ3RDO0lBQXlDLHVDQUFVO0lBTWpELDZCQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLGFBQWEsQ0FBQztRQUN2QyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSxxQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsMEJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWd0Msb0JBQVUsR0FVbEQ7QUFWWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBTa2lwQXV0b01lcmdlRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5Ta2lwQXV0b01lcmdlO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufSJdfQ==
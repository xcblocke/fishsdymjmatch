
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_clearLayerWords/Scripts/ClearLayerEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09936XSPI9I75ZZTvHIRxxi', 'ClearLayerEffect');
// subpackages/r_clearLayerWords/Scripts/ClearLayerEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearLayerEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var ClearLayerEffect = /** @class */ (function (_super) {
    __extends(ClearLayerEffect, _super);
    function ClearLayerEffect(r) {
        var _this = _super.call(this, r) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClearLayer;
        _this._data = null;
        _this._data = r;
        return _this;
    }
    Object.defineProperty(ClearLayerEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClearLayerEffect;
}(BaseEffect_1.default));
exports.ClearLayerEffect = ClearLayerEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NsZWFyTGF5ZXJXb3Jkcy9TY3JpcHRzL0NsZWFyTGF5ZXJFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBNkU7QUFDN0UsMERBQXFEO0FBQ3JEO0lBQXNDLG9DQUFVO0lBTTlDLDBCQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQUVUO1FBUkQsV0FBSyxHQUFHLG1DQUFnQixDQUFDLFVBQVUsQ0FBQztRQUNwQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBTVgsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBQ2pCLENBQUM7SUFORCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBS0gsdUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWcUMsb0JBQVUsR0FVL0M7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBDbGVhckxheWVyRWZmZWN0IGV4dGVuZHMgQmFzZUVmZmVjdCB7XG4gIF9uYW1lID0gQmVoYXZpb3JzTWFwcGluZy5DbGVhckxheWVyO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHIpIHtcbiAgICBzdXBlcihyKTtcbiAgICB0aGlzLl9kYXRhID0gcjtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/clear/ClearChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc9ea3+Yb1FAq6B53QEk0l1', 'ClearChecker');
// Scripts/process/clear/ClearChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClearChecker = /** @class */ (function (_super) {
    __extends(ClearChecker, _super);
    function ClearChecker(t) {
        return _super.call(this, t) || this;
    }
    ClearChecker.prototype.checkCanClear2 = function () {
        return this._context.getTileMapObject().canClear();
    };
    ClearChecker.prototype.checkCanClear = function (e) {
        return this._context.getTileMapObject().canClear(e);
    };
    return ClearChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClearChecker = ClearChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY2xlYXIvQ2xlYXJDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQWtDLGdDQUFjO0lBQzlDLHNCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDRCxvQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWaUMsK0JBQWMsR0FVL0M7QUFWWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGNoZWNrQ2FuQ2xlYXIyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jYW5DbGVhcigpO1xuICB9XG4gIGNoZWNrQ2FuQ2xlYXIoZSkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jYW5DbGVhcihlKTtcbiAgfVxufSJdfQ==
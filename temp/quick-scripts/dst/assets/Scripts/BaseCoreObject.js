
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BaseCoreObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '762b3NzGClO1LwDGLzCOLZr', 'BaseCoreObject');
// Scripts/BaseCoreObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCoreObject = void 0;
var BaseCoreObject = /** @class */ (function () {
    function BaseCoreObject(e) {
        this._context = null;
        this._context = e;
        this.init();
    }
    Object.defineProperty(BaseCoreObject.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    BaseCoreObject.prototype.init = function () { };
    BaseCoreObject.prototype.dispose = function () { };
    return BaseCoreObject;
}());
exports.BaseCoreObject = BaseCoreObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0Jhc2VDb3JlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFLRSx3QkFBWSxDQUFDO1FBSmIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUtkLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFORCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBS0QsNkJBQUksR0FBSixjQUFRLENBQUM7SUFDVCxnQ0FBTyxHQUFQLGNBQVcsQ0FBQztJQUNkLHFCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlQ29yZU9iamVjdCB7XG4gIF9jb250ZXh0ID0gbnVsbDtcbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gIH1cbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuX2NvbnRleHQgPSBlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7fVxuICBkaXNwb3NlKCkge31cbn0iXX0=
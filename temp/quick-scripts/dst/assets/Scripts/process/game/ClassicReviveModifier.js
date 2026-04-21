
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/game/ClassicReviveModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9506aawwP5Cw4OkrAo7cDgJ', 'ClassicReviveModifier');
// Scripts/process/game/ClassicReviveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClassicReviveModifier = /** @class */ (function (_super) {
    __extends(ClassicReviveModifier, _super);
    function ClassicReviveModifier(t) {
        return _super.call(this, t) || this;
    }
    ClassicReviveModifier.prototype.modifyReviveCount = function () {
        this.context.getGameData().addReviveCount();
    };
    return ClassicReviveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClassicReviveModifier = ClassicReviveModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljUmV2aXZlTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQ7SUFBMkMseUNBQWM7SUFDdkQsK0JBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDSCw0QkFBQztBQUFELENBUEEsQUFPQyxDQVAwQywrQkFBYyxHQU94RDtBQVBZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIENsYXNzaWNSZXZpdmVNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIG1vZGlmeVJldml2ZUNvdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmFkZFJldml2ZUNvdW50KCk7XG4gIH1cbn0iXX0=
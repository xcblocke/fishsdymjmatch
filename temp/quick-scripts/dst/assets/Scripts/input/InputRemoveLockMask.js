
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputRemoveLockMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccf8fLEo6JNoqu49nb/B7pt', 'InputRemoveLockMask');
// Scripts/input/InputRemoveLockMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RemoveLockMaskEffect_1 = require("../RemoveLockMaskEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRemoveLockMask = /** @class */ (function (_super) {
    __extends(InputRemoveLockMask, _super);
    function InputRemoveLockMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRemoveLockMask.prototype.excute = function () {
        this.pushRemoveLockMaskEffect();
    };
    InputRemoveLockMask.prototype.pushRemoveLockMaskEffect = function () {
        var e = new RemoveLockMaskEffect_1.RemoveLockMaskEffect({});
        this.pushEffect(e);
    };
    return InputRemoveLockMask;
}(InputBase_1.InputBase));
exports.default = InputRemoveLockMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0UmVtb3ZlTG9ja01hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxvREFBbUQ7QUFDbkQ7SUFBaUQsdUNBQVM7SUFBMUQ7O0lBUUEsQ0FBQztJQVBDLG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsc0RBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCwwQkFBQztBQUFELENBUkEsQUFRQyxDQVJnRCxxQkFBUyxHQVF6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbW92ZUxvY2tNYXNrRWZmZWN0IH0gZnJvbSAnLi4vUmVtb3ZlTG9ja01hc2tFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFJlbW92ZUxvY2tNYXNrIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHRoaXMucHVzaFJlbW92ZUxvY2tNYXNrRWZmZWN0KCk7XG4gIH1cbiAgcHVzaFJlbW92ZUxvY2tNYXNrRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IFJlbW92ZUxvY2tNYXNrRWZmZWN0KHt9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTouchMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '879demOGKlCGYaSr519tM9O', 'InputTouchMove');
// Scripts/input/InputTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBaseTouchMove_1 = require("../inputbase/InputBaseTouchMove");
var InputTouchMove = /** @class */ (function (_super) {
    __extends(InputTouchMove, _super);
    function InputTouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchMove.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchMove.prototype.runStartMove = function (t) {
        _super.prototype.runStartMove.call(this, t);
        this.onStartMove(t);
    };
    InputTouchMove.prototype.onStartMove = function () { };
    __decorate([
        mj.traitEvent("IptTchMove_startMove")
    ], InputTouchMove.prototype, "onStartMove", null);
    return InputTouchMove;
}(InputBaseTouchMove_1.default));
exports.default = InputTouchMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VG91Y2hNb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBaUU7QUFDakU7SUFBNEMsa0NBQWtCO0lBQTlEOztJQVVBLENBQUM7SUFUQywrQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFXLEdBQVgsY0FBZSxDQUFDO0lBQWhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztxREFDdEI7SUFDbEIscUJBQUM7Q0FWRCxBQVVDLENBVjJDLDRCQUFrQixHQVU3RDtrQkFWb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dEJhc2VUb3VjaE1vdmUgZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZVRvdWNoTW92ZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRvdWNoTW92ZSBleHRlbmRzIElucHV0QmFzZVRvdWNoTW92ZSB7XG4gIGV4Y3V0ZSh0KSB7XG4gICAgc3VwZXIuZXhjdXRlLmNhbGwodGhpcywgdCk7XG4gIH1cbiAgcnVuU3RhcnRNb3ZlKHQpIHtcbiAgICBzdXBlci5ydW5TdGFydE1vdmUuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLm9uU3RhcnRNb3ZlKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VGNoTW92ZV9zdGFydE1vdmVcIilcbiAgb25TdGFydE1vdmUoKSB7fVxufSJdfQ==
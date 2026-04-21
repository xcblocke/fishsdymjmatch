
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputBaseTouchStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '586bd+CsYdAJKnqPwBvqOkn', 'InputBaseTouchStart');
// Scripts/inputbase/InputBaseTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchStart = /** @class */ (function (_super) {
    __extends(InputBaseTouchStart, _super);
    function InputBaseTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchStart.prototype.checkIsGenerating = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        return !!t && t.generating;
    };
    InputBaseTouchStart.prototype.excute = function (e) {
        var t = this.gameContext.tileSelector.touchStart(e.pos);
        this.checkIsGenerating(t) && (t = null);
        this.gameContext.touchModifier.modifyTouchStart(null != t, e.pos);
        if (t) {
            this.gameContext.touchData.setTileId(t);
            if (this.gameContext.tileChecker.checkIsLock(t)) {
                this.gameContext.touchModifier.modifyTouchStartLock(true);
                this.runLock(e, t);
            }
            else if (this.gameContext.clearChecker.checkCanClear(t)) {
                this.gameContext.getTileMapObject().selcectTileId(t, true);
                this.gameContext.touchModifier.modifyTouchStartClear(true);
                this.runClear(e, t);
            }
            else
                this.gameContext.getTileMapObject().pushActionId(t);
        }
    };
    InputBaseTouchStart.prototype.runLock = function () { };
    InputBaseTouchStart.prototype.runClear = function () { };
    return InputBaseTouchStart;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2VUb3VjaFN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEM7SUFBaUQsdUNBQVM7SUFBMUQ7O0lBdUJBLENBQUM7SUF0QkMsK0NBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JCOztnQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUNELHFDQUFPLEdBQVAsY0FBVyxDQUFDO0lBQ1osc0NBQVEsR0FBUixjQUFZLENBQUM7SUFDZiwwQkFBQztBQUFELENBdkJBLEFBdUJDLENBdkJnRCxxQkFBUyxHQXVCekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEJhc2VUb3VjaFN0YXJ0IGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgY2hlY2tJc0dlbmVyYXRpbmcoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKTtcbiAgICByZXR1cm4gISF0ICYmIHQuZ2VuZXJhdGluZztcbiAgfVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlU2VsZWN0b3IudG91Y2hTdGFydChlLnBvcyk7XG4gICAgdGhpcy5jaGVja0lzR2VuZXJhdGluZyh0KSAmJiAodCA9IG51bGwpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQudG91Y2hNb2RpZmllci5tb2RpZnlUb3VjaFN0YXJ0KG51bGwgIT0gdCwgZS5wb3MpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRvdWNoRGF0YS5zZXRUaWxlSWQodCk7XG4gICAgICBpZiAodGhpcy5nYW1lQ29udGV4dC50aWxlQ2hlY2tlci5jaGVja0lzTG9jayh0KSkge1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRvdWNoTW9kaWZpZXIubW9kaWZ5VG91Y2hTdGFydExvY2sodHJ1ZSk7XG4gICAgICAgIHRoaXMucnVuTG9jayhlLCB0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lQ29udGV4dC5jbGVhckNoZWNrZXIuY2hlY2tDYW5DbGVhcih0KSkge1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKHQsIHRydWUpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRvdWNoTW9kaWZpZXIubW9kaWZ5VG91Y2hTdGFydENsZWFyKHRydWUpO1xuICAgICAgICB0aGlzLnJ1bkNsZWFyKGUsIHQpO1xuICAgICAgfSBlbHNlIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnB1c2hBY3Rpb25JZCh0KTtcbiAgICB9XG4gIH1cbiAgcnVuTG9jaygpIHt9XG4gIHJ1bkNsZWFyKCkge31cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/combo/ComboModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a08e1g1clZDnJg4z5brIRjE', 'ComboModifier');
// Scripts/process/combo/ComboModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var ComboModifier = /** @class */ (function (_super) {
    __extends(ComboModifier, _super);
    function ComboModifier(t) {
        return _super.call(this, t) || this;
    }
    ComboModifier.prototype.addCombo = function (e) {
        this.context.getGameData().addComboNum(e);
    };
    ComboModifier.prototype.resetCombo = function () {
        this.context.getGameData().resetComboNum();
    };
    ComboModifier.prototype.lockClick = function () {
        var e = this.context.getGameData();
        e.addLockClickCount();
        var t = e.getLockClickCount();
        if (this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.context.tile2ComboChecker.checkIsBreakComboState(t) && this.tile2BreakCombo();
        }
        else {
            this.context.comboChecker.canBreakCombo() && this.breakCombo();
        }
    };
    ComboModifier.prototype.breakCombo = function () {
        this.resetCombo();
        this.context.getGameData().setHasBrokenCombo(true);
    };
    ComboModifier.prototype.tile2BreakCombo = function () {
        this.resetCombo();
        this.context.getGameData().setHasBrokenCombo(true);
    };
    ComboModifier.prototype.updateSlotLevel = function (e) {
        this.context.getGameData().setSlotLevel(e);
    };
    __decorate([
        mj.traitEvent("ComboMdf_breakCombo")
    ], ComboModifier.prototype, "breakCombo", null);
    return ComboModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ComboModifier = ComboModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY29tYm8vQ29tYm9Nb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCw2RUFBeUU7QUFDekU7SUFBbUMsaUNBQWM7SUFDL0MsdUJBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCxnQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsaUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCx1Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBVkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO21EQUlwQztJQVFILG9CQUFDO0NBaENELEFBZ0NDLENBaENrQywrQkFBYyxHQWdDaEQ7QUFoQ1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmV4cG9ydCBjbGFzcyBDb21ib01vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gIH1cbiAgYWRkQ29tYm8oZSkge1xuICAgIHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmFkZENvbWJvTnVtKGUpO1xuICB9XG4gIHJlc2V0Q29tYm8oKSB7XG4gICAgdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCkucmVzZXRDb21ib051bSgpO1xuICB9XG4gIGxvY2tDbGljaygpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgIGUuYWRkTG9ja0NsaWNrQ291bnQoKTtcbiAgICB2YXIgdCA9IGUuZ2V0TG9ja0NsaWNrQ291bnQoKTtcbiAgICBpZiAodGhpcy5jb250ZXh0LmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICB0aGlzLmNvbnRleHQudGlsZTJDb21ib0NoZWNrZXIuY2hlY2tJc0JyZWFrQ29tYm9TdGF0ZSh0KSAmJiB0aGlzLnRpbGUyQnJlYWtDb21ibygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQuY29tYm9DaGVja2VyLmNhbkJyZWFrQ29tYm8oKSAmJiB0aGlzLmJyZWFrQ29tYm8oKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDb21ib01kZl9icmVha0NvbWJvXCIpXG4gIGJyZWFrQ29tYm8oKSB7XG4gICAgdGhpcy5yZXNldENvbWJvKCk7XG4gICAgdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0SGFzQnJva2VuQ29tYm8odHJ1ZSk7XG4gIH1cbiAgdGlsZTJCcmVha0NvbWJvKCkge1xuICAgIHRoaXMucmVzZXRDb21ibygpO1xuICAgIHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldEhhc0Jyb2tlbkNvbWJvKHRydWUpO1xuICB9XG4gIHVwZGF0ZVNsb3RMZXZlbChlKSB7XG4gICAgdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0U2xvdExldmVsKGUpO1xuICB9XG59Il19
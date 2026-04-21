
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputTile2BaseTouchEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c0cbsqQxpGgYE1xyTO7Gak', 'InputTile2BaseTouchEnd');
// Scripts/inputbase/InputTile2BaseTouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchEnd = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchEnd, _super);
    function InputTile2BaseTouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchEnd.prototype.runLock = function () { };
    InputTile2BaseTouchEnd.prototype.excute = function (e) {
        if (!this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.tileId) {
                if (this.gameContext.tile2TouchData.isLock) {
                    this.runLock(e);
                    this.gameContext.tile2TouchData.clear();
                }
                else if (0 !== this.gameContext.getTileMapObject().getActionIds().length) {
                    var t = this.gameContext.tile2TouchData.isMoving;
                    if (!t && this.gameContext.tileSelector.touchStart(e.pos) != this.gameContext.tile2TouchData.tileId) {
                        this.gameContext.tile2TouchData.clear();
                        return;
                    }
                    var o = this.gameContext.tile2TouchData.tileId;
                    this.gameContext.tile2TouchData.lastTileId;
                    if (t) {
                        if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o)) {
                            this.runClear([n, o]);
                        }
                        else {
                            if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o)) {
                                this.runClear([o]);
                            }
                            else {
                                this.runResetMove();
                            }
                        }
                    }
                    else {
                        var n;
                        if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o))
                            this.runClear([n, o]);
                        else if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o))
                            this.runClear([o]);
                        else {
                            var i = this.gameContext.tile2RollCardModifier.tryBack2Front(o);
                            if (i) {
                                var r = this.gameContext.tile2RollCardModifier.modifyRollCardDatas([o]);
                                this.runRollCard(__spreadArrays([i], r));
                            }
                            else
                                this.runClear([o]);
                        }
                    }
                    this.gameContext.tile2TouchData.clear();
                    this.updateLastTileId(o, t);
                }
                else
                    this.gameContext.tile2TouchData.clear();
            }
            else
                this.gameContext.tile2TouchData.clear();
    };
    InputTile2BaseTouchEnd.prototype.checkIsValidLastTileId = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (t && t.isValid && !t.getIsInSlotBar() && t.isHasRollCard() && !t.getIsBack())
            return true;
    };
    InputTile2BaseTouchEnd.prototype.updateLastTileId = function (e) {
        if (this.checkIsValidLastTileId(e))
            this.gameContext.tile2TouchData.setLastTileId(e);
        else {
            var t = this.gameContext.tile2TouchData.lastTileId;
            this.checkIsValidLastTileId(t) || this.gameContext.tile2TouchData.setLastTileId(null);
        }
    };
    InputTile2BaseTouchEnd.prototype.runRollCard = function (e) {
        var t = this.gameContext.tile2TouchData.tileId;
        e.filter(function (e) {
            return !e.frontToBack;
        }).length > 0 && this.gameContext.tile2DotTrackerModifier.recordErrorFlip(t);
    };
    InputTile2BaseTouchEnd.prototype.runResetMove = function () { };
    InputTile2BaseTouchEnd.prototype.runClear = function () { };
    InputTile2BaseTouchEnd.prototype.checkIsSame = function () {
        return false;
    };
    return InputTile2BaseTouchEnd;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dFRpbGUyQmFzZVRvdWNoRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEM7SUFBb0QsMENBQVM7SUFBN0Q7O0lBNkRBLENBQUM7SUE1REMsd0NBQU8sR0FBUCxjQUFXLENBQUM7SUFDWix1Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO2dCQUNsRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtvQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3pDO3FCQUFNLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQzFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztvQkFDakQsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTt3QkFDbkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3hDLE9BQU87cUJBQ1I7b0JBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO29CQUMvQyxJQUFJLENB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QUN2RjtJQUNILENBQUM7SUFDRCw0Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCw2Q0FBWSxHQUFaLGNBQWdCLENBQUM7SUFDakIseUNBQVEsR0FBUixjQUFZLENBQUM7SUFDYiw0Q0FBVyxHQUFYO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdEbUQscUJBQVMsR0E2RDVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMkJhc2VUb3VjaEVuZCBleHRlbmRzIElucHV0QmFzZSB7XG4gIHJ1bkxvY2soKSB7fVxuICBleGN1dGUoZSkge1xuICAgIGlmICghdGhpcy5nYW1lQ29udGV4dC50aWxlMlJlc3VsdENoZWNrZXIuY2hlY2tJc0RlYWQoKSkgaWYgKHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEudGlsZUlkKSB7XG4gICAgICBpZiAodGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5pc0xvY2spIHtcbiAgICAgICAgdGhpcy5ydW5Mb2NrKGUpO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgICB9IGVsc2UgaWYgKDAgIT09IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldEFjdGlvbklkcygpLmxlbmd0aCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuaXNNb3Zpbmc7XG4gICAgICAgIGlmICghdCAmJiB0aGlzLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci50b3VjaFN0YXJ0KGUucG9zKSAhPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZCkge1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuY2xlYXIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZDtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5sYXN0VGlsZUlkO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIGlmIChuID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlJvbGxDYXJkQ2hlY2tlci5nZXRDbGVhcldpdGhPcGVuUm9sbENhcmQobykpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQ2xlYXIoW24sIG9dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyQ2hlY2tlci5jaGVja0NhbkNsZWFyV2l0aFRpbGVJZChvKSkge1xuICAgICAgICAgICAgICB0aGlzLnJ1bkNsZWFyKFtvXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnJ1blJlc2V0TW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICBpZiAobiA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJSb2xsQ2FyZENoZWNrZXIuZ2V0Q2xlYXJXaXRoT3BlblJvbGxDYXJkKG8pKSB0aGlzLnJ1bkNsZWFyKFtuLCBvXSk7ZWxzZSBpZiAodGhpcy5nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJDaGVja2VyLmNoZWNrQ2FuQ2xlYXJXaXRoVGlsZUlkKG8pKSB0aGlzLnJ1bkNsZWFyKFtvXSk7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJSb2xsQ2FyZE1vZGlmaWVyLnRyeUJhY2syRnJvbnQobyk7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJSb2xsQ2FyZE1vZGlmaWVyLm1vZGlmeVJvbGxDYXJkRGF0YXMoW29dKTtcbiAgICAgICAgICAgICAgdGhpcy5ydW5Sb2xsQ2FyZChbLi4uW2ldLCAuLi5yXSk7XG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5ydW5DbGVhcihbb10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdFRpbGVJZChvLCB0KTtcbiAgICAgIH0gZWxzZSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgfSBlbHNlIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuY2xlYXIoKTtcbiAgfVxuICBjaGVja0lzVmFsaWRMYXN0VGlsZUlkKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgaWYgKHQgJiYgdC5pc1ZhbGlkICYmICF0LmdldElzSW5TbG90QmFyKCkgJiYgdC5pc0hhc1JvbGxDYXJkKCkgJiYgIXQuZ2V0SXNCYWNrKCkpIHJldHVybiB0cnVlO1xuICB9XG4gIHVwZGF0ZUxhc3RUaWxlSWQoZSkge1xuICAgIGlmICh0aGlzLmNoZWNrSXNWYWxpZExhc3RUaWxlSWQoZSkpIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuc2V0TGFzdFRpbGVJZChlKTtlbHNlIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5sYXN0VGlsZUlkO1xuICAgICAgdGhpcy5jaGVja0lzVmFsaWRMYXN0VGlsZUlkKHQpIHx8IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuc2V0TGFzdFRpbGVJZChudWxsKTtcbiAgICB9XG4gIH1cbiAgcnVuUm9sbENhcmQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS50aWxlSWQ7XG4gICAgZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhZS5mcm9udFRvQmFjaztcbiAgICB9KS5sZW5ndGggPiAwICYmIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJEb3RUcmFja2VyTW9kaWZpZXIucmVjb3JkRXJyb3JGbGlwKHQpO1xuICB9XG4gIHJ1blJlc2V0TW92ZSgpIHt9XG4gIHJ1bkNsZWFyKCkge31cbiAgY2hlY2tJc1NhbWUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19
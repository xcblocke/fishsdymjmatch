
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputTile2BaseTouchStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f08f7/u2b5G1bg12Vnmqdzf', 'InputTile2BaseTouchStart');
// Scripts/inputbase/InputTile2BaseTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchStart = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchStart, _super);
    function InputTile2BaseTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchStart.prototype.checkIsGenerating = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        return !!t && t.generating;
    };
    InputTile2BaseTouchStart.prototype.excute = function (e) {
        var t = this.gameContext.tileSelector.touchStart(e.pos);
        this.checkIsGenerating(t) && (t = null);
        if (!this.gameContext.tile2ResultChecker.checkIsDead()) {
            this.gameContext.tile2TouchData.clear();
            var o = this.gameContext.tileChecker.checkIsLock(t);
            this.gameContext.tile2TouchData.setTileId(t);
            this.gameContext.tile2TouchData.setStartPos(e.pos);
            this.gameContext.tile2TouchData.setToushStartTime();
            o && this.gameContext.tile2TouchData.setIsLock(true);
            this.gameContext.getTileMapObject().pushActionId(t);
        }
    };
    return InputTile2BaseTouchStart;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dFRpbGUyQmFzZVRvdWNoU3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4QztJQUFzRCw0Q0FBUztJQUEvRDs7SUFrQkEsQ0FBQztJQWpCQyxvREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFDRCx5Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BELENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFDSCwrQkFBQztBQUFELENBbEJBLEFBa0JDLENBbEJxRCxxQkFBUyxHQWtCOUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUyQmFzZVRvdWNoU3RhcnQgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBjaGVja0lzR2VuZXJhdGluZyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGUpO1xuICAgIHJldHVybiAhIXQgJiYgdC5nZW5lcmF0aW5nO1xuICB9XG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGVTZWxlY3Rvci50b3VjaFN0YXJ0KGUucG9zKTtcbiAgICB0aGlzLmNoZWNrSXNHZW5lcmF0aW5nKHQpICYmICh0ID0gbnVsbCk7XG4gICAgaWYgKCF0aGlzLmdhbWVDb250ZXh0LnRpbGUyUmVzdWx0Q2hlY2tlci5jaGVja0lzRGVhZCgpKSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmNsZWFyKCk7XG4gICAgICB2YXIgbyA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZUNoZWNrZXIuY2hlY2tJc0xvY2sodCk7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnNldFRpbGVJZCh0KTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEuc2V0U3RhcnRQb3MoZS5wb3MpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5zZXRUb3VzaFN0YXJ0VGltZSgpO1xuICAgICAgbyAmJiB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnNldElzTG9jayh0cnVlKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnB1c2hBY3Rpb25JZCh0KTtcbiAgICB9XG4gIH1cbn0iXX0=
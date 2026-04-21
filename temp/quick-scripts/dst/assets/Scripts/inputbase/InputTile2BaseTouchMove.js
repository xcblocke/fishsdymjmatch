
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/inputbase/InputTile2BaseTouchMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2561T8uCBL9puj6MB4pWtZ', 'InputTile2BaseTouchMove');
// Scripts/inputbase/InputTile2BaseTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchMove = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchMove, _super);
    function InputTile2BaseTouchMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchMoveTimeThreshold = 90;
        _this._touchMoveDistanceThreshold = 24;
        return _this;
    }
    InputTile2BaseTouchMove.prototype.checkCanMove = function (e) {
        var t = this.gameContext.tile2TouchData.getToushStartTime();
        if (Date.now() - t < this._touchMoveTimeThreshold)
            return false;
        var o = this.gameContext.tile2TouchData.startPos;
        return !(e.clone().subtract(o).mag() < this._touchMoveDistanceThreshold);
    };
    InputTile2BaseTouchMove.prototype.excute = function (e) {
        if (this.gameContext.tile2TouchData.tileId && !this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.isLock) {
                this.runLock(e);
                this.gameContext.tile2TouchData.clear();
            }
            else {
                var t = false, o = [], n = this.gameContext.tile2TouchData.tileId;
                if (!this.gameContext.tile2TouchData.isMoving && this.checkCanMove(e.pos)) {
                    t = true;
                    o = this.gameContext.tile2RollCardModifier.getRollCardDatas(n);
                    this.gameContext.tile2TouchData.setIsMoving(true);
                    e.delta = e.pos.clone().subtract(this.gameContext.tile2TouchData.startPos);
                    this.runStartMove(e);
                }
                this.gameContext.tile2TouchData.isMoving && this.runMove(e, {
                    iFirstMove: t,
                    rollCardDatas: o
                });
            }
    };
    InputTile2BaseTouchMove.prototype.tryBack2Front = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && t.getIsBack()) {
            t.setIsBack(false);
            return {
                tileId: e,
                frontToBack: false
            };
        }
        return null;
    };
    InputTile2BaseTouchMove.prototype.tryFront2Back = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && !t.getIsBack()) {
            t.setIsBack(true);
            return {
                tileId: e,
                frontToBack: true
            };
        }
        return null;
    };
    InputTile2BaseTouchMove.prototype.runLock = function () { };
    InputTile2BaseTouchMove.prototype.runStartMove = function () { };
    InputTile2BaseTouchMove.prototype.runMove = function () { };
    return InputTile2BaseTouchMove;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dFRpbGUyQmFzZVRvdWNoTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDO0lBQXFELDJDQUFTO0lBQTlEO1FBQUEscUVBNkRDO1FBNURDLDZCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QixpQ0FBMkIsR0FBRyxFQUFFLENBQUM7O0lBMkRuQyxDQUFDO0lBMURDLDhDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QjtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUNqRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCx3Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDNUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUNYLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRCxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7b0JBQzFELFVBQVUsRUFBRSxDQUFDO29CQUNiLGFBQWEsRUFBRSxDQUFDO2lCQUNqQixDQUFDLENBQUM7YUFDSjtJQUNILENBQUM7SUFDRCwrQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFBRSxPQUFPLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPO2dCQUNMLE1BQU0sRUFBRSxDQUFDO2dCQUNULFdBQVcsRUFBRSxLQUFLO2FBQ25CLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELCtDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3ZDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTztnQkFDTCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx5Q0FBTyxHQUFQLGNBQVcsQ0FBQztJQUNaLDhDQUFZLEdBQVosY0FBZ0IsQ0FBQztJQUNqQix5Q0FBTyxHQUFQLGNBQVcsQ0FBQztJQUNkLDhCQUFDO0FBQUQsQ0E3REEsQUE2REMsQ0E3RG9ELHFCQUFTLEdBNkQ3RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4vSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJCYXNlVG91Y2hNb3ZlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgX3RvdWNoTW92ZVRpbWVUaHJlc2hvbGQgPSA5MDtcbiAgX3RvdWNoTW92ZURpc3RhbmNlVGhyZXNob2xkID0gMjQ7XG4gIGNoZWNrQ2FuTW92ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmdldFRvdXNoU3RhcnRUaW1lKCk7XG4gICAgaWYgKERhdGUubm93KCkgLSB0IDwgdGhpcy5fdG91Y2hNb3ZlVGltZVRocmVzaG9sZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5zdGFydFBvcztcbiAgICByZXR1cm4gIShlLmNsb25lKCkuc3VidHJhY3QobykubWFnKCkgPCB0aGlzLl90b3VjaE1vdmVEaXN0YW5jZVRocmVzaG9sZCk7XG4gIH1cbiAgZXhjdXRlKGUpIHtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS50aWxlSWQgJiYgIXRoaXMuZ2FtZUNvbnRleHQudGlsZTJSZXN1bHRDaGVja2VyLmNoZWNrSXNEZWFkKCkpIGlmICh0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmlzTG9jaykge1xuICAgICAgdGhpcy5ydW5Mb2NrKGUpO1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdCA9IGZhbHNlLFxuICAgICAgICBvID0gW10sXG4gICAgICAgIG4gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZDtcbiAgICAgIGlmICghdGhpcy5nYW1lQ29udGV4dC50aWxlMlRvdWNoRGF0YS5pc01vdmluZyAmJiB0aGlzLmNoZWNrQ2FuTW92ZShlLnBvcykpIHtcbiAgICAgICAgdCA9IHRydWU7XG4gICAgICAgIG8gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyUm9sbENhcmRNb2RpZmllci5nZXRSb2xsQ2FyZERhdGFzKG4pO1xuICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnNldElzTW92aW5nKHRydWUpO1xuICAgICAgICBlLmRlbHRhID0gZS5wb3MuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnN0YXJ0UG9zKTtcbiAgICAgICAgdGhpcy5ydW5TdGFydE1vdmUoZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLmlzTW92aW5nICYmIHRoaXMucnVuTW92ZShlLCB7XG4gICAgICAgIGlGaXJzdE1vdmU6IHQsXG4gICAgICAgIHJvbGxDYXJkRGF0YXM6IG9cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB0cnlCYWNrMkZyb250KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIXQuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHQuZ2V0SXNJblNsb3RCYXIoKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHQuaXNIYXNSb2xsQ2FyZCgpICYmIHQuZ2V0SXNCYWNrKCkpIHtcbiAgICAgIHQuc2V0SXNCYWNrKGZhbHNlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgZnJvbnRUb0JhY2s6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0cnlGcm9udDJCYWNrKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIXQuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHQuZ2V0SXNJblNsb3RCYXIoKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHQuaXNIYXNSb2xsQ2FyZCgpICYmICF0LmdldElzQmFjaygpKSB7XG4gICAgICB0LnNldElzQmFjayh0cnVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgZnJvbnRUb0JhY2s6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJ1bkxvY2soKSB7fVxuICBydW5TdGFydE1vdmUoKSB7fVxuICBydW5Nb3ZlKCkge31cbn0iXX0=
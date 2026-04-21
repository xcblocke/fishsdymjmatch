
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2TouchMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90256NDR5BLAYRzRb37dJ5+', 'InputTile2TouchMove');
// Scripts/input/InputTile2TouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2MoveEffect_1 = require("../Tile2MoveEffect");
var Tile2RollCardEffect_1 = require("../Tile2RollCardEffect");
var InputTile2BaseTouchMove_1 = require("../inputbase/InputTile2BaseTouchMove");
var InputTile2TouchMove = /** @class */ (function (_super) {
    __extends(InputTile2TouchMove, _super);
    function InputTile2TouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchMove.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTile2TouchMove.prototype.runStartMove = function (t) {
        _super.prototype.runStartMove.call(this, t);
        var o = this.gameContext.tile2TouchData.tileId;
        this.gameContext.getTileMapObject().getTileObject(o) && this.gameContext.tile2DotTrackerModifier.recordErrorDrag(o);
    };
    InputTile2TouchMove.prototype.runMove = function (t, o) {
        var n, i;
        _super.prototype.runMove.call(this, t, o);
        var c = o.iFirstMove, u = o.rollCardDatas, p = this.gameContext.tile2TouchData.tileId, f = this.pushNewRootEffect(this.input, "Tile2MoveEffect"), d = this.gameContext.tileSelector.getExpandMultiple();
        try {
            for (var h = __values(u), y = h.next(); !y.done; y = h.next()) {
                var m = y.value, v = m.tileId, g = m.frontToBack, _ = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: v,
                    frontToBack: g
                });
                this.pushEffect(_, BehaviorsEnum_1.EInsertType.Parallel, f.newEffectId, false);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (i = h.return) && i.call(h);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var T = new Tile2MoveEffect_1.Tile2MoveEffect({
            tileId: p,
            pos: t.pos,
            delta: t.delta,
            iFirstMove: c,
            multiple: d
        });
        this.pushEffect(T, BehaviorsEnum_1.EInsertType.Parallel, f.newEffectId, false);
    };
    InputTile2TouchMove.prototype.runLock = function (t) {
        _super.prototype.runLock.call(this, t);
        this.gameContext.inputTile2TouchRunLock.runLock(t, this);
    };
    return InputTile2TouchMove;
}(InputTile2BaseTouchMove_1.default));
exports.default = InputTile2TouchMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJUb3VjaE1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxzREFBcUQ7QUFDckQsOERBQTZEO0FBQzdELGdGQUEyRTtBQUMzRTtJQUFpRCx1Q0FBdUI7SUFBeEU7O0lBb0RBLENBQUM7SUFuREMsb0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsMENBQVksR0FBWixVQUFhLENBQUM7UUFDWixpQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBQ0QscUNBQU8sR0FBUCxVQUFRLENBQUMsRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUMxQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEQsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQ2pCLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO29CQUMxQixNQUFNLEVBQUUsQ0FBQztvQkFDVCxXQUFXLEVBQUUsQ0FBQztpQkFDZixDQUFDLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxpQ0FBZSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO1lBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1lBQ2QsVUFBVSxFQUFFLENBQUM7WUFDYixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELHFDQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsaUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDSCwwQkFBQztBQUFELENBcERBLEFBb0RDLENBcERnRCxpQ0FBdUIsR0FvRHZFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IFRpbGUyTW92ZUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyTW92ZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlJvbGxDYXJkRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJSb2xsQ2FyZEVmZmVjdCc7XG5pbXBvcnQgSW5wdXRUaWxlMkJhc2VUb3VjaE1vdmUgZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0VGlsZTJCYXNlVG91Y2hNb3ZlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJUb3VjaE1vdmUgZXh0ZW5kcyBJbnB1dFRpbGUyQmFzZVRvdWNoTW92ZSB7XG4gIGV4Y3V0ZSh0KSB7XG4gICAgc3VwZXIuZXhjdXRlLmNhbGwodGhpcywgdCk7XG4gIH1cbiAgcnVuU3RhcnRNb3ZlKHQpIHtcbiAgICBzdXBlci5ydW5TdGFydE1vdmUuY2FsbCh0aGlzLCB0KTtcbiAgICB2YXIgbyA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJUb3VjaERhdGEudGlsZUlkO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QobykgJiYgdGhpcy5nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5yZWNvcmRFcnJvckRyYWcobyk7XG4gIH1cbiAgcnVuTW92ZSh0LCBvKSB7XG4gICAgdmFyIG4sIGk7XG4gICAgc3VwZXIucnVuTW92ZS5jYWxsKHRoaXMsIHQsIG8pO1xuICAgIHZhciBjID0gby5pRmlyc3RNb3ZlLFxuICAgICAgdSA9IG8ucm9sbENhcmREYXRhcyxcbiAgICAgIHAgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZCxcbiAgICAgIGYgPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KHRoaXMuaW5wdXQsIFwiVGlsZTJNb3ZlRWZmZWN0XCIpLFxuICAgICAgZCA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZVNlbGVjdG9yLmdldEV4cGFuZE11bHRpcGxlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGggPSBfX3ZhbHVlcyh1KSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIG0gPSB5LnZhbHVlLFxuICAgICAgICAgIHYgPSBtLnRpbGVJZCxcbiAgICAgICAgICBnID0gbS5mcm9udFRvQmFjayxcbiAgICAgICAgICBfID0gbmV3IFRpbGUyUm9sbENhcmRFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiB2LFxuICAgICAgICAgICAgZnJvbnRUb0JhY2s6IGdcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wdXNoRWZmZWN0KF8sIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBmLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHkgJiYgIXkuZG9uZSAmJiAoaSA9IGgucmV0dXJuKSAmJiBpLmNhbGwoaCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFQgPSBuZXcgVGlsZTJNb3ZlRWZmZWN0KHtcbiAgICAgIHRpbGVJZDogcCxcbiAgICAgIHBvczogdC5wb3MsXG4gICAgICBkZWx0YTogdC5kZWx0YSxcbiAgICAgIGlGaXJzdE1vdmU6IGMsXG4gICAgICBtdWx0aXBsZTogZFxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChULCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgZi5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICB9XG4gIHJ1bkxvY2sodCkge1xuICAgIHN1cGVyLnJ1bkxvY2suY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmlucHV0VGlsZTJUb3VjaFJ1bkxvY2sucnVuTG9jayh0LCB0aGlzKTtcbiAgfVxufSJdfQ==
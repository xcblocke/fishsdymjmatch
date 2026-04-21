
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddLevelEnterAniBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b8mWCKJMWq2KMiwCAFzW', 'AddLevelEnterAniBehavior');
// Scripts/AddLevelEnterAniBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelEnterAniBehavior = void 0;
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelEnterAniBehavior = /** @class */ (function (_super) {
    __extends(AddLevelEnterAniBehavior, _super);
    function AddLevelEnterAniBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelEnterAniBehavior.prototype.onAbort = function () {
        _super.prototype.onAbort.call(this);
    };
    AddLevelEnterAniBehavior.prototype.start = function (e) {
        var t = e.data.tileObjects;
        if (t && t.length > 0) {
            this.playNewTilesEnterAnimation(t);
        }
        else {
            this.finish();
        }
    };
    AddLevelEnterAniBehavior.prototype.playNewTilesEnterAnimation = function (e) {
        for (var t = this, o = this.context.getTileNodeManager(), n = function n() {
            t.finish();
        }, i = false, r = 0; r < e.length; r++) {
            var a = e[r], l = o.getTileNodeByTileId(a.id);
            if (l) {
                var s = a.getPosition(), c = l.cardNode;
                if (cc.isValid(c)) {
                    this.playNodeEnterAnimation(c, s, i ? null : n);
                    i = true;
                }
                var u = l.shadowCardNode;
                cc.isValid(u) && this.playNodeEnterAnimation(u, s, null);
            }
        }
        i || n();
    };
    AddLevelEnterAniBehavior.prototype.playNodeEnterAnimation = function (e, t, o) {
        if (cc.isValid(e)) {
            e.setPosition(t.x, t.y - 45, 0);
            e.scale = 0.3;
            e.opacity = 0;
            cc.tween(e).parallel(cc.tween().to(0.56, {
                position: cc.v3(t.x, t.y, 0)
            }, {
                easing: "backOut"
            }), cc.tween().to(0.33, {
                scale: 1
            }, {
                easing: "circOut"
            }), cc.tween().to(0.56, {
                opacity: 255
            }, {
                easing: "backOut"
            })).call(function () {
                o && o();
            }).start();
        }
        else
            o && o();
    };
    AddLevelEnterAniBehavior.prototype.playFallingTilesAnimation = function (e) {
        for (var t = this.context.getTileNodeManager(), o = 0; o < e.length; o++) {
            var n = e[o].tile, i = t.getTileNodeByTileId(n.id);
            if (i) {
                var r = n.getPosition(), a = i.cardNode;
                this.playNodeMoveAnimation(a, r, null);
                var l = i.shadowCardNode;
                cc.isValid(l) && this.playNodeMoveAnimation(l, r, null);
            }
        }
    };
    AddLevelEnterAniBehavior.prototype.playNodeMoveAnimation = function (e, t, o) {
        if (cc.isValid(e)) {
            cc.tween(e).to(0.56, {
                position: cc.v3(t.x, t.y, 0)
            }, {
                easing: "backOut"
            }).call(function () {
                o && o();
            }).start();
        }
        else {
            o && o();
        }
    };
    return AddLevelEnterAniBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelEnterAniBehavior = AddLevelEnterAniBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZExldmVsRW50ZXJBbmlCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUE2RDtBQUM3RDtJQUE4Qyw0Q0FBaUI7SUFBL0Q7O0lBK0VBLENBQUM7SUE5RUMsMENBQU8sR0FBUDtRQUNFLGlCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELHdDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFDRCw2REFBMEIsR0FBMUIsVUFBMkIsQ0FBQztRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDcEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNyQixDQUFDLEdB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QUFJLENBQUMsQ0FBQzthQUN6RDtTQUNGO0lBQ0gsQ0FBQztJQUNELHdEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDbkIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3QixFQUFFO2dCQUNELE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ0wsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQS9FQSxBQStFQyxDQS9FNkMscUNBQWlCLEdBK0U5RDtBQS9FWSw0REFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQWRkTGV2ZWxFbnRlckFuaUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBvbkFib3J0KCkge1xuICAgIHN1cGVyLm9uQWJvcnQuY2FsbCh0aGlzKTtcbiAgfVxuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEudGlsZU9iamVjdHM7XG4gICAgaWYgKHQgJiYgdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBsYXlOZXdUaWxlc0VudGVyQW5pbWF0aW9uKHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmlzaCgpO1xuICAgIH1cbiAgfVxuICBwbGF5TmV3VGlsZXNFbnRlckFuaW1hdGlvbihlKSB7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMsIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksIG4gPSBmdW5jdGlvbiBuKCkge1xuICAgICAgICB0LmZpbmlzaCgpO1xuICAgICAgfSwgaSA9IGZhbHNlLCByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBhID0gZVtyXSxcbiAgICAgICAgbCA9IG8uZ2V0VGlsZU5vZGVCeVRpbGVJZChhLmlkKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBzID0gYS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGMgPSBsLmNhcmROb2RlO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChjKSkge1xuICAgICAgICAgIHRoaXMucGxheU5vZGVFbnRlckFuaW1hdGlvbihjLCBzLCBpID8gbnVsbCA6IG4pO1xuICAgICAgICAgIGkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1ID0gbC5zaGFkb3dDYXJkTm9kZTtcbiAgICAgICAgY2MuaXNWYWxpZCh1KSAmJiB0aGlzLnBsYXlOb2RlRW50ZXJBbmltYXRpb24odSwgcywgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGkgfHwgbigpO1xuICB9XG4gIHBsYXlOb2RlRW50ZXJBbmltYXRpb24oZSwgdCwgbykge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICBlLnNldFBvc2l0aW9uKHQueCwgdC55IC0gNDUsIDApO1xuICAgICAgZS5zY2FsZSA9IDAuMztcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2VlbihlKS5wYXJhbGxlbChjYy50d2VlbigpLnRvKDAuNTYsIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHQueCwgdC55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KSwgY2MudHdlZW4oKS50bygwLjMzLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgIH0pLCBjYy50d2VlbigpLnRvKDAuNTYsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgIH0pKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbyAmJiBvKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSBvICYmIG8oKTtcbiAgfVxuICBwbGF5RmFsbGluZ1RpbGVzQW5pbWF0aW9uKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLCBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciBuID0gZVtvXS50aWxlLFxuICAgICAgICBpID0gdC5nZXRUaWxlTm9kZUJ5VGlsZUlkKG4uaWQpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdmFyIHIgPSBuLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgYSA9IGkuY2FyZE5vZGU7XG4gICAgICAgIHRoaXMucGxheU5vZGVNb3ZlQW5pbWF0aW9uKGEsIHIsIG51bGwpO1xuICAgICAgICB2YXIgbCA9IGkuc2hhZG93Q2FyZE5vZGU7XG4gICAgICAgIGNjLmlzVmFsaWQobCkgJiYgdGhpcy5wbGF5Tm9kZU1vdmVBbmltYXRpb24obCwgciwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlOb2RlTW92ZUFuaW1hdGlvbihlLCB0LCBvKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuNTYsIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHQueCwgdC55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbyAmJiBvKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvICYmIG8oKTtcbiAgICB9XG4gIH1cbn0iXX0=
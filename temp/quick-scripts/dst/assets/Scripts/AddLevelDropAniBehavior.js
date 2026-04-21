
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddLevelDropAniBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f98fyqbVVHjY7etWCZG5ly', 'AddLevelDropAniBehavior');
// Scripts/AddLevelDropAniBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropAniBehavior = void 0;
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelDropAniBehavior = /** @class */ (function (_super) {
    __extends(AddLevelDropAniBehavior, _super);
    function AddLevelDropAniBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelDropAniBehavior.prototype.start = function (e) {
        var t = this, o = e.data.fallingTiles;
        if (e.data.isOpenGenerateState) {
            var n = this.context.getTileNodeManager();
            o.forEach(function (e) {
                var t = e.tile, o = n.getTileNodeByTileId(t.id);
                o && o.dropToPosition();
            });
            this.finish();
        }
        else if (o && o.length > 0) {
            this.playFallingTilesAnimation(o, function () {
                t.finish();
            });
        }
        else {
            this.finish();
        }
    };
    AddLevelDropAniBehavior.prototype.playFallingTilesAnimation = function (e, t) {
        for (var o = this.context.getTileNodeManager(), n = false, i = 0; i < e.length; i++) {
            var r = e[i].tile, a = o.getTileNodeByTileId(r.id);
            if (a) {
                var l = r.getPosition(), s = a.cardNode;
                this.playNodeMoveAnimation(s, l, n ? null : t);
                n = true;
                var c = a.shadowCardNode;
                cc.isValid(c) && this.playNodeMoveAnimation(c, l, null);
            }
        }
        n || t && t();
    };
    AddLevelDropAniBehavior.prototype.playNodeMoveAnimation = function (e, t, o) {
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
    return AddLevelDropAniBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelDropAniBehavior = AddLevelDropAniBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZExldmVsRHJvcEFuaUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTZEO0FBQzdEO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUFnREEsQ0FBQztJQS9DQyx1Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0QsMkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO2dCQUN6QixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7UUFDRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCx1REFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDN0IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNMLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FoREEsQUFnREMsQ0FoRDRDLHFDQUFpQixHQWdEN0Q7QUFoRFksMERBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIEFkZExldmVsRHJvcEFuaUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IGUuZGF0YS5mYWxsaW5nVGlsZXM7XG4gICAgaWYgKGUuZGF0YS5pc09wZW5HZW5lcmF0ZVN0YXRlKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKTtcbiAgICAgIG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IGUudGlsZSxcbiAgICAgICAgICBvID0gbi5nZXRUaWxlTm9kZUJ5VGlsZUlkKHQuaWQpO1xuICAgICAgICBvICYmIG8uZHJvcFRvUG9zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maW5pc2goKTtcbiAgICB9IGVsc2UgaWYgKG8gJiYgby5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBsYXlGYWxsaW5nVGlsZXNBbmltYXRpb24obywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmZpbmlzaCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluaXNoKCk7XG4gICAgfVxuICB9XG4gIHBsYXlGYWxsaW5nVGlsZXNBbmltYXRpb24oZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksIG4gPSBmYWxzZSwgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IGVbaV0udGlsZSxcbiAgICAgICAgYSA9IG8uZ2V0VGlsZU5vZGVCeVRpbGVJZChyLmlkKTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHZhciBsID0gci5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHMgPSBhLmNhcmROb2RlO1xuICAgICAgICB0aGlzLnBsYXlOb2RlTW92ZUFuaW1hdGlvbihzLCBsLCBuID8gbnVsbCA6IHQpO1xuICAgICAgICBuID0gdHJ1ZTtcbiAgICAgICAgdmFyIGMgPSBhLnNoYWRvd0NhcmROb2RlO1xuICAgICAgICBjYy5pc1ZhbGlkKGMpICYmIHRoaXMucGxheU5vZGVNb3ZlQW5pbWF0aW9uKGMsIGwsIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBuIHx8IHQgJiYgdCgpO1xuICB9XG4gIHBsYXlOb2RlTW92ZUFuaW1hdGlvbihlLCB0LCBvKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuNTYsIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHQueCwgdC55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbyAmJiBvKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvICYmIG8oKTtcbiAgICB9XG4gIH1cbn0iXX0=
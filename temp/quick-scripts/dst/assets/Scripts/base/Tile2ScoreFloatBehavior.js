
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ScoreFloatBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b834c/2GC5NWpW+q4Km2mRS', 'Tile2ScoreFloatBehavior');
// Scripts/base/Tile2ScoreFloatBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScoreFloatBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2ScoreFloatItem_1 = require("../items/Tile2ScoreFloatItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ScoreFloatBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScoreFloatBehavior, _super);
    function Tile2ScoreFloatBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScoreFloatBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.addScore, i = o.isCombo, r = o.isMagnetMerge;
        (i ? Tile2ScoreFloatItem_1.default.createCombo() : Tile2ScoreFloatItem_1.default.createNormal()).then(function (e) {
            if (e) {
                var o = t.context.gameView.nodeTopEffectRoot;
                e.node.parent = o;
                var i = t.getWorldPos(r);
                e.node.position = t.getFloatPosition(o, r);
                e.setScore(n);
                var l = t.getHolderLocalPosition(o);
                if (l) {
                    var s = t.getSpawnZone(i);
                    e.playFlyToHolderAnimation(l, s, function () {
                        return t.onArriveAtHolder();
                    }, function () {
                        return t.onComplete();
                    });
                }
                else {
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    e.node.destroy();
                }
            }
            else
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2ScoreFloatBehavior.prototype.getWorldPos = function (e) {
        if (!e)
            return this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0);
        var t = this.getOffset(true), o = this.context.gameView, n = null == o ? void 0 : o.getSlotBarNode();
        if (!n || !cc.isValid(n))
            return cc.v3(0, 0, 0);
        var i = n.convertToWorldSpaceAR(t);
        return cc.v3(i.x, i.y, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getOffset = function () {
        return cc.v2(0, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getFloatPosition = function (e, t) {
        var o = this.getWorldPos(t), n = e.convertToNodeSpaceAR(o), i = this.getFloatOffset();
        return cc.v3(n.x + i.x, n.y + i.y, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getFloatOffset = function () {
        return cc.v2(0, 100);
    };
    Tile2ScoreFloatBehavior.prototype.getSpawnZone = function (e) {
        var t, o = null === (t = cc.Canvas.instance) || void 0 === t ? void 0 : t.node;
        if (!o || !cc.isValid(o))
            return 5;
        var n = o.convertToNodeSpaceAR(e), i = o.getContentSize(), r = o.anchorY, a = i.height * (1 - r), l = -i.height * r, s = (a - n.y) / (a - l);
        return Math.min(10, Math.max(1, Math.floor(10 * s) + 1));
    };
    Tile2ScoreFloatBehavior.prototype.getHolderLocalPosition = function (e) {
        var t, o, n = null === (o = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem) || void 0 === o ? void 0 : o.node;
        if (!n || !cc.isValid(n))
            return null;
        var i = n.convertToWorldSpaceAR(cc.v2(0, 0));
        return e.convertToNodeSpaceAR(i);
    };
    Tile2ScoreFloatBehavior.prototype.onArriveAtHolder = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ScoreFloatBehavior.prototype.onComplete = function () { };
    __decorate([
        mj.traitEvent("T2ScoreFloatBhv_worldPos")
    ], Tile2ScoreFloatBehavior.prototype, "getWorldPos", null);
    __decorate([
        mj.traitEvent("T2ScoreFloatBhv_offset")
    ], Tile2ScoreFloatBehavior.prototype, "getOffset", null);
    return Tile2ScoreFloatBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScoreFloatBehavior = Tile2ScoreFloatBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTY29yZUZsb2F0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsb0VBQStEO0FBQy9ELHlEQUF3RDtBQUN4RDtJQUE2QywyQ0FBaUI7SUFBOUQ7O0lBNEVBLENBQUM7SUEzRUMsdUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyw2QkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0YsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFH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QUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsa0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw0Q0FBVSxHQUFWLGNBQWMsQ0FBQztJQTdDZjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7OERBU3pDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzREQUd2QztJQWtDSCw4QkFBQztDQTVFRCxBQTRFQyxDQTVFNEMscUNBQWlCLEdBNEU3RDtBQTVFWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IFRpbGUyU2NvcmVGbG9hdEl0ZW0gZnJvbSAnLi4vaXRlbXMvVGlsZTJTY29yZUZsb2F0SXRlbSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyU2NvcmVGbG9hdEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IGUuZGF0YSxcbiAgICAgIG4gPSBvLmFkZFNjb3JlLFxuICAgICAgaSA9IG8uaXNDb21ibyxcbiAgICAgIHIgPSBvLmlzTWFnbmV0TWVyZ2U7XG4gICAgKGkgPyBUaWxlMlNjb3JlRmxvYXRJdGVtLmNyZWF0ZUNvbWJvKCkgOiBUaWxlMlNjb3JlRmxvYXRJdGVtLmNyZWF0ZU5vcm1hbCgpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgbyA9IHQuY29udGV4dC5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdDtcbiAgICAgICAgZS5ub2RlLnBhcmVudCA9IG87XG4gICAgICAgIHZhciBpID0gdC5nZXRXb3JsZFBvcyhyKTtcbiAgICAgICAgZS5ub2RlLnBvc2l0aW9uID0gdC5nZXRGbG9hdFBvc2l0aW9uKG8sIHIpO1xuICAgICAgICBlLnNldFNjb3JlKG4pO1xuICAgICAgICB2YXIgbCA9IHQuZ2V0SG9sZGVyTG9jYWxQb3NpdGlvbihvKTtcbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICB2YXIgcyA9IHQuZ2V0U3Bhd25ab25lKGkpO1xuICAgICAgICAgIGUucGxheUZseVRvSG9sZGVyQW5pbWF0aW9uKGwsIHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0Lm9uQXJyaXZlQXRIb2xkZXIoKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdC5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgICBlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU2NvcmVGbG9hdEJodl93b3JsZFBvc1wiKVxuICBnZXRXb3JsZFBvcyhlKSB7XG4gICAgaWYgKCFlKSByZXR1cm4gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpIHx8IGNjLnYzKDAsIDAsIDApO1xuICAgIHZhciB0ID0gdGhpcy5nZXRPZmZzZXQodHJ1ZSksXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgbiA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uZ2V0U2xvdEJhck5vZGUoKTtcbiAgICBpZiAoIW4gfHwgIWNjLmlzVmFsaWQobikpIHJldHVybiBjYy52MygwLCAwLCAwKTtcbiAgICB2YXIgaSA9IG4uY29udmVydFRvV29ybGRTcGFjZUFSKHQpO1xuICAgIHJldHVybiBjYy52MyhpLngsIGkueSwgMCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlNjb3JlRmxvYXRCaHZfb2Zmc2V0XCIpXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gY2MudjIoMCwgMCk7XG4gIH1cbiAgZ2V0RmxvYXRQb3NpdGlvbihlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldFdvcmxkUG9zKHQpLFxuICAgICAgbiA9IGUuY29udmVydFRvTm9kZVNwYWNlQVIobyksXG4gICAgICBpID0gdGhpcy5nZXRGbG9hdE9mZnNldCgpO1xuICAgIHJldHVybiBjYy52MyhuLnggKyBpLngsIG4ueSArIGkueSwgMCk7XG4gIH1cbiAgZ2V0RmxvYXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIGNjLnYyKDAsIDEwMCk7XG4gIH1cbiAgZ2V0U3Bhd25ab25lKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSBudWxsID09PSAodCA9IGNjLkNhbnZhcy5pbnN0YW5jZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub2RlO1xuICAgIGlmICghbyB8fCAhY2MuaXNWYWxpZChvKSkgcmV0dXJuIDU7XG4gICAgdmFyIG4gPSBvLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpLFxuICAgICAgaSA9IG8uZ2V0Q29udGVudFNpemUoKSxcbiAgICAgIHIgPSBvLmFuY2hvclksXG4gICAgICBhID0gaS5oZWlnaHQgKiAoMSAtIHIpLFxuICAgICAgbCA9IC1pLmhlaWdodCAqIHIsXG4gICAgICBzID0gKGEgLSBuLnkpIC8gKGEgLSBsKTtcbiAgICByZXR1cm4gTWF0aC5taW4oMTAsIE1hdGgubWF4KDEsIE1hdGguZmxvb3IoMTAgKiBzKSArIDEpKTtcbiAgfVxuICBnZXRIb2xkZXJMb2NhbFBvc2l0aW9uKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gbnVsbCA9PT0gKG8gPSBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5ub2RlVG9wVmlldykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zY29yZUl0ZW0pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZTtcbiAgICBpZiAoIW4gfHwgIWNjLmlzVmFsaWQobikpIHJldHVybiBudWxsO1xuICAgIHZhciBpID0gbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgIHJldHVybiBlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICB9XG4gIG9uQXJyaXZlQXRIb2xkZXIoKSB7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBvbkNvbXBsZXRlKCkge31cbn0iXX0=